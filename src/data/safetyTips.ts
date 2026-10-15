export interface SafetySection {
  id: string;
  title: string;
  summary: string;
  badge: string;
  iconName: string;
  points: { title: string; detail: string }[];
}

export const SAFETY_RESOURCES: SafetySection[] = [
  {
    id: 'sec-m-check',
    title: 'The 2-Minute Pre-Ride M-Check',
    summary: 'Perform this essential pre-flight inspection before every single rollout to prevent mid-ride mechanical failures.',
    badge: 'Crucial Routine',
    iconName: 'Wrench',
    points: [
      {
        title: 'Front Hub & Wheel',
        detail: 'Ensure quick-release skewer or thru-axle is clamped tight. Check tire sidewall for cuts and inflate to recommended pressure (Road: 70-90 PSI, Hybrid: 50-60 PSI, MTB: 25-35 PSI).',
      },
      {
        title: 'Brakes & Headset',
        detail: 'Squeeze both brake levers firmly. The levers should never touch handlebars. Rock the bike forward/back to test for headset play or loose fork bearings.',
      },
      {
        title: 'Cranks & Bottom Bracket',
        detail: 'Spin the pedals. Check that crank arms have zero lateral wobble. Ensure chain is lubricated and free of grit.',
      },
      {
        title: 'Seatpost & Saddle',
        detail: 'Verify seatpost bolt is torqued correctly. Saddle must not twist when moderate force is applied by hand.',
      },
      {
        title: 'Rear Wheel & Derailleur',
        detail: 'Check rear skewer tightness. Shift through gears to ensure derailleur hanger isn’t bent into rear spokes.',
      },
    ],
  },
  {
    id: 'sec-group-etiquette',
    title: 'Group Paceline & Road Etiquette',
    summary: 'Riding in a tight pack requires predictable habits, mutual trust, and clear communication.',
    badge: 'Pack Harmony',
    iconName: 'Users',
    points: [
      {
        title: 'Ride Predictably & Hold Your Line',
        detail: 'Never swerve abruptly or slam brakes without warning. Minor lateral adjustments should be gentle and smooth so riders behind can react.',
      },
      {
        title: 'No Wheel Overlap',
        detail: 'Never let your front wheel overlap the rear wheel of the cyclist ahead of you. If they swerve to avoid a stone, overlapping wheels lead to crashes.',
      },
      {
        title: 'Vocalize & Signal Road Hazards',
        detail: 'Point down and shout: “Pothole left!”, “Gravel right!”, “Glass!”, “Speed breaker!”, “Car up!” (oncoming) or “Car back!” (approaching from behind).',
      },
      {
        title: 'Smooth Front Pulls',
        detail: 'When rotating to the front of a paceline, match the pack speed rather than surging ahead. When your turn is finished, flick your elbow and rotate cleanly to the back.',
      },
    ],
  },
  {
    id: 'sec-hydration-fueling',
    title: 'Hydration & Nutrition Strategy',
    summary: 'In the Indian climate, dehydration impairs reaction time and causes sudden muscular cramping.',
    badge: 'Peak Energy',
    iconName: 'Droplets',
    points: [
      {
        title: 'The 15-Minute Rule',
        detail: 'Take small sips of water or electrolyte fluid every 15 minutes. If you wait until you feel thirsty, you are already 2% dehydrated.',
      },
      {
        title: 'Electrolytes Over Pure Water',
        detail: 'For rides lasting longer than 60 minutes in Maharashtra’s humidity, replace lost sodium and potassium with ORS, Enerzal, or electrolyte tablets.',
      },
      {
        title: 'On-the-Bike Fueling',
        detail: 'Aim for 30–60 grams of easily digestible carbohydrates per hour (bananas, dates, chikki, energy bars) on rides over 2 hours.',
      },
      {
        title: 'Post-Ride Recovery Window',
        detail: 'Consume 20-25g of protein and carbohydrates within 45 minutes of finishing your ride to repair muscle fibers and replenish glycogen.',
      },
    ],
  },
  {
    id: 'sec-what-to-carry',
    title: 'What to Carry in Your Saddle Bag',
    summary: 'Self-reliance is the mark of a seasoned rider. Never leave home without these essentials.',
    badge: 'Emergency Kit',
    iconName: 'PackageCheck',
    points: [
      {
        title: 'Two Spare Tubes & Tyre Levers',
        detail: 'Ensure valve length matches your wheel rim depth. Never rely on borrowing a tube from someone else.',
      },
      {
        title: 'Mini Pump / CO2 Cartridge',
        detail: 'A reliable high-pressure mini pump mounted to bottle cage or stored in saddle bag.',
      },
      {
        title: 'Multi-Tool with Chain Breaker',
        detail: 'Hex keys (3, 4, 5, 6 mm), Torx T25, flathead/Phillips screwdriver, and a master chain quick-link.',
      },
      {
        title: 'Emergency Cash, UPI & ID Card',
        detail: 'Carry emergency contact details, blood group card, and cash for rural stops where UPI QR codes have poor network connectivity.',
      },
    ],
  },
  {
    id: 'sec-road-safety-rules',
    title: 'Indian Road Safety & Visibility Mandate',
    summary: 'Defensive riding and high-contrast visibility save lives on public roads.',
    badge: 'Legal & Safety',
    iconName: 'ShieldAlert',
    points: [
      {
        title: 'Daylight Running Lights (DTRL)',
        detail: 'Use a flashing front white light and pulsing rear red tail light even in bright morning daylight. Studies prove daytime flashers reduce rear collisions by over 30%.',
      },
      {
        title: 'Strict Helmet Fastening',
        detail: 'Ensure helmet sits level (two finger-widths above eyebrows) and the chinstrap is snug enough that only one finger fits underneath.',
      },
      {
        title: 'Obey Traffic Signals',
        detail: 'Pedal Tribe riders strictly respect red lights and traffic signals. Running signals harms the entire cycling community’s reputation.',
      },
      {
        title: 'Caution at Intersections & Blind U-Turns',
        detail: 'Slow down and establish visual eye contact with vehicle drivers entering from side roads or making sudden U-turns across Pune highways.',
      },
    ],
  },
];
