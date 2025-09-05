import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/LGM logo.png" alt="Let's Get Moving Dubai" className="h-12 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#process" className="text-foreground hover:text-primary transition-colors">
            Process
          </Link>
          <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/areas" className="text-foreground hover:text-primary transition-colors">
            Areas
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/faq" className="text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        <div className="flex items-center space-x-2">
          <Button asChild variant="outline" size="sm" className="md:hidden">
            <Link href="https://wa.me/971561429800">WhatsApp</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="hidden md:flex">
            <Link href="https://wa.me/971561429800">WhatsApp</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
