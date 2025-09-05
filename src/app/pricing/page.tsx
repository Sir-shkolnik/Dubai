import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Header />

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
                  <div className="text-4xl font-bold text-primary mt-4">AED 120</div>
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
                  <div className="text-4xl font-bold text-primary mt-4">AED 160</div>
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
                  <div className="text-4xl font-bold text-primary mt-4">AED 200</div>
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
                    <li>• Full packing service: AED 20 per hour per mover</li>
                    <li>• Fragile item packing: AED 10 per item</li>
                    <li>• Wardrobe boxes: AED 40 each</li>
                    <li>• Specialty boxes: AED 25-60 each</li>
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
                    <li>• Short-term storage: AED 150 per month</li>
                    <li>• Long-term storage: AED 120 per month</li>
                    <li>• Climate-controlled: AED 250 per month</li>
                    <li>• Pickup/delivery: AED 80 per trip</li>
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
                    <li>• Small items: AED 40-80</li>
                    <li>• Furniture: AED 80-250</li>
                    <li>• Electronics: AED 60-120</li>
                    <li>• Full truck load: AED 400</li>
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
                    <li>• Piano moving: AED 400-800</li>
                    <li>• Safe moving: AED 250-600</li>
                    <li>• Pool table: AED 300-500</li>
                    <li>• Art & antiques: AED 150-400</li>
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

      <Footer />
    </>
  );
}
