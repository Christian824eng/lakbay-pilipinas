import React, { useState, useEffect } from 'react';
import { Navbar, PageView } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { StoriesPage } from './pages/StoriesPage';
import { TeamPage } from './pages/TeamPage';
import { ReferencesPage } from './pages/ReferencesPage';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedStorySlug, setSelectedStorySlug] = useState<string>('vigan-city');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync state from URL hash on load and when hash changes
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      if (!hash) return;

      if (hash.startsWith('stories/')) {
        const slug = hash.replace('stories/', '');
        setCurrentPage('stories');
        setSelectedStorySlug(slug);
      } else if (hash === 'stories') {
        setCurrentPage('stories');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'team') {
        setCurrentPage('team');
      } else if (hash === 'references') {
        setCurrentPage('references');
      } else if (hash === 'map') {
        setCurrentPage('home');
        setTimeout(() => {
          document.getElementById('philippine-map')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash === 'home') {
        setCurrentPage('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageView, storySlug?: string) => {
    setCurrentPage(page);
    if (storySlug) {
      setSelectedStorySlug(storySlug);
      window.location.hash = `#stories/${storySlug}`;
    } else {
      window.location.hash = `#${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    window.location.hash = '#map';
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const mapEl = document.getElementById('philippine-map');
        if (mapEl) {
          mapEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const mapEl = document.getElementById('philippine-map');
      if (mapEl) {
        mapEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#0F172A] selection:bg-[#0284C7] selection:text-white">
      {/* Universal Top Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onExploreClick={handleExploreClick}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'stories' && (
          <StoriesPage
            initialStorySlug={selectedStorySlug}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'team' && (
          <TeamPage />
        )}
        {currentPage === 'references' && (
          <ReferencesPage />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#0F172A] hover:bg-[#0284C7] text-white flex items-center justify-center shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
