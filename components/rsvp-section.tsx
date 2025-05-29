"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function RSVPSection() {
  return (
    <section className="py-20 px-6 relative min-h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/section-background.png')" }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="luxurious-script text-4xl mb-6 text-[#9e7f66]">
            RSVP
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            We would be honored to have you join us on our special day. Please
            let us know if you can attend.
          </p>
        </motion.div>

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
              <label className="text-sm font-medium">Will you attend?</label>
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
  );
}
