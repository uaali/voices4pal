"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegNewspaper, FaFireAlt, FaBookOpen, FaHandsHelping, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { getBreakingNews } from "@/sanity/lib/queries";
import { formatBreakingNews } from "@/lib/utils";

const navLinks = [
  { name: "News", href: "/news", icon: <FaRegNewspaper /> },
  { name: "Breaking", href: "/breaking", icon: <FaFireAlt /> },
  { name: "Stories", href: "/stories", icon: <FaBookOpen /> },
  { name: "Act", href: "/take-action", icon: <FaHandsHelping /> },
];

interface BreakingNews {
  title: string;
  excerpt?: string;
  location?: string;
  publishedAt: string;
  tickerText?: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [breakingNews, setBreakingNews] = useState<BreakingNews[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  // Fetch breaking news on component mount
  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        const news = await getBreakingNews();
        const formattedNews = formatBreakingNews(news);
        setBreakingNews(formattedNews);
      } catch (error) {
        console.error("Failed to fetch breaking news:", error);
        // Use fallback data from utils
        const fallbackNews = formatBreakingNews([]);
        setBreakingNews(fallbackNews);
      }
    };

    fetchBreakingNews();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    try {
      // Navigate to search results page with query parameter
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleMobileSearch = () => {
    if (!searchTerm.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Ticker */}
      <div className="bg-red-700 text-white text-sm">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="flex gap-12 py-2 whitespace-nowrap ticker-track">
            {[...breakingNews, ...breakingNews].map((news, i) => (
              <span key={i} className="flex items-center gap-2">
                <FaFireAlt className="text-yellow-300" />
                {news.tickerText || (news.location ? `${news.location}: ${news.title}` : news.title)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/svg/flag.svg" 
                alt="Palestinian Flag" 
                width={32} 
                height={20}
                className="w-8 h-5"
              />
              <div className="leading-tight">
                <div className="font-extrabold tracking-wide">Voices For Palestine</div>
                <div className="text-green-500 text-xs arabic-text">أصوات فلسطين</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="flex items-center gap-2 text-sm text-gray-200 hover:text-white">
                  <span className="text-red-500">{link.icon}</span>
                  {link.name}
                </Link>
              ))}

              <form onSubmit={handleSearch} className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search stories, news..."
                  className="pl-9 pr-3 py-1.5 rounded bg-zinc-800 text-sm focus-ring"
                  disabled={isSearching}
                />
              </form>

              <Link href="/donate" className="bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded text-sm font-semibold urgent-pulse">
                Donate
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Toggle Menu"
              className="md:hidden p-2 rounded bg-zinc-900"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-zinc-800 bg-black">
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="flex items-center gap-3 text-gray-200">
                  <span className="text-red-500">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search stories, news..." 
                  className="flex-1 px-3 py-2 rounded bg-zinc-800" 
                />
                <button 
                  onClick={handleMobileSearch}
                  disabled={isSearching || !searchTerm.trim()}
                  className="px-3 bg-zinc-800 hover:bg-zinc-700 rounded disabled:opacity-50"
                >
                  {isSearching ? "..." : "Go"}
                </button>
              </div>
              <Link href="/donate" className="block text-center bg-red-600 hover:bg-red-700 px-3 py-2 rounded font-semibold">
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;