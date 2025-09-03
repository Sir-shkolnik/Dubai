import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dubaiAreas = [
  {
    name: "Dubai Marina",
    description: "Luxury waterfront apartments and high-rise towers",
    features: ["Elevator booking", "Loading bay access", "Parking coordination"]
  },
  {
    name: "Downtown Dubai",
    description: "Iconic landmarks including Burj Khalifa and Dubai Mall",
    features: ["High-rise moves", "Premium service", "Weekend availability"]
  },
  {
    name: "Business Bay",
    description: "Modern business district with residential towers",
    features: ["Office relocations", "Residential moves", "Flexible timing"]
  },
  {
    name: "Palm Jumeirah",
    description: "Exclusive island community with luxury villas",
    features: ["Villa moves", "Specialty handling", "Climate control"]
  },
  {
    name: "JLT (Jumeirah Lake Towers)",
    description: "Mixed-use development with residential and commercial",
    features: ["Tower moves", "Commercial relocations", "Storage solutions"]
  },
  {
    name: "JVC (Jumeirah Village Circle)",
    description: "Family-friendly community with villas and townhouses",
    features: ["Family moves", "School proximity", "Child-safe packing"]
  },
  {
    name: "Arabian Ranches",
    description: "Gated community with spacious villas and townhouses",
    features: ["Villa expertise", "Garden furniture", "Pool equipment"]
  },
  {
    name: "Mirdif",
    description: "Established residential area with villas and apartments",
    features: ["Traditional moves", "Local expertise", "Community access"]
  },
  {
    name: "DIFC (Dubai International Financial Centre)",
    description: "Financial district with premium office and residential",
    features: ["Office moves", "Executive relocations", "Secure handling"]
  },
  {
    name: "JBR (Jumeirah Beach Residence)",
    description: "Beachfront community with luxury apartments",
    features: ["Beach proximity", "Furniture protection", "Parking solutions"]
  },
  {
    name: "Dubai Hills",
    description: "Master-planned community with modern villas",
    features: ["New developments", "Modern amenities", "Family services"]
  },
  {
    name: "Dubai Sports City",
    description: "Sports-themed community with residential options",
    features: ["Sports equipment", "Gym relocations", "Outdoor furniture"]
  }
];

export default function AreasPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/lgm-logo.png" alt="Let's Get Moving Dubai" className="h-12 w-auto" />
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
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          <Button asChild variant="outline" size="sm">
            <Link href="https://wa.me/971561429800">WhatsApp</Link>
          </Button>
        </div>
      </header>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Areas We Serve in Dubai
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional moving services across all major Dubai communities
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {dubaiAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{area.name}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">Get Quote for {area.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coverage Map */}
          <section className="py-16 bg-muted/30 rounded-2xl mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Dubai Coverage
              </h2>
              <p className="text-xl text-muted-foreground">
                We serve all areas of Dubai with the same professional standards
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">🏙️</div>
                <h3 className="font-semibold text-lg mb-2">Urban Areas</h3>
                <p className="text-muted-foreground">
                  Downtown, Business Bay, DIFC, and all major business districts
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🏖️</div>
                <h3 className="font-semibold text-lg mb-2">Coastal Communities</h3>
                <p className="text-muted-foreground">
                  Dubai Marina, JBR, Palm Jumeirah, and waterfront properties
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🏘️</div>
                <h3 className="font-semibold text-lg mb-2">Residential Areas</h3>
                <p className="text-muted-foreground">
                  Arabian Ranches, JVC, Mirdif, and family communities
                </p>
              </div>
            </div>
          </section>

          {/* Special Services by Area */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Specialized Services by Area
              </h2>
              <p className="text-xl text-muted-foreground">
                Tailored moving solutions for different Dubai communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>High-Rise & Tower Moves</CardTitle>
                  <CardDescription>Dubai Marina, Downtown, JLT, Business Bay</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Elevator booking and coordination</li>
                    <li>• Loading bay access management</li>
                    <li>• High-floor furniture handling</li>
                    <li>• Building security clearance</li>
                    <li>• Parking and access permits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Villa & Townhouse Moves</CardTitle>
                  <CardDescription>Arabian Ranches, JVC, Mirdif, Dubai Hills</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Garden furniture and equipment</li>
                    <li>• Pool and outdoor items</li>
                    <li>• Multi-level home navigation</li>
                    <li>• Community access coordination</li>
                    <li>• Large item handling</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Luxury & Premium Moves</CardTitle>
                  <CardDescription>Palm Jumeirah, Emirates Hills, Downtown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• White-glove service</li>
                    <li>• Art and antiques handling</li>
                    <li>• Climate-controlled transport</li>
                    <li>• Discretion and privacy</li>
                    <li>• Premium packing materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office & Commercial Moves</CardTitle>
                  <CardDescription>DIFC, Business Bay, JLT, Downtown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• IT equipment handling</li>
                    <li>• Weekend and evening moves</li>
                    <li>• Minimal downtime planning</li>
                    <li>• Data security protocols</li>
                    <li>• Business continuity support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground rounded-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't See Your Area?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                We serve all areas of Dubai and the UAE. Contact us for coverage confirmation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link href="/contact">Check Coverage</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="https://wa.me/971561429800">WhatsApp Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Let's Get Moving — Dubai</h3>
              <p className="text-muted-foreground mb-4">
                Licensed & insured movers serving all Dubai communities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-background transition-colors">About</Link></li>
                <li><Link href="/areas" className="hover:text-background transition-colors">Areas We Serve</Link></li>
                <li><Link href="/blog" className="hover:text-background transition-colors">Guides</Link></li>
                <li><Link href="/careers" className="hover:text-background transition-colors">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/services/residential" className="hover:text-background transition-colors">Residential Moving</Link></li>
                <li><Link href="/services/office" className="hover:text-background transition-colors">Office Relocation</Link></li>
                <li><Link href="/services/packing" className="hover:text-background transition-colors">Packing Services</Link></li>
                <li><Link href="/services/storage" className="hover:text-background transition-colors">Storage</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>WhatsApp/Call: +971 56 142 9800</div>
                <div>Email: hello@lgm-dubai.com</div>
                <div>Hours: 8:00 AM - 8:00 PM</div>
                <div>7 days a week</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-muted-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm">
              © 2024 Let's Get Moving Dubai. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-muted-foreground hover:text-background transition-colors text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-background transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
