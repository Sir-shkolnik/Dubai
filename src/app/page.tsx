import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Services data
const services = [
  {
    slug: "residential",
    title: "Residential Moving",
    description: "Apartments, villas, townhouses. Careful protection for doors, floors, and elevators.",
    icon: "🏠"
  },
  {
    slug: "office",
    title: "Office Relocation",
    description: "Weekend/evening moves, zero-downtime plans, IT desk moves.",
    icon: "🏢"
  },
  {
    slug: "packing",
    title: "Professional Packing",
    description: "Export-grade cartons, wardrobe boxes, fragile wrapping.",
    icon: "📦"
  },
  {
    slug: "storage",
    title: "Secure Storage",
    description: "Short/long-term climate-aware storage with barcode inventory.",
    icon: "🏪"
  },
  {
    slug: "junk",
    title: "Junk Removal",
    description: "Pre/post-move declutter and eco-friendly disposal.",
    icon: "🗑️"
  },
  {
    slug: "specialty",
    title: "Specialty Items",
    description: "Pianos, safes, gym machines, pool tables, large art.",
    icon: "🎹"
  }
];

// Process steps - Let's Get Moving Style
const processSteps = [
  {
    step: 1,
    title: "BOOKING & SCHEDULING",
    description: "Confirm the booking along with the moving date and time."
  },
  {
    step: 2,
    title: "PACKING & PREPARATION",
    description: "Pack yourself or hire us for professional packing. We're there for you."
  },
  {
    step: 3,
    title: "LOADING & TRANSPORTATION",
    description: "Professional loading and safe transportation to your new location."
  },
  {
    step: 4,
    title: "UNLOADING & UNPACKING",
    description: "Upon arrival, we help you unload, unpack, and settle into your new place."
  }
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Ahmed",
    location: "Dubai Marina",
    text: "Professional, punctual, and careful with our belongings. Made our move stress-free!"
  },
  {
    name: "Michael Chen",
    location: "Downtown Dubai",
    text: "Excellent service from start to finish. The team handled our office relocation perfectly."
  },
  {
    name: "Fatima Al-Rashid",
    location: "Arabian Ranches",
    text: "Highly recommend! They packed everything carefully and delivered on time."
  }
];

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Let's Get Moving — Dubai",
  "image": "https://lgm-dubai.com/og.jpg",
  "telephone": "+971561429800",
  "areaServed": [
    "Dubai Marina",
    "Downtown Dubai", 
    "Business Bay",
    "Palm Jumeirah",
    "JLT",
    "JVC",
    "Mirdif",
    "Arabian Ranches"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "110 Umm Hurair Rd - Oud Metha, Al Fajer Complex",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "url": "https://lgm-dubai.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* Hero Section - Let's Get Moving Style */}
        <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/LGM background_first picutre main page.png" 
              alt="Moving Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                LET'S GET MOVING
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Successfully moving Dubai residents since 2020.<br />
                Wherever life takes you in Dubai, we move you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="https://wa.me/971561429800">WhatsApp Us</Link>
                </Button>
              </div>
              
              {/* Trust Bar */}
              <div className="mt-12 p-6 bg-background/10 backdrop-blur rounded-lg border border-primary-foreground/20">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⭐</span>
                    <span className="font-semibold">4.8★ Rating</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-primary-foreground/30"></div>
                  <div className="font-semibold">5,000+ Happy Customers in Dubai</div>
                  <div className="hidden sm:block w-px h-4 bg-primary-foreground/30"></div>
                  <div>Licensed & Insured</div>
                  <div className="hidden sm:block w-px h-4 bg-primary-foreground/30"></div>
                  <div>SAFE & Secure</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Moving Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive moving solutions tailored for Dubai's unique requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.slug} className="group hover:shadow-lg transition-all duration-300 card-shadow border-l-4 border-l-secondary">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={`/services/${service.slug}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Let's Get Moving Style */}
        <section id="process" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                OUR MOVING PROCESS
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.step} className="bg-background text-foreground rounded-lg p-6 text-center card-shadow hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-md">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Let's Get Moving Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                WHY CHOOSE LET'S GET MOVING?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center border-l-4 border-l-secondary card-shadow hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">SPEED & EFFICIENCY</h3>
                  <p className="text-sm text-muted-foreground">
                    We prioritize swift and efficient service to get you moved as quickly as possible, minimizing downtime and disruption.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-secondary card-shadow hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">NO HIDDEN COST</h3>
                  <p className="text-sm text-muted-foreground">
                    Other than providing you with a fantastic offer. We ensure no extra charges or hidden costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-secondary card-shadow hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">❤️</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">OUR CLIENTS LOVE US</h3>
                  <p className="text-sm text-muted-foreground">
                    We strive to deliver the best customer service and go above and beyond to ensure our customers are happy with our work.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-secondary card-shadow hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">FREE OF ERROR</h3>
                  <p className="text-sm text-muted-foreground">
                    We strive to deliver the best customer service and go above and beyond to ensure our customers are happy with our work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Gallery Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SEAMLESS MOVES, HAPPY CUSTOMERS
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We love our happy customers because they are so happy when we help them with our moving services.
              </p>
            </div>
            
            {/* Customer Photos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
              <div className="aspect-square rounded-lg overflow-hidden card-shadow hover:shadow-lg transition-all duration-300">
                <img src="/gallery-thumbnail-31.png" alt="Happy Customer" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden card-shadow hover:shadow-lg transition-all duration-300">
                <img src="/gallery-thumbnail-80.png" alt="Happy Customer" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden card-shadow hover:shadow-lg transition-all duration-300">
                <img src="/gallery-thumbnail-81.png" alt="Happy Customer" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden card-shadow hover:shadow-lg transition-all duration-300">
                <img src="/gallery-thumbnail-90.png" alt="Happy Customer" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden card-shadow hover:shadow-lg transition-all duration-300">
                <img src="/gallery-thumbnail-91.png" alt="Happy Customer" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden card-shadow hover:shadow-lg transition-all duration-300">
                <img src="/gallery-thumbnail-30.png" alt="Happy Customer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real experiences from satisfied customers across Dubai
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center card-shadow hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Moving This Week?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a same-day estimate and book your move today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="tel:+971561429800">Call +971 56 142 9800</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}