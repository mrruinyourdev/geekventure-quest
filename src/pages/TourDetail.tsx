import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import tourValorant from "@/assets/tour-valorant.jpg";
import tourLOL from "@/assets/tour-lol.jpg";
import tourTemy from "@/assets/tour-temy.jpg";
import tourHunterXhunter from "@/assets/tour-hunterxhunter.jpg";
import tourAnime from "@/assets/tour-anime.jpg";
import tourMinecraft from "@/assets/tour-minecraft.jpg";

export default function TourDetail() {
  const { id } = useParams();

  const tours = [
    {
      id: 1,
      image: tourValorant,
      title: "Valorant Champions Tour Finals",
      type: "Esports",
      location: "Tokyo, Japan",
      date: "Sept 21-24, 2025",
      duration: "4 Days / 3 Nights",
      price: "$2,499",
      spots: "8 spots left",
      rating: 4.8,
      reviews: 120,
      description:
        "Experience the excitement of the Valorant Champions Tour Finals in Tokyo with VIP access, meet the teams, and enjoy exclusive gaming events.",
      included: [
        "VIP Pass",
        "Hotel Included",
        "Meet & Greet",
        "Airport Transfers",
        "Daily Breakfast",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Check-in",
          activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"],
        },
        {
          day: 2,
          title: "Group Stage Matches",
          activities: ["Breakfast", "Arena matches", "Evening free time"],
        },
        {
          day: 3,
          title: "Finals & Closing",
          activities: ["Finals matches", "Meet & Greet", "Departure"],
        },
      ],
    },
    {
      id: 2,
      image: tourLOL,
      title: "LOL Champions Tour Finals",
      type: "Esports",
      location: "Seoul, South Korea",
      date: "Nov 2-5, 2025",
      duration: "4 Days / 3 Nights",
      price: "$3,299",
      spots: "5 spots left",
      rating: 4.9,
      reviews: 127,
      description:
        "Join the League of Legends Champions Tour Finals in Seoul, enjoy premium arena seats, meet pro players, and explore the vibrant city.",
      included: [
        "Arena Seats",
        "Team Meet",
        "All-Inclusive",
        "Hotel Stay",
        "Airport Transfers",
      ],
      itinerary: [
        {
          day: 1,
          title: "Welcome to Seoul",
          activities: ["Check-in", "City orientation tour", "Dinner cruise"],
        },
        {
          day: 2,
          title: "Group Stage Matches",
          activities: ["Breakfast", "Arena matches", "Evening free time"],
        },
        {
          day: 3,
          title: "Semifinals & VIP Events",
          activities: ["VIP lounge", "Team meet-up", "Merch shopping"],
        },
        {
          day: 4,
          title: "Grand Finals & Departure",
          activities: ["Final match", "Awards ceremony", "Airport drop-off"],
        },
      ],
    },
    {
      id: 3,
      image: tourTemy,
      title: "Temy Fan Meet Experience",
      type: "Fan Meet",
      location: "Los Angeles, USA",
      date: "Aug 15-18, 2025",
      duration: "4 Days / 3 Nights",
      price: "$1,899",
      spots: "12 spots left",
      rating: 4.7,
      reviews: 98,
      description:
        "Meet Temy in person at this exclusive fan meet in Los Angeles, with photo ops, autographs, and special merchandise.",
      included: [
        "Photo Ops",
        "Autographs",
        "Exclusive Merch",
        "Hotel",
        "Airport Transfers",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Welcome",
          activities: ["Check-in", "Welcome meet-up", "Dinner event"],
        },
        {
          day: 2,
          title: "Fan Interaction Day",
          activities: [
            "Photo sessions",
            "Autograph signing",
            "Evening free time",
          ],
        },
        {
          day: 3,
          title: "Workshops & Merch",
          activities: ["Workshops", "Merch shopping", "Group dinner"],
        },
        {
          day: 4,
          title: "Farewell",
          activities: ["Check-out", "Airport transfer"],
        },
      ],
    },
    {
      id: 4,
      image: tourHunterXhunter,
      title: "Hunter x Hunter World Tour",
      type: "Fan Meet",
      location: "Orlando, Florida",
      date: "Oct 10-14, 2025",
      duration: "5 Days / 4 Nights",
      price: "$2,199",
      spots: "15 spots left",
      rating: 4.6,
      reviews: 110,
      description:
        "Join the Hunter x Hunter World Tour in Orlando with character meet-and-greets, early access passes, and themed events.",
      included: [
        "Fast Pass",
        "Early Access",
        "Character Meets",
        "Hotel Stay",
        "Airport Transfers",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Welcome",
          activities: ["Check-in", "Welcome event", "Dinner meet"],
        },
        {
          day: 2,
          title: "Exhibition & Activities",
          activities: ["Workshops", "Photo sessions", "Fan Q&A"],
        },
        {
          day: 3,
          title: "Character Meet & Merch",
          activities: ["Meet characters", "Shopping", "Evening free time"],
        },
        {
          day: 4,
          title: "Panel & Shows",
          activities: ["Panel sessions", "Live shows", "Group dinner"],
        },
        {
          day: 5,
          title: "Departure",
          activities: ["Check-out", "Airport transfer"],
        },
      ],
    },
    {
      id: 5,
      image: tourAnime,
      title: "Anime Expo Complete Package",
      type: "Convention",
      location: "Los Angeles, USA",
      date: "July 4-7, 2025",
      duration: "4 Days / 3 Nights",
      price: "$1,799",
      spots: "20 spots left",
      rating: 4.5,
      reviews: 87,
      description:
        "Attend the Anime Expo with a complete package including 4-day pass, hotel stay, panel access, and exclusive anime merchandise.",
      included: [
        "4-Day Pass",
        "Hotel",
        "Panel Access",
        "Airport Transfers",
        "Expo Guide",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Expo Check-in",
          activities: ["Check-in", "Orientation", "Welcome event"],
        },
        {
          day: 2,
          title: "Expo Panels & Workshops",
          activities: ["Panels", "Workshops", "Photo ops"],
        },
        {
          day: 3,
          title: "Exhibition & Merch",
          activities: [
            "Exhibit halls",
            "Merch shopping",
            "Evening cosplay contest",
          ],
        },
        {
          day: 4,
          title: "Farewell & Departure",
          activities: ["Check-out", "Airport transfer"],
        },
      ],
    },
    {
      id: 6,
      image: tourMinecraft,
      title: "Minecraft Championship Tour Finals",
      type: "Esports",
      location: "Singapore",
      date: "Oct 12-27, 2025",
      duration: "16 Days / 15 Nights",
      price: "$4,199",
      spots: "3 spots left",
      rating: 4.9,
      reviews: 142,
      description:
        "Join the Minecraft Championship Finals in Singapore with full access to events, team activities, and luxury accommodations.",
      included: [
        "Finals Ticket",
        "5-Star Hotel",
        "Team Events",
        "Daily Breakfast",
        "Airport Transfers",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Welcome",
          activities: ["Check-in", "Welcome meet", "Hotel orientation"],
        },
        {
          day: 2,
          title: "Preliminary Matches",
          activities: ["Breakfast", "Team matches", "Evening free time"],
        },
        {
          day: 3,
          title: "Team Challenges",
          activities: ["Challenges", "Workshops", "Merch shopping"],
        },
        {
          day: 4,
          title: "Arena Matches",
          activities: ["Matches", "VIP lounge", "Team dinner"],
        },
        {
          day: 5,
          title: "Finals & Celebration",
          activities: ["Final matches", "Award ceremony", "Farewell party"],
        },
        {
          day: 6,
          title: "Departure",
          activities: ["Check-out", "Airport drop-off"],
        },
        // สามารถเพิ่มวัน 7-16 ตามความเหมาะสม
      ],
    },
  ];

  const tour = tours.find((t) => t.id === Number(id));
  if (!tour) return <div>Tour not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container">
            <Badge variant="secondary" className="mb-4 text-base py-1 px-3">
              {tour.type}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="font-semibold text-foreground">
                  {tour.rating}
                </span>
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

      {/* Main Content */}
      <div className="container py-12 px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Overview, Included, Itinerary */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Tour Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tour.description}
                </p>
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
                      <div className="text-xs text-muted-foreground">
                        Duration
                      </div>
                      <div className="font-medium">{tour.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Availability
                      </div>
                      <div className="font-medium text-accent">
                        {tour.spots}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-accent fill-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Rating
                      </div>
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
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
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
                    <div
                      key={day.day}
                      className="relative pl-8 pb-6 border-l-2 border-border last:pb-0"
                    >
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
                  <div className="text-sm text-muted-foreground mb-2">
                    Starting from
                  </div>
                  <div className="text-4xl font-bold text-primary">
                    {tour.price}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    per person
                  </div>
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
                    <span className="text-muted-foreground">
                      Free cancellation
                    </span>
                    <span className="font-medium">Up to 30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Instant confirmation
                    </span>
                    <span className="font-medium text-accent">✓ Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Group discounts
                    </span>
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
