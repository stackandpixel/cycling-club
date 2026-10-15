import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, ShieldAlert, Sparkles } from 'lucide-react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'This Weekend’s Ride Schedule',
      subtitle: 'Ask about starting time and routes',
      message: 'Hi Pedal Tribe! What group rides are scheduled for this coming weekend in Pune?',
    },
    {
      title: 'Beginner Riding Advice',
      subtitle: 'First time joining a group ride',
      message: 'Hello! I am a beginner cyclist in Pune and would love to join your Saturday breakfast or beginner ride.',
    },
    {
      title: 'Club Membership & Group Chat',
      subtitle: 'Connect with Pune cycling community',
      message: 'Hi Pedal Tribe Team, I would like to join the official club community and WhatsApp announcements group.',
    },
  ];

  const handleLaunch = (msg: string) => {
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-5 text-neutral-100 animate-in fade-in slide-in-from-bottom-4 duration-200 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h4 className="text-sm font-bold text-neutral-100">{CLUB_CONFIG.name}</h4>
                <p className="text-[11px] text-neutral-400">Pune Ride Desk · Active on WhatsApp</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
            Have questions about ride pacing, bicycle suitability, or weekend routes? Chat with our volunteer ride marshals:
          </p>

          <div className="space-y-2 mb-4">
            {quickOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleLaunch(opt.message)}
                className="w-full text-left p-2.5 rounded-xl bg-neutral-950/80 hover:bg-neutral-800/80 border border-neutral-800 hover:border-lime-400/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-semibold text-neutral-200 group-hover:text-lime-300 transition-colors">
                    {opt.title}
                  </div>
                  <div className="text-[11px] text-neutral-400">{opt.subtitle}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>

          <button
            onClick={() => handleLaunch(CLUB_CONFIG.whatsapp.defaultMessage)}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-neutral-950" />
            Open Custom WhatsApp Chat
          </button>

          <p className="text-[10px] text-neutral-500 text-center mt-2.5">
            Opens official WhatsApp · Illustrative community demo
          </p>
        </div>
      )}

      {/* Floating Circular Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Pedal Tribe on WhatsApp"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping -z-10" />

        {/* Unread badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-lime-400 text-neutral-950 text-[11px] font-black flex items-center justify-center border-2 border-neutral-950 shadow-sm">
          1
        </span>

        <MessageCircle className="w-6 h-6 fill-neutral-950" />
      </button>
    </div>
  );
};
