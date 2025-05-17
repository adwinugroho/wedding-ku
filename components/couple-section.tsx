"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl mb-6 text-[#9e7f66]">
            Our Love Story
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite. We are
            excited to celebrate our special day with our family and friends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full border-4 border-[#d3c5bb]">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Lila"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-3xl mb-2 text-[#9e7f66]">
              Siti Fatimah Azahra
            </h3>
            <p className="mb-4">
              Daughter of Mr. Sidik Murbadianto & Mrs. Indartriwati
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9e7f66] hover:text-[#8a6e58]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full border-4 border-[#d3c5bb]">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Adwin"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-3xl mb-2 text-[#9e7f66]">
              Adwin Nugroho Siswoyo
            </h3>
            <p className="mb-4">Son of Mr. Siswoyo & Mrs. Siti Rukayah</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9e7f66] hover:text-[#8a6e58]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-[#f0e9e4] rounded-xl"
        >
          <p className="text-xl italic font-serif text-[#9e7f66]">
            "And of His signs is that He created for you from yourselves mates
            that you may find tranquility in them; and He placed between you
            affection and mercy. Indeed in that are signs for a people who give
            thought."
          </p>
          <p className="mt-4 text-sm">Ar-Rum 30:21</p>
        </motion.div>
      </div>
    </section>
  );
}
