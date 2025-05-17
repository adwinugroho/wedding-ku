"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

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
      name: "Sarah Johnson",
      message:
        "Congratulations on your special day! Wishing you a lifetime of love and happiness together.",
      date: new Date("2023-11-15"),
    },
    {
      id: 2,
      name: "Michael Chen",
      message:
        "May your love continue to grow stronger with each passing day. Best wishes to both of you!",
      date: new Date("2023-11-14"),
    },
    {
      id: 3,
      name: "Aisha Rahman",
      message:
        "So happy for you both! May Allah bless your marriage and fill your lives with joy.",
      date: new Date("2023-11-13"),
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
    <div className="space-y-8">
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wish-name">Your Name</Label>
              <Input
                id="wish-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="wish-message">Your Message</Label>
              <Textarea
                id="wish-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your wishes for the couple"
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
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
        <h3 className="text-2xl font-serif mb-6">Messages from Loved Ones</h3>

        <div className="grid gap-4">
          {wishes.map((wish) => (
            <Card key={wish.id} className="text-left">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{wish.name}</h4>
                    <p className="text-xs text-gray-500">
                      {wish.date.toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-gray-600 italic">"{wish.message}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
