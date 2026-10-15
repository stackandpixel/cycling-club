import React, { useState } from 'react';
import type { ElevationPoint } from '../types/ride';
import { Mountain, ArrowUpRight, TrendingUp } from 'lucide-react';

interface RouteElevationChartProps {
  profile: ElevationPoint[];
  distanceKm: number;
  elevationGainM: number;
  accentColor?: string;
}

export const RouteElevationChart: React.FC<RouteElevationChartProps> = ({
  profile,
  distanceKm,
  elevationGainM,
  accentColor = '#a3e635', // Electric lime
}) => {
  const [activePointIndex, setActivePointIndex] = useState<number | null>(null);

  if (!profile || profile.length < 2) {
    return (
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 text-center text-neutral-400">
        <Mountain className="w-8 h-8 mx-auto mb-2 text-neutral-600" />
        <p className="text-sm">Elevation profile data is illustrative and in preparation.</p>
      </div>
    );
  }

  // Calculate min and max altitude
  const altitudes = profile.map((p) => p.altitudeMeters);
  const minAlt = Math.max(0, Math.min(...altitudes) - 50);
  const maxAlt = Math.max(...altitudes) + 80;
  const altRange = maxAlt - minAlt || 1;

  const width = 800;
  const height = 240;
  const paddingX = 40;
  const paddingTop = 30;
  const paddingBottom = 40;

  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingTop - paddingBottom;

  // Coordinate mapping
  const points = profile.map((point) => {
    const x = paddingX + (point.km / distanceKm) * chartWidth;
    const y = paddingTop + chartHeight - ((point.altitudeMeters - minAlt) / altRange) * chartHeight;
    return { ...point, x, y };
  });

  // Build SVG path
  const pathD = points.reduce((acc, pt, idx) => {
    if (idx === 0) return `M ${pt.x} ${pt.y}`;
    // Catmull-rom or smooth cubic curve
    const prev = points[idx - 1];
    const cpx1 = prev.x + (pt.x - prev.x) / 2;
    const cpy1 = prev.y;
    const cpx2 = prev.x + (pt.x - prev.x) / 2;
    const cpy2 = pt.y;
    return `${acc} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${pt.x} ${pt.y}`;
  }, '');

  // Fill area under curve
  const firstPt = points[0];
  const lastPt = points[points.length - 1];
  const baselineY = height - paddingBottom;
  const fillD = `${pathD} L ${lastPt.x} ${baselineY} L ${firstPt.x} ${baselineY} Z`;

  const activePoint = activePointIndex !== null ? points[activePointIndex] : points[points.length - 1];

  return (
    <div className="bg-neutral-900/80 border border-neutral-800/80 rounded-2xl p-5 md:p-6 backdrop-blur-md relative overflow-hidden">
      {/* Top Header Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-neutral-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
            <h4 className="text-xs font-bold tracking-widest text-lime-400 uppercase">
              Route Topography & Elevation
            </h4>
          </div>
          <p className="text-sm text-neutral-400 mt-0.5">
            Interactive elevation gradient profile across {distanceKm} km
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-neutral-950/80 border border-neutral-800 px-3.5 py-1.5 rounded-lg flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-lime-400" />
            <div className="text-right">
              <span className="text-xs text-neutral-400 block leading-none">Elevation Gain</span>
              <span className="text-sm font-bold text-neutral-100">+{elevationGainM}m</span>
            </div>
          </div>

          <div className="bg-neutral-950/80 border border-neutral-800 px-3.5 py-1.5 rounded-lg flex items-center gap-2">
            <Mountain className="w-4 h-4 text-emerald-400" />
            <div className="text-right">
              <span className="text-xs text-neutral-400 block leading-none">Max Altitude</span>
              <span className="text-sm font-bold text-neutral-100">{Math.max(...altitudes)}m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Point Floating Tooltip */}
      {activePoint && (
        <div className="mb-3 px-3 py-2 bg-neutral-950/90 border border-lime-400/30 rounded-lg inline-flex items-center gap-3 text-xs shadow-lg">
          <span className="inline-flex items-center gap-1 font-semibold text-lime-400">
            <ArrowUpRight className="w-3.5 h-3.5" />
            {activePoint.label || `KM ${activePoint.km}`}
          </span>
          <span className="text-neutral-300">
            Distance: <strong className="text-neutral-100">{activePoint.km} km</strong>
          </span>
          <span className="text-neutral-300">
            Altitude: <strong className="text-neutral-100">{activePoint.altitudeMeters}m</strong> ASL
          </span>
        </div>
      )}

      {/* SVG Canvas */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[500px]">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto select-none overflow-visible">
            <defs>
              <linearGradient id="elevationGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.35" />
                <stop offset="70%" stopColor={accentColor} stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
              </linearGradient>

              <pattern id="gridLines" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Background grid */}
            <rect x={paddingX} y={paddingTop} width={chartWidth} height={chartHeight} fill="url(#gridLines)" />

            {/* Horizontal elevation guide lines */}
            {[0.25, 0.5, 0.75].map((fraction, i) => {
              const yPos = paddingTop + chartHeight * fraction;
              const altValue = Math.round(maxAlt - fraction * altRange);
              return (
                <g key={i}>
                  <line
                    x1={paddingX}
                    y1={yPos}
                    x2={width - paddingX}
                    y2={yPos}
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={paddingX - 8}
                    y={yPos + 4}
                    fill="#737373"
                    fontSize="10"
                    textAnchor="end"
                    fontFamily="monospace"
                  >
                    {altValue}m
                  </text>
                </g>
              );
            })}

            {/* Area fill */}
            <path d={fillD} fill="url(#elevationGrad)" />

            {/* Stroke line */}
            <path
              d={pathD}
              fill="none"
              stroke={accentColor}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Waypoint markers */}
            {points.map((pt, idx) => {
              const isHovered = activePointIndex === idx;
              return (
                <g
                  key={idx}
                  className="cursor-pointer transition-all duration-150"
                  onMouseEnter={() => setActivePointIndex(idx)}
                >
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isHovered ? 7 : 4}
                    fill={isHovered ? '#ffffff' : accentColor}
                    stroke="#0a0a0a"
                    strokeWidth="2.5"
                  />
                  {pt.label && (
                    <text
                      x={pt.x}
                      y={height - paddingBottom + 18}
                      fill={isHovered ? '#ffffff' : '#a3a3a3'}
                      fontSize="10"
                      textAnchor="middle"
                      fontWeight={isHovered ? 'bold' : 'normal'}
                      className="transition-colors"
                    >
                      {pt.km}k
                    </text>
                  )}
                </g>
              );
            })}

            {/* Baseline */}
            <line
              x1={paddingX}
              y1={baselineY}
              x2={width - paddingX}
              y2={baselineY}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-neutral-500 mt-2 font-mono">
        <span>0 km · Start</span>
        <span>Hover or tap waypoints to inspect altitude</span>
        <span>{distanceKm} km · Finish</span>
      </div>
    </div>
  );
};
