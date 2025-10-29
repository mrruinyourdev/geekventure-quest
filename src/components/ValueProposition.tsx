import { Ticket, Users, Shield, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Ticket,
    title: "Exclusive Access",
    description: "VIP tickets to sold-out gaming events and conventions worldwide",
  },
  {
    icon: Users,
    title: "Meet & Greet",
    description: "Personal encounters with gaming celebrities and esports champions",
  },
  {
    icon: Shield,
    title: "All-Inclusive",
    description: "Hotels, transportation, meals, and tickets bundled in one package",
  },
  {
    icon: Star,
    title: "Expert Guides",
    description: "Gaming-savvy tour guides who speak your language",
  },
];

export function ValueProposition() {
  return (
    <section className="py-24 px-4 bg-card/30 backdrop-blur-sm">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-primary">GEEKVENTURE</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver unforgettable gaming experiences with unmatched access and premium service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:glow-primary group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
