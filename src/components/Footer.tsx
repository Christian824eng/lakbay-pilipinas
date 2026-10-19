import React from 'react';
import { PearlLogo } from './PearlLogo';
import { PageView } from './Navbar';
import { ShieldCheck, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, storySlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView, storySlug?: string) => {
    onNavigate(page, storySlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1528] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <PearlLogo size="md" showText={true} textColor="text-white" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              Discover the beauty, culture, and stories of the Philippines. A digital travel publication celebrating the heritage of Luzon, the marine biodiversity of the Visayas, and the natural wonders of Mindanao.
            </p>
            <div className="pt-2 flex flex-col gap-0.5">
              <span className="text-[13px] font-sans tracking-[0.18em] text-[#38BDF8] font-semibold">
                ᜉᜒᜇ᜔ᜎᜐ᜔ ᜈᜅ᜔ ᜐᜒᜎᜅᜈᜈ᜔
              </span>
              <span className="text-[10px] font-sans tracking-[0.2em] text-slate-400 uppercase font-medium">
                Pearl of the Orient Seas
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-[0.16em] uppercase text-white font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('stories')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Featured Stories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('team')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Editorial Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('references')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Research &amp; References
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-[0.16em] uppercase text-white font-sans">
              Featured Destinations
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('stories', 'vigan-city')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 text-left flex items-center gap-1.5 group"
                >
                  <span>Vigan City, Ilocos Sur</span>
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('stories', 'cebu')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 text-left flex items-center gap-1.5 group"
                >
                  <span>Cebu Province</span>
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('stories', 'surigao-del-sur')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 text-left flex items-center gap-1.5 group"
                >
                  <span>Surigao del Sur (Hinatuan)</span>
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
            </ul>
          </div>

          {/* Academic & References Link */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-[0.16em] uppercase text-white font-sans">
              Literature &amp; Sources
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every destination guide is grounded in verified documentation, including UNESCO World Heritage records, DENR environmental research, and cultural archives.
            </p>
            <button
              type="button"
              onClick={() => handleNav('references')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#38BDF8] hover:text-sky-300 transition-colors cursor-pointer"
            >
              <span>Explore Research &amp; References</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Responsible Tourism Statement Box */}
        <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <div className="p-2.5 rounded-lg bg-sky-950/60 text-[#38BDF8] shrink-0 border border-sky-800/40">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Responsible Tourism Commitment
            </h5>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              “We believe that discovering the Philippines also means respecting its communities, preserving its heritage, and protecting its natural wonders for future generations.”
            </p>
          </div>
        </div>

        {/* Copyright & Meta */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Perlas ng Silangan. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with pride for the Philippine archipelago</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
              Perlas ng Silangan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
