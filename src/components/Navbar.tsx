import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, Shield, Users, Calendar, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import { CLUB_CONFIG } from '../config/clubConfig';

interface NavbarProps {
  onOpenJoinModal: (rideId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Upcoming Rides', path: '/rides' },
    { label: 'Routes & Hubs', path: '/routes' },
    { label: 'Events & Challenges', path: '/events' },
    { label: 'Membership', path: '/membership' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Safety & Guides', path: '/safety' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-lime-400 group-hover:border-lime-400 transition-colors shadow-inner">
              {/* Stylized Chainring & Mountain Icon */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-2 fill-none">
                <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <path d="M7 16 L12 8 L17 16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl tracking-wider text-neutral-100 group-hover:text-lime-300 transition-colors font-bold uppercase">
                  Pedal Tribe
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-lime-400 text-neutral-950 font-bold uppercase tracking-widest">
                  India
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 tracking-widest uppercase font-mono">
                Pune · Sahyadri Cyclists
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    active
                      ? 'text-lime-400 bg-neutral-900 border border-neutral-800'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenJoinModal()}
              className="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all transform active:scale-95 shadow-md shadow-lime-400/20 flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-neutral-950" />
              Join the Club
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenJoinModal()}
              className="sm:hidden px-3 py-2 rounded-lg bg-lime-400 text-neutral-950 text-xs font-bold uppercase"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-1 text-sm animate-in fade-in duration-150">
          <div className="px-3 py-2 text-[11px] font-mono text-neutral-500 uppercase tracking-widest border-b border-neutral-900 mb-2 flex items-center justify-between">
            <span>Navigation Menu</span>
            <span className="text-lime-400">{CLUB_CONFIG.city}, MH</span>
          </div>

          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  active
                    ? 'bg-neutral-900 text-lime-400 border border-neutral-800'
                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </Link>
            );
          })}

          <div className="pt-4 border-t border-neutral-900 mt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-md"
            >
              Join the Club / RSVP for a Ride
            </button>
            <p className="text-[11px] text-neutral-500 text-center mt-2">
              WhatsApp: {CLUB_CONFIG.whatsapp.displayNumber}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
