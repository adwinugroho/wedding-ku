"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function WeddingGiftSection() {
  return (
    <section className="py-20 px-6 relative min-h-[800px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-background-2.png"
          alt="Background"
          fill
          className="object-cover object-center opacity-90"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          quality={90}
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
            Wedding Gift
          </h2>
          <p className="text-lg text-[#d2cab5] max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you wish to give us a
            gift, here are our details.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* QR Code
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/95 backdrop-blur-md shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-[#9e7f66] mb-4">
                    Scan QR Code
                  </h3>
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                      src="/qr-code-2.png"
                      alt="QR Code"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Scan to transfer to BCA
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}

          {/* Bank Account & Address */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bank Account */}
            <Card className="bg-white/95 backdrop-blur-md shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-center font-medium text-[#9e7f66] mb-4">
                  Bank BRI
                </h3>
                <div className="space-y-2">
                  <p className="text-lg text-center">330801017259538</p>
                  <p className="text-sm text-gray-600 text-center">
                    a.n. Siti Fatimah Azahra
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-md shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-center font-medium text-[#9e7f66] mb-4">
                  Bank BCA
                </h3>
                <div className="space-y-2">
                  <p className="text-lg text-center">5235240685</p>
                  <p className="text-sm text-gray-600 text-center">
                    a.n. Adwin Nugroho Siswoyo
                  </p>
                </div>
                <br />
              </CardContent>
            </Card>

            {/* Home Address */}
            <Card className="bg-white/95 backdrop-blur-md shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-[#9e7f66] mb-4 text-center">
                  Home Address
                </h3>
                <div className="space-y-2">
                  <p className="font-medium text-center">Siti Fatimah Azahra</p>
                  <p className="text-sm text-center">
                    Jl. Pisangan Baru Utara No.18 (Gang Nambru simpangan belok
                    kiri, rumah pertama pagar hijau), Matraman, Jakarta Timur
                    <br />
                    DKI Jakarta, Indonesia
                    <br />
                    13110
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
