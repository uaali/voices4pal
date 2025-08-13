import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";

type Post = { _id: string; title: string; slug: { current: string }; excerpt?: string; postType?: string };

const QUERY = `*[_type == "post" && (postType == "story" || postType == "testimony")] | order(publishedAt desc){ _id, title, slug, excerpt, postType }`;

export default async function StoriesPage() {
  const { data } = (await sanityFetch({ query: QUERY, perspective: "published" })) as { data: Post[] };
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
      <h1 className="text-3xl font-black mb-6">Stories & Testimonies</h1>
      <ul className="space-y-4">
        {data?.map((p) => (
          <li key={p._id} className="border-b border-zinc-800 pb-4">
            <div className="text-xs text-zinc-400 mb-1">{p.postType}</div>
            <Link href={`/post/${p.slug.current}`} className="font-bold hover:underline">{p.title}</Link>
            {p.excerpt && <p className="text-sm text-zinc-300 mt-1">{p.excerpt}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
