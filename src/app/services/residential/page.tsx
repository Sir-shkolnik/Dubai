import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResidentialMovingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Residential Moving Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional moving services for apartments, villas, and townhouses across Dubai
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Expert Residential Moving
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    We specialize in moving Dubai residents safely and efficiently. Our experienced team handles everything from studio apartments to luxury villas with the utmost care and professionalism.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Careful protection for doors, floors, and elevators</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Professional packing and unpacking services</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Furniture disassembly and reassembly</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Climate-controlled storage options</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-2xl p-8">
                  <img src="/dubai city skyline.svg" alt="Dubai Residential Moving" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>

              {/* Service Types */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🏢</span>
                      <span>Apartment Moving</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Studio to 3-bedroom apartments with elevator coordination and building permits.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Elevator booking and permits</li>
                      <li>• Floor protection materials</li>
                      <li>• Building security coordination</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🏰</span>
                      <span>Villa Moving</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Luxury villas and townhouses with specialized equipment and larger teams.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Large furniture handling</li>
                      <li>• Garden and outdoor items</li>
                      <li>• Multiple floor coordination</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🏘️</span>
                      <span>Townhouse Moving</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Townhouses and duplexes with careful attention to shared spaces.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Shared space coordination</li>
                      <li>• Parking management</li>
                      <li>• Neighbor consideration</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Residential Moving Pricing</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">AED 120</div>
                    <div className="text-muted-foreground mb-2">2 Movers + Truck</div>
                    <div className="text-sm">Studio & 1-bedroom</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">AED 160</div>
                    <div className="text-muted-foreground mb-2">3 Movers + Truck</div>
                    <div className="text-sm">2-3 bedroom apartments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">AED 200</div>
                    <div className="text-muted-foreground mb-2">4 Movers + Truck</div>
                    <div className="text-sm">Villas & large homes</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Move?</h3>
                <p className="text-muted-foreground mb-8">Get a free quote for your residential move</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link href="/contact">Get Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                    <Link href="https://wa.me/971561429800">WhatsApp Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
