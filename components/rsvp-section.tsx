"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/lib/toast-store";

export default function RSVPSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    is_attending: false,
    guest_count: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "radio"
          ? value === "yes"
          : type === "number"
          ? parseInt(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/rsvp/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key-wedding": process.env.NEXT_PUBLIC_WEDDING_API_KEY || "",
        },
        body: JSON.stringify({
          ...formData,
          guest_count: parseInt(formData.guest_count.toString()),
        }),
      });

      const result = await response.json();
      console.log("API Response:", result); // Debug log

      if (result.status === true) {
        toast("RSVP submitted successfully", "success");
        setFormData({
          name: "",
          is_attending: false,
          guest_count: 1,
        });
      } else {
        throw new Error(result.message || "Failed to submit RSVP");
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      toast("Failed to submit RSVP", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-[#d3c5bb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e7f66]"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-sm font-medium">Will you attend?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="is_attending"
                    value="yes"
                    checked={formData.is_attending === true}
                    onChange={handleChange}
                    className="text-[#9e7f66]"
                    required
                  />
                  <span>Yes, I will attend</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="is_attending"
                    value="no"
                    checked={formData.is_attending === false}
                    onChange={handleChange}
                    className="text-[#9e7f66]"
                    required
                  />
                  <span>No, I cannot attend</span>
                </label>
              </div>
            </div>

            {formData.is_attending && (
              <div className="space-y-2 text-left">
                <label htmlFor="guest_count" className="text-sm font-medium">
                  Number of Guests
                </label>
                <select
                  id="guest_count"
                  name="guest_count"
                  value={formData.guest_count}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d3c5bb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e7f66]"
                  required
                >
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                </select>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[#9e7f66] hover:bg-[#8a6e58] text-white py-3 rounded-lg text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit RSVP"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
