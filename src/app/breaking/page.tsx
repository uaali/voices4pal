import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";

type Post = { _id: string; title: string; slug: { current: string }; publishedAt: string };

const QUERY = `*[_type == "post" && isBreaking == true] | order(publishedAt desc){ _id, title, slug, publishedAt }`;

export default async function BreakingPage() {
  const { data } = (await sanityFetch({ query: QUERY, perspective: "published" })) as { data: Post[] };
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
      <h1 className="text-3xl font-black mb-6">Breaking</h1>
      <ul className="space-y-3">
        {data?.map((p) => (
          <li key={p._id} className="flex items-center gap-3">
            <span className="text-red-500">●</span>
            <Link href={`/post/${p.slug.current}`} className="hover:underline">{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
