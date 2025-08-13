import {
  FaChild,
  FaPersonDress,
  FaUser,
  FaHospital,
  FaMosque,
  FaHouse,
  FaSchool,
  FaPenNib,
} from "react-icons/fa6";

type Summary = {
  gaza: {
    last_update: string;
    massacres: number;
    killed: {
      total: number;
      children: number;
      women: number;
      press: number;
      medical: number;
    };
    injured: { total: number };
  };
  west_bank: { killed: { total: number } };
  known_killed_in_gaza: { records: number };
  known_press_killed_in_gaza: { records: number };
};

type InfraItem = {
  report_date: string;
  places_of_worship?: { mosques_destroyed?: number; mosques_damaged?: number };
  residential?: { destroyed?: number };
  educational_buildings?: { destroyed?: number; damaged?: number };
};

type NameFreq = {
  man: Record<string, number>;
  woman: Record<string, number>;
  boy: Record<string, number>;
  girl: Record<string, number>;
};

const n = (v?: number) => (typeof v === "number" ? v.toLocaleString() : "—");

async function getJSON<T>(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch {
    return undefined as unknown as T;
  }
}

export default async function StoryByNumbers() {
  const [summary, infra, namefreq] = await Promise.all([
    getJSON<Summary>(
      "https://data.techforpalestine.org/api/v3/summary.min.json"
    ),
    getJSON<InfraItem[]>(
      "https://data.techforpalestine.org/api/v3/infrastructure-damaged.min.json"
    ),
    getJSON<NameFreq>(
      "https://data.techforpalestine.org/api/v2/killed-in-gaza/name-freq-en.json"
    ),
  ]);

  const latestInfra =
    Array.isArray(infra) && infra.length > 0
      ? infra[infra.length - 1]
      : undefined;
  const lastUpdate = summary?.gaza?.last_update;

  const topChildNames = Object.entries({
    ...(namefreq?.girl || {}),
    ...(namefreq?.boy || {}),
  })
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <section className="border-y border-red-800/30 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Palestine in numbers
            </h2>
            {lastUpdate && (
              <p className="text-xs text-zinc-400 mt-1">
                Updated: {new Date(lastUpdate).toLocaleDateString()}
              </p>
            )}
          </div>
          <div className="text-right text-sm text-zinc-300 arabic-text">
            لا تُحْصُوا الأرقام فقط، بل احكوا الحكاية
          </div>
        </div>

        {/* Big stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Killed"
            value={n(summary?.gaza?.killed?.total)}
            icon={<FaUser />}
            accent="red"
          />
          <StatCard
            title="Children"
            value={n(summary?.gaza?.killed?.children)}
            icon={<FaChild />}
            accent="yellow"
          />
          <StatCard
            title="Women"
            value={n(summary?.gaza?.killed?.women)}
            icon={<FaPersonDress />}
            accent="pink"
          />
          <StatCard
            title="Injured"
            value={n(summary?.gaza?.injured?.total)}
            icon={<FaHospital />}
            accent="green"
          />
        </div>

        {/* Secondary badges */}
        <div className="flex flex-wrap gap-2 mb-10 text-sm">
          <Badge>
            Massacres:{" "}
            <b className="text-white">{n(summary?.gaza?.massacres)}</b>
          </Badge>
          <Badge>
            <FaPenNib className="inline mr-1" /> Journalists:{" "}
            <b className="text-white">{n(summary?.gaza?.killed?.press)}</b>
          </Badge>
          <Badge>
            Medical:{" "}
            <b className="text-white">{n(summary?.gaza?.killed?.medical)}</b>
          </Badge>
          <Badge>
            West Bank Killed:{" "}
            <b className="text-white">{n(summary?.west_bank?.killed?.total)}</b>
          </Badge>
        </div>

        {/* Infrastructure snapshot */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <InfoCard
            title="Mosques destroyed"
            value={n(latestInfra?.places_of_worship?.mosques_destroyed)}
            sub={
              latestInfra?.report_date
                ? `as of ${latestInfra.report_date}`
                : undefined
            }
            icon={<FaMosque />}
          />
          <InfoCard
            title="Homes destroyed"
            value={n(latestInfra?.residential?.destroyed)}
            sub={
              latestInfra?.report_date
                ? `as of ${latestInfra.report_date}`
                : undefined
            }
            icon={<FaHouse />}
          />
          <InfoCard
            title="Schools destroyed"
            value={n(latestInfra?.educational_buildings?.destroyed)}
            sub={
              latestInfra?.report_date
                ? `as of ${latestInfra.report_date}`
                : undefined
            }
            icon={<FaSchool />}
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
  icon,
  accent,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  accent: "red" | "yellow" | "pink" | "green";
}) {
  const color =
    accent === "red"
      ? "from-red-700/50 to-red-900/30"
      : accent === "yellow"
        ? "from-yellow-700/40 to-yellow-900/20"
        : accent === "pink"
          ? "from-pink-700/40 to-pink-900/20"
          : "from-green-700/40 to-green-900/20";
  return (
    <div
      className={`rounded-xl p-5 border border-white/10 bg-gradient-to-br ${color} flex items-center gap-4`}
    >
      <div className="text-2xl text-white/90">{icon}</div>
      <div>
        <div className="text-2xl font-extrabold leading-tight">{value}</div>
        <div className="text-xs text-zinc-300">{title}</div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  value,
  sub,
  icon,
}: {
  title: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl p-5 border border-red-800/40 bg-zinc-900/60">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-xl text-red-300">{icon}</span>
        <div className="text-sm text-zinc-300">{title}</div>
      </div>
      <div className="text-2xl font-extrabold">{value}</div>
      {sub && <div className="text-xs text-zinc-500 mt-1">{sub}</div>}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded border border-white/10 bg-white/5 text-zinc-300">
      {children}
    </span>
  );
}
