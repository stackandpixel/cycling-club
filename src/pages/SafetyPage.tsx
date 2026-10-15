import React from 'react';
import { SAFETY_RESOURCES } from '../data/safetyTips';
import { CLUB_CONFIG } from '../config/clubConfig';
import { ShieldAlert, CheckCircle2, AlertTriangle, Wrench, Users, Droplets, PackageCheck, Eye, PhoneCall } from 'lucide-react';

export const SafetyPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-lime-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-400" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
    }
  };

  const handSignals = [
    {
      title: 'Pothole / Debris Alert',
      gesture: 'Point finger downward towards road surface on the hazardous side (left or right)',
      shout: '“Pothole left!” or “Gravel right!”',
    },
    {
      title: 'Slowing Down / Decelerating',
      gesture: 'Open hand with palm facing downwards, gentle waving motion at waist height',
      shout: '“Slowing!”',
    },
    {
      title: 'Stopping at Intersection',
      gesture: 'Raise clenched fist or flat palm high above head',
      shout: '“Stopping!”',
    },
    {
      title: 'Turn Direction',
      gesture: 'Extend entire arm horizontally pointing in direction of upcoming turn',
      shout: '“Turning left / right!”',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-14 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-rose-400 mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>COMMUNITY SAFETY CONSTITUTION & RESOURCES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-neutral-100 uppercase leading-none mb-4">
            Ride Safety & Standards
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-light">
            Cycling on Indian highways and Western Ghats passes is an exhilarating privilege, but it demands defensive riding habits, mechanical discipline, and mutual vigilance.
          </p>
        </div>
      </div>

      {/* Mandatory Risk & Responsibility Notice */}
      <div className="p-6 rounded-3xl bg-neutral-950 border-2 border-amber-500/30 text-xs sm:text-sm text-neutral-300 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <strong className="text-neutral-100 text-sm block">
            Rider Safety Mandate & Assumption of Risk:
          </strong>
          <p className="text-neutral-400 leading-relaxed">
            {CLUB_CONFIG.disclaimer.safetyNote} Pedal Tribe India does not claim that public road or off-road trail cycling is risk-free. Every participant is individually responsible for inspecting their bicycle, adhering to Indian Motor Vehicles Act traffic rules, carrying identification, and making sound judgements regarding their fitness and weather conditions.
          </p>
        </div>
      </div>

      {/* Hand Signals Masterclass */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 md:p-10 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold block mb-1">
            Universal Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-neutral-100 uppercase">
            Essential Pack Hand Signals
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl leading-relaxed">
            In a paceline moving at 30 km/h, hand gestures and vocal calls ripple through the peloton to prevent collisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {handSignals.map((sig, i) => (
            <div key={i} className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-lime-400 uppercase tracking-widest font-bold block">
                  Signal 0{i + 1}
                </span>
                <h4 className="text-sm font-bold text-neutral-100 mt-1">{sig.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed mt-2">{sig.gesture}</p>
              </div>
              <div className="pt-3 border-t border-neutral-900">
                <span className="text-[11px] font-mono text-neutral-300 font-bold bg-neutral-900 px-2.5 py-1 rounded-md block text-center">
                  {sig.shout}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Resources Detailed Sections */}
      <div className="space-y-8">
        {SAFETY_RESOURCES.map((sec) => (
          <div
            key={sec.id}
            className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-7 md:p-10 space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                  {getIcon(sec.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-neutral-100">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{sec.summary}</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-lime-400 font-bold uppercase">
                {sec.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sec.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 space-y-1.5"
                >
                  <h5 className="text-xs font-bold text-neutral-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                    <span>{pt.title}</span>
                  </h5>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-5.5">
                    {pt.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Contact Advice */}
      <div className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-2">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
            <PhoneCall className="w-4 h-4" />
            <span>Emergency Protocol</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-neutral-100">
            Emergency Contacts on Every Ride
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Before rolling out on supported weekend endurance rides, the mobile support SUV contact and local emergency numbers are broadcast in the ride WhatsApp group. Always keep ICE (In Case of Emergency) contacts saved on your phone lock screen.
          </p>
        </div>

        <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 space-y-2 text-xs font-mono">
          <div className="flex justify-between text-neutral-400">
            <span>National Emergency:</span>
            <strong className="text-neutral-100">112</strong>
          </div>
          <div className="flex justify-between text-neutral-400">
            <span>Pune Traffic Police:</span>
            <strong className="text-neutral-100">020-26122880</strong>
          </div>
          <div className="flex justify-between text-neutral-400">
            <span>Ambulance Service:</span>
            <strong className="text-neutral-100">108</strong>
          </div>
          <div className="flex justify-between text-neutral-400">
            <span>Club Ride Desk:</span>
            <strong className="text-lime-400">{CLUB_CONFIG.whatsapp.displayNumber}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
