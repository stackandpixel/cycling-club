import React from 'react';

interface CyclingVisualCardProps {
  theme: string;
  title: string;
  category?: string;
  badge?: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | 'square' | 'banner';
  showTelemetry?: boolean;
}

export const CyclingVisualCard: React.FC<CyclingVisualCardProps> = ({
  theme,
  title,
  category,
  badge,
  className = '',
  aspectRatio = '16:9',
  showTelemetry = true,
}) => {
  const aspectClass =
    aspectRatio === '16:9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4:3'
      ? 'aspect-[4/3]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : 'aspect-[21/9] min-h-[220px]';

  // Render stylized SVG cycling art based on theme
  const renderArt = () => {
    switch (theme) {
      // 1. TAMHINI & MONSOON GHATS - GROUP OF INDIAN CYCLISTS IN SAHYADRI PASS
      case 'western-ghats':
      case 'ghats-fog':
      case 'monsoon-ghats':
        return (
          <svg viewBox="0 0 600 338" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="ghatSkyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#064e3b" />
                <stop offset="35%" stopColor="#042f2e" />
                <stop offset="70%" stopColor="#022c22" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>

              {/* Sunrise Glow behind Western Ghats */}
              <radialGradient id="sunGlow" cx="70%" cy="25%" r="60%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.25" />
                <stop offset="70%" stopColor="#10b981" stopOpacity="0.08" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>

              {/* Mountain mist */}
              <linearGradient id="ghatMist" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.02)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.18)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
              </linearGradient>

              {/* Wet Ghats Asphalt Reflection */}
              <linearGradient id="roadShine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c1917" />
                <stop offset="50%" stopColor="#292524" />
                <stop offset="100%" stopColor="#0c0a09" />
              </linearGradient>

              {/* Carbon Wheel Pattern */}
              <pattern id="carbonRim" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect width="10" height="10" fill="#18181b" />
                <circle cx="5" cy="5" r="4" fill="none" stroke="#27272a" strokeWidth="0.5" />
              </pattern>
            </defs>

            {/* Background Sky & Sunrise */}
            <rect width="600" height="338" fill="url(#ghatSkyGrad)" />
            <rect width="600" height="338" fill="url(#sunGlow)" />

            {/* Sun Disc */}
            <circle cx="430" cy="85" r="38" fill="#fef08a" opacity="0.85" filter="blur(2px)" />

            {/* Distant Sahyadri Peaks (Tamhini Ghat ridge) */}
            <path
              d="M0,170 Q90,90 220,135 T440,95 T600,120 L600,338 L0,338 Z"
              fill="#065f46"
              opacity="0.45"
            />
            {/* Mid Mountain Layer */}
            <path
              d="M0,195 Q130,135 280,170 T520,125 T600,150 L600,338 L0,338 Z"
              fill="#064e3b"
              opacity="0.75"
            />

            {/* Morning Valley Mist Clouds */}
            <ellipse cx="260" cy="175" rx="240" ry="24" fill="url(#ghatMist)" />
            <ellipse cx="440" cy="150" rx="190" ry="18" fill="url(#ghatMist)" />

            {/* Foreground Mountain Slope & Waterfall cascade */}
            <path d="M0,220 L160,250 L120,338 L0,338 Z" fill="#022c22" />
            <path d="M85,235 Q90,260 82,290 T88,338" stroke="#a7f3d0" strokeWidth="3" opacity="0.75" fill="none" />

            {/* Winding Western Ghats Mountain Asphalt Road */}
            <path
              d="M-20,320 C180,315 240,245 350,255 C460,265 520,215 620,210"
              stroke="#27272a"
              strokeWidth="48"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M-20,320 C180,315 240,245 350,255 C460,265 520,215 620,210"
              stroke="#18181b"
              strokeWidth="42"
              fill="none"
              strokeLinecap="round"
            />
            {/* White Road Edge Lines */}
            <path
              d="M-20,338 C180,333 240,263 350,273 C460,283 520,233 620,228"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Yellow Center Dashed Lane */}
            <path
              d="M-20,320 C180,315 240,245 350,255 C460,265 520,215 620,210"
              stroke="#ccff00"
              strokeWidth="2.5"
              strokeDasharray="14 10"
              fill="none"
            />

            {/* Indian Milestone: SH-60 Tamhini 14 KM */}
            <g transform="translate(140, 240) scale(0.85)">
              <rect x="0" y="8" width="22" height="26" rx="4" fill="#ffffff" stroke="#71717a" strokeWidth="1" />
              <path d="M0,8 Q11,0 22,8 Z" fill="#10b981" />
              <rect x="4" y="14" width="14" height="2" fill="#18181b" />
              <text x="11" y="24" fontSize="5" fill="#18181b" fontWeight="bold" textAnchor="middle" fontFamily="monospace">SH60</text>
              <text x="11" y="30" fontSize="4.5" fill="#18181b" textAnchor="middle" fontFamily="monospace">14K</text>
            </g>

            {/* GRANULAR GROUP OF INDIAN CYCLISTS (PELOTON IN FORMATION) */}
            {/* Rider 1: Lead Cyclist in Aero Position */}
            <g transform="translate(370, 215) scale(0.95)">
              {/* Rear Red Blinker Pulse */}
              <circle cx="16" cy="35" r="5" fill="#ef4444" opacity="0.4" />
              <circle cx="16" cy="35" r="2.5" fill="#ff0000" />
              {/* Bike Wheels with Deep Carbon Rims */}
              <circle cx="18" cy="40" r="14" stroke="#52525b" strokeWidth="2.5" fill="none" />
              <circle cx="56" cy="40" r="14" stroke="#52525b" strokeWidth="2.5" fill="none" />
              <circle cx="18" cy="40" r="11" stroke="#27272a" strokeWidth="3" fill="none" />
              <circle cx="56" cy="40" r="11" stroke="#27272a" strokeWidth="3" fill="none" />
              {/* Bike Frame: Lime & Matte Black */}
              <path d="M18,40 L34,40 L48,27 L32,27 Z" stroke="#ccff00" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
              <path d="M34,40 L31,22 L49,22 L56,40" stroke="#ccff00" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
              <line x1="49" y1="22" x2="52" y2="18" stroke="#a1a1aa" strokeWidth="2" /> {/* Stem & Drop Bars */}
              {/* Indian Rider Anatomy */}
              {/* Legs in pedaling stroke */}
              <path d="M30,22 L26,30 L32,38" stroke="#18181b" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M30,22 L36,32 L40,36" stroke="#27272a" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Torso & Jersey: Electric Lime & Charcoal */}
              <path d="M30,20 Q38,15 46,20" stroke="#84cc16" strokeWidth="6" strokeLinecap="round" fill="none" />
              {/* Arms reaching to drop handlebars */}
              <path d="M43,18 L48,22 L51,20" stroke="#713f12" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Head, Cycling Cap / Helmet & Sunglasses */}
              <circle cx="44" cy="11" r="5" fill="#582f0e" />
              <path d="M40,9 Q46,4 52,9 Z" fill="#ccff00" stroke="#18181b" strokeWidth="0.8" />
              <rect x="45" y="10" width="5" height="2" rx="0.5" fill="#000000" /> {/* Cycling eyewear */}
            </g>

            {/* Rider 2: Drafting Cyclist behind (Saffron/Orange Kit) */}
            <g transform="translate(325, 224) scale(0.92)">
              <circle cx="16" cy="35" r="2.5" fill="#ff0000" />
              <circle cx="18" cy="40" r="14" stroke="#52525b" strokeWidth="2.5" fill="none" />
              <circle cx="56" cy="40" r="14" stroke="#52525b" strokeWidth="2.5" fill="none" />
              <path d="M18,40 L34,40 L48,27 L32,27 Z" stroke="#f97316" strokeWidth="2.5" fill="none" />
              <path d="M34,40 L31,22 L49,22 L56,40" stroke="#f97316" strokeWidth="2.5" fill="none" />
              {/* Torso */}
              <path d="M30,20 Q38,15 46,20" stroke="#ea580c" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M43,18 L48,22 L51,20" stroke="#713f12" strokeWidth="2.5" fill="none" />
              <circle cx="44" cy="11" r="5" fill="#582f0e" />
              <path d="M40,9 Q46,4 52,9 Z" fill="#ffffff" stroke="#ea580c" strokeWidth="0.8" />
              <rect x="45" y="10" width="5" height="2" fill="#000000" />
            </g>

            {/* Rider 3: Third Cyclist in Paceline (Cyan/Blue Kit) */}
            <g transform="translate(280, 232) scale(0.88)">
              <circle cx="18" cy="40" r="14" stroke="#52525b" strokeWidth="2.2" fill="none" />
              <circle cx="56" cy="40" r="14" stroke="#52525b" strokeWidth="2.2" fill="none" />
              <path d="M18,40 L34,40 L48,27 L32,27 Z" stroke="#06b6d4" strokeWidth="2.2" fill="none" />
              <path d="M34,40 L31,22 L49,22 L56,40" stroke="#06b6d4" strokeWidth="2.2" fill="none" />
              <path d="M30,20 Q38,15 46,20" stroke="#0891b2" strokeWidth="5.5" strokeLinecap="round" fill="none" />
              <path d="M43,18 L48,22 L51,20" stroke="#582f0e" strokeWidth="2.2" fill="none" />
              <circle cx="44" cy="11" r="4.8" fill="#582f0e" />
              <path d="M40,9 Q46,4 52,9 Z" fill="#06b6d4" />
            </g>

            {/* Rider 4 & 5: Distant Paceline Riders */}
            <g transform="translate(470, 185) scale(0.65)" opacity="0.8">
              <circle cx="18" cy="40" r="12" stroke="#52525b" strokeWidth="2" fill="none" />
              <circle cx="52" cy="40" r="12" stroke="#52525b" strokeWidth="2" fill="none" />
              <path d="M18,40 L32,40 L44,27 L30,27 Z" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M30,20 Q36,15 44,20" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" fill="none" />
              <circle cx="42" cy="12" r="4.5" fill="#451a03" />
              <path d="M38,9 Q44,5 49,9 Z" fill="#22c55e" />
            </g>
          </svg>
        );

      // 2. SUNRISE CITY & PUNE URBAN HERITAGE RIDE
      case 'sunrise-city':
      case 'sunrise-ride':
      case 'beginner-smiles':
        return (
          <svg viewBox="0 0 600 338" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="puneSunriseSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#431407" />
                <stop offset="35%" stopColor="#7c2d12" />
                <stop offset="70%" stopColor="#c2410c" />
                <stop offset="95%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
            </defs>

            {/* Vibrant Pune Dawn Sky */}
            <rect width="600" height="338" fill="url(#puneSunriseSky)" />

            {/* Glowing Golden Sun rising over Pune University / Ganeshkhind */}
            <circle cx="300" cy="150" r="65" fill="#fef08a" opacity="0.9" />
            <circle cx="300" cy="150" r="95" fill="#f97316" opacity="0.25" />

            {/* Iconic Tree Canopy & Colonial University Arches */}
            <path
              d="M0,215 Q80,185 160,205 Q240,175 320,200 Q400,170 480,205 Q540,185 600,215 L600,338 L0,338 Z"
              fill="#18181b"
            />
            {/* Wide Tree-lined Boulevard Avenue */}
            <polygon points="260,205 340,205 520,338 80,338" fill="#27272a" />
            <line x1="300" y1="205" x2="300" y2="338" stroke="#facc15" strokeWidth="3" strokeDasharray="16 12" />

            {/* Granular Cyclists Riding Double File at Sunrise */}
            <g transform="translate(240, 235) scale(0.95)">
              {/* Left Rider (Young Indian Woman on Geared Hybrid) */}
              <circle cx="18" cy="40" r="14" stroke="#71717a" strokeWidth="2.5" fill="none" />
              <circle cx="56" cy="40" r="14" stroke="#71717a" strokeWidth="2.5" fill="none" />
              <path d="M18,40 L34,40 L48,27 L32,27 Z" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
              <path d="M34,40 L31,22 L49,22 L56,40" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
              {/* Rider with Ponytail & Bright Jersey */}
              <path d="M30,22 Q38,16 46,22" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M43,20 L49,24 L52,22" stroke="#582f0e" strokeWidth="2.5" fill="none" />
              <circle cx="44" cy="12" r="5" fill="#582f0e" />
              <path d="M40,10 Q46,5 52,10 Z" fill="#38bdf8" />
              <path d="M39,13 Q35,16 33,20" stroke="#18181b" strokeWidth="2" fill="none" /> {/* Hair ponytail */}
            </g>

            {/* Right Rider (Indian Road Cyclist smiling) */}
            <g transform="translate(315, 230) scale(0.95)">
              <circle cx="18" cy="40" r="14" stroke="#71717a" strokeWidth="2.5" fill="none" />
              <circle cx="56" cy="40" r="14" stroke="#71717a" strokeWidth="2.5" fill="none" />
              <path d="M18,40 L34,40 L48,27 L32,27 Z" stroke="#a3e635" strokeWidth="2.5" fill="none" />
              <path d="M34,40 L31,22 L49,22 L56,40" stroke="#a3e635" strokeWidth="2.5" fill="none" />
              <path d="M30,20 Q38,15 46,20" stroke="#84cc16" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M43,18 L48,22 L51,20" stroke="#713f12" strokeWidth="2.5" fill="none" />
              <circle cx="44" cy="11" r="5" fill="#582f0e" />
              <path d="M40,9 Q46,4 52,9 Z" fill="#18181b" stroke="#a3e635" strokeWidth="1" />
            </g>
          </svg>
        );

      // 3. MOUNTAIN BIKING - VETAL TEKDI & ARAI SINGLETRACK TRAIL
      case 'vetal-mtb':
      case 'mtb-rock':
      case 'forest':
        return (
          <svg viewBox="0 0 600 338" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="mtbForestSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14532d" />
                <stop offset="50%" stopColor="#15803d" />
                <stop offset="85%" stopColor="#1c1917" />
                <stop offset="100%" stopColor="#0c0a09" />
              </linearGradient>

              {/* Rocky Trail Texture */}
              <pattern id="trailDirt" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="20" height="20" fill="#292524" />
                <circle cx="4" cy="5" r="1.5" fill="#44403c" />
                <circle cx="15" cy="12" r="2" fill="#57534e" />
                <circle cx="10" cy="18" r="1" fill="#78716c" />
              </pattern>
            </defs>

            <rect width="600" height="338" fill="url(#mtbForestSky)" />

            {/* Pune Hill Ridgeline at Dawn */}
            <path d="M0,130 Q120,95 240,120 T480,85 T600,110 L600,338 L0,338 Z" fill="#166534" opacity="0.6" />
            {/* Acacia & Scrub Trees */}
            <polygon points="60,180 85,90 110,180" fill="#14532d" />
            <polygon points="140,170 170,80 200,170" fill="#166534" />
            <polygon points="460,190 490,100 520,190" fill="#14532d" />

            {/* Rocky Technical Descent Trail Slope */}
            <path
              d="M0,170 L180,150 L260,190 L380,140 L450,210 L600,165 L600,338 L0,338 Z"
              fill="url(#trailDirt)"
            />
            {/* Rock Steps & Drops */}
            <polygon points="260,190 310,175 320,225 250,215" fill="#57534e" />
            <polygon points="410,160 460,150 475,200 405,190" fill="#44403c" />

            {/* DUST PARTICLES & TRAIL FLOW */}
            {[50, 120, 220, 290, 360, 480].map((x, i) => (
              <circle key={i} cx={x} cy={230 + (i % 4) * 12} r={1.5 + (i % 3)} fill="#fbbf24" opacity="0.3" />
            ))}

            {/* Granular Mountain Biker in Action (Aggressive Trail Stance) */}
            <g transform="translate(290, 160) scale(1.05)">
              {/* Wide Knobby MTB Wheels with Disc Rotors */}
              <circle cx="18" cy="42" r="16" stroke="#44403c" strokeWidth="4" fill="none" />
              <circle cx="62" cy="42" r="16" stroke="#44403c" strokeWidth="4" fill="none" />
              {/* Knobby Tread Marks */}
              <circle cx="18" cy="42" r="18" stroke="#1c1917" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              <circle cx="62" cy="42" r="18" stroke="#1c1917" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              {/* Heavy Duty Full Suspension MTB Frame */}
              <path d="M18,42 L34,42 L48,27 L32,27 Z" stroke="#84cc16" strokeWidth="3.5" fill="none" strokeLinejoin="round" />
              <path d="M34,42 L32,22 L52,24 L62,42" stroke="#84cc16" strokeWidth="3.5" fill="none" strokeLinejoin="round" />
              <line x1="52" y1="24" x2="62" y2="42" stroke="#f59e0b" strokeWidth="2.5" /> {/* Front Suspension Fork */}
              <line x1="50" y1="20" x2="55" y2="17" stroke="#18181b" strokeWidth="4" /> {/* Wide Handlebars */}
              {/* Rider Standing on Pedals (Weight Back for Drop) */}
              <path d="M32,20 L30,32 L36,40" stroke="#18181b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M32,20 Q40,15 48,18" stroke="#15803d" strokeWidth="7" strokeLinecap="round" fill="none" />
              {/* Arm bracing wide handlebar */}
              <path d="M46,18 L52,22 L54,19" stroke="#713f12" strokeWidth="3" fill="none" />
              {/* Full Face / Extended Visor MTB Helmet */}
              <circle cx="45" cy="11" r="5" fill="#582f0e" />
              <polygon points="40,8 49,4 54,9 43,12" fill="#84cc16" stroke="#18181b" strokeWidth="1" />
              <rect x="47" y="10" width="5" height="2.5" fill="#f59e0b" /> {/* Goggles */}
            </g>
          </svg>
        );

      // 4. SINHAGAD FORT MOUNTAIN CLIMB
      case 'sinhagad-climb':
      case 'hills':
        return (
          <svg viewBox="0 0 600 338" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="sinhagadDawnSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#431407" />
                <stop offset="45%" stopColor="#78350f" />
                <stop offset="75%" stopColor="#1c1917" />
                <stop offset="100%" stopColor="#0c0a09" />
              </linearGradient>
            </defs>
            <rect width="600" height="338" fill="url(#sinhagadDawnSky)" />

            {/* Khadakwasla Dam Backwaters Reflection */}
            <path d="M0,240 Q150,225 300,235 T600,230 L600,338 L0,338 Z" fill="#0c4a6e" opacity="0.4" />

            {/* Steep Sahyadri Peak - Sinhagad Fort Silhouette */}
            <polygon points="300,50 560,338 40,338" fill="#292524" />
            <polygon points="300,50 440,338 160,338" fill="#44403c" opacity="0.65" />
            {/* Historic Maratha Stone Bastion / Kadelot Point on Peak */}
            <rect x="275" y="46" width="50" height="8" rx="1" fill="#f97316" />
            <polygon points="295,46 305,46 300,38" fill="#f97316" />

            {/* Switchback Hairpins Climbing up the Mountain */}
            <path
              d="M120,310 Q420,290 360,250 Q180,220 300,180 Q240,150 290,95 Q280,65 300,54"
              stroke="#fb923c"
              strokeWidth="5"
              strokeDasharray="8 6"
              fill="none"
            />

            {/* Cyclist Powering Up a 12% Gradient Ramp */}
            <g transform="translate(265, 175) scale(0.95)">
              <circle cx="18" cy="40" r="13" stroke="#71717a" strokeWidth="2.2" fill="none" />
              <circle cx="54" cy="40" r="13" stroke="#71717a" strokeWidth="2.2" fill="none" />
              <path d="M18,40 L34,40 L46,27 L32,27 Z" stroke="#f97316" strokeWidth="2.2" fill="none" />
              <path d="M34,40 L31,22 L47,22 L54,40" stroke="#f97316" strokeWidth="2.2" fill="none" />
              {/* Indian Cyclist Standing out of the Saddle (Dancing on Pedals) */}
              <path d="M32,18 L34,28 L38,36" stroke="#18181b" strokeWidth="3.5" fill="none" />
              <path d="M32,18 Q38,12 46,18" stroke="#f97316" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M44,16 L48,22 L50,19" stroke="#713f12" strokeWidth="2.5" fill="none" />
              <circle cx="43" cy="9" r="4.8" fill="#582f0e" />
              <path d="M39,7 Q45,3 50,7 Z" fill="#ffffff" />
            </g>
          </svg>
        );

      // 5. HIGH-SPEED PACELINE & OLD MUMBAI-PUNE HIGHWAY (LONAVALA)
      case 'lonavala-highway':
      case 'paceline-aero':
        return (
          <svg viewBox="0 0 600 338" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="speedSky" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#022c22" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
            </defs>
            <rect width="600" height="338" fill="url(#speedSky)" />

            {/* Aerodynamic Speed Motion Lines */}
            {[-30, 20, 70, 120, 170, 220, 270].map((y, i) => (
              <line
                key={i}
                x1="0"
                y1={y}
                x2="600"
                y2={y + 35}
                stroke="rgba(163, 230, 53, 0.2)"
                strokeWidth="1.5"
                strokeDasharray="60 30"
              />
            ))}

            {/* Wide National Highway Asphalt (NH48) */}
            <polygon points="160,338 270,110 330,110 440,338" fill="#18181b" />
            <line x1="300" y1="110" x2="300" y2="338" stroke="#a3e635" strokeWidth="3.5" strokeDasharray="18 12" />

            {/* 3 Indian Roadies in Rotating Paceline Formation */}
            {[0, 55, 110].map((offset, i) => {
              const kitColors = ['#84cc16', '#38bdf8', '#f97316'];
              return (
                <g key={i} transform={`translate(${240 + i * 22}, ${210 - offset * 0.45}) scale(${0.95 - i * 0.08})`}>
                  <circle cx="18" cy="40" r="14" stroke="#71717a" strokeWidth="2.5" fill="none" />
                  <circle cx="56" cy="40" r="14" stroke="#71717a" strokeWidth="2.5" fill="none" />
                  <path d="M18,40 L34,40 L48,27 L32,27 Z" stroke={kitColors[i]} strokeWidth="2.5" fill="none" />
                  <path d="M34,40 L31,22 L49,22 L56,40" stroke={kitColors[i]} strokeWidth="2.5" fill="none" />
                  <path d="M30,20 Q38,14 46,20" stroke={kitColors[i]} strokeWidth="6" strokeLinecap="round" fill="none" />
                  <path d="M43,18 L48,22 L51,20" stroke="#713f12" strokeWidth="2.5" fill="none" />
                  <circle cx="44" cy="11" r="5" fill="#582f0e" />
                  <path d="M40,9 Q46,4 52,9 Z" fill="#ffffff" stroke={kitColors[i]} strokeWidth="1" />
                </g>
              );
            })}
          </svg>
        );

      // 6. MULSHI GRAVEL & LAKESIDE ADVENTURE
      case 'mulshi-gravel':
      case 'lake':
        return (
          <svg viewBox="0 0 600 338" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="lakeWaterGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#083344" />
                <stop offset="50%" stopColor="#0e7490" />
                <stop offset="100%" stopColor="#042f2e" />
              </linearGradient>
            </defs>
            <rect width="600" height="338" fill="url(#lakeWaterGrad)" />

            {/* Sahyadri Mountains framing Mulshi Reservoir */}
            <path d="M0,140 Q150,90 300,120 T600,95 L600,338 L0,338 Z" fill="#0f766e" opacity="0.6" />
            <ellipse cx="300" cy="160" rx="250" ry="20" fill="rgba(255,255,255,0.08)" />

            {/* Water Waves */}
            <path d="M0,200 Q150,195 300,200 T600,198 L600,338 L0,338 Z" fill="#083344" />

            {/* Lakeside Gravel Dirt Track */}
            <path
              d="M0,250 C120,235 220,270 360,255 C480,240 540,260 600,255 L600,338 L0,338 Z"
              fill="#292524"
            />
            {/* Gravel Pebbles Texture */}
            {[50, 110, 170, 240, 310, 380, 450, 520].map((x, i) => (
              <circle key={i} cx={x} cy={280 + (i % 4) * 8} r={2} fill="#78716c" />
            ))}

            {/* Indian Gravel Rider with Bikepacking Bags */}
            <g transform="translate(320, 215) scale(0.95)">
              <circle cx="18" cy="40" r="15" stroke="#78716c" strokeWidth="3" fill="none" />
              <circle cx="58" cy="40" r="15" stroke="#78716c" strokeWidth="3" fill="none" />
              {/* Frame & Bikepacking Frame Bag */}
              <polygon points="25,38 34,40 46,28 32,28" fill="#1c1917" stroke="#06b6d4" strokeWidth="2" />
              <path d="M34,40 L31,22 L49,22 L58,40" stroke="#06b6d4" strokeWidth="2.5" fill="none" />
              {/* Rider with Flannel/Adventure Jersey & Camelbak */}
              <path d="M30,20 Q38,15 46,20" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M43,18 L48,22 L51,20" stroke="#713f12" strokeWidth="2.5" fill="none" />
              <circle cx="44" cy="11" r="5" fill="#582f0e" />
              <path d="M40,9 Q46,4 52,9 Z" fill="#f59e0b" />
            </g>
          </svg>
        );

      // 7. PUNE MIDNIGHT HERITAGE & SHANIWAR WADA NIGHT RIDE
      case 'night-ride':
      case 'night-lights':
      case 'night-bastion':
        return (
          <svg viewBox="0 0 600 338" className="w-full h-full object-cover">
            <rect width="600" height="338" fill="#030712" />

            {/* Full Moon & Stars */}
            <circle cx="480" cy="70" r="28" fill="#fef08a" opacity="0.9" filter="blur(1px)" />
            {[40, 90, 160, 230, 310, 390, 540].map((x, i) => (
              <circle key={i} cx={x} cy={30 + (i * 19) % 80} r={1.5} fill="#ffffff" opacity="0.8" />
            ))}

            {/* Historic Maratha Shaniwar Wada Bastion Fortress Gates */}
            <polygon points="120,240 120,130 150,115 190,130 230,115 260,130 260,240" fill="#111827" />
            {/* Grand Wooden Fort Gate Arch */}
            <path d="M165,240 L165,170 Q190,150 215,170 L215,240 Z" fill="#1f2937" stroke="#374151" strokeWidth="2" />

            {/* City Street with Streetlamp glow */}
            <polygon points="60,338 200,240 400,240 540,338" fill="#18181b" />

            {/* High-Lumen Headlight Beams Piercing Night Dark */}
            <polygon points="380,260 580,210 580,310" fill="rgba(204, 255, 0, 0.22)" />
            <polygon points="310,265 520,220 520,320" fill="rgba(204, 255, 0, 0.18)" />

            {/* Indian Night Cyclists with Reflective Sashes */}
            <g transform="translate(340, 225) scale(0.95)">
              <circle cx="56" cy="40" r="4" fill="#ccff00" /> {/* Glowing Headlight */}
              <circle cx="16" cy="35" r="3" fill="#ef4444" /> {/* Blinking Red Tail-light */}
              <circle cx="18" cy="40" r="14" stroke="#52525b" strokeWidth="2.5" fill="none" />
              <circle cx="56" cy="40" r="14" stroke="#52525b" strokeWidth="2.5" fill="none" />
              <path d="M18,40 L34,40 L48,27 L32,27 Z" stroke="#e4e4e7" strokeWidth="2.5" fill="none" />
              <path d="M34,40 L31,22 L49,22 L56,40" stroke="#e4e4e7" strokeWidth="2.5" fill="none" />
              {/* Torso with High-Visibility Fluorescent Neon Sash */}
              <path d="M30,20 Q38,15 46,20" stroke="#18181b" strokeWidth="6" strokeLinecap="round" fill="none" />
              <line x1="33" y1="16" x2="43" y2="24" stroke="#ccff00" strokeWidth="2.5" /> {/* Fluorescent Sash */}
              <circle cx="44" cy="11" r="5" fill="#582f0e" />
              <path d="M40,9 Q46,4 52,9 Z" fill="#ccff00" />
            </g>
          </svg>
        );

      // 8. COCKPIT GEAR & GPS TELEMETRY MACRO
      case 'cockpit-macro':
      case 'drivetrain-macro':
      case 'gear':
        return (
          <svg viewBox="0 0 600 338" className="w-full h-full object-cover">
            <rect width="600" height="338" fill="#09090b" />
            {/* Precision Carbon Weave Pattern */}
            <defs>
              <pattern id="carbonMacro" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="10" height="10" fill="#18181b" />
                <rect x="10" y="10" width="10" height="10" fill="#18181b" />
                <rect x="10" width="10" height="10" fill="#09090b" />
                <rect y="10" width="10" height="10" fill="#09090b" />
              </pattern>
            </defs>
            <rect width="600" height="338" fill="url(#carbonMacro)" opacity="0.65" />

            {/* Aerodynamic Integrated Drop Handlebars */}
            <path
              d="M60,165 Q300,90 540,165 Q510,270 435,290"
              stroke="#52525b"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
            {/* Bar Tape Texture */}
            <path
              d="M70,175 Q300,105 530,175"
              stroke="#ccff00"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
              opacity="0.6"
            />

            {/* GPS Cycling Computer Mounted Out Front */}
            <g transform="translate(240, 110)">
              <rect x="0" y="0" width="120" height="85" rx="14" fill="#09090b" stroke="#ccff00" strokeWidth="3" />
              <rect x="8" y="8" width="104" height="69" rx="8" fill="#18181b" />

              {/* Telemetry data on screen */}
              <text x="60" y="32" fill="#ccff00" fontSize="20" textAnchor="middle" fontWeight="bold" fontFamily="monospace">
                31.8 <tspan fontSize="11">km/h</tspan>
              </text>
              <line x1="16" y1="42" x2="104" y2="42" stroke="#27272a" strokeWidth="1" />
              <text x="24" y="58" fill="#ffffff" fontSize="10" fontFamily="monospace">
                HR: 154
              </text>
              <text x="96" y="58" fill="#38bdf8" fontSize="10" textAnchor="end" fontFamily="monospace">
                CAD: 92
              </text>
              <text x="60" y="70" fill="#a1a1aa" fontSize="9" textAnchor="middle" fontFamily="monospace">
                PUNE · TAMHINI 118K
              </text>
            </g>
          </svg>
        );

      // Default sports visual
      default:
        return (
          <svg viewBox="0 0 600 338" className="w-full h-full object-cover">
            <rect width="600" height="338" fill="#171717" />
            <path d="M0,240 Q150,150 300,195 T600,135 L600,338 L0,338 Z" fill="#262626" />
            <path d="M0,300 Q225,255 600,270" stroke="#ccff00" strokeWidth="5" fill="none" strokeDasharray="8 6" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800/80 group ${aspectClass} ${className}`}>
      {renderArt()}

      {/* Vignette & Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent pointer-events-none" />

      {/* Top Badges */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        {category && (
          <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md bg-neutral-950/85 backdrop-blur-md text-neutral-200 border border-neutral-800 shadow-sm">
            {category}
          </span>
        )}
        {badge && (
          <span className="px-2.5 py-1 text-[11px] font-black tracking-wider uppercase rounded-md bg-lime-400 text-neutral-950 shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* Live Telemetry Pill when enabled */}
      {showTelemetry && (
        <div className="absolute top-3 right-3 hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-[10px] font-mono text-lime-400 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          <span>SQUAD CADENCE · 90 RPM</span>
        </div>
      )}

      {/* Bottom Title Label */}
      <div className="absolute bottom-3 left-3 right-3 pointer-events-none z-10">
        <h4 className="text-sm md:text-base font-bold text-neutral-100 drop-shadow-md line-clamp-1 group-hover:text-lime-300 transition-colors">
          {title}
        </h4>
      </div>
    </div>
  );
};
