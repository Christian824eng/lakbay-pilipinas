import React from 'react';
import { InteractivePhilippineMap } from '../components/InteractivePhilippineMap';
import { ArrowDown, ArrowRight, Sparkles, MapPin, Compass, Landmark, Waves, Trees } from 'lucide-react';
import { PageView } from '../components/Navbar';
import heroImage from '../assets/images/philippines_hero_landscape_1792417407988.jpg';
import viganImage from '../assets/images/vigan_calle_crisologo_heritage_1792417408520.jpg';
import cebuImage from '../assets/images/cebu_osmena_pescador_scenic_1792417409377.jpg';
import surigaoImage from '../assets/images/surigao_enchanted_river_1792417408296.jpg';
interface HomePageProps {
  onNavigate: (page: PageView, storySlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleScrollToMap = () => {
    const mapElement = document.getElementById('philippine-map');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Landscape Photo with Soft Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Breathtaking Philippine archipelago with turquoise waters and limestone islands"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
          />
          {/* Measured multi-layer contrast scrim ensuring legible WCAG AA text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/60 to-[#0B1528]/40" />
          <div className="absolute inset-0 bg-[#0284C7]/15 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white flex flex-col items-center">
          {/* Top Brand Pill-free Kicker */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-300 mb-4">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Digital Travel Magazine &amp; Heritage Guide</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white uppercase drop-shadow-md leading-[1.1]">
            Perlas ng Silangan
          </h1>

          {/* Baybayin Script */}
          <div className="mt-3 text-lg sm:text-xl text-sky-300 tracking-[0.2em] font-sans font-semibold">
            ᜉᜒᜇ᜔ᜎᜐ᜔ ᜈᜅ᜔ ᜐᜒᜎᜅᜈᜈ᜔
          </div>

          {/* English Subtitle Underneath Baybayin */}
          <div className="mt-1 text-xs sm:text-sm text-amber-200/90 tracking-[0.2em] font-sans uppercase font-medium">
            Pearl of the Orient Seas
          </div>

          {/* Tagline */}
          <p className="mt-4 text-xl sm:text-2xl font-serif italic text-amber-100/90 font-light max-w-2xl">
            Discover the beauty, culture, and stories of the Philippines.
          </p>

          {/* Short Introduction Prose */}
          <div className="mt-6 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed space-y-3 font-normal">
            <p>
              The Philippines is a country of breathtaking landscapes, rich traditions, diverse cultures, and unforgettable destinations. From the historic streets of Luzon to the scenic islands of the Visayas and the natural wonders of Mindanao, every destination holds a story waiting to be discovered.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm">
              Perlas ng Silangan invites you to explore these destinations, appreciate the traditions of local communities, and discover the remarkable beauty of the Philippine archipelago.
            </p>
          </div>

          {/* Prominent Button: Smooth Scroll to Interactive Map */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={handleScrollToMap}
              className="px-8 py-4 bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm sm:text-base font-semibold tracking-wider uppercase rounded-xl shadow-lg hover:shadow-sky-500/30 transition-all flex items-center gap-3 cursor-pointer group"
            >
              <span>Explore The Philippines</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('stories')}
              className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-medium rounded-xl border border-white/30 backdrop-blur-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Read Featured Stories</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Editorial Magazine Manifesto Strip */}
      <section className="bg-white border-y border-stone-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-3 bg-sky-50 text-[#0284C7] rounded-xl shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-base">Discover the Archipelago</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Geographically grounded exploration through 7,641 islands across Luzon, Visayas, and Mindanao.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-3 bg-teal-50 text-[#0D9488] rounded-xl shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-base">Experience Living Culture</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Preserving indigenous weaving, ancestral culinary heritage, and centuries-old festival rites.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-3 bg-amber-50 text-[#D97706] rounded-xl shrink-0">
                <ShieldIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-base">Preserve for Tomorrow</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Committed to responsible ecotourism, supporting local artisans, and protecting sacred waters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
              Curated Island Chronicles
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#0F172A] tracking-tight">
              Featured Island Destinations
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore three distinct narratives representing the soul of the three major island groups of the Philippines.
            </p>
          </div>

          {/* 3 Destination Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Luzon — Vigan City, Ilocos Sur */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={viganImage}
                  alt="Historic Calle Crisologo in Vigan City, Ilocos Sur"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#0284C7] text-white text-xs font-semibold rounded-md shadow-xs">
                  Luzon
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Vigan City, Ilocos Sur</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                  Walking Through History: Discovering Vigan City
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                  Discover the charm of a historic Philippine city known for its preserved Spanish colonial architecture, cobblestone streets, ancestral houses, and traditional Ilocano cuisine.
                </p>
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onNavigate('stories', 'vigan-city')}
                    className="w-full py-2.5 px-4 bg-[#0F172A] hover:bg-[#0284C7] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>EXPLORE VIGAN</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Visayas — Cebu */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={cebuImage}
                  alt="Scenic mountains and coastline of Cebu"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#0D9488] text-white text-xs font-semibold rounded-md shadow-xs">
                  Visayas
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <Waves className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Cebu Province</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#0D9488] transition-colors">
                  Beyond the Coast: Exploring Cebu
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                  Explore Cebu's scenic mountains, marine attractions, colorful cultural celebrations, and famous local dishes.
                </p>
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onNavigate('stories', 'cebu')}
                    className="w-full py-2.5 px-4 bg-[#0F172A] hover:bg-[#0D9488] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>EXPLORE CEBU</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Mindanao — Surigao del Sur */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={surigaoImage}
                  alt="Hinatuan Enchanted River in Surigao del Sur, Mindanao"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#D97706] text-white text-xs font-semibold rounded-md shadow-xs">
                  Mindanao
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <Trees className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Surigao del Sur (Hinatuan)</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#D97706] transition-colors">
                  The Blue Wonder of Mindanao
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                  Experience the natural beauty of Surigao del Sur, featuring the remarkable Hinatuan Enchanted River, coastal landscapes, and rich Indigenous cultural heritage.
                </p>
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onNavigate('stories', 'surigao-del-sur')}
                    className="w-full py-2.5 px-4 bg-[#0F172A] hover:bg-[#D97706] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>EXPLORE SURIGAO DEL SUR</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographically Accurate Interactive Map Section */}
      <InteractivePhilippineMap
        onSelectStory={(slug) => onNavigate('stories', slug)}
      />

      {/* Travel Magazine Philosophy Callout */}
      <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
            Curatorial Heritage &amp; Travel
          </span>
          <blockquote className="mt-4 text-2xl sm:text-3xl font-serif italic text-amber-100/95 leading-snug">
            “To travel the Philippines is to listen to the whispers of ancestral stones, swim in rivers guarded by folklore, and celebrate with communities whose warmth is boundless.”
          </blockquote>
          <p className="mt-4 text-xs tracking-wider text-slate-400 uppercase font-sans">
            — The Editorial Collective, Perlas ng Silangan
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="px-6 py-2.5 bg-white text-slate-900 text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Our Mission &amp; Story
            </button>
            <button
              type="button"
              onClick={() => onNavigate('team')}
              className="px-6 py-2.5 bg-transparent border border-slate-700 text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Meet The Seven Members
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
