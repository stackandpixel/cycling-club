import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SAMPLE_RIDES } from '../data/rides';
import { RideCard } from '../components/RideCard';
import { RideFilters, type FilterState } from '../components/RideFilters';
import { Compass, RotateCcw, Sparkles, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface RidesPageProps {
  onOpenJoinModal: (rideId?: string) => void;
}

export const RidesPage: React.FC<RidesPageProps> = ({ onOpenJoinModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedCategory: initialCategory,
    selectedDifficulty: 'All',
    distanceRange: 'All',
    sortBy: 'date',
  });

  // Sync searchParam changes if navigating from other links
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== filters.selectedCategory) {
      setFilters((prev) => ({ ...prev, selectedCategory: cat }));
    }
  }, [searchParams]);

  const handleReset = () => {
    setFilters({
      searchQuery: '',
      selectedCategory: 'All',
      selectedDifficulty: 'All',
      distanceRange: 'All',
      sortBy: 'date',
    });
    setSearchParams({});
  };

  // Filter and sort logic
  const filteredRides = useMemo(() => {
    return SAMPLE_RIDES.filter((ride) => {
      // 1. Text Search (title, summary, startingLocation, routeDescription)
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesText =
          ride.title.toLowerCase().includes(query) ||
          ride.summary.toLowerCase().includes(query) ||
          ride.startingLocation.toLowerCase().includes(query) ||
          ride.routeDescription.toLowerCase().includes(query) ||
          ride.category.toLowerCase().includes(query);
        if (!matchesText) return false;
      }

      // 2. Category
      if (filters.selectedCategory !== 'All' && filters.selectedCategory !== 'All Rides') {
        if (ride.category !== filters.selectedCategory) return false;
      }

      // 3. Difficulty
      if (filters.selectedDifficulty !== 'All') {
        if (ride.difficulty !== filters.selectedDifficulty) return false;
      }

      // 4. Distance Range
      if (filters.distanceRange !== 'All') {
        if (filters.distanceRange === 'under40' && ride.distanceKm >= 40) return false;
        if (filters.distanceRange === '40to80' && (ride.distanceKm < 40 || ride.distanceKm > 80)) return false;
        if (filters.distanceRange === '80to120' && (ride.distanceKm <= 80 || ride.distanceKm > 120)) return false;
        if (filters.distanceRange === 'over120' && ride.distanceKm <= 120) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'distanceAsc') {
        return a.distanceKm - b.distanceKm;
      }
      if (filters.sortBy === 'distanceDesc') {
        return b.distanceKm - a.distanceKm;
      }
      if (filters.sortBy === 'elevationDesc') {
        return b.elevationGainM - a.elevationGainM;
      }
      // default: 'date' - keep original order
      return 0;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-lime-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>PUNE RIDE DIRECTORY · 12 ACTIVE LISTINGS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-neutral-100 uppercase leading-none mb-4">
            Discover Group Rides
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            Explore Pune's complete calendar of weekend road pacelines, Western Ghats climbing epics, gravel trails, and beginner social rolls. Use the filters below to find the perfect pace for your weekend.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5 text-lime-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Direct WhatsApp RSVP
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Verified GPS Routes
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              No-Drop Support
            </span>
          </div>
        </div>
      </div>

      {/* Discovery Filters */}
      <RideFilters
        filters={filters}
        onChange={setFilters}
        onReset={handleReset}
        totalMatches={filteredRides.length}
      />

      {/* Rides Grid / Empty State */}
      {filteredRides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredRides.map((ride) => (
            <RideCard
              key={ride.id}
              ride={ride}
              onQuickJoin={(id) => onOpenJoinModal(id)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-12 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 mx-auto mb-4">
            <Compass className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold font-display text-neutral-100 mb-2">
            No Rides Match Your Filters
          </h3>

          <p className="text-xs text-neutral-400 leading-relaxed mb-6">
            We couldn't find any rides matching your selected category, difficulty, or distance criteria. Try broadening your criteria or reset all filters.
          </p>

          <button
            onClick={handleReset}
            className="py-3 px-6 rounded-xl bg-lime-400 hover:bg-lime-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Footnote on Sample Data */}
      <div className="text-center text-[11px] font-mono text-neutral-500 pt-8 border-t border-neutral-900">
        Note: All ride schedules, meeting locations, and distances are illustrative sample fixtures for Pune community demonstration.
      </div>
    </div>
  );
};
