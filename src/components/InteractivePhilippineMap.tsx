import React, { useState } from 'react';
import { IslandGroup } from '../types';
import { DESTINATION_STORIES } from '../data/destinationData';
import { MapPin, ArrowRight, X, Compass, CheckCircle2 } from 'lucide-react';

interface InteractivePhilippineMapProps {
  onSelectStory: (slug: string) => void;
}

export const InteractivePhilippineMap: React.FC<InteractivePhilippineMapProps> = ({
  onSelectStory,
}) => {
  // Default to 'mindanao' to match the reference image exactly
  const [selectedRegion, setSelectedRegion] = useState<IslandGroup | null>('mindanao');
  const [hoveredRegion, setHoveredRegion] = useState<IslandGroup | null>(null);

  const activeStory = DESTINATION_STORIES.find((s) => s.region === selectedRegion);

  const handleRegionClick = (region: IslandGroup) => {
    setSelectedRegion((prev) => (prev === region ? null : region));
  };

  const handleResetMap = () => {
    setSelectedRegion(null);
    setHoveredRegion(null);
  };

  return (
    <section id="philippine-map" className="py-16 md:py-24 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7] mb-3">
            <Compass className="w-4 h-4 text-[#0284C7]" />
            <span>Editorial Regional Cartography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
            Explore the Philippine Archipelago
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Click on <strong className="text-[#0A2540] font-semibold">Luzon</strong>,{' '}
            <strong className="text-[#0A2540] font-semibold">Visayas</strong>, or{' '}
            <strong className="text-[#368054] font-semibold">Mindanao</strong> to discover its history, cultural heritage, and natural treasures.
          </p>
        </div>

        {/* Minimalist Region Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={handleResetMap}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
              selectedRegion === null
                ? 'bg-[#0A2540] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-stone-200'
            }`}
          >
            All Archipelago
          </button>
          <button
            type="button"
            onClick={() => handleRegionClick('luzon')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              selectedRegion === 'luzon'
                ? 'bg-[#0A2540] text-white shadow-xs ring-2 ring-sky-300'
                : 'bg-white text-slate-700 hover:bg-sky-50 border border-stone-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#A3C5D7] border border-[#7D9FB3]" />
            Luzon (Vigan City)
          </button>
          <button
            type="button"
            onClick={() => handleRegionClick('visayas')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              selectedRegion === 'visayas'
                ? 'bg-[#0A2540] text-white shadow-xs ring-2 ring-teal-300'
                : 'bg-white text-slate-700 hover:bg-teal-50 border border-stone-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#B2DFDB] border border-[#7AAEA9]" />
            Visayas (Cebu)
          </button>
          <button
            type="button"
            onClick={() => handleRegionClick('mindanao')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              selectedRegion === 'mindanao'
                ? 'bg-[#368054] text-white shadow-xs ring-2 ring-emerald-300'
                : 'bg-white text-slate-700 hover:bg-emerald-50 border border-stone-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#368054] border border-[#CFA03E]" />
            Mindanao (Surigao del Sur)
          </button>
        </div>

        {/* Main Map Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Exact Map Reproduction Canvas (Warm Ivory Card) */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl border border-stone-200 p-4 sm:p-8 shadow-xs relative min-h-[560px] flex items-center justify-center">
            {/* SVG Map Container */}
            <div className="w-full flex items-center justify-center">
              <svg
                viewBox="0 0 540 600"
                className="w-full max-w-[460px] h-auto select-none"
                role="img"
                aria-label="Exact reproduction of reference map: Philippine archipelago with Luzon, Visayas, and highlighted Mindanao in forest green with gold outline"
              >
                <defs>
                  {/* Subtle soft drop shadow for the highlighted Mindanao landmass */}
                  <filter id="subtleShadow" x="-10%" y="-10%" width="125%" height="125%">
                    <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.12" />
                  </filter>
                  <filter id="luzonShadow" x="-10%" y="-10%" width="125%" height="125%">
                    <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.12" />
                  </filter>
                  <filter id="visayasShadow" x="-10%" y="-10%" width="125%" height="125%">
                    <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.12" />
                  </filter>
                </defs>

                {/* ======================================================== */}
                {/* 1. LUZON GROUP (Muted Powder Blue: #A3C5D7) */}
                {/* ======================================================== */}
                <g
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => handleRegionClick('luzon')}
                  onMouseEnter={() => setHoveredRegion('luzon')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  filter={selectedRegion === 'luzon' ? 'url(#luzonShadow)' : undefined}
                >
                  {/* Northern & Central Luzon mainland (clean polygonal silhouette) */}
                  <path
                    d="M 220 108 
                       L 252 108 
                       L 284 122 
                       L 292 154 
                       L 294 196 
                       L 272 208 
                       L 260 250 
                       L 238 260 
                       L 204 240 
                       L 204 206 
                       L 218 196 
                       L 220 156 Z"
                    fill={
                      selectedRegion === 'luzon'
                        ? '#368054'
                        : hoveredRegion === 'luzon'
                        ? '#92B8CC'
                        : '#A3C5D7'
                    }
                    stroke={selectedRegion === 'luzon' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'luzon' ? '3' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* Bicol Peninsula branch */}
                  <path
                    d="M 234 262 
                       L 260 262 
                       L 272 284 
                       L 322 306 
                       L 352 288 
                       L 360 308 
                       L 330 330 
                       L 295 304 
                       L 262 294 
                       L 234 294 
                       L 228 278 Z"
                    fill={
                      selectedRegion === 'luzon'
                        ? '#368054'
                        : hoveredRegion === 'luzon'
                        ? '#92B8CC'
                        : '#A3C5D7'
                    }
                    stroke={selectedRegion === 'luzon' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'luzon' ? '3' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* Mindoro Island */}
                  <path
                    d="M 224 305 
                       L 260 305 
                       L 255 350 
                       L 235 354 
                       L 220 334 Z"
                    fill={
                      selectedRegion === 'luzon'
                        ? '#368054'
                        : hoveredRegion === 'luzon'
                        ? '#92B8CC'
                        : '#A3C5D7'
                    }
                    stroke={selectedRegion === 'luzon' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'luzon' ? '3' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* Palawan Island Strip (Slanted diagonal to Southwest) */}
                  <path
                    d="M 204 392 
                       L 198 414 
                       L 122 484 
                       L 98 504 
                       L 92 494 
                       L 172 426 
                       L 194 392 Z"
                    fill={
                      selectedRegion === 'luzon'
                        ? '#368054'
                        : hoveredRegion === 'luzon'
                        ? '#92B8CC'
                        : '#A3C5D7'
                    }
                    stroke={selectedRegion === 'luzon' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'luzon' ? '3' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* LUZON Label (Refined classic serif uppercase with generous tracking) */}
                  <text
                    x="100"
                    y="178"
                    fontSize="19"
                    fontWeight="bold"
                    fill={selectedRegion === 'luzon' ? '#CFA03E' : '#0A2540'}
                    fontFamily="'Playfair Display', Georgia, serif"
                    letterSpacing="0.18em"
                  >
                    LUZON
                  </text>

                  {/* Vigan City Location Marker: Circular golden outline with white center */}
                  <g transform="translate(222, 146)">
                    <circle cx="0" cy="0" r="6" fill="#FFFFFF" stroke="#CFA03E" strokeWidth="2.5" />
                    <text
                      x="14"
                      y="4"
                      fontSize="13"
                      fontWeight="bold"
                      fill="#0A2540"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      Vigan City
                    </text>
                  </g>
                </g>

                {/* ======================================================== */}
                {/* 2. VISAYAS GROUP (Soft Powder Aqua/Blue: #B2DFDB) */}
                {/* ======================================================== */}
                <g
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => handleRegionClick('visayas')}
                  onMouseEnter={() => setHoveredRegion('visayas')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  filter={selectedRegion === 'visayas' ? 'url(#visayasShadow)' : undefined}
                >
                  {/* Panay Island */}
                  <path
                    d="M 280 374 L 318 385 L 302 422 L 276 410 Z"
                    fill={
                      selectedRegion === 'visayas'
                        ? '#368054'
                        : hoveredRegion === 'visayas'
                        ? '#9FD2CE'
                        : '#B2DFDB'
                    }
                    stroke={selectedRegion === 'visayas' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'visayas' ? '3' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* Negros Island */}
                  <path
                    d="M 295 416 L 324 416 L 316 460 L 294 445 Z"
                    fill={
                      selectedRegion === 'visayas'
                        ? '#368054'
                        : hoveredRegion === 'visayas'
                        ? '#9FD2CE'
                        : '#B2DFDB'
                    }
                    stroke={selectedRegion === 'visayas' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'visayas' ? '3' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* Cebu Island (Central narrow faceted strip) */}
                  <path
                    d="M 326 414 L 344 406 L 348 444 L 330 446 Z"
                    fill={
                      selectedRegion === 'visayas'
                        ? '#368054'
                        : hoveredRegion === 'visayas'
                        ? '#9FD2CE'
                        : '#B2DFDB'
                    }
                    stroke={selectedRegion === 'visayas' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'visayas' ? '3' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* Samar Island */}
                  <path
                    d="M 362 344 L 405 344 L 408 386 L 376 390 Z"
                    fill={
                      selectedRegion === 'visayas'
                        ? '#368054'
                        : hoveredRegion === 'visayas'
                        ? '#9FD2CE'
                        : '#B2DFDB'
                    }
                    stroke={selectedRegion === 'visayas' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'visayas' ? '3' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* Leyte Island */}
                  <path
                    d="M 364 394 L 385 390 L 378 430 L 358 426 Z"
                    fill={
                      selectedRegion === 'visayas'
                        ? '#368054'
                        : hoveredRegion === 'visayas'
                        ? '#9FD2CE'
                        : '#B2DFDB'
                    }
                    stroke={selectedRegion === 'visayas' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'visayas' ? '3' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* Bohol Island */}
                  <ellipse
                    cx="362"
                    cy="442"
                    rx="14"
                    ry="9"
                    fill={
                      selectedRegion === 'visayas'
                        ? '#368054'
                        : hoveredRegion === 'visayas'
                        ? '#9FD2CE'
                        : '#B2DFDB'
                    }
                    stroke={selectedRegion === 'visayas' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'visayas' ? '3' : '0'}
                  />

                  {/* VISAYAS Label (Refined classic serif uppercase with generous tracking) */}
                  <text
                    x="194"
                    y="420"
                    fontSize="19"
                    fontWeight="bold"
                    fill={selectedRegion === 'visayas' ? '#CFA03E' : '#0A2540'}
                    fontFamily="'Playfair Display', Georgia, serif"
                    letterSpacing="0.18em"
                  >
                    VISAYAS
                  </text>

                  {/* Cebu Location Marker: Circular golden outline with white center */}
                  <g transform="translate(346, 426)">
                    <circle cx="0" cy="0" r="6" fill="#FFFFFF" stroke="#CFA03E" strokeWidth="2.5" />
                    <text
                      x="14"
                      y="4"
                      fontSize="13"
                      fontWeight="bold"
                      fill="#0A2540"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      Cebu
                    </text>
                  </g>
                </g>

                {/* ======================================================== */}
                {/* 3. MINDANAO GROUP (Highlighted Forest Green: #368054) */}
                {/* ======================================================== */}
                <g
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => handleRegionClick('mindanao')}
                  onMouseEnter={() => setHoveredRegion('mindanao')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  filter={selectedRegion === 'mindanao' ? 'url(#subtleShadow)' : undefined}
                >
                  {/* Faceted silhouette of Mindanao matching reference image */}
                  <path
                    d="M 276 544 
                       L 322 490 
                       L 358 524 
                       L 395 436 
                       L 438 522 
                       L 424 578 
                       L 404 542 
                       L 396 578 
                       L 354 594 
                       L 338 562 Z"
                    fill={
                      selectedRegion === 'mindanao'
                        ? '#368054'
                        : hoveredRegion === 'mindanao'
                        ? '#459664'
                        : '#A3C5D7'
                    }
                    stroke={selectedRegion === 'mindanao' ? '#CFA03E' : 'none'}
                    strokeWidth={selectedRegion === 'mindanao' ? '3.5' : '0'}
                    strokeLinejoin="round"
                    className="transition-colors duration-200"
                  />

                  {/* MINDANAO Label (Warm golden lettering matching reference) */}
                  <text
                    x="170"
                    y="534"
                    fontSize="19"
                    fontWeight="bold"
                    fill="#CFA03E"
                    fontFamily="'Playfair Display', Georgia, serif"
                    letterSpacing="0.18em"
                  >
                    MINDANAO
                  </text>

                  {/* Surigao del Sur Marker: Golden circle with pale ivory center */}
                  <g transform="translate(420, 492)">
                    <circle cx="0" cy="0" r="7.5" fill="#FFFBF0" stroke="#CFA03E" strokeWidth="2.8" />
                    <text
                      x="14"
                      y="4.5"
                      fontSize="13"
                      fontWeight="bold"
                      fill="#0A2540"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      Surigao del Sur
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* Destination Information Panel / Dynamic Card */}
          <div className="lg:col-span-5 flex flex-col">
            {activeStory ? (
              <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs transition-all animate-fadeIn relative">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleResetMap}
                  aria-label="Close destination panel"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Region Tag & Header */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      activeStory.region === 'luzon'
                        ? 'bg-sky-100 text-[#1E40AF]'
                        : activeStory.region === 'visayas'
                        ? 'bg-teal-100 text-[#0F766E]'
                        : 'bg-emerald-100 text-[#276742]'
                    }`}
                  >
                    {activeStory.regionName} Region
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-slate-500">Featured Destination</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-slate-900 leading-snug">
                  {activeStory.locationName}
                </h3>
                <p className="text-xs text-slate-500 mt-1 italic">{activeStory.subtitle}</p>

                {/* Destination Thumbnail */}
                <div className="my-4 rounded-xl overflow-hidden aspect-video border border-slate-100 relative bg-slate-100">
                  <img
                    src={activeStory.heroImage}
                    alt={activeStory.locationName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/75 backdrop-blur-xs rounded text-[11px] text-white font-medium">
                    {activeStory.leadKicker}
                  </div>
                </div>

                {/* Overview Text */}
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {activeStory.introduction[0]}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeStory.attractions.slice(0, 2).map((attr) => (
                      <li key={attr.id} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-900 font-semibold">{attr.name}:</strong>{' '}
                          {attr.description.slice(0, 95)}...
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onSelectStory(activeStory.slug)}
                    className="w-full sm:w-auto flex-1 px-5 py-2.5 bg-[#368054] hover:bg-[#2A6542] text-white text-xs font-semibold rounded-lg shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Read Complete {activeStory.locationName.split(',')[0]} Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleResetMap}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-stone-200 p-8 text-center flex flex-col items-center justify-center h-full min-h-[460px] shadow-xs">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#368054] flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  Select a Region
                </h3>
                <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
                  Click on <strong className="text-[#0A2540]">Luzon</strong> (Powder Blue),{' '}
                  <strong className="text-[#0A2540]">Visayas</strong> (Seafoam), or{' '}
                  <strong className="text-[#368054]">Mindanao</strong> (Forest Green) on the map to explore the stories.
                </p>

                {/* Direct quick links */}
                <div className="w-full space-y-2.5 text-left">
                  <button
                    type="button"
                    onClick={() => handleRegionClick('luzon')}
                    className="w-full p-3 rounded-xl border border-sky-200 hover:border-sky-400 hover:bg-sky-50/60 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#1E40AF]">
                        1. Luzon — Vigan City, Ilocos Sur
                      </div>
                      <div className="text-[11px] text-slate-500">Calle Crisologo &amp; Spanish colonial ancestral homes</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1E40AF] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRegionClick('visayas')}
                    className="w-full p-3 rounded-xl border border-teal-200 hover:border-teal-400 hover:bg-teal-50/60 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#0F766E]">
                        2. Visayas — Cebu
                      </div>
                      <div className="text-[11px] text-slate-500">Osmeña Peak, Pescador Island &amp; Sinulog Festival</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F766E] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRegionClick('mindanao')}
                    className="w-full p-3 rounded-xl border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/60 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#368054]">
                        3. Mindanao — Surigao del Sur
                      </div>
                      <div className="text-[11px] text-slate-500">Hinatuan Enchanted River &amp; Indigenous heritage</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#368054] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
