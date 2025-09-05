import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JunkRemovalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Junk Removal Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Pre and post-move declutter with eco-friendly disposal in Dubai
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
                    Eco-Friendly Junk Removal
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Professional junk removal services to help you declutter before or after your move. We ensure responsible disposal and recycling of items whenever possible.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Eco-friendly disposal methods</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Same-day removal service</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Recycling and donation options</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>All types of items accepted</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-2xl p-8">
                  <img src="/dubai city skyline.svg" alt="Dubai Junk Removal" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>

              {/* Service Types */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <span>Small Items</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Electronics, small furniture, and household items.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Electronics: AED 60-120</li>
                      <li>• Small furniture: AED 40-80</li>
                      <li>• Household items: AED 30-60</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🛋️</span>
                      <span>Furniture</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Large furniture pieces and appliances.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Sofas and chairs: AED 80-150</li>
                      <li>• Tables and desks: AED 60-120</li>
                      <li>• Appliances: AED 100-200</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🚛</span>
                      <span>Full Load</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete truck load removal service.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Full truck load: AED 400</li>
                      <li>• Multiple items</li>
                      <li>• Best value option</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Process */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Junk Removal Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                    <h4 className="font-semibold mb-2">Schedule</h4>
                    <p className="text-sm text-muted-foreground">Book your removal appointment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                    <h4 className="font-semibold mb-2">Assess</h4>
                    <p className="text-sm text-muted-foreground">We evaluate your items</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h4 className="font-semibold mb-2">Remove</h4>
                    <p className="text-sm text-muted-foreground">Professional removal service</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                    <h4 className="font-semibold mb-2">Dispose</h4>
                    <p className="text-sm text-muted-foreground">Eco-friendly disposal</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Need Junk Removed?</h3>
                <p className="text-muted-foreground mb-8">Get a quote for eco-friendly junk removal</p>
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
