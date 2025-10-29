import { Header } from "@/components/Header";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import tourCosplay from "@/assets/tour-cosplay.jpg";
import tourEsports from "@/assets/tour-esports.jpg";
import tourFanmeet from "@/assets/tour-fanmeet.jpg";
import tourThemepark from "@/assets/tour-themepark.jpg";

const allTours = [
  {
    id: 1,
    image: tourCosplay,
    title: "Tokyo Game Show VIP Experience",
    type: "Convention",
    location: "Tokyo, Japan",
    date: "Sept 21-24, 2025",
    price: "$2,499",
    spots: "8 spots left",
    features: ["VIP Pass", "Hotel Included", "Meet & Greet"],
  },
  {
    id: 2,
    image: tourEsports,
    title: "Worlds Championship Finals",
    type: "Esports",
    location: "Seoul, South Korea",
    date: "Nov 2-5, 2025",
    price: "$3,299",
    spots: "5 spots left",
    features: ["Arena Seats", "Team Meet", "All-Inclusive"],
  },
  {
    id: 3,
    image: tourFanmeet,
    title: "Creator Fan Fest Premium",
    type: "Fan Meet",
    location: "Los Angeles, USA",
    date: "Aug 15-18, 2025",
    price: "$1,899",
    spots: "12 spots left",
    features: ["Photo Ops", "Autographs", "Exclusive Merch"],
  },
  {
    id: 4,
    image: tourThemepark,
    title: "Nintendo World Adventure",
    type: "Theme Park",
    location: "Orlando, Florida",
    date: "Oct 10-14, 2025",
    price: "$2,199",
    spots: "15 spots left",
    features: ["Fast Pass", "Early Access", "Character Meets"],
  },
  {
    id: 5,
    image: tourCosplay,
    title: "Anime Expo Complete Package",
    type: "Convention",
    location: "Los Angeles, USA",
    date: "July 4-7, 2025",
    price: "$1,799",
    spots: "20 spots left",
    features: ["4-Day Pass", "Hotel", "Panel Access"],
  },
  {
    id: 6,
    image: tourEsports,
    title: "The International Dota 2",
    type: "Esports",
    location: "Singapore",
    date: "Oct 12-27, 2025",
    price: "$4,199",
    spots: "3 spots left",
    features: ["Finals Ticket", "5-Star Hotel", "Team Events"],
  },
];

const tourTypes = ["All", "Convention", "Esports", "Fan Meet", "Theme Park"];

export default function Tours() {
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTours = allTours.filter((tour) => {
    const matchesType = selectedType === "All" || tour.type === selectedType;
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 border-b border-border/40 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Explore <span className="text-primary">Epic Tours</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find your perfect gaming adventure from our curated collection of exclusive event experiences
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tours, events, or locations..."
                className="pl-12 h-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 border-b border-border/40 sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tourTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={selectedType === type ? "glow-primary" : ""}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4">
        <div className="container">
          {filteredTours.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No tours found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <Card
                  key={tour.id}
                  className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:scale-105 hover:glow-primary group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="font-semibold">
                        {tour.type}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <CardContent className="p-5 space-y-4">
                    <h3 className="text-lg font-bold leading-tight line-clamp-2">{tour.title}</h3>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{tour.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{tour.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-accent" />
                        <span className="text-accent font-medium">{tour.spots}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {tour.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-5 pt-0 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">Starting from</div>
                      <div className="text-2xl font-bold text-primary">{tour.price}</div>
                    </div>
                    <Button asChild variant="default" size="sm">
                      <Link to={`/tours/${tour.id}`}>
                        View
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
