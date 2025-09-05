import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PackingServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Professional Packing Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export-grade cartons, wardrobe boxes, and fragile wrapping for your Dubai move
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
                    Expert Packing Solutions
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our professional packing team uses export-grade materials and techniques to ensure your belongings arrive safely at your new Dubai location.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Export-grade cartons and materials</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Wardrobe boxes for hanging clothes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Specialized fragile item wrapping</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Custom packing for electronics</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-2xl p-8">
                  <img src="/dubai city skyline.svg" alt="Dubai Packing Services" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>

              {/* Packing Options */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">📦</span>
                      <span>Full Packing</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete packing service for your entire home or office.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• All rooms and items</li>
                      <li>• Professional materials</li>
                      <li>• Inventory documentation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🔍</span>
                      <span>Fragile Only</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Specialized packing for delicate and valuable items.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Glass and ceramics</li>
                      <li>• Electronics and appliances</li>
                      <li>• Art and antiques</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">👔</span>
                      <span>Wardrobe Packing</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Specialized wardrobe boxes for hanging clothes.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Hanging garment boxes</li>
                      <li>• Shoe and accessory packing</li>
                      <li>• Wrinkle-free transport</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Packing Service Pricing</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Service Rates</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Full packing service: AED 20 per hour per mover</li>
                      <li>• Fragile item packing: AED 10 per item</li>
                      <li>• Wardrobe boxes: AED 40 each</li>
                      <li>• Specialty boxes: AED 25-60 each</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Materials Included</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Export-grade cartons</li>
                      <li>• Bubble wrap and padding</li>
                      <li>• Packing tape and labels</li>
                      <li>• Protective covers</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Need Packing Help?</h3>
                <p className="text-muted-foreground mb-8">Get a quote for professional packing services</p>
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
