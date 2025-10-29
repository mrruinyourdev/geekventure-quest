import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Gamepad2, Users, Globe, TrendingUp, Heart, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Gamepad2,
      title: "Gaming Passion",
      description: "We're gamers at heart, creating experiences by gamers for gamers.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building connections between fans and their favorite gaming communities.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to exclusive gaming events and conventions worldwide.",
    },
  ];

  const stats = [
    { value: "50+", label: "Tours Worldwide" },
    { value: "10K+", label: "Happy Travelers" },
    { value: "100+", label: "Gaming Events" },
    { value: "15+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold font-mono">
                About <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">GEEKVENTURE</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The world's premier travel agency for gaming and entertainment enthusiasts, connecting fans with unforgettable experiences across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center font-mono">Our Mission</h2>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  To create extraordinary travel experiences that bridge the gap between gaming culture and real-world adventure. We believe that the passion for gaming deserves to be celebrated beyond the screen, and we're here to make that happen.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-mono mb-12">
              Our <span className="text-primary">Story</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Founded in 2020 by a group of passionate gamers and travel enthusiasts, GEEKVENTURE was born from a simple idea: what if you could combine your love for gaming with the thrill of exploring new places?
              </p>
              
              <p className="text-lg leading-relaxed">
                We noticed that gaming conventions, esports tournaments, and fan events were becoming major cultural phenomena, but attending them often meant navigating complex logistics, accommodation nightmares, and missing out on the full experience.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we've grown into a global community of travelers who share a passion for gaming culture. From intimate fan meetups in Tokyo to massive esports championships in Seoul, we handle every detail so you can focus on what matters: making memories and living your gaming dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-mono mb-12">
              Our <span className="text-secondary">Values</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:glow-primary"
                  >
                    <CardContent className="p-6 space-y-4 text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container max-w-3xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              Ready to Start Your <span className="text-primary">Adventure</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of gamers who've already experienced the trip of a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/tours">Browse Tours</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 py-8">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 GEEKVENTURE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
