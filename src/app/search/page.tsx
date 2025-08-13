"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { searchPosts } from "@/sanity/lib/queries";
import { getPostTypeColor, getPostTypeIcon } from "@/lib/utils";
import { FaSearch, FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";

interface SearchResult {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  postType: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (term: string) => {
    if (!term.trim()) return;
    
    setLoading(true);
    try {
      const searchResults = await searchPosts(term);
      setResults(searchResults || []);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchTerm.trim())}`);
      performSearch(searchTerm.trim());
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Search</h1>
          <form onSubmit={handleSearch} className="relative max-w-2xl">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search stories, news, testimonies..."
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-red-500 focus:outline-none text-white"
            />
          </form>
        </div>

        {/* Search Results */}
        {query && (
          <div className="mb-6">
            <p className="text-gray-300">
              {loading ? (
                "Searching..."
              ) : (
                `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
              )}
            </p>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result) => (
              <article key={result._id} className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors">
                <div className="flex gap-4">
                  {result.mainImage && (
                    <div className="flex-shrink-0">
                      <Image
                        src={result.mainImage.asset.url}
                        alt={result.mainImage.alt || result.title}
                        width={120}
                        height={80}
                        className="w-30 h-20 object-cover rounded"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${getPostTypeColor(result.postType)}`}>
                        {getPostTypeIcon(result.postType)} {result.postType.toUpperCase()}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <FaCalendar />
                        {formatDate(result.publishedAt)}
                      </span>
                    </div>
                    
                    <Link href={`/post/${result.slug.current}`}>
                      <h2 className="text-xl font-bold text-white hover:text-red-400 transition-colors mb-2 line-clamp-2">
                        {result.title}
                      </h2>
                    </Link>
                    
                    {result.excerpt && (
                      <p className="text-gray-300 text-sm line-clamp-3 mb-3">
                        {result.excerpt}
                      </p>
                    )}
                    
                    <Link 
                      href={`/post/${result.slug.current}`}
                      className="text-red-400 hover:text-red-300 text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : query && !loading ? (
          <div className="text-center py-12">
            <FaSearch className="mx-auto text-4xl text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No results found</h3>
            <p className="text-gray-500">
              Try different keywords or check your spelling
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <FaSearch className="mx-auto text-4xl text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">Search Stories and News</h3>
            <p className="text-gray-500">
              Enter keywords to find relevant stories, news, and testimonies
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
