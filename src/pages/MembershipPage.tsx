import React from 'react';
import { MEMBERSHIP_TIERS } from '../data/memberships';
import { CLUB_CONFIG } from '../config/clubConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { CheckCircle2, ShieldCheck, Users, Sparkles, MessageSquare, Heart, Award } from 'lucide-react';

export const MembershipPage: React.FC = () => {
  const codeOfConduct = [
    {
      title: 'Safety is Sacred',
      desc: 'Certified helmets and working lights are strictly non-negotiable on every single group ride.',
    },
    {
      title: 'No-Drop Respect',
      desc: 'Faster riders help draft, pace, and encourage slower riders. We roll out as a pack and finish as a pack.',
    },
    {
      title: 'Traffic Law Compliance',
      desc: 'We are ambassadors of cycling. We stop at red lights, respect pedestrians, and yield appropriately.',
    },
    {
      title: 'Leave No Trace',
      desc: 'Gel wrappers, energy bars, and punctured tubes must never be discarded on Western Ghats trails or highways.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-14 text-center overflow-hidden">
        <div className="absolute inset-0 bg-topo-pattern opacity-20 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-lime-400">
            <Users className="w-3.5 h-3.5" />
            <span>JOIN THE TRIBE · PUNE COMMUNITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-neutral-100 uppercase leading-none">
            Your Next Ride Starts Here
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light max-w-2xl mx-auto">
            Become part of Pune’s most vibrant grassroots cycling movement. Discover secret Sahyadri routes, upgrade your skills, and make lifelong friends on two wheels.
          </p>

          <p className="text-xs font-mono text-neutral-500 pt-2">
            Free community enrollment · No subscriptions · Direct WhatsApp onboarding
          </p>
        </div>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MEMBERSHIP_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
              tier.isPopular
                ? 'bg-neutral-900 border-2 border-lime-400 shadow-2xl shadow-lime-400/10'
                : 'bg-neutral-950/90 border border-neutral-800'
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
              <h3 className="text-3xl font-bold font-display text-neutral-100 mb-2">
                {tier.priceNote}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                {tier.tagline}
              </p>

              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 mb-6 font-mono">
                <span className="text-[10px] text-neutral-500 uppercase block mb-0.5">Ideal For:</span>
                {tier.idealFor}
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800/80 mb-8">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  Member Benefits:
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
                `Hello Pedal Tribe India! I would like to join the club under the *${tier.name}* tier. Please let me know how to get connected to the Pune community group!`
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

      {/* Club Code of Conduct */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 md:p-12 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold block mb-1">
            Community Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-neutral-100 uppercase">
            The Pedal Tribe Rider Pledge
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
            Every member of Pedal Tribe India agrees to uphold these four core principles on road, gravel, and trail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codeOfConduct.map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-2">
              <span className="w-7 h-7 rounded-lg bg-neutral-900 text-lime-400 flex items-center justify-center text-xs font-mono font-bold">
                0{i + 1}
              </span>
              <h4 className="text-sm font-bold text-neutral-200">{item.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
