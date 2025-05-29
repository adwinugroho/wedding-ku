"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

interface Wish {
  id: number;
  name: string;
  message: string;
  date: Date;
}

export default function WishesSection() {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: 1,
      name: "Hodi",
      message:
        "Congratulations on your special day! Wishing you a lifetime of love and happiness together.",
      date: new Date("2025-08-11"),
    },
    {
      id: 2,
      name: "Febri",
      message:
        "May your love continue to grow stronger with each passing day. Best wishes to both of you!",
      date: new Date("2025-08-10"),
    },
    {
      id: 3,
      name: "Aisha Rahman",
      message:
        "So happy for you both! May Allah bless your marriage and fill your lives with joy.",
      date: new Date("2025-08-09"),
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newWish: Wish = {
      id: wishes.length + 1,
      name: formData.name,
      message: formData.message,
      date: new Date(),
    };

    setWishes([newWish, ...wishes]);

    toast({
      title: "Wish Submitted",
      description: "Thank you for your lovely message!",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      message: "",
    });
  };

  return (
    <section className="py-20 px-6 relative min-h-[800px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-background.png"
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
            Send Your Wishes
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Share your blessings and wishes for our special day. Your messages
            will be cherished forever.
          </p>
        </motion.div>

        <div className="space-y-8">
          <Card className="max-w-md mx-auto bg-white/95 backdrop-blur-md shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="wish-name" className="text-[#9e7f66]">
                    Your Name
                  </Label>
                  <Input
                    id="wish-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="border-[#d3c5bb] focus:border-[#9e7f66]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wish-message" className="text-[#9e7f66]">
                    Your Message
                  </Label>
                  <Textarea
                    id="wish-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your wishes for the couple"
                    rows={4}
                    required
                    className="border-[#d3c5bb] focus:border-[#9e7f66]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#9e7f66] hover:bg-[#8a6e58] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Wishes
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 space-y-4">
            <h3 className="text-2xl font-serif mb-6 text-[#9e7f66] text-center">
              Messages from Loved Ones
            </h3>

            <div className="grid gap-4">
              {wishes.map((wish) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-left bg-white/95 backdrop-blur-md shadow-lg">
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-[#9e7f66]">
                            {wish.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {wish.date.toLocaleDateString()}
                          </p>
                        </div>
                        <p className="text-gray-600 italic">"{wish.message}"</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
