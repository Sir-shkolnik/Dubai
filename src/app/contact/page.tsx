"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    moveDate: "",
    fromArea: "",
    toArea: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          moveDate: "",
          fromArea: "",
          toArea: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Get Your Moving Quote
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to move? Get a free, no-obligation quote from Dubai's trusted movers.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 2 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 56 142 9800"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="moveDate" className="block text-sm font-medium mb-2">
                        Preferred Move Date
                      </label>
                      <Input
                        id="moveDate"
                        name="moveDate"
                        type="date"
                        value={formData.moveDate}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fromArea" className="block text-sm font-medium mb-2">
                          Moving From
                        </label>
                        <Input
                          id="fromArea"
                          name="fromArea"
                          type="text"
                          value={formData.fromArea}
                          onChange={handleInputChange}
                          placeholder="e.g., Dubai Marina"
                        />
                      </div>
                      <div>
                        <label htmlFor="toArea" className="block text-sm font-medium mb-2">
                          Moving To
                        </label>
                        <Input
                          id="toArea"
                          name="toArea"
                          type="text"
                          value={formData.toArea}
                          onChange={handleInputChange}
                          placeholder="e.g., Downtown Dubai"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Additional Details
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your move - number of rooms, special items, any specific requirements..."
                        rows={4}
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        Thank you! We've received your request and will contact you within 2 hours.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        Sorry, there was an error submitting your request. Please try again or contact us directly.
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Get My Quote"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>
                    Get in touch with us directly
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">+971 56 142 9800</p>
                      <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link href="tel:+971561429800">Call Now</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <p className="text-muted-foreground">Quick responses via WhatsApp</p>
                      <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link href="https://wa.me/971561429800">Chat Now</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">hello@lgm-dubai.com</p>
                      <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link href="mailto:hello@lgm-dubai.com">Send Email</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office Address</h3>
                      <p className="text-muted-foreground">
                        110 Umm Hurair Rd - Oud Metha<br />
                        Al Fajer Complex<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Emergency moves available 24/7 with advance notice
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Licensed & Insured in UAE</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Free quotes with no hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Same-day estimates available</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Professional, trained crews</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Full packing and unpacking services</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Climate-controlled storage available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
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
