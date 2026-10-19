import React, { useState, useEffect } from 'react';
import { DESTINATION_STORIES } from '../data/destinationData';
import { MASTER_REFERENCES } from '../data/referencesData';
import { PageView } from '../components/Navbar';
import {
  Compass,
  MapPin,
  ExternalLink,
  BookOpen,
  Calendar,
  Utensils,
  Award,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
} from 'lucide-react';

interface StoriesPageProps {
  initialStorySlug?: string;
  onNavigate: (page: PageView, storySlug?: string) => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({
  initialStorySlug,
  onNavigate,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialStorySlug || 'vigan-city'
  );

  useEffect(() => {
    if (initialStorySlug) {
      setSelectedSlug(initialStorySlug);
    }
  }, [initialStorySlug]);

  const activeStory =
    DESTINATION_STORIES.find((s) => s.slug === selectedSlug) ||
    DESTINATION_STORIES[0];

  const destinationRefData = MASTER_REFERENCES.find(
    (r) => r.islandGroup.toLowerCase() === activeStory.region.toLowerCase()
  );

  const handleSelectStory = (slug: string) => {
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-10 md:py-16 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
            Editorial Field Stories
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F172A] mt-2 tracking-tight">
            Chronicles of the Archipelago
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            In-depth travel journalism exploring Luzon, Visayas, and Mindanao through their ancestral architecture, living traditions, and natural wonders.
          </p>
        </div>

        {/* Destination Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1.5 bg-stone-200/70 rounded-2xl max-w-2xl mx-auto border border-stone-300/60 shadow-xs">
          {DESTINATION_STORIES.map((story) => {
            const isSelected = story.slug === selectedSlug;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => handleSelectStory(story.slug)}
                className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap text-center ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-sans">
                  {story.regionName}
                </span>
                <span className="truncate">{story.locationName.split(',')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Article Container */}
        <article className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden">
          {/* Article Hero Header */}
          <div className="relative aspect-16/9 md:aspect-21/9 max-h-[460px] overflow-hidden bg-slate-900">
            <img
              src={activeStory.heroImage}
              alt={activeStory.articleTitle}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/50 to-transparent" />

            {/* Header Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8] mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeStory.regionName} — {activeStory.locationName}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight max-w-4xl">
                {activeStory.articleTitle}
              </h2>
              <p className="mt-2 text-sm sm:text-lg font-serif italic text-amber-100/90 max-w-3xl">
                {activeStory.subtitle}
              </p>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="p-6 sm:p-12 md:p-16 max-w-4xl mx-auto space-y-14">
            {/* A. Introduction */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-stone-200 pb-2">
                <span>Section A</span>
                <span>·</span>
                <span>Introduction</span>
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                {activeStory.introduction.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#0284C7] first-letter:leading-none'
                        : ''
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* B. Tourist Attractions */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-stone-200 pb-2">
                <span>Section B</span>
                <span>·</span>
                <span>Notable Tourist Attractions</span>
              </div>
              <div className="space-y-6">
                {activeStory.attractions.map((attraction, idx) => (
                  <div
                    key={attraction.id}
                    className="p-6 rounded-2xl border border-stone-200 bg-[#FBF9F5] space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#0284C7] bg-sky-100 px-2 py-0.5 rounded">
                          0{idx + 1}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-slate-900">
                          {attraction.name}
                        </h3>
                      </div>
                      {attraction.tag && (
                        <span className="text-xs text-slate-500 font-medium">
                          {attraction.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {attraction.description}
                    </p>
                    {attraction.visitorTips && (
                      <div className="mt-3 pt-3 border-t border-stone-200/80 flex items-start gap-2.5 text-xs text-slate-600 bg-white/70 p-3 rounded-xl">
                        <Compass className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 font-semibold">Visitor Information &amp; Advice:</strong>{' '}
                          {attraction.visitorTips}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* C. Tourist Activities */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-stone-200 pb-2">
                <span>Section C</span>
                <span>·</span>
                <span>Authentic Tourist Experiences</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeStory.activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-stone-200 bg-white space-y-2 shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <h4 className="text-sm font-bold text-slate-900">
                        {act.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {act.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* D. Cultural Festivals */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-stone-200 pb-2">
                <span>Section D</span>
                <span>·</span>
                <span>Festivals &amp; Living Celebrations</span>
              </div>
              <div className="space-y-6">
                {activeStory.festivals.map((fest, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-amber-200/80 bg-amber-50/30 space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#D97706]" />
                      <div>
                        <h3 className="text-lg font-serif font-bold text-slate-900">
                          {fest.name}
                        </h3>
                        <span className="text-xs text-amber-800 font-medium italic">
                          {fest.subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {fest.description}
                    </p>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-2 border-t border-amber-200/50">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{fest.timingNote}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* E. Famous Local Food */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-stone-200 pb-2">
                <span>Section E</span>
                <span>·</span>
                <span>Gastronomy &amp; Local Delicacies</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeStory.foods.map((food, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-stone-200 bg-[#FBF9F5] flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-serif font-bold text-slate-900">
                        {food.name}
                      </h4>
                      <p className="text-[11px] font-medium text-[#0284C7] leading-snug">
                        {food.tagline}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2">
                        {food.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* F. Importance to Philippine Tourism */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-stone-200 pb-2">
                <span>Section F</span>
                <span>·</span>
                <span>Importance to Philippine Tourism &amp; Responsible Practices</span>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeStory.tourismSignificance.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5 shadow-xs"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#0284C7]" />
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Responsible Tourism Callout */}
                <div className="p-5 rounded-xl bg-teal-50/70 border border-teal-200 flex items-start gap-3 text-xs text-teal-900 leading-relaxed">
                  <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-teal-950 uppercase tracking-wide block mb-1">
                      Responsible Tourism Advisory
                    </strong>
                    {activeStory.tourismSignificance.responsibleTourism}
                  </div>
                </div>
              </div>
            </section>

            {/* G. Review of Related Literature (RRL) */}
            <section className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <BookOpen className="w-4 h-4 text-[#0284C7]" />
                  <span>Review of Related Literature (RRL)</span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('references')}
                  className="text-xs text-[#0284C7] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Full Bibliography</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-serif">
                  {activeStory.rrl.summary}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Scholarly &amp; Archival Evidence Points:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {activeStory.rrl.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Links to Source Documents */}
                {destinationRefData && (
                  <div className="pt-4 border-t border-stone-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Cited Primary Literature:
                    </span>
                    <div className="space-y-2">
                      {destinationRefData.sources.map((src) => (
                        <div
                          key={src.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-white border border-stone-200 text-xs"
                        >
                          <div>
                            <strong className="text-slate-900 font-semibold">{src.title}</strong>
                            <div className="text-[11px] text-slate-500">
                              {src.authors ? `${src.authors} (${src.year}). ` : ''}{src.publisherOrSource}
                            </div>
                          </div>
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0284C7] hover:underline whitespace-nowrap self-start sm:self-center"
                          >
                            <span>Verify Source</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* H. Conclusion */}
            <section className="space-y-4 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>Conclusion</span>
                <span>·</span>
                <span>Editorial Reflection</span>
              </div>
              <blockquote className="p-6 rounded-2xl bg-[#FBF9F5] border-l-0 border border-stone-200 font-serif text-slate-800 text-base sm:text-lg italic leading-relaxed">
                “{activeStory.conclusion}”
              </blockquote>
            </section>
          </div>

          {/* Article Footer & Story Switcher Bar */}
          <div className="bg-[#0B1528] text-white p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-800">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-semibold">
                Explore The Next Destination
              </span>
              <h4 className="text-lg font-serif font-bold text-white mt-1">
                Continue your journey through the Philippines
              </h4>
            </div>

            <div className="flex flex-wrap gap-3">
              {DESTINATION_STORIES.filter((s) => s.slug !== activeStory.slug).map(
                (otherStory) => (
                  <button
                    key={otherStory.id}
                    type="button"
                    onClick={() => handleSelectStory(otherStory.slug)}
                    className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-[#0284C7] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>{otherStory.locationName.split(',')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
