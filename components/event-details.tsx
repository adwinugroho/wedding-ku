"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventDetails() {
  const events = [
    {
      title: "Akad Nikah",
      date: "September 06, 2025",
      time: "09:00 - 10:00",
      location: "Aula SMK Negeri 26 Jakarta",
      address:
        "Jl. Balai Pustaka Baru I No.2, RT.2/RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
      mapUrl: "https://maps.app.goo.gl/Evr9EyLYNEvyXYRQ9",
      icon: "/flower.png",
    },
    {
      title: "Wedding Reception",
      date: "September 06, 2025",
      time: "11:00 - 13:00",
      location: "Aula SMK Negeri 26 Jakarta",
      address:
        "Jl. Balai Pustaka Baru I No.2, RT.2/RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
      mapUrl: "https://maps.app.goo.gl/Evr9EyLYNEvyXYRQ9",
      icon: "/wedding-ring.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#f0e9e4] relative min-h-[800px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/section-background.png')" }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="luxurious-script text-4xl mb-6 text-[#9e7f66]">
            Wedding Events
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            We are excited to celebrate our special day with you. Here are the
            details of our wedding events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="flex justify-center mb-6">
                {event.icon.startsWith("/") ? (
                  <img
                    src={event.icon}
                    alt={`${event.title} icon`}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-4xl">{event.icon}</span>
                )}
              </div>
              <h3 className="luxurious-script text-2xl mb-4 text-[#9e7f66]">
                {event.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 mt-0.5 text-[#9e7f66]" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p>{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 text-[#9e7f66]" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p>{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-[#9e7f66]" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p>{event.location}</p>
                    <p className="text-sm text-gray-600">{event.address}</p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-[#9e7f66] text-[#9e7f66] hover:bg-[#9e7f66] hover:text-white"
                onClick={() => window.open(event.mapUrl, "_blank")}
              >
                <MapPin className="w-4 h-4 mr-2" />
                View Map
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
