import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: SanityImageSource;
  isBreaking?: boolean;
  isFeatured?: boolean;
  publishedAt: string;
  location?: string;
  postType?: string;
  readTime?: number;
  body?: unknown;
  sources?: { name?: string; url?: string }[];
};

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, excerpt, mainImage, isBreaking, isFeatured, publishedAt, location, postType, readTime, body, sources
}`;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = (await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    perspective: "published",
  })) as { data: Post };
  if (!post) return notFound();

  return (
    <div className="bg-blood text-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            {post.isBreaking && <span className="bg-red-600 px-2 py-0.5 text-xs font-bold rounded">BREAKING</span>}
            {post.postType && <span className="bg-zinc-900/70 px-2 py-0.5 text-xs rounded border border-white/10">{post.postType}</span>}
            {post.location && <span className="text-xs text-red-200">{post.location}</span>}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">{post.title}</h1>
          <div className="mt-3 text-sm text-zinc-300">
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleString()}</time>
            {typeof post.readTime === "number" && <span> • {post.readTime} min read</span>}
          </div>
        </div>

        {post.mainImage && (
          <div className="rounded-xl overflow-hidden border border-red-600/30 mb-6">
            <Image
              src={urlFor(post.mainImage).width(1400).height(900).url()}
              alt={post.title}
              width={1400}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        <div className="space-y-4 leading-relaxed text-zinc-100">
          {(() => {
            const components: PortableTextComponents = {
              types: {
                image: ({ value }) => {
                  const alt = (value as { alt?: string })?.alt || post.title;
                  const src = urlFor(value as SanityImageSource).width(1200).height(800).url();
                  return (
                    <Image
                      src={src}
                      alt={alt}
                      width={1200}
                      height={800}
                      className="rounded-lg border border-white/10"
                    />
                  );
                },
              },
              marks: {
                link: ({ children, value }) => {
                  const href = (value as { href?: string } | undefined)?.href;
                  return (
                    <a className="text-red-400 underline" href={href} target="_blank" rel="noreferrer">
                      {children}
                    </a>
                  );
                },
              },
            };
            return <PortableText value={(post.body || []) as PortableTextBlock[]} components={components} />;
          })()}
        </div>

        {post.sources && post.sources.length > 0 && (
          <div className="mt-10 border-t border-zinc-800 pt-6">
            <h3 className="font-bold mb-3">Sources</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-300">
              {post.sources.map((s: { name?: string; url?: string }, i: number) => (
                <li key={i}>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noreferrer" className="text-red-300 hover:text-red-200 underline">
                      {s.name || s.url}
                    </a>
                  ) : (
                    <span>{s.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10">
          <Link href="/" className="text-red-300 hover:text-red-200">← Back to home</Link>
        </div>
      </article>
    </div>
  );
}
