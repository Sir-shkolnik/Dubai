import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

// FAQ data
const faqs = [
  {
    question: "Do you move in summer heat?",
    answer: "Yes—crews rotate hydration breaks; items ride in covered trucks with climate control."
  },
  {
    question: "How do you handle elevator permits?",
    answer: "We coordinate with the building's facilities management and book time slots in advance."
  },
  {
    question: "Do you offer packing only?",
    answer: "Yes; materials included or billed at cost. We can pack everything or just fragile items."
  },
  {
    question: "What insurance coverage do you provide?",
    answer: "Standard handling coverage included; all-risk coverage available upon request."
  },
  {
    question: "Do you move on weekends?",
    answer: "Yes, we operate 7 days a week including weekends and evenings for your convenience."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 1-2 weeks in advance, though we can accommodate same-day moves when possible."
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

      {/* Header - Let's Get Moving Style */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/LGM logo.png" alt="Let's Get Moving Dubai" className="h-12 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-foreground hover:text-primary transition-colors">
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

          <div className="flex items-center space-x-2">
            <Button asChild variant="outline" size="sm" className="md:hidden">
              <Link href="https://wa.me/971561429800">WhatsApp</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="hidden md:flex">
              <Link href="https://wa.me/971561429800">WhatsApp</Link>
            </Button>
          </div>
        </div>
      </header>

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
                  <div className="font-semibold">450,000+ Happy Customers Across North America</div>
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

        {/* Blog Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                OUR BLOGS
              </h2>
              <div className="flex justify-center">
                <Link href="/blog" className="text-primary hover:text-primary/80 font-semibold">
                  View All →
                </Link>
              </div>
            </div>
            
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
                  <img src="/group-13213148960.svg" alt="Moving Tips" className="w-full h-full object-cover" />
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
                  <img src="/group-13213148940.svg" alt="Moving Guide" className="w-full h-full object-cover" />
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
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Common questions about moving in Dubai
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-shadow hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Let's Get Moving Style */}
      <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
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
                  <span className="text-xl">✉️</span>
                  <span>Sales@Letsgetmovingdubai.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📞</span>
                  <span>+971-56-142-9800</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📍</span>
                  <span>110 Umm Hurair Rd - Oud Metha<br />Al Fajer Complex<br />Dubai, UAE</span>
                </div>
              </div>
            </div>
            
            {/* Follow Us Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">FOLLOW US</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold text-secondary">in</span>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer">
                  <span className="text-sm text-secondary">⭐</span>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer">
                  <span className="text-sm text-secondary">📷</span>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold text-secondary">f</span>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer">
                  <span className="text-sm text-secondary">🎵</span>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold text-secondary">a</span>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold text-secondary">X</span>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer">
                  <span className="text-sm text-secondary">▶</span>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold text-secondary">P</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <div className="text-sm opacity-80">
              Copyright Reserved © 2025 letsgetmoving.ca
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}