import { CLUB_CONFIG } from '../config/clubConfig';
import type { Ride } from '../types/ride';

/**
 * Normalizes phone number into clean international format without '+' or spaces.
 */
export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

/**
 * Builds the official WhatsApp click-to-chat URL:
 * https://wa.me/91XXXXXXXXXX?text=ENCODED_MESSAGE
 */
export function buildWhatsAppUrl(message: string, customPhone?: string): string {
  const phone = normalizePhoneNumber(customPhone || CLUB_CONFIG.whatsapp.rawNumber);
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encodedText}`;
}

export interface RideEnquiryData {
  name: string;
  phone?: string;
  rideTitle: string;
  rideDate?: string;
  cyclingExperience?: string;
  bicycleType?: string;
  participantsCount?: number;
  notes?: string;
}

/**
 * Formats a clean, professional WhatsApp message for ride registration.
 */
export function formatRideRegistrationMessage(data: RideEnquiryData): string {
  return `🚴 *Pedal Tribe India - Ride Registration Enquiry*
━━━━━━━━━━━━━━━━━━━━
Hi Team! I'd like to join the following group ride:

*Ride:* ${data.rideTitle}
${data.rideDate ? `*Preferred Date:* ${data.rideDate}\n` : ''}*Rider Name:* ${data.name}
${data.phone ? `*Contact:* ${data.phone}\n` : ''}*Bicycle Type:* ${data.bicycleType || 'Not specified'}
*Experience Level:* ${data.cyclingExperience || 'Beginner / Intermediate'}
*Riders Joining:* ${data.participantsCount || 1}
${data.notes ? `*Questions / Notes:* ${data.notes}\n` : ''}
━━━━━━━━━━━━━━━━━━━━
_Sent via PedalTribeIndia.com (Demo Enquiry)_`;
}

/**
 * Builds direct WhatsApp URL for a specific ride with pre-filled enquiry.
 */
export function getRideWhatsAppUrl(ride: Ride, riderName = 'Rider'): string {
  const message = `🚴 *Pedal Tribe India - Ride Enquiry*
Hi! I'm interested in joining the *${ride.title}* (${ride.distanceKm} km · ${ride.difficulty}).
Could you please share the upcoming schedule, meeting spot details, and rider checklist?
Thanks!`;
  return buildWhatsAppUrl(message);
}

/**
 * Formats a membership enquiry message for WhatsApp.
 */
export function formatMembershipEnquiryMessage(tierTitle: string, name?: string): string {
  return `🏅 *Pedal Tribe India - Club Membership Enquiry*
━━━━━━━━━━━━━━━━━━━━
Hi Pedal Tribe Team!
${name ? `My name is ${name}. ` : ''}I am interested in becoming a *${tierTitle}* member.

Could you please share details on how to get started, community WhatsApp group access, and weekly ride schedules?

_Sent via PedalTribeIndia.com_`;
}
