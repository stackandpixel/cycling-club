import type { Ride } from '../types/ride';

export const SAMPLE_RIDES: Ride[] = [
  {
    id: 'ride-sunrise-city-loop',
    slug: 'sunrise-city-loop',
    title: 'Sunrise City Heritage Loop',
    subtitle: 'Crisp morning roll through Pune’s leafy avenues before traffic awakes',
    category: 'Beginner Rides',
    difficulty: 'Beginner',
    distanceKm: 34,
    elevationGainM: 180,
    estimatedDuration: '1 hr 45 min',
    paceGuide: '18 – 22 km/h (No-drop group pace)',
    terrain: 'Smooth Tarmac',
    startingLocation: 'Pune University Main Gate (Ganeshkhind Road)',
    endLocation: 'FC Road / Goodluck Cafe',
    meetingTime: '5:45 AM (Rollout 6:00 AM)',
    scheduledDate: 'Upcoming Saturday (Weekly)',
    feeNote: 'Free Community Ride',
    coverGraphic: 'sunrise-city',
    gradientTheme: 'from-amber-600/30 via-neutral-900 to-neutral-950',
    accentColor: '#fbbf24',
    summary:
      'The ideal weekend kickstarter. Glide along broad avenues from Pune University, Bund Garden, Camp, and Prabhat Road with crisp morning breeze and zero traffic stress.',
    overview:
      'Designed specifically for riders transitioning from casual neighborhood pedaling to organized pack riding. We maintain a steady, disciplined double paceline at a relaxed pace with dedicated ride marshals ensuring safety at every intersection.',
    routeDescription:
      'Assemble at Pune University gate -> Ganeshkhind Road -> Sancheti Circle -> Bund Garden Bridge -> Koregaon Park North Main Road -> Camp M.G. Road -> Tilak Road -> Prabhat Road -> Final regroup at FC Road.',
    highlights: [
      'Traffic-free Pune heritage avenues in early morning twilight',
      'No-drop policy: two ride sweepers guarantee no cyclist gets left behind',
      'Iconic post-ride breakfast at FC Road (Bun Maska & Irani Chai)',
      'Basic hand signals and group drafting introduction for newcomers',
    ],
    meetingInstructions:
      'Gather at the paved parking plaza directly outside Savitribai Phule Pune University main arch on Ganeshkhind Road. Please arrive by 5:45 AM for helmet inspection and safety briefing.',
    recommendedExperience:
      'Open to all cyclists comfortable riding continuously for 60-90 minutes. Hybrid bikes, road bikes, and geared city bikes welcome.',
    requiredEquipment: [
      'Mandatory ISI/CE certified cycling helmet fastened securely',
      'Front white blinker light & rear red flashing tail light',
      'Water bottle (at least 750ml electrolyte mix or water)',
      'Basic bicycle lock (for cafe stop)',
      'Spare tube matching your tyre size & mini pump/CO2',
    ],
    safetyChecklist: [
      'Pre-ride tire pressure check (60-90 PSI depending on bicycle type)',
      'Ride in single or disciplined tight double file; never cross road median',
      'Call out road hazards: potholes, speed breakers, stray animals',
      'Two-finger braking rule on drops and hoods',
    ],
    refreshmentInfo:
      'Midway tender coconut water stop at Bund Garden; post-ride community breakfast at legendary Goodluck Cafe or Vaishali.',
    elevationProfile: [
      { km: 0, altitudeMeters: 560, label: 'Pune University' },
      { km: 8, altitudeMeters: 552, label: 'Bund Garden' },
      { km: 16, altitudeMeters: 568, label: 'Camp' },
      { km: 24, altitudeMeters: 575, label: 'Prabhat Road' },
      { km: 34, altitudeMeters: 562, label: 'FC Road Finish' },
    ],
    faqs: [
      {
        question: 'Can I join with an MTB or non-gear bicycle?',
        answer: 'Geared hybrids and MTBs are completely fine! Single speed bikes might find the pace slightly high on slight rollers, but our sweepers keep everyone together.',
      },
      {
        question: 'Do I need prior group riding experience?',
        answer: 'Not at all. Sunrise City Loop is specifically crafted to teach drafting, calling potholes, and cadence in a friendly, supportive environment.',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'ride-western-ghats-monsoon',
    slug: 'western-ghats-monsoon-escapade',
    title: 'Western Ghats Tamhini Escapade',
    subtitle: 'Misty mountain passes, roaring monsoon cascades, and undulating Ghats asphalt',
    category: 'Endurance Cycling',
    difficulty: 'Epic',
    distanceKm: 118,
    elevationGainM: 1240,
    estimatedDuration: '5 hrs 30 min',
    paceGuide: '23 – 27 km/h rolling average',
    terrain: 'Hilly Ghats',
    startingLocation: 'Chandani Chowk Shell Fuel Station, Pune',
    endLocation: 'Tamhini Ghat Top & Return to Chandani Chowk',
    meetingTime: '5:15 AM (Rollout 5:30 AM)',
    scheduledDate: 'Upcoming Sunday',
    feeNote: '₹250 (Includes Support Vehicle, Hydration & Fruits)',
    coverGraphic: 'western-ghats',
    gradientTheme: 'from-emerald-600/30 via-neutral-900 to-neutral-950',
    accentColor: '#10b981',
    summary:
      'A true endurance milestone. Wind your way through Pirangut, Mulshi Lake backwaters, and conquer the legendary climbing stretches of Tamhini Ghat surrounded by cloud-covered Sahyadri peaks.',
    overview:
      'Tamhini Ghat is Maharashtra’s crown jewel for endurance cyclists. This route tests your climbing rhythm, pacing strategy, and downhill control. A dedicated club support vehicle accompanies the peloton with spare wheels, first aid, electrolyte replenishments, and emergency broom wagon capacity.',
    routeDescription:
      'Start Chandani Chowk -> descend towards Paud -> Pirangut Ghat rollers -> Mulshi dam rim road -> ascending towards Tamhini Pass summit -> turn-around at Quickbite Dhaba -> return via same scenic corridor.',
    highlights: [
      'Iconic Mulshi Lake vistas wrapped in early morning mist',
      'Over 1,200 vertical meters of steady Sahyadri climbing',
      'Dedicated backup support SUV carrying floor pumps, tools, and hydration',
      'Piping hot Maharashtrian Poha and chai at scenic valley viewpoint',
    ],
    meetingInstructions:
      'Assemble at Shell fuel station, Chandani Chowk. Ample space for safe bike assembly and tire inflation. Please ensure rear lights are fully charged.',
    recommendedExperience:
      'Riders should have comfortably completed at least one 70+ km ride with elevation. Solid climbing gears (compact crank 50/34 and 11-32T cassette recommended).',
    requiredEquipment: [
      'Certified road or endurance cycling helmet',
      'Two full water bottles with electrolytes (Poli, Enerzal, or Fast&Up)',
      'Mini tool kit with chain breaker, tyre levers, and 2 spare tubes',
      'Rain jacket / lightweight wind vest for descents',
      'Energy gels, bananas, or dates for on-bike fueling',
    ],
    safetyChecklist: [
      'Wet road caution: reduce tire pressure by 5-10 PSI for improved grip on damp Ghat tarmac',
      'Never hug inside blind curves; monitor oncoming tourist traffic',
      'Feather brakes on descending hairpins; avoid locking rear wheel',
      'Support vehicle phone number saved in phone speed dial',
    ],
    refreshmentInfo:
      'Support vehicle provides chilled electrolyte fluids and bananas at KM 35 and KM 65; hot breakfast halt at Mulshi Lake vista.',
    elevationProfile: [
      { km: 0, altitudeMeters: 620, label: 'Chandani Chowk' },
      { km: 28, altitudeMeters: 580, label: 'Paud' },
      { km: 52, altitudeMeters: 640, label: 'Mulshi Rim' },
      { km: 74, altitudeMeters: 890, label: 'Tamhini Summit' },
      { km: 95, altitudeMeters: 610, label: 'Mulshi Descent' },
      { km: 118, altitudeMeters: 620, label: 'Chandani Chowk' },
    ],
    faqs: [
      {
        question: 'What happens if I get a puncture or mechanical failure?',
        answer: 'Our backup vehicle carries spare tubes, floor pump, workstand, and tools. If a mechanical cannot be fixed roadside, you can hop into the support vehicle.',
      },
      {
        question: 'Is this ride suitable during heavy rain?',
        answer: 'Yes! Western Ghats rides are magical in rain, provided bikes have good brake pads and riders wear high-visibility jerseys and rainproof jackets.',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'ride-sinhagad-fort-climb',
    slug: 'sinhagad-fort-dawn-breaker',
    title: 'Sinhagad Fort Dawn Breaker',
    subtitle: 'Conquer Pune’s most iconic punchy mountain climb and reward yourself with Kanda Bhaji',
    category: 'Mountain Biking',
    difficulty: 'Advanced',
    distanceKm: 52,
    elevationGainM: 890,
    estimatedDuration: '3 hrs 15 min',
    paceGuide: 'Climbing pace individual; regrouping at viewpoints',
    terrain: 'Hilly Ghats',
    startingLocation: 'Rajaram Bridge (Sinhagad Road), Pune',
    endLocation: 'Sinhagad Fort Top & return to Rajaram Bridge',
    meetingTime: '5:30 AM (Rollout 5:45 AM)',
    scheduledDate: 'Alternate Sundays',
    feeNote: 'Free (Fort toll ₹20 payable individually)',
    coverGraphic: 'sinhagad-climb',
    gradientTheme: 'from-orange-600/30 via-neutral-900 to-neutral-950',
    accentColor: '#f97316',
    summary:
      'The ultimate proving ground for Pune cyclists. Warm up along Khadakwasla lake before tackling the unrelenting 8-14% gradients of the Sinhagad Ghat.',
    overview:
      'Sinhagad Fort is steeped in Maratha history and beloved by local cyclists. The initial 18 km along Sinhagad road and Khadakwasla Dam acts as a brisk flat warm-up. At Donje Phata, the real battle begins: an 8 km continuous climb climbing over 480 meters of vertical altitude with switchbacks overlooking the backwaters.',
    routeDescription:
      'Rajaram Bridge -> Dhayari -> Khadakwasla Dam promenade -> Donje Phata -> Sinhagad Toll Gate -> 8 km hairpin Ghat climb -> Fort upper parking lot -> Return via same descent with cautious speed control.',
    highlights: [
      'Mesmerizing sunrise reflections over Khadakwasla Dam water reservoir',
      'Challenging switchbacks with ramps reaching 13% gradient',
      'Authentic Sahyadri reward: piping hot Kanda Bhaji, Pithla Bhakri, and Matka Dahi at the top',
      'Panoramic 360-degree view of Pune city, Torna Fort, and Panshet valley',
    ],
    meetingInstructions:
      'Assemble at the wide pedestrian promenade near Rajaram Bridge on Sinhagad Road. Ample space for warm-up stretches.',
    recommendedExperience:
      'Intermediate to advanced climbers. Road bikes with 34x32 or MTBs with 1x12 low gear recommended.',
    requiredEquipment: [
      'Certified cycling helmet',
      'Fresh brake pads (mandatory for steep descent safety)',
      'Front and rear flashing lights',
      'Hydration backpack or two 750ml bottles',
      'Cash or UPI for fort toll and famous fort breakfast',
    ],
    safetyChecklist: [
      'Strict descent speed limit: maximum 35 km/h on Sinhagad hairpins due to gravel patches and sharp bends',
      'Give right of way to climbing cyclists and shared jeeps',
      'Stay alert for early morning monkeys along the forested switchbacks',
    ],
    refreshmentInfo:
      'Fresh tender coconut at Donje base; authentic rustic Maharashtrian breakfast stalls at Sinhagad Fort summit.',
    elevationProfile: [
      { km: 0, altitudeMeters: 560, label: 'Rajaram Bridge' },
      { km: 14, altitudeMeters: 580, label: 'Khadakwasla' },
      { km: 20, altitudeMeters: 620, label: 'Donje Foot' },
      { km: 28, altitudeMeters: 1040, label: 'Sinhagad Summit' },
      { km: 36, altitudeMeters: 620, label: 'Donje Foot' },
      { km: 52, altitudeMeters: 560, label: 'Rajaram Bridge' },
    ],
    faqs: [
      {
        question: 'Can I do this on an MTB with knobby tyres?',
        answer: 'Yes! MTBs are actually fantastic here because the lower gear ratios allow you to spin smoothly on the 12% ramps, and hydraulic disc brakes give great descending confidence.',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'ride-lonavala-paceline',
    slug: 'lonavala-old-highway-paceline',
    title: 'Lonavala Old Highway Pace Line',
    subtitle: 'Classic fast-paced weekend double paceline across the scenic Indrayani valley',
    category: 'Road Cycling',
    difficulty: 'Advanced',
    distanceKm: 124,
    elevationGainM: 760,
    estimatedDuration: '4 hrs 30 min',
    paceGuide: '27 – 31 km/h rolling paceline',
    terrain: 'Smooth Tarmac',
    startingLocation: 'Bhakti Shakti Chowk, Nigdi (Old Mumbai-Pune Highway)',
    endLocation: 'Kumar Resort, Lonavala & Return to Nigdi',
    meetingTime: '5:00 AM (Rollout 5:15 AM)',
    scheduledDate: 'Upcoming Saturday',
    feeNote: 'Free / Self-supported with lead road captain',
    coverGraphic: 'lonavala-highway',
    gradientTheme: 'from-lime-500/30 via-neutral-900 to-neutral-950',
    accentColor: '#a3e635',
    summary:
      'Pune’s most popular road cyclist pilgrimage. Smooth asphalt, steady rolling terrain through Dehu Road, Talegaon, and Kamshet, finishing with the steady climb to Lonavala.',
    overview:
      'The Old Mumbai-Pune Highway (NH 48) offers wide shoulders and sweeping curves that are ideal for practicing pack aerodynamics and rotation. The group operates in a cohesive rotating paceline where riders take 60-second pulls at the front before smoothly sliding to the back.',
    routeDescription:
      'Nigdi -> Dehu Road bypass -> Talegaon Dabhade toll plaza -> Somatne Phata -> Vadgaon Maval -> Kamshet gliding flats -> Karla Caves intersection -> Lonavala main market -> Return via same highway corridor.',
    highlights: [
      'Sustained high-tempo aero cycling on wide national highway tarmac',
      'Disciplined group drafting coaching led by senior club road captains',
      'Famous Lonavala chikki and hot filter coffee stop before the return leg',
      'Tailwind-assisted blistering return sprint down the Kamshet flats',
    ],
    meetingInstructions:
      'Meet at Bhakti Shakti Chowk flag monument, Nigdi. Plenty of street lighting and broad sidewalk for bicycle setup.',
    recommendedExperience:
      'Experienced road cyclists comfortable riding wheel-to-wheel in a peloton at 28+ km/h speeds.',
    requiredEquipment: [
      'Drop-bar road bike in pristine mechanical condition',
      'High-visibility cycling jersey',
      'Aero helmet & UV polarized cycling eyewear',
      '2 water bottles with carbohydrate/electrolyte mix',
      'Mini hand pump, 2 inner tubes, quick-link chain tool',
    ],
    safetyChecklist: [
      'Zero sudden braking: gentle deceleration and hand signals for road debris',
      'Keep eyes 3 bikes ahead to anticipate traffic slowdowns',
      'Never overlap wheels with the rider in front of you',
    ],
    refreshmentInfo:
      'Quick hydration refill at Kamshet toll; extended breakfast at Lonavala (Idli, Vada Sambhar, Masala Chai).',
    elevationProfile: [
      { km: 0, altitudeMeters: 575, label: 'Nigdi' },
      { km: 25, altitudeMeters: 590, label: 'Talegaon' },
      { km: 45, altitudeMeters: 605, label: 'Kamshet' },
      { km: 62, altitudeMeters: 625, label: 'Lonavala' },
      { km: 95, altitudeMeters: 595, label: 'Talegaon Return' },
      { km: 124, altitudeMeters: 575, label: 'Nigdi Finish' },
    ],
    faqs: [
      {
        question: 'Are TT (time-trial) aero bars allowed in the pack?',
        answer: 'For safety reasons, aero clip-on bars must not be used while riding inside the peloton. You may only tuck into aero bars if you are pulling alone at the very front.',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'ride-mulshi-gravel-loop',
    slug: 'mulshi-gravel-lake-loop',
    title: 'Mulshi Lake Gravel & Backwaters Loop',
    subtitle: 'Off-the-beaten-path fire roads, rustic farm tracks, and turquoise lake shorelines',
    category: 'Gravel Adventures',
    difficulty: 'Intermediate',
    distanceKm: 84,
    elevationGainM: 640,
    estimatedDuration: '4 hrs 15 min',
    paceGuide: '19 – 23 km/h adventure pace',
    terrain: 'Gravel & Dirt',
    startingLocation: 'Chandani Chowk, Kothrud, Pune',
    endLocation: 'Mulshi Dam Overlook & return to Chandani Chowk',
    meetingTime: '5:30 AM (Rollout 5:45 AM)',
    scheduledDate: 'Monthly 2nd Saturday',
    feeNote: 'Free Community Adventure',
    coverGraphic: 'mulshi-gravel',
    gradientTheme: 'from-cyan-600/30 via-neutral-900 to-neutral-950',
    accentColor: '#06b6d4',
    summary:
      'Escape concrete jungles. Transition onto unpaved dirt trails, gravel fire tracks, and peaceful village backroads skirting the serene emerald waters of Mulshi Lake.',
    overview:
      'Gravel cycling is about the joy of getting dirty and exploring tranquil routes inaccessible to pure skinny-tire road bikes. We take scenic side-roads through Pirangut, detour onto scenic unpaved firebreaks, and ride right beside the tranquil reservoir.',
    routeDescription:
      'Chandani Chowk -> Bhugaon Lake -> Bhukum -> Male village dirt trail -> Mulshi Dam wall bypass -> Valane backwaters singletrack -> Kolvan loop -> Pirangut -> Chandani Chowk.',
    highlights: [
      'Unspoiled gravel trails away from highway noise and motor emissions',
      'Scenic photo halts at private lakeside meadows and bamboo groves',
      'Learn gravel handling techniques: weight balance, loose cornering, cadence',
      'Local organic sugarcane juice and roasted corn cob break',
    ],
    meetingInstructions:
      'Gather at the Chandani Chowk service lane near CCD / Shell station.',
    recommendedExperience:
      'Ideal for riders with gravel bikes, MTBs, or hybrids equipped with 35mm+ width tires.',
    requiredEquipment: [
      'Bicycle with minimum 35c tyres (semi-knobby tread recommended)',
      'Tubeless tyre plug kit (Dynaplug / bacon strips) or 2 spare tubes',
      'Cycling sunglasses with clear or amber photochromic lens for trail dust',
      'Two 750ml bottles + snack bars',
    ],
    safetyChecklist: [
      'Lower tyre pressure to 30-45 PSI for maximum traction on loose gravel',
      'Weight slightly back on downhill gravel descents',
      'Watch for cattle and farm equipment on narrow village trails',
    ],
    refreshmentInfo:
      'Sugarcane juice stop at Kolvan; lakeside breakfast at rustic Mulshi dhaba.',
    elevationProfile: [
      { km: 0, altitudeMeters: 620, label: 'Chandani Chowk' },
      { km: 18, altitudeMeters: 590, label: 'Bhukum' },
      { km: 42, altitudeMeters: 630, label: 'Mulshi Lake Rim' },
      { km: 60, altitudeMeters: 670, label: 'Kolvan Trail' },
      { km: 84, altitudeMeters: 620, label: 'Chandani Chowk' },
    ],
    faqs: [
      {
        question: 'Will 28mm road tires work on this route?',
        answer: 'We do not recommend 28mm slick tires. The gravel sections have sharp basalt stones and loose dirt where 35mm to 45mm tires provide much safer grip and puncture resistance.',
      },
    ],
  },
  {
    id: 'ride-saturday-breakfast-social',
    slug: 'saturday-breakfast-social',
    title: 'Saturday Breakfast Social & Green Roll',
    subtitle: 'Relaxed community cruise ending at Pune’s most beloved breakfast tables',
    category: 'Social & Breakfast',
    difficulty: 'Beginner',
    distanceKm: 28,
    elevationGainM: 120,
    estimatedDuration: '1 hr 30 min',
    paceGuide: '16 – 20 km/h (Conversational social pace)',
    terrain: 'City Roads',
    startingLocation: 'Bremen Chowk, Aundh, Pune',
    endLocation: 'Vaishali / Cafe Goodluck, FC Road',
    meetingTime: '6:15 AM (Rollout 6:30 AM)',
    scheduledDate: 'Every Saturday Morning',
    feeNote: 'Free (Pay for your own breakfast)',
    coverGraphic: 'breakfast-social',
    gradientTheme: 'from-yellow-500/30 via-neutral-900 to-neutral-950',
    accentColor: '#eab308',
    summary:
      'Where cycling meets genuine camaraderie. Meet fellow Pune cyclists, talk bikes, gear, and life, and enjoy South Indian dosas and filter coffee.',
    overview:
      'Cycling is best experienced with friends. Our Saturday Breakfast Social is our most welcoming and sociable weekly fixture. No egos, no aggressive surges, just relaxed smiles, fresh air, and deep conversation.',
    routeDescription:
      'Bremen Chowk Aundh -> University circular garden -> Pashan-Baner link road -> Baner hill foot -> Senapati Bapat Road -> Law College Road -> FC Road.',
    highlights: [
      '100% conversational pace: pedal while making lifelong cycling buddies',
      'Perfect first ride for brand new bike owners in Pune',
      'Club captains share tips on bike fitting, tyre care, and local route suggestions',
      'Warm family-style breakfast gathering at iconic Pune joints',
    ],
    meetingInstructions:
      'Meet outside Starbucks / Croma store near Bremen Chowk, Aundh. Look for the Pedal Tribe green flags.',
    recommendedExperience: 'Beginners, first-timers, casual riders, and families.',
    requiredEquipment: [
      'Any road-worthy bicycle in safe working order',
      'Helmet (mandatory on all club outings)',
      'Front light and rear reflector',
      'Water bottle',
    ],
    safetyChecklist: [
      'Stop at all traffic lights',
      'Respect pedestrians and morning joggers',
      'Maintain comfortable 1-bike length spacing',
    ],
    refreshmentInfo:
      'Legendary breakfast spread at Vaishali: Mysore Masala Dosa, Filter Coffee, and Upma.',
    elevationProfile: [
      { km: 0, altitudeMeters: 555, label: 'Aundh' },
      { km: 8, altitudeMeters: 565, label: 'Pashan' },
      { km: 18, altitudeMeters: 560, label: 'Baner' },
      { km: 28, altitudeMeters: 562, label: 'FC Road' },
    ],
    faqs: [
      {
        question: 'Can I bring my kids or teenagers?',
        answer: 'Yes! Riders aged 13 and above accompanied by a parent/guardian with helmets are warmly welcome.',
      },
    ],
  },
  {
    id: 'ride-bhor-ghat-century',
    slug: 'bhor-ghat-century-challenge',
    title: 'Bhor & Varandha Century 160K',
    subtitle: 'The grand Sahyadri endurance test: 160 kilometers of rolling Maharashtra countryside',
    category: 'Endurance Cycling',
    difficulty: 'Epic',
    distanceKm: 162,
    elevationGainM: 1480,
    estimatedDuration: '7 hrs 15 min',
    paceGuide: '24 – 28 km/h endurance paceline',
    terrain: 'Hilly Ghats',
    startingLocation: 'Swargate Nehru Stadium Gate, Pune',
    endLocation: 'Bhor Palace, Bhatghar Dam & Return to Swargate',
    meetingTime: '4:45 AM (Rollout 5:00 AM)',
    scheduledDate: 'Monthly 3rd Sunday',
    feeNote: '₹350 (Support Van, Energy Drinks, Midpoint Hot Lunch)',
    coverGraphic: 'bhor-century',
    gradientTheme: 'from-rose-600/30 via-neutral-900 to-neutral-950',
    accentColor: '#f43f5e',
    summary:
      'A true imperial century (100 miles / 160 km) pushing your stamina boundaries through the historical Bhor principality, majestic Bhatghar dam backwaters, and pristine countryside.',
    overview:
      'Ready to graduate to double metric endurance? This supported long-distance ride travels south from Pune down the Satara highway corridor before cutting deep into the scenic rustic backlands of Bhor. Features disciplined pacing blocks and continuous fueling support.',
    routeDescription:
      'Swargate -> Katraj old tunnel climb -> Shindewadi -> Shirwal -> Bhor town -> Bhatghar Dam reservoir road -> neck of Varandha Ghat foothills -> return loop via Saswad rollers -> Kondhwa -> Swargate.',
    highlights: [
      'Conquer Katraj Old Tunnel at dawn with majestic city lights behind you',
      'Historic Bhor Rajwada palace stop and scenic dam spillway views',
      'Supported with mobile mechanical support, electrolyte coolers, and lunch stop',
      'Official Pedal Tribe Century Finisher certificate and digital Strava badge',
    ],
    meetingInstructions:
      'Swargate Nehru Stadium main gate. Support vehicle will load rider backpacks from 4:30 AM.',
    recommendedExperience:
      'Experienced endurance riders who have successfully completed 100 km rides.',
    requiredEquipment: [
      'Fitted road or endurance gravel bicycle',
      'Two 800ml bottles + electrolyte tabs',
      'Nutrition: 4-6 energy bars or gels',
      'Rear radar or bright taillight with 8+ hour battery endurance',
      'Rain shell & sunscreen',
    ],
    safetyChecklist: [
      'Maintain hydration schedule: drink every 15 minutes without waiting for thirst',
      'Katraj old tunnel requires bright headlights (minimum 400 lumens)',
      'Follow ride marshal signals during highway crossings',
    ],
    refreshmentInfo:
      'Feed stations at KM 45 (Shirwal), KM 85 (Bhor Dam), and KM 125 (Saswad). Hot Maharashtrian lunch included in Bhor.',
    elevationProfile: [
      { km: 0, altitudeMeters: 560, label: 'Swargate' },
      { km: 16, altitudeMeters: 740, label: 'Katraj Tunnel' },
      { km: 55, altitudeMeters: 590, label: 'Shirwal' },
      { km: 82, altitudeMeters: 640, label: 'Bhor Dam' },
      { km: 125, altitudeMeters: 690, label: 'Saswad' },
      { km: 162, altitudeMeters: 560, label: 'Swargate' },
    ],
    faqs: [
      {
        question: 'Is there a time cut-off?',
        answer: 'We provide an 8.5-hour total window, which averages roughly 19 km/h including stops. The support vehicle stays with the final rider throughout.',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'ride-panshet-dam-countryside',
    slug: 'panshet-dam-countryside-cruise',
    title: 'Panshet Dam Countryside Cruise',
    subtitle: 'Rolling rustic Sahyadri roads along emerald lake shores and tranquil village orchards',
    category: 'Scenic Countryside',
    difficulty: 'Intermediate',
    distanceKm: 92,
    elevationGainM: 580,
    estimatedDuration: '4 hrs 15 min',
    paceGuide: '21 – 25 km/h group pace',
    terrain: 'Mixed Terrain',
    startingLocation: 'Rajaram Bridge, Sinhagad Road, Pune',
    endLocation: 'Panshet Boating Club & Return to Rajaram Bridge',
    meetingTime: '5:30 AM (Rollout 5:45 AM)',
    scheduledDate: 'Upcoming Sunday',
    feeNote: 'Free Community Ride',
    coverGraphic: 'panshet-cruise',
    gradientTheme: 'from-teal-600/30 via-neutral-900 to-neutral-950',
    accentColor: '#14b8a6',
    summary:
      'One of the most scenic road rides around Pune. Roll along Khadakwasla backwaters through Khanapur to the tranquil shores of Panshet and Varasgaon reservoirs.',
    overview:
      'Away from heavy highway traffic, the road to Panshet winds gently through quaint villages, mango orchards, and continuous lake views. Gentle rolling undulations keep your legs engaged without punishing mountain gradients.',
    routeDescription:
      'Rajaram Bridge -> Sinhagad Road -> Khadakwasla Dam promenade -> Donje fork -> Khanapur -> Gorhe Budruk -> Panshet Dam approach -> Boating jetty overlook -> Return via same scenic lakeside road.',
    highlights: [
      'Continuous lakeside road with cool breezes and mountain scenery',
      'Smooth rolling profile ideal for building endurance without extreme climbs',
      'Famous fresh Poha and Misal stop at Khanapur village square',
      'Regroup points at picturesque suspension bridges and scenic viewpoints',
    ],
    meetingInstructions:
      'Meet at Rajaram Bridge riverbank promenade. Arrive with tires topped up and bottles filled.',
    recommendedExperience:
      'Intermediate riders comfortable with 60-80 km distance.',
    requiredEquipment: [
      'Road, gravel, or hybrid bicycle',
      'Helmet, cycling gloves, and sunglasses',
      'Two water bottles and small snack',
      'Puncture kit with spare tube',
    ],
    safetyChecklist: [
      'Watch for stray cattle crossing village roads near Khanapur',
      'Keep left on narrow two-lane asphalt',
      'Use hand signals when approaching speed breakers',
    ],
    refreshmentInfo:
      'Village tea stalls at Khanapur; lakeside coconut water and breakfast at Panshet boating point.',
    elevationProfile: [
      { km: 0, altitudeMeters: 560, label: 'Rajaram Bridge' },
      { km: 15, altitudeMeters: 580, label: 'Khadakwasla' },
      { km: 32, altitudeMeters: 610, label: 'Khanapur' },
      { km: 46, altitudeMeters: 650, label: 'Panshet Dam' },
      { km: 70, altitudeMeters: 600, label: 'Khanapur Return' },
      { km: 92, altitudeMeters: 560, label: 'Rajaram Bridge' },
    ],
    faqs: [
      {
        question: 'Are there any steep hill climbs?',
        answer: 'The Panshet route consists mostly of gentle rolling hills (2% to 5% grade), with only one short 200-meter climb near the dam approach.',
      },
    ],
  },
  {
    id: 'ride-vetal-tekdi-mtb',
    slug: 'vetal-tekdi-mtb-trail-shred',
    title: 'Vetal Tekdi & ARAI Trail Shred',
    subtitle: 'Technical singletrack, rocky drops, and forest firebreaks right in the heart of Pune',
    category: 'Mountain Biking',
    difficulty: 'Intermediate',
    distanceKm: 24,
    elevationGainM: 420,
    estimatedDuration: '2 hrs',
    paceGuide: 'Technical trail pace with skill halts',
    terrain: 'Forest Singletrack',
    startingLocation: 'ARAI Hill Gate, Paud Road, Pune',
    endLocation: 'Vetal Tekdi Quarry & ARAI Summit',
    meetingTime: '6:00 AM (Rollout 6:15 AM)',
    scheduledDate: 'Every Tuesday & Thursday Morning',
    feeNote: 'Free Community Trail Ride',
    coverGraphic: 'vetal-mtb',
    gradientTheme: 'from-lime-600/30 via-neutral-900 to-neutral-950',
    accentColor: '#84cc16',
    summary:
      'Pune’s urban off-road paradise. Tackle punchy climbs, gravel berms, and natural rock gardens atop Pune’s highest geographical hill without leaving the city.',
    overview:
      'Vetal Tekdi is Pune’s premier mountain biking sanctuary. Led by experienced trail riders, we explore hidden singletracks, work on low-speed balance, bunny hops, line selection over roots, and loose gravel descents.',
    routeDescription:
      'ARAI gate -> paved climb to plateau -> quarry rim singletrack -> transmitter tower fire road -> west slope switchbacks -> forest technical loop -> hill temple overlook -> return to ARAI parking.',
    highlights: [
      'Technical singletrack riding within 10 minutes of central Pune',
      'Dedicated skills coaching: body positioning, braking modulation, and line choice',
      'Panoramic sunrise view of entire Pune city skyline from the quarry rim',
      'Fun, tight switchbacks surrounded by peacock calls and acacia trees',
    ],
    meetingInstructions:
      'Meet at the open parking ground near ARAI hill base entrance, Paud Road, Kothrud.',
    recommendedExperience:
      'Mountain bikes only (Hardtail or Full Suspension). Basic off-road comfort required.',
    requiredEquipment: [
      'Mountain bike with knobby tyres and working suspension fork',
      'Full-finger cycling gloves for branch protection',
      'Knee pads recommended for technical rock garden sections',
      'Certified mountain bike helmet with extended rear coverage',
    ],
    safetyChecklist: [
      'Always yield to early morning walkers and trail runners',
      'Keep fingers covering brake levers at all times on singletrack',
      'Do not skid or cause trail erosion on fragile hill slopes',
    ],
    refreshmentInfo:
      'Chai and poha at the local canteen near the ARAI gate after descending.',
    elevationProfile: [
      { km: 0, altitudeMeters: 580, label: 'ARAI Base' },
      { km: 4, altitudeMeters: 740, label: 'Vetal Plateau' },
      { km: 12, altitudeMeters: 780, label: 'Quarry Peak' },
      { km: 18, altitudeMeters: 710, label: 'West Switchbacks' },
      { km: 24, altitudeMeters: 580, label: 'ARAI Base' },
    ],
    faqs: [
      {
        question: 'Can I ride this with a hybrid bike?',
        answer: 'You can ride the main paved road and wide firebreak, but the technical singletracks require knobby MTB tyres and suspension for traction and control.',
      },
    ],
  },
  {
    id: 'ride-pune-midnight-heritage',
    slug: 'pune-midnight-heritage-ride',
    title: 'Pune Midnight Heritage Tour',
    subtitle: 'Illuminated Maratha landmarks, empty city streets, and night cycling magic',
    category: 'Night Rides',
    difficulty: 'Beginner',
    distanceKm: 32,
    elevationGainM: 90,
    estimatedDuration: '2 hrs 15 min',
    paceGuide: '16 – 19 km/h leisure night pace',
    terrain: 'City Roads',
    startingLocation: 'Shaniwar Wada Fort Main Gate, Pune',
    endLocation: 'JM Road / Deccan Gymkhana',
    meetingTime: '10:30 PM (Rollout 10:45 PM)',
    scheduledDate: 'Monthly Full Moon Weekend',
    feeNote: 'Free Community Ride (Safety lights inspected strictly)',
    coverGraphic: 'night-ride',
    gradientTheme: 'from-indigo-600/30 via-neutral-900 to-neutral-950',
    accentColor: '#6366f1',
    summary:
      'Experience the cultural heart of Pune like never before. Glide under streetlights past historic wadas, British-era bridges, and silent colonial avenues.',
    overview:
      'At midnight, Pune transforms into a tranquil, serene city. Accompanied by experienced marshals with high-visibility lighting and safety vests, this night ride stops at key historical landmarks with brief stories of Pune’s glorious past.',
    routeDescription:
      'Shaniwar Wada -> Lal Mahal -> Kasba Ganpati -> Nana Wada -> Z-Bridge -> Pune Railway Station heritage portico -> Camp St. Xavier’s -> MG Road -> Sambhaji Park -> JM Road.',
    highlights: [
      'Shaniwar Wada grand bastion illuminated in majestic floodlights',
      'Zero traffic stress across famous Pune bridges and bustling commercial hubs',
      'Ride with high-lumen bike lights creating a stunning glowing peloton',
      'Midnight chai and Bun Maska at all-night heritage tea stalls',
    ],
    meetingInstructions:
      'Gather at the Dilli Darwaza entrance of Shaniwar Wada. Bike lights must be turned on for mandatory lighting check before rollout.',
    recommendedExperience: 'Open to all riders comfortable riding on city streets.',
    requiredEquipment: [
      'Front white headlight (minimum 300 lumens)',
      'Rear high-intensity red blinking taillight',
      'Reflective sash or high-visibility fluorescent vest',
      'Helmet (mandatory at all times)',
    ],
    safetyChecklist: [
      'Riders without working front and rear lights will not be allowed to join',
      'Ride in tight group formation between the lead marshal and sweep vehicle',
      'Never break traffic signals even if intersections appear empty',
    ],
    refreshmentInfo:
      'Midnight chai and bakery biscuits at Camp; late-night cold coffee on JM Road.',
    elevationProfile: [
      { km: 0, altitudeMeters: 560, label: 'Shaniwar Wada' },
      { km: 10, altitudeMeters: 555, label: 'Pune Station' },
      { km: 20, altitudeMeters: 565, label: 'Camp' },
      { km: 32, altitudeMeters: 560, label: 'JM Road' },
    ],
    faqs: [
      {
        question: 'Is night riding safe in Pune?',
        answer: 'Safety is our absolute #1 priority. We ride in a tight pack of 30+ riders flanked by front and rear ride marshals equipped with radios and bright high-lumen lighting.',
      },
    ],
  },
  {
    id: 'ride-cadence-pelotons-masterclass',
    slug: 'cadence-pelotons-skills-masterclass',
    title: 'Peloton Drafting & Skills Masterclass',
    subtitle: 'Master the art of pack rotation, pacelines, cadence efficiency, and emergency braking',
    category: 'Skills Workshops',
    difficulty: 'Intermediate',
    distanceKm: 42,
    elevationGainM: 160,
    estimatedDuration: '2 hrs 30 min',
    paceGuide: 'Structured intervals & drill speeds',
    terrain: 'Smooth Tarmac',
    startingLocation: 'Symbiosis Sports Complex, Lavale Phata, Pune',
    endLocation: 'Lavale Service Loop & Regroup at CCD',
    meetingTime: '6:00 AM (Rollout 6:15 AM)',
    scheduledDate: 'First Saturday of every month',
    feeNote: 'Free Community Workshop',
    coverGraphic: 'skills-masterclass',
    gradientTheme: 'from-violet-600/30 via-neutral-900 to-neutral-950',
    accentColor: '#8b5cf6',
    summary:
      'Elevate your cycling from solo grinding to sleek peloton efficiency. Learn proper drafting etiquette, hand signals, steady echelon rotations, and gear cadence.',
    overview:
      'Taught by certified endurance cyclists and veteran road captains. Over 2.5 hours, we break down drafting aerodynamics (saving up to 30% of your energy), smooth paceline rotations, cadence optimization (85-95 RPM), and emergency hazard maneuvers.',
    routeDescription:
      'Lavale service corridor circuit with low vehicular traffic: 4 structured 10-km loops practicing single paceline, double paceline, rotating echelons, and emergency obstacle avoidance.',
    highlights: [
      'Interactive hands-on coaching on wide, clean service roads with zero traffic',
      'Learn how drafting saves up to 30% rider wattage at 28+ km/h speeds',
      'Practice smooth rolling pulls at the front and seamless drop-ins at the rear',
      'Bicycle cockpit fit analysis and tire pressure optimization tips',
    ],
    meetingInstructions:
      'Meet at the wide asphalt service road junction near Symbiosis Lavale Phata.',
    recommendedExperience:
      'Riders who own a road bike or geared hybrid looking to improve group speed and race readiness.',
    requiredEquipment: [
      'Road bike or hybrid with working gears',
      'Cycling computer or phone with cadence sensor (optional but recommended)',
      'Helmet and full cycling kit',
      'Water bottles with electrolytes',
    ],
    safetyChecklist: [
      'Maintain steady pedaling through turns; do not freewheel abruptly in a paceline',
      'Announce every gear shift and line deviation verbally',
      'Keep pedal stroke smooth without choppy stomping',
    ],
    refreshmentInfo:
      'Cold electrolyte refills and fresh bananas during drill breaks; post-workshop coffee discussion.',
    elevationProfile: [
      { km: 0, altitudeMeters: 570, label: 'Lavale Phata' },
      { km: 10, altitudeMeters: 585, label: 'Loop 1' },
      { km: 20, altitudeMeters: 575, label: 'Loop 2' },
      { km: 30, altitudeMeters: 585, label: 'Loop 3' },
      { km: 42, altitudeMeters: 570, label: 'Cooldown' },
    ],
    faqs: [
      {
        question: 'Will this make me faster?',
        answer: 'Yes! Riders consistently report feeling 20-30% less fatigued after learning proper drafting and high-cadence pedaling mechanics.',
      },
    ],
  },
  {
    id: 'ride-tour-de-mulshi-charity',
    slug: 'tour-de-mulshi-charity-ride',
    title: 'Tour de Mulshi Rural Schools Charity Ride',
    subtitle: 'Ride 75 km around scenic Mulshi Lake to raise bicycles and gear for rural village students',
    category: 'Charity Rides',
    difficulty: 'Intermediate',
    distanceKm: 76,
    elevationGainM: 520,
    estimatedDuration: '4 hrs',
    paceGuide: '20 – 24 km/h inclusive community pace',
    terrain: 'Mixed Terrain',
    startingLocation: 'Chandani Chowk, Kothrud, Pune',
    endLocation: 'Paud High School & Return to Chandani Chowk',
    meetingTime: '5:45 AM (Rollout 6:00 AM)',
    scheduledDate: 'Annual Community Fixture (Illustrative)',
    feeNote: 'Voluntary ₹500 Charity Contribution',
    coverGraphic: 'charity-ride',
    gradientTheme: 'from-amber-500/30 via-neutral-900 to-neutral-950',
    accentColor: '#f59e0b',
    summary:
      'Pedal with purpose. Join hands with rural community leaders to fund bicycles and maintenance kits for children who walk 6+ kilometers to school every day in the Mulshi valley.',
    overview:
      'Cycling changed our lives, and for school children in remote Western Ghats villages, a sturdy bicycle means the difference between finishing secondary school or dropping out. 100% of voluntary contributions go toward refurbished bicycles, lights, and puncture tools for local schools.',
    routeDescription:
      'Chandani Chowk -> Pirangut -> Paud village school courtyard -> Mulshi backwaters scenic viewpoint -> Paud town hall -> return to Chandani Chowk.',
    highlights: [
      'Direct community impact: meet the students and hand over school bicycles in person',
      'Celebratory finish-line certificate and commemorative Pedal Tribe badge',
      'Scenic Western Ghats route with supportive group marshals and water stations',
      'Traditional village welcome with dhol-tasha, fresh jaggery, and tender coconut water',
    ],
    meetingInstructions:
      'Gather at the open space beside Chandani Chowk petrol pump. Donation desk open from 5:15 AM.',
    recommendedExperience:
      'Open to road, hybrid, and mountain bike riders with moderate endurance fitness.',
    requiredEquipment: [
      'Well-maintained bicycle',
      'Helmet',
      'Water bottles',
      'Basic tool kit',
    ],
    safetyChecklist: [
      'Marshal-led convoy through Paud town center',
      'Follow volunteer signals at village junctions',
      'Stay alert for spectators and school children cheering along the road',
    ],
    refreshmentInfo:
      'Warm local breakfast and jaggery water hosted by village school committee at Paud; hydration stalls along the route.',
    elevationProfile: [
      { km: 0, altitudeMeters: 620, label: 'Chandani Chowk' },
      { km: 24, altitudeMeters: 580, label: 'Pirangut' },
      { km: 38, altitudeMeters: 590, label: 'Paud School' },
      { km: 54, altitudeMeters: 640, label: 'Mulshi Point' },
      { km: 76, altitudeMeters: 620, label: 'Chandani Chowk' },
    ],
    faqs: [
      {
        question: 'How are the bicycle donations handled?',
        answer: 'Pedal Tribe partners with registered local rural education trusts to verify student requirements and ensure bicycles receive bi-annual tune-ups.',
      },
    ],
  },
];
