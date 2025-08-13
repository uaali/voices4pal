import Link from "next/link";

export default function TakeActionPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
      <h1 className="text-3xl font-black mb-4">Take Action</h1>
      <p className="text-zinc-300 mb-6">Use your voice, time, and money to help people in need.</p>
      <ul className="space-y-3 list-disc pl-6">
        <li>Make dua to Allah, the Most Merciful, for the safety and well-being of all those affected.</li>
        <li>Contact your representatives and urge them to take action. Demand an immediate ceasefire and humanitarian access.</li>
        <li>Donate to vetted relief organizations working on the ground.</li>
        <li>Share credible stories and correct misinformation.</li>
      </ul>
      <div className="mt-6">
        <Link href="/donate" className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded font-semibold">Donate</Link>
      </div>
    </div>
  );
}
