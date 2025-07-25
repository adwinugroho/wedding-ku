"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CoupleSection from "@/components/couple-section";
import EventDetails from "@/components/event-details";
import Gallery from "@/components/gallery";
import MusicPlayer from "@/components/music-player";
import Countdown from "@/components/countdown";
import WishesSection from "@/components/wishes-section";
import WeddingGiftSection from "@/components/wedding-gift-section";
import GiftRecommendationSection from "@/components/gift-recommendation-section";
import RSVPSection from "@/components/rsvp-section";
import HotelsNearbySection from "@/components/hotels-nearby-section";
import { cn } from "@/lib/utils";

export default function WeddingInvitation() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Our Beloved Guest";
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (!isOpen) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  return (
    <main className="relative min-h-screen flex">
      {/* Static Left Side (Only on Desktop) */}
      <div className="hidden md:block md:w-3/5 h-screen fixed left-0 top-0 z-0">
        <Image
          src="/image458.png"
          alt="Left Side Background"
          fill
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right Scrollable Content */}
      <div className="w-full md:w-2/5 md:ml-auto bg-[#f9f5f2] text-[#3c3c3c] overflow-y-auto relative z-10 min-h-screen">
        {/* Cover / Amplop */}
        {!isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f9f5f2] p-6 text-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/front-background-portrait.png"
                alt="Background"
                fill
                className="object-cover md:object-contain h-full w-full md:w-auto"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-md mx-auto relative z-10"
            >
              <div className="relative w-32 h-48 sm:w-40 sm:h-60 md:w-48 md:h-72 lg:w-56 lg:h-80 xl:w-64 xl:h-96 mx-auto mb-8 overflow-hidden">
                <Image
                  src="/ceco-720x1024.png"
                  alt="Avatar"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h1 className="luxurious-script text-4xl mb-8 text-[#9e7f66]">
                Zahra & Adwin
              </h1>
              <p className="text-lg mb-6 text-[#9e7f66]">are getting married</p>

              <div className="mb-8 p-4 border border-[#d3c5bb] rounded-lg bg-white">
                <p className="text-lg mb-2 text-[#9e7f66]">Dear,</p>
                <p className="text-2xl font-medium text-[#9e7f66] mb-2">
                  {guestName}
                </p>
                <p className="text-sm text-[#9e7f66]">
                  You are cordially invited to our wedding celebration
                </p>
              </div>

              <Button
                onClick={handleOpenInvitation}
                className="bg-[#9e7f66] hover:bg-[#8a6e58] text-white px-8 py-6 rounded-full text-lg"
              >
                Open Invitation
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Main Invitation Content */}
        <div
          className={cn(
            "transition-opacity duration-1000",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Hero Section */}
          <header className="relative h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/section-background.png"
                alt="Background"
                fill
                className="object-cover opacity-90 w-full h-full"
                priority
              />
            </div>

            <div className="relative justify-center mb-8 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-4 bg-[#800000] p-8 rounded-xl text-[#9e7f66]"
              >
                <h2 className="text-xl uppercase tracking-widest">
                  The Wedding Of
                </h2>
                <h1 className="luxurious-script text-5xl md:text-7xl mb-4">
                  Zahra & Adwin
                </h1>
                <p className="text-xl mb-8">We are getting married</p>

                <div className="flex justify-center">
                  <Countdown targetDate="2025-09-06T00:00:00Z" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-8"
            >
              <div className="animate-bounce">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M12 19L5 12M12 19L19 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          </header>

          {/* Content Sections */}
          <CoupleSection />
          <EventDetails />
          <Gallery />
          <WishesSection />
          <WeddingGiftSection />
          <GiftRecommendationSection />
          <RSVPSection />
          <HotelsNearbySection />

          {/* Footer */}
          <footer className="py-12 px-6 bg-[#800000] text-[#9e7f66] text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="luxurious-script text-3xl mb-4">Zahra & Adwin</h2>
              <p className="mb-6">
                Thank you for being part of our special day
              </p>
              <p className="text-sm opacity-75 mb-4">
                &copy; {new Date().getFullYear()} • Designed with love
              </p>
              <a
                href="https://cryppy.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg opacity-75 hover:opacity-100 transition-opacity underline"
              >
                cryppy.xyz
              </a>
            </div>
          </footer>
        </div>

        {/* Music Player */}
        {isOpen && (
          <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        )}
      </div>
    </main>
  );
}
