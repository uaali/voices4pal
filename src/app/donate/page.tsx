import Link from "next/link";

export default function DonatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
      <h1 className="text-3xl font-black mb-4">Donate</h1>
      <p className="text-zinc-300 mb-6">
        Choose a trusted charity or relief fund. Always verify links and avoid middlemen.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link target="_blank" rel="noreferrer" href="https://www.islamic-relief.org/" className="block p-4 rounded border border-zinc-800 hover:border-red-700">Islamic Relief</Link>
        <Link target="_blank" rel="noreferrer" href="https://www.unrwa.org/" className="block p-4 rounded border border-zinc-800 hover:border-red-700">UNRWA</Link>
        <Link target="_blank" rel="noreferrer" href="https://medicalaidpalestinians.org/" className="block p-4 rounded border border-zinc-800 hover:border-red-700">MAP</Link>
        <Link target="_blank" rel="noreferrer" href="https://www.pcrf.net/" className="block p-4 rounded border border-zinc-800 hover:border-red-700">PCRF</Link>
      </div>
    </div>
  );
}
