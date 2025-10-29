import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/aisle-blur.jpg";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              GGTRIPS
            </span>
            <br />
            <span className="text-foreground">มาเที่ยวกันเถอะพี่น้อง</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience exclusive gaming conventions, esports tournaments, and
            fan meets with VIP all-inclusive packages
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/tours">
                Browse Tours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="neon" size="xl">
              <Link to="#featured">Explore Featured</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">
                Tours Available
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-secondary">15K+</div>
              <div className="text-sm text-muted-foreground">
                Happy Travelers
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-accent">20+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
}
