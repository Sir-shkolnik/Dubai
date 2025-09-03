import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
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
                About Let's Get Moving Dubai
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your trusted partner for professional moving services across Dubai
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Company Story */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Let's Get Moving Dubai was founded with a simple mission: to make moving 
                    stress-free and professional for residents and businesses across Dubai. 
                    We understand that moving can be one of life's most challenging experiences, 
                    which is why we've built our services around reliability, care, and expertise.
                  </p>
                  <p>
                    With years of experience in the UAE market, our team has mastered the unique 
                    challenges of moving in Dubai - from navigating high-rise towers and coordinating 
                    with building management to handling the region's climate and ensuring proper 
                    documentation and licensing.
                  </p>
                  <p>
                    Today, we're proud to be one of Dubai's most trusted moving companies, 
                    having successfully completed over 1,200 moves across all major communities 
                    in the emirate.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
                    <div className="text-sm text-muted-foreground">Moves Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
                    <div className="text-sm text-muted-foreground">Customer Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">12+</div>
                    <div className="text-sm text-muted-foreground">Areas Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="font-semibold text-lg mb-2">Trust & Safety</h3>
                  <p className="text-muted-foreground">
                    Licensed, insured, and committed to protecting your belongings
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">⏰</div>
                  <h3 className="font-semibold text-lg mb-2">Reliability</h3>
                  <p className="text-muted-foreground">
                    On-time delivery and consistent service you can count on
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="font-semibold text-lg mb-2">Quality</h3>
                  <p className="text-muted-foreground">
                    Professional standards and attention to detail in every move
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-semibold text-lg mb-2">Partnership</h3>
                  <p className="text-muted-foreground">
                    Working with you to make your move as smooth as possible
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Licensing & Insurance */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Licensed & Insured
              </h2>
              <p className="text-xl text-muted-foreground">
                Fully compliant with UAE regulations and standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Licensing & Compliance</CardTitle>
                  <CardDescription>Fully authorized to operate in Dubai</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Dubai Municipality License</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>RTA Commercial Vehicle Permit</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>UAE Trade License</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>VAT Registration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Employee Visa & Labor Cards</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Insurance Coverage</CardTitle>
                  <CardDescription>Comprehensive protection for your peace of mind</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>General Liability Insurance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Goods in Transit Coverage</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Vehicle Insurance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Worker's Compensation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>All-Risk Coverage Available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Experienced professionals dedicated to your move
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👷</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Moving Crews</h3>
                  <p className="text-muted-foreground">
                    Trained, experienced movers with expertise in Dubai's unique moving challenges
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">📋</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Coordinators</h3>
                  <p className="text-muted-foreground">
                    Professional coordinators who handle logistics, permits, and building access
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Specialists</h3>
                  <p className="text-muted-foreground">
                    Specialized teams for pianos, art, electronics, and other delicate items
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Fleet */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Fleet
              </h2>
              <p className="text-xl text-muted-foreground">
                Modern, well-maintained vehicles for every type of move
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🚛</div>
                  <h3 className="font-semibold text-lg mb-2">Standard Trucks</h3>
                  <p className="text-muted-foreground text-sm">
                    Perfect for apartments and small villas
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🚚</div>
                  <h3 className="font-semibold text-lg mb-2">Large Trucks</h3>
                  <p className="text-muted-foreground text-sm">
                    Ideal for large villas and office moves
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🌡️</div>
                  <h3 className="font-semibold text-lg mb-2">Climate Control</h3>
                  <p className="text-muted-foreground text-sm">
                    Temperature-controlled for sensitive items
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="font-semibold text-lg mb-2">Secure Storage</h3>
                  <p className="text-muted-foreground text-sm">
                    Locked compartments for valuable items
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground rounded-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Move?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the difference of working with Dubai's most trusted movers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link href="/contact">Get Your Quote</Link>
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
