"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HotelsNearbySection() {
  return (
    <section className="py-20 px-6 relative min-h-[800px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-background.png"
          alt="Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="luxurious-script text-4xl mb-6 text-[#9e7f66]">
            Hotels Nearby
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            For your convenience, here are some hotels located near our wedding
            venue.
          </p>
        </motion.div>

        <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7933.045640361393!2d106.8810698385961!3d-6.19453380481605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotels!5e0!3m2!1sen!2sid!4v1749093665853!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
