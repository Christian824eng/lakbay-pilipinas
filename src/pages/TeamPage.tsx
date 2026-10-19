import React from 'react';
import { TEAM_MEMBERS } from '../data/teamData';
import { PearlLogo } from '../components/PearlLogo';
import { Award, Feather, Sparkles } from 'lucide-react';

export const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 md:py-20 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#0284C7] mb-3">
            <PearlLogo size="sm" />
            <span>The Editorial Collective</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight uppercase">
            Meet the Team Behind Perlas ng Silangan
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-serif italic">
            Seven members, one shared passion for showcasing the beauty and stories of the Philippines.
          </p>
        </div>

        {/* Seven Members Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {TEAM_MEMBERS.map((member) => {
            return (
              <div
                key={member.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-xs hover:shadow-md ${
                  member.isLeader
                    ? 'bg-gradient-to-b from-sky-50/80 to-white border-2 border-[#0284C7]/50 ring-4 ring-sky-100/50 lg:col-span-3 lg:max-w-2xl lg:mx-auto'
                    : 'bg-white border border-stone-200'
                }`}
              >
                <div>
                  {/* Top Bar with Pearl Logo Icon & Optional Leader Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    {/* Consistent Pearl Logo Icon as Mandated */}
                    <div className="p-2.5 rounded-2xl bg-[#EBF4FA] border border-sky-100 shadow-xs flex items-center justify-center">
                      <PearlLogo size={member.isLeader ? 'lg' : 'md'} />
                    </div>

                    {member.isLeader && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0284C7] text-white text-[11px] font-bold uppercase tracking-wider rounded-md shadow-xs">
                        <Award className="w-3.5 h-3.5 text-amber-300" />
                        TEAM LEADER
                      </span>
                    )}
                  </div>

                  {/* Name and Assigned Role */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight">
                    {member.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <Feather className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>

                  {/* Description of Responsibilities */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Card Base Accent */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="uppercase tracking-widest font-sans">
                    Perlas ng Silangan
                  </span>
                  <span className="font-serif italic">Writer &amp; Researcher</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaborative Credo Box */}
        <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488]">
            United by Heritage
          </span>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mt-2 mb-3">
            Voices of the Archipelago
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            From conducting literature reviews of UNESCO World Heritage decrees to analyzing regional culinary foodways and Indigenous traditions, our seven-member editorial team is dedicated to authentic, respectful Philippine travel storytelling.
          </p>
        </div>
      </div>
    </div>
  );
};
