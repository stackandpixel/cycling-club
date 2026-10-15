import React from 'react';
import { CLUB_EVENTS } from '../data/events';
import { CLUB_CONFIG } from '../config/clubConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Calendar, MapPin, Clock, Award, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

export const EventsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-amber-400 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>COMMUNITY CALENDAR · PUNE, MAHARASHTRA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-neutral-100 uppercase leading-none mb-4">
            Events & Challenges
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            Test your stamina on supported century milestones, polish your pack skills in hands-on clinics, or pedal for rural school students in our annual charity tour.
          </p>
        </div>
      </div>

      {/* Illustrative Notice */}
      <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-3">
        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
        <span>
          Event dates and registration tiers are published on an illustrative rolling basis. Please contact the ride desk via WhatsApp to verify current calendar openings.
        </span>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CLUB_EVENTS.map((event) => (
          <div
            key={event.id}
            className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 md:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold uppercase">
                  {event.badge}
                </span>
                <span className="text-neutral-400">{event.type}</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-neutral-100 mb-3">
                {event.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                {event.description}
              </p>

              <div className="space-y-2.5 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Calendar className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                  <span>{event.dateStr}</span>
                </div>

                <div className="flex items-center gap-2 text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{event.timeStr}</span>
                </div>

                <div className="flex items-center gap-2 text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>

                {event.distanceKm && (
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 font-mono text-[11px]">
                    <span className="text-neutral-500">Distance Target:</span>
                    <span className="text-lime-400 font-bold">{event.distanceKm} km</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
              <div className="text-xs">
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">Participation</span>
                <span className="text-neutral-200 font-semibold">{event.fee}</span>
              </div>

              <a
                href={buildWhatsAppUrl(
                  `Hi Pedal Tribe! I am interested in joining: *${event.title}* (${event.dateStr}). Could you please share registration availability?`
                )}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
