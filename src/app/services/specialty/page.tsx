import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SpecialtyItemsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Specialty Items Moving
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert handling for pianos, safes, gym machines, pool tables, and large art in Dubai
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
                    Specialized Moving Services
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our expert team specializes in moving delicate, heavy, and valuable items that require special care and equipment. We have the experience and tools to handle your most precious belongings safely.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Specialized equipment and tools</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Experienced specialty movers</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Custom protective packaging</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Insurance coverage available</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-2xl p-8">
                  <img src="/dubai city skyline.svg" alt="Dubai Specialty Moving" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>

              {/* Specialty Items */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🎹</span>
                      <span>Piano Moving</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Professional piano moving with specialized equipment and tuning services.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Grand pianos: AED 600-1000</li>
                      <li>• Upright pianos: AED 400-600</li>
                      <li>• Digital pianos: AED 200-400</li>
                      <li>• Tuning service available</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🔒</span>
                      <span>Safe Moving</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Heavy safe moving with specialized dollies and equipment.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Small safes: AED 250-400</li>
                      <li>• Large safes: AED 400-600</li>
                      <li>• Floor protection included</li>
                      <li>• Professional installation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🏋️</span>
                      <span>Gym Equipment</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Heavy gym equipment moving with disassembly and reassembly.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Treadmills: AED 300-500</li>
                      <li>• Weight machines: AED 200-400</li>
                      <li>• Free weights: AED 150-300</li>
                      <li>• Assembly service included</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🎱</span>
                      <span>Pool Tables</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Professional pool table moving with felt protection and leveling.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Standard tables: AED 400-600</li>
                      <li>• Tournament tables: AED 500-800</li>
                      <li>• Felt protection included</li>
                      <li>• Professional leveling</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Services */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Additional Specialty Services</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Art & Antiques</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Paintings and sculptures: AED 150-400</li>
                      <li>• Antique furniture: AED 200-500</li>
                      <li>• Custom crating available</li>
                      <li>• Climate-controlled transport</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Large Electronics</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Large TVs: AED 100-200</li>
                      <li>• Home theaters: AED 200-400</li>
                      <li>• Server equipment: AED 300-600</li>
                      <li>• Professional setup included</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Need Specialty Moving?</h3>
                <p className="text-muted-foreground mb-8">Get a quote for specialized item moving</p>
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
