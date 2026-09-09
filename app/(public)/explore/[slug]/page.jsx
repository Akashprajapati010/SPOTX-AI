"use client";

import EventCard from "@/components/event-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { CATEGORIES } from "@/lib/data";
import { parseLocationSlug } from "@/lib/location-utils";
import { Loader2, MapPin, Plus } from "lucide-react";
import Link from "next/link";
import { notFound, useParams, useRouter} from "next/navigation";
import React from "react";

const DynamicExplorePage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  // check if it's a valid catrgory
  const categoryInfo = CATEGORIES.find((cat) => cat.id === slug);
  const isCategory = !!categoryInfo;

  // if not a category, validate location
  const { city, state, isValid } = !isCategory
    ? parseLocationSlug(slug)
    : { city: null, state: null, isValid: false };

  // if it's not a vaild category and not a valid location, show 404
  if (!isCategory && !isValid) {
    notFound();
  }

   const { data: events, isLoading } = useConvexQuery(
    isCategory
      ? api.explore.getEventsByCategory
      : api.explore.getEventsByLocation,
    isCategory
      ? { category: slug, limit: 50 }
      : city && state
        ? { city, state, limit: 50 }
        : "skip"
    );

    // for adding events in three categories - ongoing, upcoming and finished based on the current date and the start and end date of the event

    const now = Date.now();

const upcoming = events?.filter(
  (e) => e.startDate > now
);

const ongoing = events?.filter(
  (e) => e.startDate <= now && e.endDate >= now
);

const finished = events?.filter(
  (e) => e.endDate < now
);

    const handleEventClick = (eventSlug) => {
      router.push(`/events/${eventSlug}`);
    };

     if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }

  if (isCategory) {
    return (
      <>
        <div className="pb-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">{categoryInfo.icon}</div>
            <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              {categoryInfo.label}
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              {categoryInfo.description}
            </p>
            </div>
          </div>

          {events && events.length > 0 && (
            <p className="text-muted-foreground">
              {events.length} {events.length === 1 ? "s" : ""} found
            </p>
          )}
        </div>

           {events && events.length > 0 ? (  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard
                  key={event._id}
                  event={event}
                  onClick={() => handleEventClick(event.slug)}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No events found in this category.
              </p>
          )}
      </>
    );
  }

  return (
   <>
      <div className="pb-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">📍</div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold ">Events in  <span className="text-purple-500">{city}</span></h1>
            <p className="text-lg text-muted-foreground mt-2">{state}, India</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="gap-2">
            <MapPin className="w-3 h-3" />
            {city}, {state}
          </Badge>
          {events && events.length > 0 && (
            <p className="text-muted-foreground">
              {events.length} event{events.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>
      </div>
            {/* change for divide the events on the basis of the date and show upcoming events first and past events in the end */}
            {/* {events && events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onClick={() => handleEventClick(event.slug)}
            />
          ))}
        </div>
      ) : ( */}

            {events && events.length > 0 ? (
  <>
    {/* 🔴 ONGOING */}
    {ongoing?.length > 0 && (
      <>
        <h2 className="text-2xl font-bold mb-4">🔴 Happening Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoing.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onClick={() => handleEventClick(event.slug)}
            />
          ))}
        </div>
      </>
    )}

    {/* ⏳ UPCOMING */}
    {upcoming?.length > 0 && (
      <>
        <h2 className="text-2xl font-bold mb-4 mt-10">⏳ Upcoming</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onClick={() => handleEventClick(event.slug)}
            />
          ))}
        </div>
      </>
    )}

    {/* ✅ PAST */}
    {finished?.length > 0 && (
      <>
        <h2 className="text-2xl font-bold mb-4 mt-10">✅ Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {finished.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onClick={() => handleEventClick(event.slug)}
            />
          ))}
        </div>
      </>
    )}
  </>
) : (
       <div className="flex items-center justify-center">
  <Card className="p-10 md:p-12 text-center max-w-md w-full shadow-lg border">
    <div className="space-y-4">
      
      <div className="text-6xl">📅</div>

      <h2 className="text-2xl md:text-3xl font-bold">
        No events in {city} yet
      </h2>

      <p className="text-muted-foreground">
        Be the first to create an event in {city}, {state} and start building your audience.
      </p>

      <Button asChild className="gap-2 mt-4">
        <Link href="/create-event">
          <Plus className="w-4 h-4" />
          Create Event
        </Link>
      </Button>

      <Button
        variant="outline"
        className="w-full mt-2"
        onClick={() => router.push("/explore")}
      >
        Explore Other Events
      </Button>

    </div>
  </Card>
</div>
      )}
    </>
  )
};

export default DynamicExplorePage;
