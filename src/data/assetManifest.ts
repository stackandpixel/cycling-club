/**
 * Pedal Tribe India - Creative Direction & Asset Manifest
 * Documents all creative asset prompts, aspect ratios, file targets, and fallback specifications.
 */

export interface AssetManifestEntry {
  id: string;
  filename: string;
  targetPath: string;
  category: 'hero' | 'rides' | 'routes' | 'community' | 'gallery' | 'video';
  aspectRatio: '16:9' | '4:3' | '1:1' | '9:16';
  title: string;
  prompt: string;
  negativePrompt: string;
  fallbackVisual: string;
}

export const ASSET_MANIFEST: AssetManifestEntry[] = [
  {
    id: 'hero-western-ghats-sunrise',
    filename: 'hero_western_ghats_sunrise.jpg',
    targetPath: 'public/images/hero/hero_western_ghats_sunrise.jpg',
    category: 'hero',
    aspectRatio: '16:9',
    title: 'Indian Cycling Peloton at Sunrise in the Western Ghats',
    prompt:
      'Cinematic professional sports photograph of a group of adult Indian road cyclists riding together on a scenic Western Ghats road near Pune at sunrise, modern road bicycles, helmets and appropriate cycling clothing, rolling green hills, atmospheric morning mist, realistic bicycle geometry and riding positions, dynamic composition, premium outdoor sports campaign photography, wide 16:9 landscape, clean negative space on the left for website headline, no text, no logos, no watermark.',
    negativePrompt: 'deformed wheels, unrealistic handlebars, text, logos, oversaturated cartoonish colors, cars blocking road',
    fallbackVisual: 'Dynamic SVG peloton silhouette against high-contrast morning amber & electric lime contour sunrise gradient',
  },
  {
    id: 'road-peloton-portrait',
    filename: 'road_cycling_group_portrait.jpg',
    targetPath: 'public/images/rides/road_cycling_group_portrait.jpg',
    category: 'rides',
    aspectRatio: '16:9',
    title: 'Road Cycling Group Pace Line',
    prompt:
      'Coordinated peloton of Indian cyclists in sleek cycling kits riding in formation on a wide asphalt highway near Pune, crisp morning sunlight, focused athletic expressions, clean modern road bikes with aero drop bars, natural motion blur in the background, high-end editorial sports photography, no text, no logos.',
    negativePrompt: 'blurry faces, multiple handlebars, unnatural limbs, text',
    fallbackVisual: 'High-speed paceline aerodynamic vector profile with gradient atmospheric lines',
  },
  {
    id: 'beginner-social-ride',
    filename: 'beginner_social_ride.jpg',
    targetPath: 'public/images/rides/beginner_social_ride.jpg',
    category: 'rides',
    aspectRatio: '4:3',
    title: 'Beginner Friendly Weekend Social Ride',
    prompt:
      'Cheerful group of young Indian men and women on hybrid and road bikes laughing together at a tree-lined avenue near Pune University, casual athletic wear, proper helmets, warm morning light, welcoming community vibe, authentic candid sports photography, no text, no logos.',
    negativePrompt: 'stiff poses, uncanny facial expressions, watermark',
    fallbackVisual: 'Tree-lined urban park route graphic with relaxed cyclist iconography',
  },
  {
    id: 'mountain-biking-trail',
    filename: 'mountain_biking_trail.jpg',
    targetPath: 'public/images/rides/mountain_biking_trail.jpg',
    category: 'rides',
    aspectRatio: '4:3',
    title: 'Vetal Tekdi / Sinhagad Mountain Biking Trail',
    prompt:
      'Adult Indian mountain bikers riding a rugged forest trail in the Western Ghats, realistic mountain bikes and protective helmets, natural riding positions, lush green landscape, dynamic but believable outdoor sports photography, cinematic natural light, premium adventure campaign, landscape 4:3 composition, no text, no logos, no watermark.',
    negativePrompt: 'deformed suspension, unnatural terrain, cartoonish elements, watermark',
    fallbackVisual: 'Rugged singletrack topographic trail map with elevation contour elevation spikes',
  },
  {
    id: 'gravel-western-ghats',
    filename: 'gravel_cycling_adventure.jpg',
    targetPath: 'public/images/rides/gravel_cycling_adventure.jpg',
    category: 'rides',
    aspectRatio: '4:3',
    title: 'Western Ghats Gravel & Countryside Adventure',
    prompt:
      'Adult Indian endurance gravel cyclist riding on a scenic winding mountain road near Mulshi lake surrounded by misty monsoon Western Ghats hills, wet asphalt and lush greenery, high-end endurance gravel bike with bikepacking saddle bag, cinematic outdoor sports photography, realistic lighting, no text, no logos.',
    negativePrompt: 'unrealistic bike frame, text, plastic look, watermark',
    fallbackVisual: 'Misty lake contour visual with gravel tire tread pattern and elevation line',
  },
  {
    id: 'scenic-mulshi-countryside',
    filename: 'scenic_countryside_route.jpg',
    targetPath: 'public/images/routes/scenic_countryside_route.jpg',
    category: 'routes',
    aspectRatio: '16:9',
    title: 'Mulshi & Tamhini Ghat Countryside Route',
    prompt:
      'Expansive wide angle view of a pristine curving mountain road cutting through lush green Sahyadri hills in Maharashtra, solo cyclist in distance for scale, gentle waterfall in background, morning clouds clinging to peaks, dramatic natural beauty, travel and cycling editorial photography.',
    negativePrompt: 'oversaturated neon greens, messy composition, heavy traffic, watermark',
    fallbackVisual: 'Scenic valley elevation cross-section with distance markers',
  },
  {
    id: 'bicycle-cockpit-macro',
    filename: 'bicycle_close_up_cockpit.jpg',
    targetPath: 'public/images/gallery/bicycle_close_up_cockpit.jpg',
    category: 'gallery',
    aspectRatio: '4:3',
    title: 'Carbon Road Cockpit & GPS Computer',
    prompt:
      'Close-up macro detail of a sleek modern carbon road bicycle cockpit, aerodynamic drop handlebars, GPS bike computer showing route map, carbon fiber frame texture, crisp morning outdoor golden hour lighting, Pune countryside background bokeh, professional editorial cycling gear photography, no text, no logos.',
    negativePrompt: 'distorted handlebar, illegible gibberish on screen, watermark',
    fallbackVisual: 'Precision carbon weave pattern with digital telemetry speed & elevation HUD',
  },
  {
    id: 'sunrise-community-meetup',
    filename: 'cycling_meetup_sunrise.jpg',
    targetPath: 'public/images/community/cycling_meetup_sunrise.jpg',
    category: 'community',
    aspectRatio: '16:9',
    title: 'Pune Riders Gathering at Sunrise Point',
    prompt:
      'Diverse group of adult Indian cyclists gathered with their road bicycles at a scenic sunrise meeting point outside Pune, wearing coordinated but unbranded cycling jerseys and helmets, friendly community atmosphere, realistic bicycles and equipment, premium editorial sports photography, wide landscape composition, no text, no logos, no watermark.',
    negativePrompt: 'unnatural faces, blurred bodies, random artifacts, watermark',
    fallbackVisual: 'Geometric sunrise circle with community bike cluster and golden rays',
  },
  {
    id: 'night-ride-city',
    filename: 'pune_night_heritage_ride.jpg',
    targetPath: 'public/images/rides/pune_night_heritage_ride.jpg',
    category: 'rides',
    aspectRatio: '4:3',
    title: 'Pune Heritage Night Ride',
    prompt:
      'Indian cyclists with bright LED headlights and reflective vests riding through atmospheric illuminated streets of Pune at night, cool cinematic shadows, light trails, historic architecture visible in soft background, safety-conscious urban night ride, editorial photography.',
    negativePrompt: 'blinding glare, noisy grain, distorted bikes, watermark',
    fallbackVisual: 'Dark city skyline with vivid neon-lime LED beam vectors and safety-orange lights',
  },
  {
    id: 'breakfast-chai-stop',
    filename: 'community_breakfast_chai_stop.jpg',
    targetPath: 'public/images/community/community_breakfast_chai_stop.jpg',
    category: 'community',
    aspectRatio: '4:3',
    title: 'Post-Ride Chai & Bun Maska Gathering',
    prompt:
      'Cyclists in cycling gear enjoying hot cutting chai and breakfast at an iconic roadside Irani café near Pune, bicycles parked neatly against wall, authentic camaraderie and smiles, warm nostalgic outdoor morning ambiance, lifestyle sports journalism.',
    negativePrompt: 'spilled drinks, distorted fingers, watermark',
    fallbackVisual: 'Steaming glass cup vector with bicycle silhouette and cafe terrace mood',
  },
  {
    id: 'club-community-banner',
    filename: 'club_community_banner.jpg',
    targetPath: 'public/images/community/club_community_banner.jpg',
    category: 'community',
    aspectRatio: '16:9',
    title: 'Pedal Tribe India Club Banner',
    prompt:
      'Cinematic panoramic banner representing Indian cycling community unity, riders standing side by side overlooking Western Ghats valley, silhouette against vibrant dawn sky, sense of adventure and brotherhood, premium sports brand visual.',
    negativePrompt: 'blurry silhouettes, distorted anatomy, text, logos',
    fallbackVisual: 'Panoramic mountain ridge line with Electric Lime club motto',
  },
  {
    id: 'video-loop-cyclist-clip',
    filename: 'western_ghats_climb_loop.mp4',
    targetPath: 'public/videos/western_ghats_climb_loop.mp4',
    category: 'video',
    aspectRatio: '16:9',
    title: 'Muted 6-second Ambient Cycling Loop',
    prompt:
      'Smooth tracking shot from behind an Indian road cyclist climbing an undulating tree-lined road in Maharashtra, morning fog drifting through trees, rhythmic pedaling cadence, steady fluid camera motion, 4k 60fps cinematic look.',
    negativePrompt: 'shaky camera, jump cuts, artificial artifacts',
    fallbackVisual: 'Interactive HTML5 SVG animated road contour with smooth continuous pulse tracer',
  },
];
