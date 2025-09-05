import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

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

      <Footer />
    </div>
  );
}
