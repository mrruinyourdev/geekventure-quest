import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { FeaturedTours } from "@/components/FeaturedTours";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <FeaturedTours />
      </main>
      <footer className="border-t border-border/40 py-12 px-4 mt-24">
        <div className="container text-center text-sm text-muted-foreground">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} GOONVENTURE TOURS. All rights reserved.
          </p>
          <p>Your gateway to epic gaming adventures worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
