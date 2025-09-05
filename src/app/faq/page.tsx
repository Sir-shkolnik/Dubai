import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

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

      <Footer />
    </div>
  );
}
