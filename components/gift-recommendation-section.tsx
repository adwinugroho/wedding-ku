"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, ExternalLink, Loader2 } from "lucide-react";

interface GiftItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image_url: string;
  category: string;
  store_link: string;
  is_booked: boolean;
}

export default function GiftRecommendationSection() {
  const [giftItems, setGiftItems] = useState<GiftItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingItem, setUpdatingItem] = useState<number | null>(null);

  // Fetch gift items from database
  useEffect(() => {
    const fetchGiftItems = async () => {
      try {
        const response = await fetch("/api/gifts");
        const data = await response.json();
        if (data.status && data.data) {
          setGiftItems(data.data);
        } else {
          console.error("Failed to fetch gift items:", data.message);
        }
      } catch (error) {
        console.error("Error fetching gift items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGiftItems();
  }, []);

  const handleBookItem = async (itemId: number) => {
    setUpdatingItem(itemId);
    try {
      const currentItem = giftItems.find((item) => item.id === itemId);
      if (!currentItem) return;

      const newBookedStatus = !currentItem.is_booked;
      const response = await fetch("/api/gifts", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: itemId,
          is_booked: newBookedStatus,
        }),
      });

      const data = await response.json();
      if (data.status) {
        setGiftItems((prev) =>
          prev.map((item) =>
            item.id === itemId ? { ...item, is_booked: newBookedStatus } : item
          )
        );
      } else {
        console.error("Failed to update booked status:", data.message);
      }
    } catch (error) {
      console.error("Error updating booked status:", error);
    } finally {
      setUpdatingItem(null);
    }
  };

  const handleGetGift = (storeLink: string) => {
    window.open(storeLink, "_blank");
  };

  if (loading) {
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
        <div className="max-w-6xl mx-auto relative z-10 flex items-center justify-center min-h-[600px]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text" />
            <p className="text">Loading gift recommendations...</p>
          </div>
        </div>
      </section>
    );
  }

  if (giftItems.length === 0) {
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
        <div className="max-w-6xl mx-auto relative z-10 flex items-center justify-center min-h-[600px]">
          <div className="text-center">
            <p className="text-lg">
              No gift recommendations available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

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
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="luxurious-script text-4xl mb-6 text-[#9e7f66]">
            Gift Recommendations
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            We've curated a selection of gifts that would make our new home
            complete. Feel free to browse and choose something special for us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="px-12 md:px-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {giftItems.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="basis-full md:basis-1/2 xl:basis-1/2 px-2 flex"
                  >
                    <Card className="bg-white/95 backdrop-blur-md shadow-lg overflow-hidden flex flex-col h-full">
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={item.image_url || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        />
                        {item.is_booked && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="bg-white rounded-full p-2">
                              <Heart className="h-6 w-6 text-red-500 fill-current" />
                            </div>
                          </div>
                        )}
                        <div className="absolute top-2 right-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleBookItem(item.id)}
                            disabled={updatingItem === item.id}
                            className={`rounded-full p-1 ${
                              item.is_booked
                                ? "bg-red-500 text-white hover:bg-red-600"
                                : "bg-white/80 text-gray-600 hover:bg-white"
                            }`}
                          >
                            {updatingItem === item.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Heart
                                className={`h-4 w-4 ${
                                  item.is_booked ? "fill-current" : ""
                                }`}
                              />
                            )}
                          </Button>
                        </div>
                      </div>
                      <CardContent className="flex flex-col flex-1 p-4">
                        <div className="mb-2">
                          <span className="text-xs bg-[#9e7f66] text-white px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg md:text-xl text-[#9e7f66] mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-bold text-lg md:text-xl text-[#9e7f66]">
                            {item.price}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                          <Button
                            onClick={() => handleGetGift(item.store_link)}
                            disabled={
                              updatingItem === item.id || item.is_booked
                            }
                            className="flex-1 bg-[#9e7f66] hover:bg-[#8a6d57] text-white text-sm md:text-base px-3 py-2"
                          >
                            <ExternalLink className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="truncate">Get This Gift</span>
                          </Button>
                          <Button
                            onClick={() => handleBookItem(item.id)}
                            disabled={updatingItem === item.id}
                            variant="outline"
                            className={`flex-shrink-0 text-sm md:text-base px-3 py-2 ${
                              item.is_booked
                                ? "border-red-500 text-red-500 hover:bg-red-50"
                                : "border-[#9e7f66] text-[#9e7f66] hover:bg-[#9e7f66] hover:text-white"
                            }`}
                          >
                            {updatingItem === item.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : item.is_booked ? (
                              "Booked"
                            ) : (
                              "Book"
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white/90 hover:bg-white shadow-lg border-2 border-[#9e7f66]/20 text-[#9e7f66] hover:text-[#8a6d57] -left-6 md:-left-8" />
              <CarouselNext className="bg-white/90 hover:bg-white shadow-lg border-2 border-[#9e7f66]/20 text-[#9e7f66] hover:text-[#8a6d57] -right-6 md:-right-8" />
            </Carousel>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-white/95 backdrop-blur-md shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium text-[#9e7f66] mb-4">
                How it works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <div className="w-8 h-8 bg-[#9e7f66] text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    1
                  </div>
                  <p>Browse our curated gift selection</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-[#9e7f66] text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    2
                  </div>
                  <p>Click "Get This Gift" to purchase online</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-[#9e7f66] text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    3
                  </div>
                  <p>Mark items as booked (click "Book") to avoid duplicates</p>
                </div>
              </div>
              <p className="mt-4 text-xs italic text-gray-500 text-center">
                Accidentally clicked <span className="font-semibold">Book</span>
                ? Just click <span className="font-semibold">Booked</span> again
                to unmark the item.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
