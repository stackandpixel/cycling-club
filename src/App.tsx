/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { JoinRideModal } from './components/JoinRideModal';

// Pages
import { HomePage } from './pages/HomePage';
import { RidesPage } from './pages/RidesPage';
import { RideDetailPage } from './pages/RideDetailPage';
import { RoutesPage } from './pages/RoutesPage';
import { EventsPage } from './pages/EventsPage';
import { MembershipPage } from './pages/MembershipPage';
import { GalleryPage } from './pages/GalleryPage';
import { SafetyPage } from './pages/SafetyPage';
import { AboutPage } from './pages/AboutPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedRideIdForModal, setSelectedRideIdForModal] = useState<string | undefined>(undefined);

  const handleOpenJoinModal = (rideId?: string) => {
    setSelectedRideIdForModal(rideId);
    setJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setJoinModalOpen(false);
    setSelectedRideIdForModal(undefined);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-lime-400 selection:text-black">
        {/* Navigation Bar */}
        <Navbar onOpenJoinModal={handleOpenJoinModal} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenJoinModal={handleOpenJoinModal} />} />
            <Route path="/rides" element={<RidesPage onOpenJoinModal={handleOpenJoinModal} />} />
            <Route path="/rides/:slug" element={<RideDetailPage onOpenJoinModal={handleOpenJoinModal} />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Fallback */}
            <Route path="*" element={<HomePage onOpenJoinModal={handleOpenJoinModal} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating WhatsApp Contact */}
        <FloatingWhatsApp />

        {/* Global Join a Ride / Membership Registration Modal */}
        <JoinRideModal
          isOpen={joinModalOpen}
          onClose={handleCloseJoinModal}
          preSelectedRideId={selectedRideIdForModal}
        />
      </div>
    </BrowserRouter>
  );
}
