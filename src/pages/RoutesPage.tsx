import React from 'react';
import { Link } from 'react-router-dom';
import { POPULAR_ROUTES } from '../data/routes';
import { CyclingVisualCard } from '../components/CyclingVisualCard';
import { MapPin, Compass, AlertTriangle, ArrowRight, Mountain, Sun, Shield } from 'lucide-react';

export const RoutesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12 overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-cyan-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>SAHYADRI TOPOGRAPHY & CYCLING DESTINATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-neutral-100 uppercase leading-none mb-4">
            Routes & Destinations
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            Maharashtra’s Sahyadri Western Ghats offer some of the most dramatic cycling terrain in Asia. Explore our route hubs, elevation overviews, best seasons, and trail cautions.
          </p>
        </div>
      </div>

      {/* Important Safety & Suggestion Notice */}
      <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-start gap-3.5 text-xs text-neutral-400">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-neutral-200 block mb-1">
            Route Verification Notice:
          </strong>
          This directory distinguishes routes officially organized and supported by Pedal Tribe India from suggested regional destinations and touring inspiration. Mountain roads, weather conditions, and road surfaces change rapidly in the Western Ghats; always verify local conditions before attempting unsupported solo rides.
        </div>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {POPULAR_ROUTES.map((route) => (
          <div
            key={route.id}
            className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-colors"
          >
            <div>
              <CyclingVisualCard
                theme={route.svgRouteMapType}
                title={route.title}
                category={route.region}
                badge={route.difficulty}
                aspectRatio="16:9"
              />

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 mb-3 gap-2">
                  <span className="text-lime-400 font-bold">{route.distanceRange}</span>
                  <span className="text-cyan-400 font-semibold">{route.typicalElevation}</span>
                  <span className="text-neutral-500">{route.state}</span>
                </div>

                <h3 className="text-2xl font-bold font-display text-neutral-100 group-hover:text-lime-300 transition-colors mb-2">
                  {route.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {route.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 border-t border-neutral-800 pt-4 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Scenery & Highlights:
                  </span>
                  {route.sceneryHighlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-1 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Season & Caution */}
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-1.5 text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Best Season: <strong className="text-neutral-200">{route.bestSeason}</strong></span>
                  </div>
                  <div className="text-[11px] text-neutral-500 leading-relaxed">
                    Caution: {route.cautionNotes}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                to="/rides"
                className="w-full py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>Find Upcoming Rides on This Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
