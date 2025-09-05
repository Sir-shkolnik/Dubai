import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogPage() {
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
        {/* Blog Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Our Blogs
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert tips and insights for your Dubai move
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Blog Post 1 */}
                <Card className="card-shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img src="/dubai city skyline.svg" alt="Dubai Skyline" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      #Moving Tips
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">30.06.2025</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Moving with Babies and Toddlers: 11 Tips from Expert Movers
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      There's more to moving with babies and toddlers than just packing up nappies and toys.
                    </p>
                  </CardContent>
                </Card>

                {/* Blog Post 2 */}
                <Card className="card-shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img src="/group-13213148960.svg" alt="Moving Arrow" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      #Moving Tips
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">30.06.2025</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Essential Packing Checklist for Your Dubai Move
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Make sure you don't forget anything important when packing for your move in Dubai.
                    </p>
                  </CardContent>
                </Card>

                {/* Blog Post 3 */}
                <Card className="card-shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img src="/group-13213148940.svg" alt="Moving Arrow" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      #Moving Tips
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">30.06.2025</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Dubai Moving Regulations: What You Need to Know
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Understanding the local regulations and requirements for moving in Dubai.
                    </p>
                  </CardContent>
                </Card>

                {/* Blog Post 4 */}
                <Card className="card-shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img src="/dubai city skyline.svg" alt="Dubai Skyline" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      #Dubai Guide
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">25.06.2025</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Best Neighborhoods to Move to in Dubai
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Discover the top residential areas in Dubai and what makes each one special.
                    </p>
                  </CardContent>
                </Card>

                {/* Blog Post 5 */}
                <Card className="card-shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img src="/group-13213148960.svg" alt="Moving Arrow" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      #Cost Saving
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">20.06.2025</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      How to Save Money on Your Dubai Move
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Practical tips to reduce moving costs without compromising on quality service.
                    </p>
                  </CardContent>
                </Card>

                {/* Blog Post 6 */}
                <Card className="card-shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img src="/group-13213148940.svg" alt="Moving Arrow" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      #Moving Tips
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">15.06.2025</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Moving During Ramadan: What to Expect
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Essential information about moving during the holy month of Ramadan in Dubai.
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
              Ready to Start Your Move?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free quote for your Dubai move today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#quote" 
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
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
