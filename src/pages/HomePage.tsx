import React from 'react';
import { Link } from 'react-router-dom';
import { CLUB_CONFIG } from '../config/clubConfig';
import { SAMPLE_RIDES } from '../data/rides';
import { POPULAR_ROUTES } from '../data/routes';
import { CLUB_EVENTS } from '../data/events';
import { MEMBERSHIP_TIERS } from '../data/memberships';
import { SAMPLE_TESTIMONIALS } from '../data/testimonials';
import { RideCard } from '../components/RideCard';
import { CyclingVisualCard } from '../components/CyclingVisualCard';
import { InstagramShowcase } from '../components/InstagramShowcase';
import {
  ArrowRight,
  MapPin,
  Calendar,
  ShieldCheck,
  TrendingUp,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
  Zap,
  MessageSquare,
  Award,
} from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface HomePageProps {
  onOpenJoinModal: (rideId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenJoinModal }) => {
  const featuredRides = SAMPLE_RIDES.filter((r) => r.isFeatured).slice(0, 4);

  const cyclingCategories = [
    {
      id: 'road',
      title: 'Road Cycling',
      desc: 'Pacelines, smooth highway tarmac, and high-cadence aerodynamic speed.',
      graphicTheme: 'lonavala-highway',
      filterParam: 'Road Cycling',
      stat: '28-32 km/h',
    },
    {
      id: 'mtb',
      title: 'Mountain Biking',
      desc: 'Vetal Tekdi rock gardens, rugged forest singletrack, and technical drops.',
      graphicTheme: 'vetal-mtb',
      filterParam: 'Mountain Biking',
      stat: 'Forest Trails',
    },
    {
      id: 'gravel',
      title: 'Gravel Adventures',
      desc: 'Mulshi Lake unpaved backroads, dirt fire tracks, and scenic countryside paths.',
      graphicTheme: 'mulshi-gravel',
      filterParam: 'Gravel Adventures',
      stat: '38c+ Rubber',
    },
    {
      id: 'beginner',
      title: 'Beginner Rides',
      desc: 'Supportive no-drop weekly group rolls designed to build pack confidence.',
      graphicTheme: 'sunrise-city',
      filterParam: 'Beginner Rides',
      stat: 'No-Drop Pace',
    },
    {
      id: 'endurance',
      title: 'Endurance & Ghats',
      desc: 'Tamhini, Bhor, and Varandha Ghat climbs scaling over 1,200m elevation.',
      graphicTheme: 'western-ghats',
      filterParam: 'Endurance Cycling',
      stat: '100+ km Epics',
    },
    {
      id: 'social',
      title: 'Social & Breakfast',
      desc: 'Relaxed Saturday morning recovery rides ending with legendary Pune Bun Maska.',
      graphicTheme: 'breakfast-social',
      filterParam: 'Social & Breakfast',
      stat: 'Post-Ride Chai',
    },
    {
      id: 'scenic',
      title: 'Scenic Countryside',
      desc: 'Panshet and Varasgaon dam backwaters with tranquil lake breezes.',
      graphicTheme: 'panshet-cruise',
      filterParam: 'Scenic Countryside',
      stat: 'Lake Views',
    },
    {
      id: 'challenges',
      title: 'Cycling Challenges',
      desc: '160-km Imperial Century rides, KOM climbing trials, and charity drives.',
      graphicTheme: 'sinhagad-climb',
      filterParam: 'Cycling Challenges',
      stat: 'Strava Badges',
    },
  ];

  return (
    <div className="space-y-20 md:space-y-28">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-neutral-900 bg-neutral-950">
        {/* Ambient Topographic Gradient Background */}
        <div className="absolute inset-0 bg-topo-pattern opacity-30 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Vector Backdrop with Sahyadri Sunrise Silhouette */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg viewBox="0 0 1440 600" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#84cc16" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            {/* Sahyadri Ghat mountain ridges */}
            <path d="M0,280 Q320,160 640,240 T1280,180 L1440,220 L1440,600 L0,600 Z" fill="#171717" opacity="0.6" />
            <path d="M0,340 Q400,240 800,320 T1440,260 L1440,600 L0,600 Z" fill="url(#heroGradient)" />
            {/* Road ribbon */}
            <path
              d="M-50,560 C400,540 600,420 950,460 C1200,490 1350,420 1500,410"
              stroke="#ccff00"
              strokeWidth="4"
              strokeDasharray="16 12"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-7">
              {/* Location Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono font-bold tracking-widest text-lime-400 mb-6 backdrop-blur-md uppercase">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                CYCLING COMMUNITY · PUNE, INDIA
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-neutral-100 uppercase leading-[0.92] mb-6">
                FIND YOUR PACE.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-200">
                  FIND YOUR PEOPLE.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed mb-8 max-w-2xl">
                From your first group ride through leafy Pune avenues to grueling Western Ghats endurance milestones, discover a grassroots cycling brotherhood that keeps you moving forward.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/rides"
                  className="py-4 px-8 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 font-extrabold text-sm uppercase tracking-wider transition-all transform active:scale-95 shadow-xl shadow-lime-400/20 flex items-center justify-center gap-2.5"
                >
                  <span>Explore Upcoming Rides</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenJoinModal()}
                  className="py-4 px-8 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-100 border border-neutral-700 font-bold text-sm uppercase tracking-wider transition-all hover:border-lime-400/60 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-lime-400" />
                  <span>Join the Tribe (WhatsApp)</span>
                </button>
              </div>

              {/* Community Feature Highlights */}
              <div className="mt-10 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>No-Drop Sweepers on Weekend Rolls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mobile Support SUV on Ghats Epics</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Granularity Indian Cycling Group Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-neutral-900/90 border border-neutral-800 p-3 shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-lime-400/40 transition-colors">
                <CyclingVisualCard
                  theme="western-ghats"
                  title="Tamhini Ghat Dawn Peloton · Western Ghats, Pune"
                  category="Live Squad Formation"
                  badge="14 Cyclists"
                  aspectRatio="4:3"
                  showTelemetry={true}
                />

                {/* Granular Squad Telemetry HUD */}
                <div className="mt-3 p-3.5 rounded-2xl bg-neutral-950/95 border border-neutral-800/90 grid grid-cols-3 gap-2 text-center font-mono">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase block">Squad Pace</span>
                    <span className="text-sm font-bold text-lime-400">28.4 km/h</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase block">Gradient</span>
                    <span className="text-sm font-bold text-neutral-100">+4.8% Climb</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase block">Altitude</span>
                    <span className="text-sm font-bold text-cyan-400">740m ASL</span>
                  </div>
                </div>

                <div className="mt-2 px-2 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Double Paceline Rotation
                  </span>
                  <span className="text-lime-400 font-semibold">Mulshi Rim Road</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-neutral-950/90 border-t border-neutral-900 py-4 px-4 backdrop-blur-md">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-x divide-neutral-900">
            <div>
              <span className="text-xl sm:text-2xl font-bold font-display text-lime-400 tracking-wider">
                {CLUB_CONFIG.metrics.sampleRidesConducted}
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono uppercase mt-0.5">
                Rides Conducted
              </span>
            </div>

            <div>
              <span className="text-xl sm:text-2xl font-bold font-display text-neutral-100 tracking-wider">
                {CLUB_CONFIG.metrics.communityCyclists}
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono uppercase mt-0.5">
                Pune Cyclists Connected
              </span>
            </div>

            <div>
              <span className="text-xl sm:text-2xl font-bold font-display text-cyan-400 tracking-wider">
                {CLUB_CONFIG.metrics.routesMapped}
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono uppercase mt-0.5">
                Sahyadri Routes Mapped
              </span>
            </div>

            <div>
              <span className="text-xl sm:text-2xl font-bold font-display text-amber-400 tracking-wider">
                {CLUB_CONFIG.metrics.elevationClimbedKm}
              </span>
              <span className="text-[10px] text-neutral-400 block font-mono uppercase mt-0.5">
                Elevation Gained (Meters)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMMUNITY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 p-2 shadow-2xl">
              <CyclingVisualCard
                theme="western-ghats"
                title="Sahyadri Morning Rollout"
                category="Pune Pelotons"
                aspectRatio="4:3"
              />
              <div className="p-4 bg-neutral-950/80 rounded-xl mt-2 border border-neutral-800/80">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1">
                  <span>Pune Hub · Senapati Bapat Road</span>
                  <span className="text-lime-400 font-bold">5:45 AM Briefing</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Every ride opens with helmet checks, hand-signal rehearsals, and route pacing guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-lime-400">
              <Users className="w-3.5 h-3.5" />
              <span>THE PEDAL TRIBE STORY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-neutral-100 uppercase leading-[0.95]">
              More Than Miles. <br />
              <span className="text-lime-400">It's Community.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              We started as five Pune cyclists meeting at Chandani Chowk on crisp monsoon dawns to conquer the switchbacks of Mulshi. Today, Pedal Tribe India has grown into a bustling, welcoming collective of engineers, college students, doctors, endurance athletes, and beginner commuters.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Whether you are gearing up for your very first 30-km city roll or preparing for a grueling 200-km Sahyadri Brevet, our tribe exists so no cyclist ever has to ride alone. We cheer every summit, change every flat tire together, and celebrate every finish line over steaming cups of cutting chai.
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <span className="text-xs font-bold text-neutral-200 block mb-0.5">Strictly No-Drop</span>
                <span className="text-[11px] text-neutral-400">Dedicated sweep riders guarantee nobody gets left behind.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <span className="text-xs font-bold text-neutral-200 block mb-0.5">Safety First Mandate</span>
                <span className="text-[11px] text-neutral-400">Mandatory certified helmets and day-running flashers.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <span className="text-xs font-bold text-neutral-200 block mb-0.5">Grassroots & Free</span>
                <span className="text-[11px] text-neutral-400">Community weekend rides have zero paywalls or dues.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="py-3 px-6 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-100 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Meet the Community</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/safety"
                className="text-xs font-semibold text-lime-400 hover:text-lime-300 underline underline-offset-4"
              >
                Read our Ride Safety Pledge →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UPCOMING GROUP RIDES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold">
                Weekend Schedule · Pune
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-neutral-100 uppercase">
              Upcoming Group Rides
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Choose your distance, pace, and terrain. Every ride features experienced captains and verified meeting coordinates.
            </p>
          </div>

          <Link
            to="/rides"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-lime-400 border border-neutral-800 font-bold text-xs uppercase tracking-wider transition-colors self-start md:self-auto"
          >
            <span>View All 12 Rides & Filter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Rides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRides.map((ride) => (
            <RideCard
              key={ride.id}
              ride={ride}
              onQuickJoin={(id) => onOpenJoinModal(id)}
            />
          ))}
        </div>
      </section>

      {/* 4. CYCLING DISCIPLINES & CATEGORIES */}
      <section className="bg-neutral-900/40 border-y border-neutral-900 py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold block mb-2">
              Discipline & Terrain
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-neutral-100 uppercase">
              Choose Your Cycling Style
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              From asphalt highway sprinters to dirt-loving trail shredders, Pedal Tribe hosts dedicated cohorts across every discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {cyclingCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/rides?category=${encodeURIComponent(cat.filterParam)}`}
                className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/90 hover:border-lime-400/50 p-5 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-lime-400/5"
              >
                <div>
                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-neutral-800 bg-neutral-900">
                    <CyclingVisualCard
                      theme={cat.graphicTheme}
                      title={cat.title}
                      aspectRatio="16:9"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-xl font-bold font-display text-neutral-100 group-hover:text-lime-300 transition-colors uppercase">
                      {cat.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-lime-400">
                      {cat.stat}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-lime-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Rides</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POPULAR ROUTES & DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2">
              Maharashtra Topography
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-neutral-100 uppercase">
              Routes & Destinations
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Curated Sahyadri destinations featuring verified elevation profiles, water points, and road conditions.
            </p>
          </div>

          <Link
            to="/routes"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-cyan-400 border border-neutral-800 font-bold text-xs uppercase tracking-wider transition-colors self-start md:self-auto"
          >
            <span>Explore All Route Hubs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POPULAR_ROUTES.slice(0, 3).map((route) => (
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

                <div className="p-5">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                    <span className="text-lime-400 font-bold">{route.distanceRange}</span>
                    <span>{route.typicalElevation}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-neutral-100 group-hover:text-lime-300 transition-colors mb-2">
                    {route.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {route.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-neutral-300 border-t border-neutral-800/80 pt-3">
                    <div className="text-[11px] font-mono uppercase text-neutral-500">Route Highlights:</div>
                    {route.sceneryHighlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to="/routes"
                  className="w-full py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-lime-400/50 text-neutral-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Route Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CLUB MEMBERSHIP TIERS */}
      <section className="bg-neutral-900/60 border-y border-neutral-900 py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold block mb-2">
              Join the Collective
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-neutral-100 uppercase">
              Your Next Ride Starts Here
            </h2>
            <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
              No complicated applications or hidden fees. We believe in open roads and shared adventures. Connect directly via WhatsApp to pick your tier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {MEMBERSHIP_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-neutral-900 border-2 border-lime-400 shadow-2xl shadow-lime-400/10'
                    : 'bg-neutral-950/80 border border-neutral-800'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-neutral-950 text-xs font-black uppercase tracking-wider shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    {tier.name}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-neutral-100 mb-2">
                    {tier.priceNote}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {tier.tagline}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-neutral-800/80 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      Included Privileges:
                    </span>
                    {tier.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={buildWhatsAppUrl(
                    `Hello Pedal Tribe! I am interested in joining as a *${tier.name}*. Could you please guide me on weekly rides and WhatsApp group access?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center ${
                    tier.isPopular
                      ? 'bg-lime-400 hover:bg-lime-300 text-neutral-950 shadow-lg shadow-lime-400/20'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{tier.actionText}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EVENTS & CHALLENGES TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
              Challenges & Workshops
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-neutral-100 uppercase">
              Events & Milestones
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Push your limits with monitored distance simulations, trailside repair workshops, and full moon night rides.
            </p>
          </div>

          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-neutral-800 font-bold text-xs uppercase tracking-wider transition-colors self-start md:self-auto"
          >
            <span>View All Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLUB_EVENTS.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold uppercase">
                    {event.badge}
                  </span>
                  <span className="text-neutral-400">{event.dateStr}</span>
                </div>

                <h3 className="text-xl font-bold font-display text-neutral-100 mb-2">
                  {event.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="space-y-1.5 text-xs text-neutral-300 border-t border-neutral-800/80 pt-3">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-lime-400" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-neutral-500 font-mono">{event.timeStr}</span>
                    <span className="text-lime-400 font-semibold">{event.fee}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-neutral-800/80">
                <a
                  href={buildWhatsAppUrl(
                    `Hi Pedal Tribe! I would like to enquire about registering for: *${event.title}* (${event.dateStr}).`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS & RIDE STORIES */}
      <section className="bg-neutral-900/30 border-y border-neutral-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold block mb-2">
                Rider Voices · Pune
              </span>
              <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-neutral-100 uppercase">
                Stories from the Saddle
              </h2>
              <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                Real reflections from cyclists who conquered their first paceline, ascended their first mountain pass, and found their tribe.
              </p>
            </div>

            <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-500 self-start md:self-auto">
              Illustrative Sample Testimonials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAMPLE_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-lime-400 mb-3">
                    <span className="px-2 py-0.5 rounded bg-lime-400/10 border border-lime-400/20 text-[10px] uppercase font-bold">
                      {t.tag}
                    </span>
                    <span className="text-neutral-500 text-[10px]">{t.memberSince}</span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed italic mb-6">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-display font-bold text-lime-400 text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-100">{t.name}</h4>
                    <p className="text-[11px] text-neutral-500 line-clamp-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM SHOWCASE */}
      <InstagramShowcase />

      {/* 10. QUICK ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-8 sm:p-12 lg:p-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-mono font-bold tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Ready for the Weekend?</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-neutral-100 uppercase">
              Join This Saturday's Rollout
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Tires inflated? Helmet ready? Send a quick WhatsApp hello to our ride coordinator to get this week's rollout point, GPX file, and pace grouping.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenJoinModal()}
                className="w-full sm:w-auto py-4 px-8 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-lime-400/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-neutral-950" />
                <span>Register for Ride (WhatsApp)</span>
              </button>

              <Link
                to="/safety"
                className="w-full sm:w-auto py-4 px-8 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                <span>Pre-Ride Safety Checklist</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
