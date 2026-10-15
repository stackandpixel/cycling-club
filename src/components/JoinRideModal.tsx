import React, { useState, useEffect } from 'react';
import { X, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { SAMPLE_RIDES } from '../data/rides';
import { formatRideRegistrationMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { CLUB_CONFIG } from '../config/clubConfig';

interface JoinRideModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRideId?: string;
}

export const JoinRideModal: React.FC<JoinRideModalProps> = ({
  isOpen,
  onClose,
  preSelectedRideId,
}) => {
  const [selectedRideId, setSelectedRideId] = useState<string>(preSelectedRideId || SAMPLE_RIDES[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('Upcoming Weekend');
  const [cyclingExperience, setCyclingExperience] = useState('Beginner / Casual');
  const [bicycleType, setBicycleType] = useState('Road Bike');
  const [participantsCount, setParticipantsCount] = useState(1);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  useEffect(() => {
    if (preSelectedRideId) {
      setSelectedRideId(preSelectedRideId);
    }
  }, [preSelectedRideId]);

  if (!isOpen) return null;

  const currentRide = SAMPLE_RIDES.find((r) => r.id === selectedRideId) || SAMPLE_RIDES[0];

  const handleValidate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    const cleanPhone = phone.replace(/[^\d]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidate()) return;

    // Build the formatted WhatsApp message
    const formattedMsg = formatRideRegistrationMessage({
      name: name.trim(),
      phone: phone.trim(),
      rideTitle: currentRide.title,
      rideDate: preferredDate,
      cyclingExperience,
      bicycleType,
      participantsCount,
      notes: notes.trim(),
    });

    const targetUrl = buildWhatsAppUrl(formattedMsg);

    // Open WhatsApp in new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 md:p-8 my-8 text-neutral-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-md bg-lime-400 text-neutral-950 font-bold">
                <MessageSquare className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                Direct WhatsApp Registration
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display tracking-tight text-neutral-50 mb-1">
              Join a Group Ride
            </h3>
            <p className="text-sm text-neutral-400 mb-6">
              Connect directly with our Pune ride marshals. Fill this short rider briefing to generate your WhatsApp enquiry.
            </p>

            {/* Disclaimer Banner */}
            <div className="p-3.5 mb-6 rounded-xl bg-neutral-950/90 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-100">Direct WhatsApp Dispatch:</strong> Submitting will open your official WhatsApp chat with <span className="text-lime-300">{CLUB_CONFIG.whatsapp.displayNumber}</span>. Please tap <strong className="text-white">Send</strong> in WhatsApp to deliver your enquiry.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {/* Select Ride */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Choose Ride *
                </label>
                <select
                  value={selectedRideId}
                  onChange={(e) => setSelectedRideId(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-neutral-100 focus:outline-none focus:border-lime-400 transition-colors"
                >
                  {SAMPLE_RIDES.map((ride) => (
                    <option key={ride.id} value={ride.id}>
                      {ride.title} ({ride.distanceKm} km · {ride.difficulty})
                    </option>
                  ))}
                </select>
                <div className="mt-1 text-xs text-neutral-400 flex items-center justify-between">
                  <span>Start: {currentRide.startingLocation}</span>
                  <span className="text-lime-400">{currentRide.feeNote}</span>
                </div>
              </div>

              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Omkar Ghosalkar"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    className={`w-full bg-neutral-950 border rounded-lg px-3.5 py-2.5 text-neutral-100 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-neutral-800 focus:border-lime-400'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98230 45199"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    className={`w-full bg-neutral-950 border rounded-lg px-3.5 py-2.5 text-neutral-100 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-neutral-800 focus:border-lime-400'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Bicycle Type and Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Bicycle Type
                  </label>
                  <select
                    value={bicycleType}
                    onChange={(e) => setBicycleType(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-neutral-100 focus:outline-none focus:border-lime-400"
                  >
                    <option value="Road Bike (Drop bar)">Road Bike (Drop bar)</option>
                    <option value="Endurance Gravel Bike">Endurance Gravel Bike</option>
                    <option value="Mountain Bike (MTB)">Mountain Bike (MTB)</option>
                    <option value="Geared Hybrid / City Bike">Geared Hybrid / City Bike</option>
                    <option value="Single Speed / Other">Single Speed / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Cycling Experience
                  </label>
                  <select
                    value={cyclingExperience}
                    onChange={(e) => setCyclingExperience(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-neutral-100 focus:outline-none focus:border-lime-400"
                  >
                    <option value="First-Time Group Rider">First-Time Group Rider</option>
                    <option value="Beginner (20-40 km comfortable)">Beginner (20-40 km comfortable)</option>
                    <option value="Intermediate (50-80 km regular)">Intermediate (50-80 km regular)</option>
                    <option value="Endurance / Randonneur (100+ km)">Endurance / Randonneur (100+ km)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Riders Count */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="text"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="e.g. Next Saturday, Oct 18"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-neutral-100 focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Participants
                  </label>
                  <div className="flex items-center gap-3 bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2">
                    <button
                      type="button"
                      onClick={() => setParticipantsCount((c) => Math.max(1, c - 1))}
                      className="w-7 h-7 rounded bg-neutral-800 text-neutral-200 hover:bg-neutral-700 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="font-semibold text-neutral-100 flex-1 text-center">
                      {participantsCount} {participantsCount === 1 ? 'Rider' : 'Riders'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setParticipantsCount((c) => Math.min(10, c + 1))}
                      className="w-7 h-7 rounded bg-neutral-800 text-neutral-200 hover:bg-neutral-700 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Questions or Special Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Need bike rental advice, carpooling from Kothrud, dietary notes, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-neutral-100 focus:outline-none focus:border-lime-400"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 font-bold text-sm tracking-wide uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 fill-neutral-950" />
                Proceed to WhatsApp & Send Enquiry
              </button>
            </form>
          </>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-display text-neutral-50 mb-2">
              WhatsApp Link Prepared!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6">
              Your registration details for <strong className="text-lime-300">{currentRide.title}</strong> have been formatted for our WhatsApp ride coordinator.
            </p>

            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 text-xs text-neutral-400 max-w-md mx-auto text-left mb-6 space-y-1">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                <Sparkles className="w-4 h-4" /> Next Step:
              </div>
              <p>1. If your WhatsApp window didn't open automatically, click the button below.</p>
              <p>2. Tap <strong>Send</strong> in WhatsApp to deliver the message.</p>
              <p>3. Our ride captain will confirm the meeting point & roll-call slot with you.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  const formattedMsg = formatRideRegistrationMessage({
                    name,
                    phone,
                    rideTitle: currentRide.title,
                    rideDate: preferredDate,
                    cyclingExperience,
                    bicycleType,
                    participantsCount,
                    notes,
                  });
                  window.open(buildWhatsAppUrl(formattedMsg), '_blank', 'noopener,noreferrer');
                }}
                className="py-3 px-6 rounded-xl bg-lime-400 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-lime-300 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Re-open WhatsApp
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="py-3 px-6 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
