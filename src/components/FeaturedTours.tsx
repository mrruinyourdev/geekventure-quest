import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import tourValorant from "@/assets/tour-valorant.jpg";
import tourLOL from "@/assets/tour-lol.jpg";
import tourTemy from "@/assets/tour-temy.jpg";
import tourHunterXhunter from "@/assets/tour-hunterxhunter.jpg";
import tourAnime from "@/assets/tour-anime.jpg";
import tourMinecraft from "@/assets/tour-minecraft.jpg";

const tours = [
  {
    id: 1,
    image: tourValorant,
    title: "Valorant Champions Tour Finals",
    type: "Esports",
    location: "Tokyo, Japan",
    date: "Sept 21-24, 2025",
    price: "$2,499",
    spots: "8 spots left",
    features: ["VIP Pass", "Hotel Included", "Meet & Greet"],
  },
  {
    id: 2,
    image: tourLOL,
    title: "LOL Champions Tour Finals",
    type: "Esports",
    location: "Seoul, South Korea",
    date: "Nov 2-5, 2025",
    price: "$3,299",
    spots: "5 spots left",
    features: ["Arena Seats", "Team Meet", "All-Inclusive"],
  },
  {
    id: 3,
    image: tourTemy,
    title: "Temy Fan Meet Experience",
    type: "Fan Meet",
    location: "Los Angeles, USA",
    date: "Aug 15-18, 2025",
    price: "$1,899",
    spots: "12 spots left",
    features: ["Photo Ops", "Autographs", "Exclusive Merch"],
  },
  {
    id: 4,
    image: tourHunterXhunter,
    title: "Hunter x Hunter World Tour",
    type: "Fan Meet",
    location: "Orlando, Florida",
    date: "Oct 10-14, 2025",
    price: "$2,199",
    spots: "15 spots left",
    features: ["Fast Pass", "Early Access", "Character Meets"],
  },
];

export function FeaturedTours() {
  return (
    <section id="featured" className="py-24 px-4">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-secondary">Tours</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked gaming experiences that will blow your mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:scale-105 hover:glow-primary group"
            >
              <div className="relative h-48 overflow-hidden">
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
                <h3 className="text-lg font-bold leading-tight line-clamp-2">
                  {tour.title}
                </h3>

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
                    <span className="text-accent font-medium">
                      {tour.spots}
                    </span>
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
                  <div className="text-xs text-muted-foreground">
                    Starting from
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {tour.price}
                  </div>
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

        <div className="text-center">
          <Button asChild variant="neon" size="lg">
            <Link to="/tours">View All Tours</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
