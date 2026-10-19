import React, { useState } from 'react';
import { MASTER_REFERENCES } from '../data/referencesData';
import { ExternalLink, BookOpen, CheckCircle, Search, ShieldCheck, BookmarkCheck } from 'lucide-react';

export const ReferencesPage: React.FC = () => {
  const [filterDestination, setFilterDestination] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredReferences = MASTER_REFERENCES.filter((group) => {
    if (filterDestination !== 'all' && group.islandGroup.toLowerCase() !== filterDestination.toLowerCase()) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen py-12 md:py-20 bg-[#FBF9F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#0284C7] mb-3">
            <BookOpen className="w-4 h-4 text-[#0284C7]" />
            <span>Academic Rigor &amp; Provenance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
            Research and References
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-serif italic">
            Explore the sources behind our stories.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Demonstrating that every destination description, cultural festival record, and environmental guide published in Perlas ng Silangan is anchored in identifiable UNESCO, government, cultural, and ecological literature.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
          {/* Island Group Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setFilterDestination('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterDestination === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-stone-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              All Destinations
            </button>
            <button
              type="button"
              onClick={() => setFilterDestination('luzon')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterDestination === 'luzon'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-stone-100 text-slate-600 hover:text-sky-700'
              }`}
            >
              Luzon (Vigan)
            </button>
            <button
              type="button"
              onClick={() => setFilterDestination('visayas')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterDestination === 'visayas'
                  ? 'bg-[#0D9488] text-white shadow-xs'
                  : 'bg-stone-100 text-slate-600 hover:text-teal-700'
              }`}
            >
              Visayas (Cebu)
            </button>
            <button
              type="button"
              onClick={() => setFilterDestination('mindanao')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterDestination === 'mindanao'
                  ? 'bg-[#D97706] text-white shadow-xs'
                  : 'bg-stone-100 text-slate-600 hover:text-amber-700'
              }`}
            >
              Mindanao (Surigao del Sur)
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword or author..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-500 text-slate-800"
            />
          </div>
        </div>

        {/* References Groups */}
        <div className="space-y-14">
          {filteredReferences.map((group) => {
            const visibleSources = group.sources.filter((s) => {
              if (!searchQuery.trim()) return true;
              const q = searchQuery.toLowerCase();
              return (
                s.title.toLowerCase().includes(q) ||
                (s.authors && s.authors.toLowerCase().includes(q)) ||
                s.publisherOrSource.toLowerCase().includes(q) ||
                s.claimSupported.toLowerCase().includes(q)
              );
            });

            if (visibleSources.length === 0) return null;

            return (
              <section
                key={group.destination}
                className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs"
              >
                {/* Destination Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        group.islandGroup === 'Luzon'
                          ? 'text-[#0284C7]'
                          : group.islandGroup === 'Visayas'
                          ? 'text-[#0D9488]'
                          : 'text-[#D97706]'
                      }`}
                    >
                      {group.islandGroup} Region
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-slate-900">
                      {group.destination}
                    </h2>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {visibleSources.length} Verified Sources
                  </span>
                </div>

                {/* Destination-Specific RRL Explanation */}
                <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-stone-200 mb-8 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <BookmarkCheck className="w-4 h-4 text-[#0284C7]" />
                    <span>Review of Related Literature &amp; Archival Contribution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-serif">
                    {group.rrlRationale}
                  </p>
                </div>

                {/* References List in APA Style with Direct Hyperlinks */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Bibliographic References (APA &amp; Archival Format):
                  </h3>

                  <div className="divide-y divide-stone-100">
                    {visibleSources.map((item, idx) => (
                      <div
                        key={item.id}
                        className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start justify-between gap-4 group"
                      >
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-baseline gap-2">
                            <span className="text-xs font-mono font-bold text-slate-400">
                              [{idx + 1}]
                            </span>
                            <div className="text-sm text-slate-900 leading-snug">
                              {item.authors && <span className="font-semibold">{item.authors}. </span>}
                              {item.year && <span>({item.year}). </span>}
                              <span className="italic font-serif font-medium">{item.title}. </span>
                              <span className="text-slate-600">{item.publisherOrSource}.</span>
                            </div>
                          </div>

                          {/* Specific Fact/Claim Supported */}
                          <div className="text-xs text-slate-500 pl-6 leading-relaxed flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-slate-700">Supported Fact:</strong> {item.claimSupported}
                            </span>
                          </div>
                        </div>

                        {/* Clickable External Source Link */}
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0284C7] bg-sky-50 hover:bg-sky-100 transition-colors whitespace-nowrap self-start md:self-center shrink-0 border border-sky-100"
                        >
                          <span>Open Source</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Verification Guarantee Box */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-stone-200 flex items-start gap-4 text-xs text-slate-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider">
              Verification &amp; Academic Integrity Guarantee
            </h4>
            <p className="leading-relaxed">
              In strict accordance with project guidelines, all links preserve the original URLs provided by the Philippine Information Agency, UNESCO World Heritage Centre, Department of Environment and Natural Resources, Provincial Governments of Surigao del Sur and Ilocos Sur, and accredited cultural researchers. No authors or publication dates were fabricated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
