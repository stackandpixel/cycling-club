export type RideCategory =
  | 'Road Cycling'
  | 'Mountain Biking'
  | 'Gravel Adventures'
  | 'Beginner Rides'
  | 'Endurance Cycling'
  | 'Social & Breakfast'
  | 'Scenic Countryside'
  | 'Cycling Challenges'
  | 'Night Rides'
  | 'Skills Workshops'
  | 'Charity Rides';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Epic';

export type TerrainType = 'Smooth Tarmac' | 'Gravel & Dirt' | 'Forest Singletrack' | 'Hilly Ghats' | 'Mixed Terrain' | 'City Roads';

export interface ElevationPoint {
  km: number;
  altitudeMeters: number;
  label?: string;
}

export interface RideFAQ {
  question: string;
  answer: string;
}

export interface Ride {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: RideCategory;
  difficulty: DifficultyLevel;
  distanceKm: number;
  elevationGainM: number;
  estimatedDuration: string;
  paceGuide: string;
  terrain: TerrainType;
  startingLocation: string;
  endLocation: string;
  meetingTime: string;
  scheduledDate: string; // Sample illustrative date
  feeNote: string;
  coverGraphic: string; // Identifier for graphic / theme
  gradientTheme: string; // Tailwind gradient for graphic cards
  accentColor: string;
  summary: string;
  overview: string;
  routeDescription: string;
  highlights: string[];
  meetingInstructions: string;
  recommendedExperience: string;
  requiredEquipment: string[];
  safetyChecklist: string[];
  refreshmentInfo: string;
  elevationProfile: ElevationPoint[];
  faqs: RideFAQ[];
  isFeatured?: boolean;
}

export interface RouteDestination {
  id: string;
  slug: string;
  title: string;
  region: string;
  state: string;
  description: string;
  terrain: string;
  distanceRange: string;
  typicalElevation: string;
  difficulty: DifficultyLevel;
  sceneryHighlights: string[];
  bestSeason: string;
  cautionNotes: string;
  associatedRideIds: string[];
  gradientTheme: string;
  svgRouteMapType: 'ghats' | 'lake' | 'hills' | 'city' | 'forest';
}

export interface ClubEvent {
  id: string;
  title: string;
  type: 'Weekend Ride' | 'Distance Challenge' | 'Skills Workshop' | 'Charity Ride' | 'Night Tour';
  dateStr: string;
  timeStr: string;
  location: string;
  distanceKm?: number;
  description: string;
  status: 'Registration Open' | 'Filling Fast' | 'Illustrative Demo';
  fee: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Group Rides' | 'Mountain Biking' | 'Gravel & Ghats' | 'Portraits & Gear' | 'Meetups';
  location: string;
  caption: string;
  riderCount?: string;
  aspect: 'landscape' | 'portrait' | 'square';
  svgArtTheme: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarSeed: string;
  experienceLevel: string;
  quote: string;
  favoriteRide: string;
  memberSince: string;
  tag: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  priceNote: string;
  isPopular?: boolean;
  benefits: string[];
  idealFor: string;
  actionText: string;
}
