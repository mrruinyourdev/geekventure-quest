import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Star, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import tourEsports from "@/assets/paris.png";

export default function TourDetail() {
  const { id } = useParams();

  // In a real app, fetch tour data by ID
  const tours = [
  {
    id: 1,
    image: tourLOL,
    title: "League of Legends Worlds 2025 Tokyo",
    type: "Esports",
    location: "Tokyo, Japan",
    date: "Oct 10-15, 2025",
    duration: "6 Days / 5 Nights",
    price: "$3,899",
    spots: "8 spots left",
    rating: 4.8,
    reviews: 201,
    description:
      "Feel the hype of Worlds 2025 in Tokyo with premium arena access, exclusive fan experiences, and tours to top gaming districts like Akihabara and Shibuya.",
    included: [
      "Premium Worlds Finals Ticket",
      "5-Night 4-Star Hotel Stay",
      "Airport Transfers",
      "Daily Breakfast & 2 Group Dinners",
      "Tokyo Gaming Culture Tour",
      "Exclusive Riot Merch Pack",
      "Professional Tour Guide",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Welcome", activities: ["Airport pickup", "Hotel check-in", "Akihabara night walk"] },
      { day: 2, title: "Group Stage Day 1", activities: ["Breakfast", "Arena matches", "Free time"] },
      { day: 3, title: "Sightseeing & Matches", activities: ["Shibuya & Harajuku tour", "Evening matches"] },
      { day: 4, title: "Finals Day", activities: ["Finals ceremony", "Merch shopping", "Group celebration"] },
      { day: 5, title: "Free Day", activities: ["Optional theme park", "Local food hunt"] },
      { day: 6, title: "Departure", activities: ["Check-out", "Airport drop-off"] },
    ],
  },
  {
    id: 2,
    image: tourEsports,
    title: "VALORANT Champions 2025 Paris",
    type: "Esports",
    location: "Paris, France",
    date: "Nov 2-5, 2025",
    duration: "4 Days / 3 Nights",
    price: "$3,299",
    spots: "5 spots left",
    rating: 4.9,
    reviews: 127,
    description:
      "Be part of the most electrifying VALORANT event of the year with front-row VIP access, player meet-ups, and iconic Paris experiences.",
    included: [
      "VIP Finals Ticket",
      "3-Night 5-Star Hotel Stay",
      "Daily Breakfast",
      "Seine River Dinner Cruise",
      "Pro Team Meet & Greet",
      "Official Champs Merch",
    ],
    itinerary: [
      { day: 1, title: "Welcome to Paris", activities: ["Check-in", "River cruise dinner"] },
      { day: 2, title: "Arena Tour + Matches", activities: ["VIP lounge", "Group stage action"] },
      { day: 3, title: "Grand Finals", activities: ["Finals match", "Ceremony show"] },
      { day: 4, title: "Farewell", activities: ["Shopping", "Airport transfer"] },
    ],
  },
  {
    id: 3,
    image: tourDota,
    title: "Dota 2 The International 2025 Seattle",
    type: "Esports",
    location: "Seattle, USA",
    date: "Aug 18-23, 2025",
    duration: "6 Days / 5 Nights",
    price: "$4,150",
    spots: "Only 2 spots left",
    rating: 4.7,
    reviews: 165,
    description:
      "Join the legendary hype of The International in its original hometown — Seattle. Enjoy behind-the-scenes access and exclusive fan experiences.",
    included: [
      "TI25 Playoff & Finals Tickets",
      "5-Night Hotel near Climate Pledge Arena",
      "City & Gaming Tours",
      "DAL Merch Pack",
      "Airport Transfers",
    ],
    itinerary: [
      { day: 1, title: "Arrivals", activities: ["Check-in", "Fisherman's Wharf walk"] },
      { day: 2, title: "Playoffs", activities: ["Matches all day", "Fan zone activities"] },
      { day: 3, title: "Free Day", activities: ["Space Needle tour", "Dinner group"] },
      { day: 4, title: "Finals Day", activities: ["The International Finals", "Celebration night"] },
      { day: 5, title: "Valve HQ Visit", activities: ["Photo ops", "Exclusive Q&A"] },
      { day: 6, title: "Departure", activities: ["Souvenir shopping", "Check-out"] },
    ],
  }
];

}
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

