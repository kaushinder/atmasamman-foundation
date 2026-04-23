import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-accent/30 text-center px-4">
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-8 shadow-lg">
        <Heart className="w-8 h-8 fill-current" />
      </div>
      <h1 className="text-6xl font-serif font-bold text-foreground mb-4">404</h1>
      <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8 text-lg leading-relaxed">
        The page you're looking for doesn't exist. Let's take you back to our mission.
      </p>
      <Button size="lg" className="rounded-full px-8" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
