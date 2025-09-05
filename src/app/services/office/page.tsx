import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OfficeRelocationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Office Relocation Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Seamless office moves with zero downtime. Weekend and evening moves available.
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
                    Professional Office Moving
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Minimize business disruption with our expert office relocation services. We coordinate weekend and evening moves to ensure zero downtime for your business operations.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Weekend and evening moves available</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Zero-downtime planning and execution</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>IT equipment and desk moves</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Secure document and file handling</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted rounded-2xl p-8">
                  <img src="/dubai city skyline.svg" alt="Dubai Office Moving" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>

              {/* Service Types */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">💼</span>
                      <span>Small Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Startups and small businesses with 1-10 employees.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Quick same-day moves</li>
                      <li>• Basic IT setup</li>
                      <li>• Flexible scheduling</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🏢</span>
                      <span>Medium Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Growing companies with 10-50 employees and multiple departments.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Phased moving approach</li>
                      <li>• IT infrastructure setup</li>
                      <li>• Department coordination</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">🏭</span>
                      <span>Large Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Corporate offices with 50+ employees and complex requirements.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Project management</li>
                      <li>• Advanced IT coordination</li>
                      <li>• Multi-phase planning</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Specialized Services */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Specialized Office Services</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">IT Equipment Moving</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Server and network equipment</li>
                      <li>• Workstation setup and testing</li>
                      <li>• Cable management and organization</li>
                      <li>• Data backup coordination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Document Security</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Confidential file handling</li>
                      <li>• Secure transport protocols</li>
                      <li>• Inventory tracking</li>
                      <li>• Chain of custody documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Plan Your Office Move</h3>
                <p className="text-muted-foreground mb-8">Get a detailed quote for your office relocation</p>
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
