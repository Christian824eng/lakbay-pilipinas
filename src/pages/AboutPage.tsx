import React from 'react';
import { PageView } from '../components/Navbar';
import { PearlLogo } from '../components/PearlLogo';
import {
  Compass,
  Heart,
  Globe2,
  Users,
  Building2,
  TreePine,
  Fish,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView, storySlug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-12 md:py-20 bg-[#FBF9F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Ribbon */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#0284C7] mb-3">
            <PearlLogo size="sm" />
            <span>The Concept Behind Perlas ng Silangan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
            Our Story
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-serif italic">
            A digital travel magazine created by a team of Filipino travel writers.
          </p>
        </div>

        {/* Lead Narrative & Introduction */}
        <section className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-xs mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#0284C7] first-letter:leading-none">
                Perlas ng Silangan is a Philippine travel blog created to showcase the beauty, history, culture, and traditions of the Philippines.
              </p>
              <p>
                Inspired by the country's identity as the Pearl of the Orient Seas, this blog explores destinations that reflect the richness of Filipino heritage and the diversity of the Philippine landscape.
              </p>
              <p>
                Through destination guides, cultural stories, local food features, and travel recommendations, we aim to help readers appreciate the Philippines beyond its famous tourist attractions.
              </p>
              <p>
                Our featured stories highlight three destinations across the country's major island groups: <strong>Vigan City in Luzon</strong>, <strong>Cebu in the Visayas</strong>, and <strong>Surigao del Sur in Mindanao</strong>.
              </p>
              <p className="text-slate-600 italic">
                Each destination offers a different perspective on Philippine tourism, from historical preservation and cultural celebrations to marine biodiversity and natural wonders.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md">
                <img
                  src="/src/assets/images/philippines_hero_landscape_1792417407988.jpg"
                  alt="Scenic Philippine landscape"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-4/3"
                />
              </div>
              <div className="mt-3 text-[11px] text-slate-500 text-center italic font-serif">
                The Philippine archipelago: 7,641 islands of living heritage and marine wonder.
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl border border-sky-100 p-8 shadow-xs relative">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0284C7]">
              Our Foundation
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Our mission is to promote awareness of Philippine destinations through informative, engaging, and well-researched travel stories that celebrate local culture, encourage responsible tourism, and help preserve the country's natural and historical treasures.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl border border-amber-100 p-8 shadow-xs relative">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center mb-5">
              <Globe2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D97706]">
              Our Horizon
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
              Our Vision
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              We envision Perlas ng Silangan as a travel blog that inspires people to explore the Philippines, respect its cultural diversity, support local communities, and appreciate the stories behind every destination.
            </p>
          </div>
        </section>

        {/* Commitment to Responsible Tourism Section */}
        <section className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-xs mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
              Ethical Travel Philosophy
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mt-2">
              Our Commitment to Responsible Tourism
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Sustainable exploration protects tangible history and living ecosystems so future generations can inherit a flourishing archipelago.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-5 rounded-xl border border-stone-100 bg-[#FBF9F5] space-y-2">
              <div className="flex items-center gap-2 text-sky-700">
                <Heart className="w-4 h-4 text-[#0284C7]" />
                <h3 className="text-sm font-bold text-slate-900">1. Respect Local Customs</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Honor religious observances, spiritual shrines, and traditional social etiquette when attending fiestas or visiting historical sanctuaries.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-xl border border-stone-100 bg-[#FBF9F5] space-y-2">
              <div className="flex items-center gap-2 text-teal-700">
                <Fish className="w-4 h-4 text-[#0D9488]" />
                <h3 className="text-sm font-bold text-slate-900">2. Protect Wildlife &amp; Nature</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Safeguard fragile marine coral reefs and terrestrial habitats by maintaining zero-touch policies, avoiding single-use plastics, and keeping wild spaces pristine.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-xl border border-stone-100 bg-[#FBF9F5] space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <Users className="w-4 h-4 text-[#D97706]" />
                <h3 className="text-sm font-bold text-slate-900">3. Support Local Livelihoods</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Directly patronize community kutseros, local certified mountain guides, women-led handweaving cooperatives, and family-owned regional diners.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 rounded-xl border border-stone-100 bg-[#FBF9F5] space-y-2">
              <div className="flex items-center gap-2 text-indigo-700">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900">4. Preserve Historic Landmarks</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Treat centuries-old brickwork, capiz windows, and cobblestone thoroughfares with gentle care. Defacing or taking artifacts is strictly prohibited.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-5 rounded-xl border border-stone-100 bg-[#FBF9F5] space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <TreePine className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-900">5. Follow Tourism Regulations</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adhere strictly to official local carrying capacities, protected sanctuary swimming boundaries, and life vest mandates set by local authorities.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-5 rounded-xl border border-stone-100 bg-[#FBF9F5] space-y-2">
              <div className="flex items-center gap-2 text-rose-700">
                <BookOpen className="w-4 h-4 text-rose-600" />
                <h3 className="text-sm font-bold text-slate-900">6. Respect Indigenous Heritage</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn about Indigenous communities (such as the Mamanwa and Manobo) respectfully, using verified, reliable sources rather than unsupported generalizations.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Explore Stories */}
        <div className="text-center bg-[#0B1528] rounded-2xl p-10 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Ready to explore our island stories?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Immerse yourself in Vigan City, Cebu, and Surigao del Sur.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('stories')}
            className="px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Read Destination Stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
