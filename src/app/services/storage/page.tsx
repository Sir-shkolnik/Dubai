import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StorageServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Secure Storage Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Short and long-term climate-aware storage with barcode inventory in Dubai
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
                    Professional Storage Services
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Secure, climate-controlled storage facilities in Dubai with advanced inventory management and 24/7 security monitoring.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Climate-controlled storage units</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Barcode inventory tracking</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>24/7 security monitoring</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Flexible access hours</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-2xl p-8">
                  <img src="/dubai city skyline.svg" alt="Dubai Storage Services" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>

              {/* Storage Options */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">📦</span>
                      <span>Small Storage</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Perfect for seasonal items, documents, and small furniture.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• 5-10 sq ft units</li>
                      <li>• Climate controlled</li>
                      <li>• Easy access</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🏠</span>
                      <span>Medium Storage</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Ideal for apartment contents and office equipment.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• 20-50 sq ft units</li>
                      <li>• Full climate control</li>
                      <li>• Drive-up access</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🏭</span>
                      <span>Large Storage</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For complete home contents and business inventory.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• 100+ sq ft units</li>
                      <li>• Premium climate control</li>
                      <li>• Loading dock access</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Storage Pricing</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Monthly Rates</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Short-term storage: AED 150 per month</li>
                      <li>• Long-term storage: AED 120 per month</li>
                      <li>• Climate-controlled: AED 250 per month</li>
                      <li>• Pickup/delivery: AED 80 per trip</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Additional Services</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Inventory management</li>
                      <li>• Insurance coverage</li>
                      <li>• Flexible access hours</li>
                      <li>• Moving coordination</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Need Storage Space?</h3>
                <p className="text-muted-foreground mb-8">Get a quote for secure storage solutions</p>
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
