import React from 'react';
import { Link } from 'react-router-dom';
import type { Ride } from '../types/ride';
import { CyclingVisualCard } from './CyclingVisualCard';
import { MapPin, Clock, Gauge, TrendingUp, Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import { getRideWhatsAppUrl } from '../utils/whatsapp';

interface RideCardProps {
  ride: Ride;
  onQuickJoin: (rideId: string) => void;
}

export const RideCard: React.FC<RideCardProps> = ({ ride, onQuickJoin }) => {
  const getDifficultyBadge = (diff: Ride['difficulty']) => {
    switch (diff) {
      case 'Beginner':
        return 'bg-emerald-400 text-neutral-950';
      case 'Intermediate':
        return 'bg-cyan-400 text-neutral-950';
      case 'Advanced':
        return 'bg-amber-400 text-neutral-950';
      case 'Epic':
        return 'bg-rose-500 text-white';
      default:
        return 'bg-neutral-800 text-neutral-200';
    }
  };

  return (
    <div className="flex flex-col bg-neutral-900/90 border border-neutral-800/90 rounded-2xl overflow-hidden hover:border-lime-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-lime-400/5 group">
      {/* Visual Cover */}
      <div className="relative">
        <CyclingVisualCard
          theme={ride.coverGraphic}
          title={ride.title}
          category={ride.category}
          aspectRatio="16:9"
        />

        {/* Floating difficulty badge */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider shadow-md ${getDifficultyBadge(
              ride.difficulty
            )}`}
          >
            {ride.difficulty}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Schedule Pill */}
          <div className="flex items-center gap-1.5 text-xs text-lime-400 font-mono mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{ride.scheduledDate}</span>
            <span className="text-neutral-600">·</span>
            <span>{ride.meetingTime.split('(')[0]}</span>
          </div>

          {/* Title */}
          <Link to={`/rides/${ride.slug}`}>
            <h3 className="text-xl font-bold font-display tracking-tight text-neutral-100 group-hover:text-lime-300 transition-colors line-clamp-1">
              {ride.title}
            </h3>
          </Link>
          <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
            {ride.summary}
          </p>

          {/* Stats Bento Grid */}
          <div className="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-center">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-mono">Distance</span>
              <span className="text-base font-extrabold text-neutral-100 font-display tracking-wide">{ride.distanceKm} <span className="text-xs font-normal text-neutral-400">km</span></span>
            </div>

            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-mono">Elevation</span>
              <span className="text-base font-extrabold text-neutral-100 font-display tracking-wide">+{ride.elevationGainM} <span className="text-xs font-normal text-neutral-400">m</span></span>
            </div>

            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-mono">Duration</span>
              <span className="text-sm font-bold text-neutral-200 mt-0.5 block">{ride.estimatedDuration.split(' ')[0]}h+</span>
            </div>
          </div>

          {/* Starting Location */}
          <div className="space-y-1.5 text-xs text-neutral-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1 text-neutral-300">{ride.startingLocation}</span>
            </div>
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-neutral-500">{ride.terrain}</span>
              <span className="font-semibold text-lime-400/90">{ride.feeNote}</span>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center gap-2">
          <Link
            to={`/rides/${ride.slug}`}
            className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Route Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => onQuickJoin(ride.id)}
            className="p-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 font-bold transition-all shadow-md active:scale-95"
            title="RSVP via WhatsApp"
            aria-label={`Register for ${ride.title}`}
          >
            <MessageSquare className="w-4 h-4 fill-neutral-950" />
          </button>
        </div>
      </div>
    </div>
  );
};
