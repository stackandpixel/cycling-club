/**
 * Pedal Tribe India - Central Brand & Club Configuration
 * Central source of truth for club identity, contact details, and locations.
 */

export interface ClubConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  city: string;
  state: string;
  country: string;
  fullLocation: string;
  hubLocation: string;
  whatsapp: {
    displayNumber: string;
    rawNumber: string; // 91XXXXXXXXXX without '+' or spaces for wa.me URL
    defaultMessage: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
    stravaClub: string;
    stravaUrl: string;
    youtubeHandle: string;
    email: string;
  };
  metrics: {
    establishedYear: number;
    sampleRidesConducted: string;
    communityCyclists: string;
    routesMapped: string;
    elevationClimbedKm: string;
  };
  disclaimer: {
    sampleDataNote: string;
    safetyNote: string;
  };
}

export const CLUB_CONFIG: ClubConfig = {
  name: "Pedal Tribe India",
  tagline: "Ride Together. Go Further.",
  shortDescription:
    "Pune's premier grassroots cycling collective connecting passionate road cyclists, mountain bikers, gravel explorers, and weekend enthusiasts across Maharashtra.",
  city: "Pune",
  state: "Maharashtra",
  country: "India",
  fullLocation: "Pune, Maharashtra, India",
  hubLocation: "Senapati Bapat Road & Chandani Chowk, Pune",
  whatsapp: {
    displayNumber: "+91 98230 45199",
    rawNumber: "919823045199",
    defaultMessage: "Hello Pedal Tribe India! I'd like to learn more about upcoming weekend group rides in Pune.",
  },
  social: {
    instagramHandle: "@pedaltribeindia",
    instagramUrl: "https://instagram.com/pedaltribeindia",
    stravaClub: "Pedal Tribe India Club",
    stravaUrl: "https://www.strava.com/clubs/pedal-tribe-india",
    youtubeHandle: "@pedaltribeindia",
    email: "rides@pedaltribeindia.com",
  },
  metrics: {
    establishedYear: 2021,
    sampleRidesConducted: "240+",
    communityCyclists: "1,850+",
    routesMapped: "45+",
    elevationClimbedKm: "320k+",
  },
  disclaimer: {
    sampleDataNote:
      "All ride dates, distances, route profiles, participant fees, and event details on this website are illustrative sample content for demonstration purposes.",
    safetyNote:
      "Cycling on Indian roads and trails carries inherent risks. Pedal Tribe strongly mandates certified helmets, front & rear lights, reflective apparel, hydration, and road traffic law compliance on every ride.",
  },
};
