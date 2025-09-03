import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
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
                Transparent Moving Prices
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Clear hourly rates with no hidden fees. Get a fixed quote for larger moves.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Hourly Rates */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hourly Moving Rates
              </h2>
              <p className="text-xl text-muted-foreground">
                Perfect for apartments and smaller moves
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">2 Movers + Truck</CardTitle>
                  <CardDescription>Ideal for 1-2 bedroom apartments</CardDescription>
                  <div className="text-4xl font-bold text-primary mt-4">AED 150</div>
                  <div className="text-muted-foreground">per hour</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>2 professional movers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Moving truck included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Basic packing materials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Floor protection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>3-hour minimum</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative border-primary">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">3 Movers + Truck</CardTitle>
                  <CardDescription>Perfect for 2-3 bedroom apartments</CardDescription>
                  <div className="text-4xl font-bold text-primary mt-4">AED 200</div>
                  <div className="text-muted-foreground">per hour</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>3 professional movers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Moving truck included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Packing materials included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Furniture disassembly</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>3-hour minimum</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">4 Movers + Truck</CardTitle>
                  <CardDescription>Best for large apartments & villas</CardDescription>
                  <div className="text-4xl font-bold text-primary mt-4">AED 250</div>
                  <div className="text-muted-foreground">per hour</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>4 professional movers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Large moving truck</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Full packing service</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Specialty item handling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>3-hour minimum</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What's Included
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need for a successful move
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🚛</div>
                  <h3 className="font-semibold text-lg mb-2">Moving Truck</h3>
                  <p className="text-muted-foreground">Professional moving vehicle with proper equipment</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">👷</div>
                  <h3 className="font-semibold text-lg mb-2">Trained Crew</h3>
                  <p className="text-muted-foreground">Licensed, insured, and experienced movers</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="font-semibold text-lg mb-2">Packing Materials</h3>
                  <p className="text-muted-foreground">Boxes, tape, bubble wrap, and protective covers</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="font-semibold text-lg mb-2">Basic Insurance</h3>
                  <p className="text-muted-foreground">Standard coverage for your belongings</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Extra Services */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Enhance your move with these optional services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Packing Services</CardTitle>
                  <CardDescription>Let us handle the packing for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Full packing service: AED 25 per hour per mover</li>
                    <li>• Fragile item packing: AED 15 per item</li>
                    <li>• Wardrobe boxes: AED 50 each</li>
                    <li>• Specialty boxes: AED 30-80 each</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Storage Solutions</CardTitle>
                  <CardDescription>Secure storage for your belongings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Short-term storage: AED 200 per month</li>
                    <li>• Long-term storage: AED 150 per month</li>
                    <li>• Climate-controlled: AED 300 per month</li>
                    <li>• Pickup/delivery: AED 100 per trip</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Junk Removal</CardTitle>
                  <CardDescription>Eco-friendly disposal of unwanted items</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Small items: AED 50-100</li>
                    <li>• Furniture: AED 100-300</li>
                    <li>• Electronics: AED 80-150</li>
                    <li>• Full truck load: AED 500</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Specialty Moves</CardTitle>
                  <CardDescription>Expert handling for delicate items</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Piano moving: AED 500-1000</li>
                    <li>• Safe moving: AED 300-800</li>
                    <li>• Pool table: AED 400-600</li>
                    <li>• Art & antiques: AED 200-500</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Fixed Quote CTA */}
          <section className="py-16 bg-primary text-primary-foreground rounded-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Fixed Quote?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                For large villas, offices, or complex moves, get a detailed fixed-price quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link href="/contact">Get Fixed Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="https://wa.me/971561429800">WhatsApp Quote</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pricing FAQ
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you charge for travel time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Travel time within Dubai is included in our hourly rates. For moves outside Dubai, we may charge a small travel fee.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is VAT included in the prices?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All prices shown are exclusive of 5% VAT. VAT will be added to your final invoice.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if my move takes longer than expected?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We'll continue at the same hourly rate. We always provide time estimates upfront and keep you informed of any delays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer discounts for multiple moves?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We offer special rates for corporate clients and multiple moves. Contact us for custom pricing.
                  </p>
                </CardContent>
              </Card>
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
