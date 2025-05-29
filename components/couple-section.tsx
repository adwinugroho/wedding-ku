"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="py-20 px-6 relative min-h-[800px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-background.png"
          alt="Background"
          fill
          className="object-cover opacity-90"
          priority
          width={750}
          height={1334}
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
                src="/icon-zahra.png?height=256&width=256"
                alt="Lila"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-xl mb-2 text-[#9e7f66]">
              apt. Siti Fatimah Azahra, S.Farm
            </h3>
            <p className="mb-4">
              Daughter of <br /> Mr. Sidik Murbadianto <br /> Mrs. Indartriwati
            </p>
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
                src="/icon-adwin.png?height=256&width=256"
                alt="Adwin"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-xl mb-2 text-[#9e7f66]">
              Adwin Nugroho Siswoyo, S.Kom.
            </h3>
            <p className="mb-4">
              Son of <br /> Mr. Siswoyo <br /> Mrs. Siti Rukayah
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-[#f0e9e4] rounded-xl"
        >
          <p className="text-lg italic font-serif text-[#9e7f66]">
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
