import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Let's Get Moving Style */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/LGM logo.png" alt="Let's Get Moving Dubai" className="h-12 w-auto" />
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
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="#quote" 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </Link>
            <Link 
              href="https://wa.me/971561429800" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <span>📱</span>
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* FAQ Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Common questions about moving in Dubai
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Do you move in summer heat?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes—crews rotate hydration breaks; items ride in covered trucks with climate control.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 2 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      How do you handle elevator permits?
                    </h3>
                    <p className="text-muted-foreground">
                      We coordinate with the building's facilities management and book time slots in advance.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 3 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Do you offer packing only?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes; materials included or billed at cost. We can pack everything or just fragile items.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 4 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      What insurance coverage do you provide?
                    </h3>
                    <p className="text-muted-foreground">
                      Standard handling coverage included; all-risk coverage available upon request.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 5 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Do you move on weekends?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes, we operate 7 days a week including weekends and evenings for your convenience.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 6 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      How far in advance should I book?
                    </h3>
                    <p className="text-muted-foreground">
                      We recommend booking at least 1-2 weeks in advance, though we can accommodate same-day moves when possible.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 7 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      What areas do you serve in Dubai?
                    </h3>
                    <p className="text-muted-foreground">
                      We serve all areas of Dubai including Downtown, Marina, JBR, JLT, Business Bay, and surrounding areas.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 8 */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Do you provide moving boxes and supplies?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes, we provide all necessary moving supplies including boxes, bubble wrap, tape, and protective materials.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us directly for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="tel:+971561429800" 
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +971 56 142 9800
              </Link>
              <Link 
                href="https://wa.me/971561429800" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/footer_contacts.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat'
          }}></div>
        
        <div className="container mx-auto px-4 relative">
          {/* Logo Section */}
          <div className="text-center mb-12">
            <img src="/footer_image.png" alt="Let's Get Moving Dubai" className="h-16 w-auto mx-auto mb-4" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">CONTACT US</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <span>Sales@Letsgetmovingdubai.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span>+971-56-142-9800</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span>110 Umm Hurair Rd - Oud Metha Al Fajer Complex Dubai, UAE</span>
                </div>
              </div>
            </div>
            
            {/* Social Media Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">FOLLOW US</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">⭐</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">📷</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">🎵</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">@</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">X</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm">▶</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">P</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/80">Copyright Reserved © 2025 letsgetmoving.ca</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
