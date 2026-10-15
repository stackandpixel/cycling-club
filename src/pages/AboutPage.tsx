import React from 'react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Users, Heart, Shield, Award, MapPin, ArrowRight, MessageSquare, Compass, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const leadershipValues = [
    {
      title: 'Grassroots Community',
      desc: 'We are cyclist-funded, volunteer-led, and driven purely by the love of Maharashtra roads and trails.',
    },
    {
      title: 'Inclusive No-Drop Culture',
      desc: 'Speed is arbitrary; camaraderie is permanent. Every cyclist who signs up finishes with the group.',
    },
    {
      title: 'Technical Growth & Safety',
      desc: 'We actively train riders on drafting aerodynamics, gear cadence, mechanical repairs, and road law.',
    },
    {
      title: 'Giving Back to the Ghats',
      desc: 'From trail clean-ups on Vetal Tekdi to donating bicycles for rural school children in Mulshi.',
    },
  ];

  const targetAudiences = [
    'College students looking for weekend outdoor adventure',
    'Working professionals escaping desk fatigue',
    'Endurance roadies preparing for 200k/300k Sahyadri Brevets',
    'Mountain bikers wanting to shred Vetal Tekdi singletrack',
    'Beginner riders seeking a friendly pack to build initial confidence',
    'Fitness enthusiasts cross-training for marathons or triathlons',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-14 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-lime-400 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>OUR STORY · PUNE, MAHARASHTRA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-neutral-100 uppercase leading-none mb-4">
            About Pedal Tribe India
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-light">
            Founded with a simple premise: cycling in India is infinitely safer, faster, and more unforgettable when we ride together.
          </p>
        </div>
      </div>

      {/* Story & Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-neutral-100 uppercase">
            From Five Friends at Chandani Chowk to Maharashtra’s Most Welcoming Pack
          </h2>

          <p className="text-sm text-neutral-300 leading-relaxed">
            In 2021, five weekend cyclists in Pune grew frustrated by solo highway rides—dodging fast traffic alone, dealing with punctures without tools, and missing out on the joy of group drafting. They agreed to meet every Saturday morning at 5:45 AM outside Pune University for a disciplined 35-km paceline followed by breakfast.
          </p>

          <p className="text-sm text-neutral-400 leading-relaxed">
            Word spread quickly among Hinjewadi software engineers, Fergusson College students, and veteran randonneurs. Within eighteen months, what began as a casual Saturday spin became <strong className="text-neutral-200">Pedal Tribe India</strong>—a multi-disciplinary club spanning road pacelines, endurance century challenges, mountain biking trails on Vetal Tekdi, and beginner clinics.
          </p>

          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-neutral-100">Pune Headquarters:</strong>
              <p className="text-neutral-400 mt-0.5">
                Our main meeting and rollout hubs are anchored along Senapati Bapat Road, Bremen Chowk (Aundh), and Chandani Chowk (Kothrud).
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-xl font-bold font-display uppercase tracking-wider text-lime-400">
            Who Rides With Us?
          </h3>
          <p className="text-xs text-neutral-400">
            Our tribe brings together cyclists from all walks of life across Pune:
          </p>
          <div className="space-y-2.5">
            {targetAudiences.map((aud, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>{aud}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 md:p-12 space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold block mb-1">
            Club Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-neutral-100 uppercase">
            What Drives Our Tribe
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipValues.map((val, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-neutral-900 text-lime-400 flex items-center justify-center font-mono font-bold text-xs">
                0{i + 1}
              </span>
              <h4 className="text-base font-bold text-neutral-100 mt-2">{val.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Action CTA */}
      <div className="p-8 md:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-black font-display text-neutral-100 uppercase">
            Ready to Clip In With Us?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400">
            Send our Pune ride coordinator a quick message on WhatsApp to join our official announcement broadcast and find out about this weekend’s rollouts.
          </p>
        </div>

        <a
          href={buildWhatsAppUrl(CLUB_CONFIG.whatsapp.defaultMessage)}
          target="_blank"
          rel="noreferrer"
          className="py-4 px-8 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-lime-400/20 flex items-center gap-2 shrink-0"
        >
          <MessageSquare className="w-4 h-4 fill-neutral-950" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
