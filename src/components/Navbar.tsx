import React, { useState } from 'react';
import { PearlLogo } from './PearlLogo';
import { Menu, X, Compass } from 'lucide-react';

export type PageView = 'home' | 'about' | 'stories' | 'team' | 'references';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, storySlug?: string) => void;
  onExploreClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onExploreClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Stories', page: 'stories' },
    { label: 'Team', page: 'team' },
    { label: 'References', page: 'references' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark with Pearl Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          >
            <PearlLogo size="md" showText={true} />
          </button>

          {/* Zone 2: Desktop 4-5 Concise Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-2 text-xs uppercase tracking-[0.16em] font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#0284C7]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Desktop) & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onExploreClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Map</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FBF9F5] px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-sky-50 text-[#0284C7]'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#0284C7]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200">
            <button
              type="button"
              onClick={() => {
                onExploreClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-center text-white bg-[#0284C7] rounded-lg shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Explore The Philippines</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
