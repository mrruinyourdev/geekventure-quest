import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Star, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import tourEsports from "@/assets/tour-esports.jpg";

export default function TourDetail() {
  const { id } = useParams();

  // In a real app, fetch tour data by ID
  const tour = {
    id: Number(id),
    image: tourEsports,
    title: "Worlds Championship Finals",
    type: "Esports",
    location: "Seoul, South Korea",
    date: "Nov 2-5, 2025",
    duration: "4 Days / 3 Nights",
    price: "$3,299",
    spots: "5 spots left",
    rating: 4.9,
    reviews: 127,
    description:
      "Experience the pinnacle of competitive gaming at the League of Legends World Championship Finals. This all-inclusive premium package includes VIP arena seating, exclusive team meet-and-greets, luxury accommodation, and guided tours of Seoul's gaming culture hotspots.",
    included: [
      "VIP Finals Ticket (Premium Seating)",
      "3 Nights at 5-Star Hotel (Double Occupancy)",
      "Daily Breakfast & Select Meals",
      "Airport Transfers & Local Transportation",
      "Professional Gaming Tour Guide",
      "Exclusive Team Meet & Greet Session",
      "Official Championship Merchandise",
      "Photo Opportunities with Trophy",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        activities: ["Airport pickup", "Hotel check-in", "Welcome dinner with group", "Evening Seoul gaming district tour"],
      },
      {
        day: 2,
        title: "Semifinals Day",
        activities: ["Breakfast at hotel", "Pre-match VIP lounge access", "Semifinals matches (all day)", "Post-match analysis session"],
      },
      {
        day: 3,
        title: "Finals Day",
        activities: ["Early breakfast", "VIP arena access", "Grand Finals match", "Team meet & greet", "Championship celebration"],
      },
      {
        day: 4,
        title: "Departure",
        activities: ["Hotel checkout", "Optional shopping tour", "Airport transfer", "Farewell"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container">
            <Badge variant="secondary" className="mb-4 text-base py-1 px-3">
              {tour.type}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="font-semibold text-foreground">{tour.rating}</span>
                <span>({tour.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12 px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Tour Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Date</div>
                      <div className="font-medium">{tour.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                      <div className="font-medium">{tour.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">Availability</div>
                      <div className="font-medium text-accent">{tour.spots}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-accent fill-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                      <div className="font-medium">{tour.rating} / 5.0</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {tour.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-bold">Tour Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="relative pl-8 pb-6 border-l-2 border-border last:pb-0">
                      <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Day {day.day}</Badge>
                          <h3 className="font-bold">{day.title}</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {day.activities.map((activity, idx) => (
                            <li key={idx}>• {activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="border-primary/50 bg-card/50 sticky top-24 glow-primary">
              <CardContent className="p-6 space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Starting from</div>
                  <div className="text-4xl font-bold text-primary">{tour.price}</div>
                  <div className="text-sm text-muted-foreground mt-1">per person</div>
                </div>

                <div className="space-y-3">
                  <Button asChild variant="hero" size="lg" className="w-full">
                    <Link to={`/checkout/${tour.id}`}>Book Now</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Contact Us
                  </Button>
                </div>

                <div className="pt-4 border-t border-border space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Free cancellation</span>
                    <span className="font-medium">Up to 30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Instant confirmation</span>
                    <span className="font-medium text-accent">✓ Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Group discounts</span>
                    <span className="font-medium">4+ travelers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
