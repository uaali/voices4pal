type NameRecord = { name?: string; en_name?: string; age?: number };
type Summary = {
  gaza: {
    last_update: string;
    killed: { total: number; children: number; women: number };
  };
};

async function getJSON<T>(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch {
    return undefined as unknown as T;
  }
}

export default async function SiegeHero() {
  // Fetch multiple small pages of names (Arabic) + summary numbers
  const [p1, p2, p3, summary] = await Promise.all([
    getJSON<NameRecord[]>("https://data.techforpalestine.org/api/v2/killed-in-gaza/page-1.json"),
    getJSON<NameRecord[]>("https://data.techforpalestine.org/api/v2/killed-in-gaza/page-2.json"),
    getJSON<NameRecord[]>("https://data.techforpalestine.org/api/v2/killed-in-gaza/page-3.json"),
    getJSON<Summary>("https://data.techforpalestine.org/api/v3/summary.min.json"),
  ]);

  const all = [...(p1 || []), ...(p2 || []), ...(p3 || [])];
  const list = all
    .slice(0, 360)
    .map((r) => (r.name ? `${r.name}${typeof r.age === "number" ? ` • ${r.age}` : ""}` : ""))
    .filter(Boolean);
  const children = summary?.gaza?.killed?.children;
  const women = summary?.gaza?.killed?.women;
  const total = summary?.gaza?.killed?.total;
  const last = summary?.gaza?.last_update;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black border-b border-red-900/30">
      {/* Subtle bleeding gradient and vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_0%,rgba(185,28,28,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.6),black)]" />

      {/* Animated names wallpaper (Arabic) */}
      <div aria-hidden className="absolute inset-0 opacity-20 select-none">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="h-full py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, col) => {
              const colItems = list.slice(col * 72, col * 72 + 72);
              const scroll = col % 2 === 0 ? "names-track-fast" : "names-track-slow";
              return (
                <div key={col} className="names-marquee [direction:rtl] arabic-text">
                  <div className={`${scroll} space-y-2`}> 
                    {[...colItems, ...colItems].map((nm, i) => (
                      <div key={`${col}-${i}`} className="text-[11px] tracking-wide text-red-100/80">
                        {nm}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Foreground */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-block mb-3 rounded-full border border-red-700/50 bg-red-900/30 px-3 py-1 text-red-200 text-xs">
              Since Oct 7, 2023 — not accounting for the full scale of the situation
            </div>
            <h1 className="text-4xl sm:text-6xl font-black leading-[1.05]">
              <span className="text-white">Palestine</span> <span className="text-red-500">under siege</span>
            </h1>
            <div className="arabic-text text-green-400 mt-2 text-lg">فلسطين تحت الحصار</div>
            <p className="mt-4 text-zinc-200 max-w-xl">
              They are not numbers. They had names, families, dreams. We remember them and demand justice.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-300">
              <Badge>{typeof total === "number" ? total.toLocaleString() : "—"} killed</Badge>
              <Badge>{typeof children === "number" ? children.toLocaleString() : "—"} children</Badge>
              <Badge>{typeof women === "number" ? women.toLocaleString() : "—"} women</Badge>
              {last && <Badge>Updated {new Date(last).toLocaleDateString()}</Badge>}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#latest" className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold">
                Read latest
              </a>
              <a href="/take-action" className="border border-white/20 hover:bg-white hover:text-black px-5 py-3 rounded-lg font-semibold">
                Take action
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">{children}</span>;
}
