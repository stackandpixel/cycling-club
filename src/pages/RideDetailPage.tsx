import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SAMPLE_RIDES } from '../data/rides';
import { RouteElevationChart } from '../components/RouteElevationChart';
import { CyclingVisualCard } from '../components/CyclingVisualCard';
import { getRideWhatsAppUrl } from '../utils/whatsapp';
import { CLUB_CONFIG } from '../config/clubConfig';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Gauge,
  TrendingUp,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Coffee,
  Wrench,
  ShieldAlert,
  MessageSquare,
  Share2,
  Copy,
  Check,
} from 'lucide-react';

interface RideDetailPageProps {
  onOpenJoinModal: (rideId: string) => void;
}

export const RideDetailPage: React.FC<RideDetailPageProps> = ({ onOpenJoinModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [checkedEquip, setCheckedEquip] = useState<Record<number, boolean>>({});

  const ride = SAMPLE_RIDES.find((r) => r.slug === slug || r.id === slug) || SAMPLE_RIDES[0];

  const toggleCheck = (idx: number) => {
    setCheckedEquip((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-10">
      {/* Back button and breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          to="/rides"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 hover:text-lime-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Rides</span>
        </Link>

        <button
          onClick={handleShare}
          className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono"
          title="Copy link to ride"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Share2 className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{copied ? 'Copied URL!' : 'Share Ride'}</span>
        </button>
      </div>

      {/* Hero Header Card */}
      <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
        <div className="relative aspect-[21/9] min-h-[260px] md:min-h-[340px] w-full bg-neutral-950">
          <CyclingVisualCard
            theme={ride.coverGraphic}
            title={ride.title}
            category={ride.category}
            badge={ride.difficulty}
            aspectRatio="banner"
            className="w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none" />

          {/* Overlay Content */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-md bg-lime-400 text-neutral-950 text-xs font-black uppercase tracking-wider">
                {ride.difficulty} Difficulty
              </span>
              <span className="px-3 py-1 rounded-md bg-neutral-900/90 text-neutral-200 border border-neutral-700 text-xs font-mono">
                {ride.category}
              </span>
              <span className="px-3 py-1 rounded-md bg-neutral-900/90 text-lime-400 border border-neutral-700 text-xs font-mono">
                {ride.feeNote}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-neutral-100 uppercase">
              {ride.title}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 mt-1 max-w-2xl font-light">
              {ride.subtitle}
            </p>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="bg-neutral-950 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-4 divide-x divide-neutral-900 text-center py-4 px-4">
          <div>
            <span className="text-[10px] font-mono uppercase text-neutral-500 block">Distance</span>
            <span className="text-2xl font-black font-display text-neutral-100">{ride.distanceKm} <span className="text-sm font-normal text-neutral-400">km</span></span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase text-neutral-500 block">Elevation Gain</span>
            <span className="text-2xl font-black font-display text-lime-400">+{ride.elevationGainM} <span className="text-sm font-normal text-neutral-400">m</span></span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase text-neutral-500 block">Duration</span>
            <span className="text-xl font-bold font-display text-neutral-200 mt-0.5 block">{ride.estimatedDuration}</span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase text-neutral-500 block">Pace Guide</span>
            <span className="text-xs font-bold text-neutral-200 mt-1 block px-2 line-clamp-1">{ride.paceGuide}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Details vs Right Sticky RSVP Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Interactive Elevation Profile */}
          <div>
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-neutral-100 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-lime-400" />
              <span>Route Topography & Elevation</span>
            </h3>
            <RouteElevationChart
              profile={ride.elevationProfile}
              distanceKm={ride.distanceKm}
              elevationGainM={ride.elevationGainM}
              accentColor={ride.accentColor}
            />
          </div>

          {/* Ride Overview */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-neutral-100">
              Ride Overview
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {ride.overview}
            </p>

            <div className="pt-4 border-t border-neutral-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Key Route Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ride.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Meeting Point & Itinerary */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-neutral-100 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-lime-400" />
              <span>Meeting Point & Itinerary</span>
            </h3>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 space-y-2">
              <div className="flex items-center justify-between text-neutral-400 font-mono">
                <span>Start: <strong className="text-neutral-100">{ride.startingLocation}</strong></span>
                <span className="text-lime-400 font-bold">{ride.meetingTime}</span>
              </div>
              <p className="leading-relaxed">{ride.meetingInstructions}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Route Corridor:
              </h4>
              <p className="text-xs font-mono text-neutral-300 bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 leading-relaxed">
                {ride.routeDescription}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Terrain: <strong className="text-neutral-200">{ride.terrain}</strong></span>
              <span>Finish Point: <strong className="text-neutral-200">{ride.endLocation}</strong></span>
            </div>
          </div>

          {/* Interactive Equipment Checklist */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-neutral-100 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-lime-400" />
                <span>Required Rider Checklist</span>
              </h3>
              <span className="text-[11px] font-mono text-neutral-500">
                Tap to check off
              </span>
            </div>

            <div className="space-y-2">
              {ride.requiredEquipment.map((item, idx) => {
                const isChecked = !!checkedEquip[idx];
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleCheck(idx)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 text-xs ${
                      isChecked
                        ? 'bg-lime-400/10 border-lime-400/40 text-neutral-200 line-through'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                        isChecked ? 'bg-lime-400 border-lime-400 text-neutral-950' : 'border-neutral-600'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Safety Protocols & Break Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Safety Checklist */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-200 flex items-center gap-2 font-mono">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Safety Guidelines</span>
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                {ride.safetyChecklist.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Refreshments Info */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-200 flex items-center gap-2 font-mono">
                <Coffee className="w-4 h-4 text-cyan-400" />
                <span>Hydration & Breakfast</span>
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {ride.refreshmentInfo}
              </p>
              <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-800">
                Experience Requirement: <span className="text-neutral-300">{ride.recommendedExperience}</span>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-neutral-100 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-lime-400" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="space-y-3">
              {ride.faqs.map((faq, i) => (
                <div key={i} className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                  <h5 className="text-xs font-bold text-neutral-200 mb-1">{faq.question}</h5>
                  <p className="text-xs text-neutral-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sticky Column (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-7 shadow-2xl space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-lime-400 font-bold block mb-1">
                Registration Status
              </span>
              <h3 className="text-2xl font-bold font-display text-neutral-100">
                Join This Ride
              </h3>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Roll out with Pune's friendliest pack. Connect directly with our ride coordinator on WhatsApp to reserve your slot.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400 font-mono">
                <span>Date:</span>
                <span className="text-neutral-200 font-semibold">{ride.scheduledDate}</span>
              </div>
              <div className="flex justify-between text-neutral-400 font-mono">
                <span>Assembly:</span>
                <span className="text-lime-400 font-semibold">{ride.meetingTime.split('(')[0]}</span>
              </div>
              <div className="flex justify-between text-neutral-400 font-mono">
                <span>Support Fee:</span>
                <span className="text-neutral-200 font-semibold">{ride.feeNote}</span>
              </div>
              <div className="flex justify-between text-neutral-400 font-mono">
                <span>WhatsApp Desk:</span>
                <span className="text-neutral-200 font-semibold">{CLUB_CONFIG.whatsapp.displayNumber}</span>
              </div>
            </div>

            {/* Registration Actions */}
            <div className="space-y-3">
              <button
                onClick={() => onOpenJoinModal(ride.id)}
                className="w-full py-3.5 px-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-neutral-950" />
                <span>Fill Rider Briefing & RSVP</span>
              </button>

              <a
                href={getRideWhatsAppUrl(ride)}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Disclaimer Callout */}
            <div className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800/80 text-[11px] text-neutral-500 leading-relaxed">
              <strong className="text-neutral-400 block mb-0.5">Illustrative Demo Fixture:</strong>
              Dates, fees, and GPS routes are sample content. Please verify actual rollout times and gear checklist with the ride marshals prior to traveling.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
