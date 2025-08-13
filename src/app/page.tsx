import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import StoryByNumbers from "@/components/StoryByNumbers";
import SiegeHero from "@/components/SiegeHero";

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
};

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
	_id, title, slug, excerpt, mainImage, isBreaking, isFeatured, publishedAt, location, postType, readTime
}`;

export default async function HomePage() {
	const { data: posts } = (await sanityFetch({ query: POSTS_QUERY, perspective: "published" })) as { data: Post[] };
	const featured = posts?.find((p: Post) => p.isFeatured) || posts?.[0];
	const rest = posts?.filter((p: Post) => p._id !== featured?._id) || [];

	return (
		<div className="bg-blood text-white">
			{/* Siege hero banner */}
			<SiegeHero />
			{/* Hero section */}
			{featured && (
				<section className="relative">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
						<div className="grid lg:grid-cols-2 gap-8 items-stretch">
							<div className="relative overflow-hidden rounded-2xl border border-red-600/30">
								{featured.mainImage && (
									// Using next/image with a fallback plain Image if URL builder fails client-side
									<Image
										src={urlFor(featured.mainImage).width(1200).height(800).url()}
										alt={featured.title}
										width={1200}
										height={800}
										className="object-cover h-80 sm:h-96 w-full"
										priority
									/>
								)}
								<div className="absolute inset-0 hero-overlay" />
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<div className="flex items-center gap-2 mb-3">
										{featured.isBreaking && (
											<span className="bg-red-600 px-2 py-0.5 text-xs font-bold rounded">BREAKING</span>
										)}
										{featured.postType && (
											<span className="bg-zinc-900/70 px-2 py-0.5 text-xs rounded border border-white/10">
												{featured.postType}
											</span>
										)}
										{featured.location && (
											<span className="text-xs text-red-200">{featured.location}</span>
										)}
									</div>
									<h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
										<Link href={`/post/${featured.slug.current}`}>{featured.title}</Link>
									</h1>
									{featured.excerpt && (
										<p className="text-sm sm:text-base text-zinc-200 mt-3 max-w-2xl">{featured.excerpt}</p>
									)}
								</div>
							</div>

											{/* Call to conscience */}
							<div className="bg-black/70 border border-red-600/30 rounded-2xl p-6 flex flex-col justify-between">
								<div>
													<h2 className="text-3xl font-black mb-3">Do not look away.</h2>
									<p className="text-zinc-200 leading-relaxed">
														People in Palestine are enduring unimaginable loss. Share their stories. Demand accountability.
										Support the living and honor the martyrs. Your voice matters.
									</p>
								</div>
								<div className="mt-6 grid sm:grid-cols-2 gap-3">
									<Link href="/take-action" className="text-center bg-green-700 hover:bg-green-800 px-5 py-3 rounded font-semibold">Take Action</Link>
									<Link href="/donate" className="text-center bg-red-600 hover:bg-red-700 px-5 py-3 rounded font-semibold urgent-pulse">Donate Now</Link>
								</div>
												<div className="mt-4 text-sm text-zinc-300 arabic-text">&quot;وَمَن أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا&quot;</div>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Latest grid */}
			{/* Story by numbers (datasets) */}
			<StoryByNumbers />

			{/* Latest grid */}
			<section id="latest">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-xl sm:text-2xl font-bold">Latest from Palestine</h2>
						<Link href="/news" className="text-sm text-red-300 hover:text-red-200">View all</Link>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{rest.slice(0, 9).map((p: Post) => (
							<article key={p._id} className="rounded-xl overflow-hidden border border-zinc-800 hover:border-red-700 transition-colors bg-black/60">
								{p.mainImage && (
									<Image
										src={urlFor(p.mainImage).width(800).height(500).url()}
										alt={p.title}
										width={800}
										height={500}
										className="w-full h-44 object-cover"
									/>
								)}
								<div className="p-4">
									<div className="flex items-center gap-2 mb-2">
										{p.isBreaking && <span className="text-xs text-red-400 font-bold">BREAKING</span>}
										{p.postType && (
											<span className="text-[11px] px-2 py-0.5 rounded bg-zinc-900 border border-white/10">{p.postType}</span>
										)}
									</div>
									<h3 className="font-bold leading-snug">
										<Link href={`/post/${p.slug.current}`} className="hover:underline">
											{p.title}
										</Link>
									</h3>
									  {p.excerpt && <p className="text-sm text-zinc-300 mt-2 overflow-hidden">{p.excerpt}</p>}
									<div className="mt-3 text-xs text-zinc-400 flex items-center gap-3">
										<time dateTime={p.publishedAt}>{new Date(p.publishedAt).toLocaleDateString()}</time>
										{typeof p.readTime === "number" && <span>• {p.readTime} min read</span>}
										{p.location && <span>• {p.location}</span>}
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
