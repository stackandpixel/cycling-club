import React from 'react';
import type { RideCategory, DifficultyLevel } from '../types/ride';
import { Search, Filter, X, ArrowUpDown } from 'lucide-react';

export interface FilterState {
  searchQuery: string;
  selectedCategory: string; // 'All' or specific category
  selectedDifficulty: string; // 'All' or specific difficulty
  distanceRange: string; // 'All' | 'under40' | '40to80' | '80to120' | 'over120'
  sortBy: 'date' | 'distanceAsc' | 'distanceDesc' | 'elevationDesc';
}

interface RideFiltersProps {
  filters: FilterState;
  onChange: (updated: FilterState) => void;
  onReset: () => void;
  totalMatches: number;
}

export const RideFilters: React.FC<RideFiltersProps> = ({
  filters,
  onChange,
  onReset,
  totalMatches,
}) => {
  const categories: string[] = [
    'All Rides',
    'Road Cycling',
    'Beginner Rides',
    'Endurance Cycling',
    'Mountain Biking',
    'Gravel Adventures',
    'Social & Breakfast',
    'Night Rides',
    'Skills Workshops',
  ];

  const difficulties: { label: string; value: string }[] = [
    { label: 'All Difficulties', value: 'All' },
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Advanced', value: 'Advanced' },
    { label: 'Epic / Century', value: 'Epic' },
  ];

  const distanceRanges: { label: string; value: string }[] = [
    { label: 'Any Distance', value: 'All' },
    { label: '< 40 km (City & Short)', value: 'under40' },
    { label: '40 – 80 km (Half-Metric)', value: '40to80' },
    { label: '80 – 120 km (Metric Century)', value: '80to120' },
    { label: '120+ km (Epic Enduro)', value: 'over120' },
  ];

  const sortOptions = [
    { label: 'Scheduled Date (Soonest)', value: 'date' },
    { label: 'Distance: Low to High', value: 'distanceAsc' },
    { label: 'Distance: High to Low', value: 'distanceDesc' },
    { label: 'Elevation: Most Climbing', value: 'elevationDesc' },
  ];

  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.selectedCategory !== 'All Rides' ||
    filters.selectedDifficulty !== 'All' ||
    filters.distanceRange !== 'All' ||
    filters.sortBy !== 'date';

  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 md:p-6 mb-8 backdrop-blur-md space-y-5">
      {/* Search Input & Sorter */}
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search by ride title, destination (e.g. Mulshi, Sinhagad, Tamhini, Camp)..."
            value={filters.searchQuery}
            onChange={(e) => onChange({ ...filters, searchQuery: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-lime-400 transition-colors"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onChange({ ...filters, searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          <div className="relative w-full md:w-auto">
            <select
              value={filters.sortBy}
              onChange={(e) => onChange({ ...filters, sortBy: e.target.value as any })}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-lime-400 cursor-pointer appearance-none pr-8 font-medium"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  Sort: {opt.label}
                </option>
              ))}
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
          </div>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="px-3.5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
              title="Reset all filters"
            >
              <X className="w-3.5 h-3.5 text-red-400" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2.5 flex items-center justify-between">
          <span>Ride Discipline</span>
          <span className="text-lime-400">{totalMatches} Rides Found</span>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const isSelected =
              filters.selectedCategory === cat || (cat === 'All Rides' && filters.selectedCategory === 'All');
            return (
              <button
                key={cat}
                onClick={() =>
                  onChange({
                    ...filters,
                    selectedCategory: cat === 'All Rides' ? 'All' : cat,
                  })
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-lime-400 text-neutral-950 shadow-md font-bold'
                    : 'bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dropdown Filters for Difficulty and Distance */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-800/60">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Difficulty Level
          </label>
          <select
            value={filters.selectedDifficulty}
            onChange={(e) => onChange({ ...filters, selectedDifficulty: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-lime-400 cursor-pointer"
          >
            {difficulties.map((diff) => (
              <option key={diff.value} value={diff.value}>
                {diff.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
            Distance Range
          </label>
          <select
            value={filters.distanceRange}
            onChange={(e) => onChange({ ...filters, distanceRange: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-lime-400 cursor-pointer"
          >
            {distanceRanges.map((dist) => (
              <option key={dist.value} value={dist.value}>
                {dist.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
