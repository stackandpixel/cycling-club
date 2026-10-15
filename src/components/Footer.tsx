import React from 'react';
import { Link } from 'react-router-dom';
import { CLUB_CONFIG } from '../config/clubConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ShieldCheck, MapPin, Instagram, Globe, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-sm">
      {/* Top Banner Ticker */}
      <div className="bg-neutral-900/60 border-b border-neutral-800/60 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <strong className="text-lime-400 uppercase tracking-widest font-mono">
              Rollout Hub:
            </strong>
            <span>{CLUB_CONFIG.hubLocation}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-neutral-500 hidden md:inline">Ride WhatsApp Desk:</span>
            <a
              href={buildWhatsAppUrl(CLUB_CONFIG.whatsapp.defaultMessage)}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-lime-400 hover:text-lime-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {CLUB_CONFIG.whatsapp.displayNumber}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lime-400">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-2 fill-none">
                  <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <path d="M7 16 L12 8 L17 16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-neutral-100 font-bold uppercase">
                  {CLUB_CONFIG.name}
                </span>
                <p className="text-[10px] text-lime-400 font-mono tracking-widest uppercase">
                  {CLUB_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              {CLUB_CONFIG.shortDescription} Founded to unite cyclists across Maharashtra—from dawn road pacelines and gravel adventures around Mulshi to mountain singletrack on Vetal Tekdi.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLUB_CONFIG.social.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-lime-400 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <Instagram className="w-4 h-4" />
                {CLUB_CONFIG.social.instagramHandle}
              </a>

              <a
                href={CLUB_CONFIG.social.stravaUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <Globe className="w-4 h-4" />
                Strava Club
              </a>
            </div>
          </div>

          {/* Quick Rides & Routes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4 font-mono">
              Rides & Routes
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/rides" className="hover:text-lime-400 transition-colors">
                  All Upcoming Rides (12)
                </Link>
              </li>
              <li>
                <Link to="/rides/western-ghats-monsoon-escapade" className="hover:text-lime-400 transition-colors">
                  Tamhini Ghat 118K
                </Link>
              </li>
              <li>
                <Link to="/rides/sinhagad-fort-dawn-breaker" className="hover:text-lime-400 transition-colors">
                  Sinhagad Fort Climb 52K
                </Link>
              </li>
              <li>
                <Link to="/rides/lonavala-old-highway-paceline" className="hover:text-lime-400 transition-colors">
                  Lonavala Highway 124K
                </Link>
              </li>
              <li>
                <Link to="/routes" className="hover:text-lime-400 transition-colors">
                  Maharashtra Route Hubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Club */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4 font-mono">
              Community
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/membership" className="hover:text-lime-400 transition-colors">
                  Membership Tiers
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-lime-400 transition-colors">
                  Challenges & Workshops
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-lime-400 transition-colors">
                  Rider Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lime-400 transition-colors">
                  About Our Tribe
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-lime-400 transition-colors">
                  Safety Mandate & Checklist
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Connect & Hub */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4 font-mono">
              Pune Riding Hub
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>
                  Senapati Bapat Road & Chandani Chowk, Pune, Maharashtra 411016
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 pt-1">
                Weekend rollouts depart strictly between 5:30 AM – 6:15 AM.
              </p>
              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl(CLUB_CONFIG.whatsapp.defaultMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition-colors font-medium text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Safety Notice */}
        <div className="mt-12 pt-8 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px] text-neutral-500 leading-relaxed">
          <div className="bg-neutral-900/40 border border-neutral-900 p-4 rounded-xl">
            <strong className="text-neutral-400 block mb-1">
              Sample Data & Demonstration Disclaimer:
            </strong>
            {CLUB_CONFIG.disclaimer.sampleDataNote} Pedal Tribe India is a fictional community website created to showcase modern sports web design. Member registrations and enquiries are handled directly via WhatsApp with zero automated database persistence.
          </div>

          <div className="bg-neutral-900/40 border border-neutral-900 p-4 rounded-xl">
            <strong className="text-neutral-400 block mb-1">
              Rider Safety & Responsibility Notice:
            </strong>
            {CLUB_CONFIG.disclaimer.safetyNote} Cyclists are individually responsible for their equipment readiness, route reconnaissance, road traffic compliance, and personal health.
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Pedal Tribe India. Built for Pune & Maharashtra Cyclists.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/safety" className="hover:text-neutral-300">Safety Standards</Link>
            <span className="text-neutral-700">·</span>
            <Link to="/membership" className="hover:text-neutral-300">Code of Conduct</Link>
            <span className="text-neutral-700">·</span>
            <span>Static-friendly sports platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
