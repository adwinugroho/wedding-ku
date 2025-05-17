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
    <main className="relative min-h-screen bg-[#f9f5f2] text-[#3c3c3c] overflow-x-hidden">
      {/* Cover/Envelope */}
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f9f5f2] p-6 text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Wedding rings"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>

            <h1 className="font-serif text-4xl mb-2 text-[#9e7f66]">
              Zahra & Adwin
            </h1>
            <p className="text-lg mb-6">are getting married</p>

            <div className="mb-8 p-4 border border-[#d3c5bb] rounded-lg bg-white/50 backdrop-blur-sm">
              <p className="text-lg mb-2">Dear,</p>
              <p className="text-2xl font-medium text-[#9e7f66] mb-2">
                {guestName}
              </p>
              <p className="text-sm">
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
              src="/placeholder.svg?height=1080&width=1920"
              alt="Background"
              fill
              className="object-cover brightness-75"
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
              <h1 className="font-serif text-5xl md:text-7xl mb-4">
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

        {/* Couple Section */}
        <CoupleSection />

        {/* Event Details */}
        <EventDetails />

        {/* Gallery */}
        <Gallery />

        {/* RSVP Section */}
        <section className="py-20 px-6 bg-[#f0e9e4]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-8 text-[#9e7f66]">RSVP</h2>
            <p className="mb-8 text-lg">
              We would be honored to have you join us on our special day. Please
              let us know if you can attend.
            </p>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-[#d3c5bb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e7f66]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-[#d3c5bb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e7f66]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium">
                    Will you attend?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        className="text-[#9e7f66]"
                      />
                      <span>Yes, I will attend</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        className="text-[#9e7f66]"
                      />
                      <span>No, I cannot attend</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="guests" className="text-sm font-medium">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full p-3 border border-[#d3c5bb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e7f66]"
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                  </select>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message for the Couple (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-[#d3c5bb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e7f66]"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <Button className="w-full bg-[#9e7f66] hover:bg-[#8a6e58] text-white py-3 rounded-lg text-lg">
                  Submit RSVP
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-[#3c3c3c] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl mb-4">Zahra & Adwin</h2>
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
