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
import RSVPSection from "@/components/rsvp-section";
import { cn } from "@/lib/utils";

export default function WeddingInvitation() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Our Beloved Guest";
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Disable scrolling when envelope is closed
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  return (
    <main className="max-w-screen-sm mx-auto px-4 bg-[#f9f5f2] text-[#3c3c3c] min-h-screen">
      {/* Cover/Envelope */}
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
              src="/front-background.png"
              alt="Background"
              fill
              className="object-cover opacity-90"
              priority
              width={750}
              height={1334}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md mx-auto relative z-10"
          >
            <div className="relative w-32 h-32 mx-auto mb-14">
              <Image
                // src="/undraw_zoom-in_miok.svg?height=128&width=128"
                src="/ceco-720x1024.png"
                alt="Avatar"
                width={720}
                height={1024}
                className="object-contain"
              />
            </div>

            <h1 className="luxurious-script text-4xl mb-2 text-[#9e7f66]">
              Adwin
            </h1>
            <br />
            <h1 className="luxurious-script text-4xl mb-2 text-[#9e7f66]">&</h1>
            <br />
            <h1 className="luxurious-script text-4xl mb-2 text-[#9e7f66]">
              Zahra
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

      {/* Main Content */}
      <div
        className={cn(
          "transition-opacity duration-1000",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Header */}
        <header className="relative h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/section-background.png?height=1334&width=750"
              alt="Background"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-xl text-white"
            >
              <h2 className="text-xl uppercase tracking-widest">
                The Wedding Of
              </h2>
              <h1 className="luxurious-script text-5xl md:text-7xl mb-4">
                Adwin & Zahra
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

        {/* Couple Section */}
        <CoupleSection />

        {/* Event Details */}
        <EventDetails />

        {/* Gallery */}
        <Gallery />

        {/* Wishes Section */}
        <WishesSection />

        {/* Wedding Gift Section */}
        <WeddingGiftSection />

        {/* RSVP Section */}
        <RSVPSection />

        {/* Footer */}
        <footer className="py-12 px-6 bg-[#9e7f66] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="luxurious-script text-3xl mb-4">Adwin & Zahra</h2>
            <p className="mb-6">Thank you for being part of our special day</p>
            <p className="text-sm opacity-75">
              &copy; {new Date().getFullYear()} • Designed with love
            </p>
          </div>
        </footer>
      </div>

      {/* Music Player */}
      {isOpen && (
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      )}
    </main>
  );
}
