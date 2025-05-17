"use client";

import { useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export default function MusicPlayer({
  isPlaying,
  setIsPlaying,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(
      "/niki.mp3" // Corrected path
    );
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#9e7f66] text-white shadow-lg hover:bg-[#8a6e58] transition-colors duration-300"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
    </button>
  );
}
