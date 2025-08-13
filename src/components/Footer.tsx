"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaHeart,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const workingLinks = [
    { name: "News", href: "/news" },
    { name: "Breaking", href: "/breaking" },
    { name: "Stories", href: "/stories" },
    { name: "Donate", href: "/donate" },
  ];

  const socials = [
    { name: "Twitter/X", href: "#", icon: <FaXTwitter /> },
    { name: "Facebook", href: "#", icon: <FaFacebook /> },
    { name: "Instagram", href: "#", icon: <FaInstagram /> },
    { name: "YouTube", href: "#", icon: <FaYoutube /> },
    { name: "Telegram", href: "#", icon: <FaTelegram /> },
  ];

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(20rem_10rem_at_20%_10%,#b91c1c,transparent),radial-gradient(14rem_8rem_at_80%_20%,#b91c1c,transparent)]" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top banner: call to conscience */}
          <div className="bg-red-900/30 border border-red-700/40 rounded-2xl p-6 mb-12">
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src="/svg/flag.svg"
                    alt="Palestinian Flag"
                    width={32}
                    height={20}
                    className="w-8 h-5"
                  />
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    Voices For Palestine
                  </h3>
                </div>
                <p className="text-zinc-200 max-w-2xl">
                  We amplify Palestinian voices, share untold stories, and call
                  for justice. Do not look away.
                </p>

                {/* Hadith Section */}
                <div className="mt-6 p-4 bg-black/30 border border-green-700/30 rounded-lg max-w-3xl">
                  {/* Arabic Text */}
                  <p
                    className="arabic-text text-green-300 text-right leading-relaxed mb-3"
                    dir="rtl"
                  >
                    حَدَّثَنِي مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ نُمَيْرٍ،
                    حَدَّثَنَا حُمَيْدُ بْنُ عَبْدِ الرَّحْمَنِ، عَنِ
                    الأَعْمَشِ، عَنْ خَيْثَمَةَ، عَنِ النُّعْمَانِ بْنِ بَشِيرٍ،
                    قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم
                  </p>
                  <p
                    className="arabic-text text-green-200 text-right text-lg font-medium leading-relaxed mb-4"
                    dir="rtl"
                  >
                    &quot;الْمُسْلِمُونَ كَرَجُلٍ وَاحِدٍ إِنِ اشْتَكَى عَيْنُهُ
                    اشْتَكَى كُلُّهُ وَإِنِ اشْتَكَى رَأْسُهُ اشْتَكَى
                    كُلُّهُ&quot;
                  </p>

                  {/* English Translation */}
                  <p className="text-zinc-300 italic mb-2">
                    &quot;Muslims are like one body of a person; if the eye is
                    sore, the whole body aches, and if the head aches, the whole
                    body aches.&quot;
                  </p>
                  <p className="text-zinc-400 text-sm">
                    — Nu&apos;man b. Bashir (رضي الله عنه)
                  </p>

                  {/* Reference */}
                  <div className="mt-3 pt-3 border-t border-green-700/20">
                    <a
                      href="https://sunnah.com/muslim:2586d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 text-xs transition-colors"
                    >
                      Sahih Muslim 2586d — sunnah.com/muslim:2586d
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold urgent-pulse"
                >
                  <FaHeart /> Donate
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h4 className="text-lg font-bold mb-4 text-red-400">Quick Links</h4>
            <div className="flex flex-wrap gap-4">
              {workingLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-white transition-colors text-sm px-3 py-2 bg-zinc-900 rounded hover:bg-zinc-800"
                >
                  {link.name}
                </Link>
              ))}
              {/* Developers link (external) */}
              <a
                href="https://github.com/uaali/voices4pal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white transition-colors text-sm px-3 py-2 bg-zinc-900 rounded hover:bg-zinc-800"
              >
                Developers
              </a>
            </div>
          </div>

          {/* Social + small print */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold mb-3 text-center md:text-left">
                Follow Our Voice
              </h4>
              <div className="flex items-center justify-center md:justify-start gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-11 h-11 rounded-lg bg-zinc-900 hover:bg-red-600 flex items-center justify-center transition-colors"
                  >
                    <span className="text-xl">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right text-zinc-400 text-sm">
              <p>
                © {currentYear} Voices4Palestine — Made for justice and human
                rights.
              </p>
              <p className="mt-1">Amplifying Palestinian voices since 2023</p>
            </div>
          </div>
        </div>

        <div className="bg-red-900/50 border-t border-red-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center text-red-100 text-sm">
            We have not done enough, we must do more.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
