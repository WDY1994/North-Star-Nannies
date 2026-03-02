import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Heart, Users, Shield, Award, Target, Sparkles } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
              About North Star Nannies
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded by a parent who understands the challenge of finding
              quality childcare, we're committed to making nanny placement
              simple, safe, and personalized.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1629833162964-9a2522ef30c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBmYXRoZXIlMjBiYWJ5JTIwaG9tZXxlbnwxfHx8fDE3NzE0MzcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Family at home"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  North Star Nannies was created in response to how overwhelming 
                  and frustrating the childcare search can be.
                </p>
                <p>
                  Families often face endless job board scrolling, unanswered messages, 
                  canceled interviews—or worse, no-shows. Add the pressure of vetting 
                  candidates while balancing work and family life, and the process quickly 
                  becomes exhausting.
                </p>
                <p>
                  Finding the right nanny isn’t just about filling a position—it’s about 
                  trust, reliability, and alignment in your home.
                </p>
                <p>
                  North Star brings clarity and confidence back to the process through 
                  personalized placement, transparent pricing, and rigorous vetting—supporting 
                   families to find caregivers who truly fit their values and needs.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="italic text-foreground">
                  "Finding the right nanny shouldn't feel like a second job. We
                  do the heavy lifting so you can focus on what matters—your
                  family."
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Every candidate goes through our comprehensive 7-step vetting process. No exceptions.",
              },
              {
                icon: Heart,
                title: "Values-Based Matching",
                description:
                  "We believe the best placements happen when families and nannies share core values.",
              },
              {
                icon: Sparkles,
                title: "Quality Over Quantity",
                description:
                  "We maintain a small, carefully curated network of top-tier nannies.",
              },
              {
                icon: Users,
                title: "Personalized Service",
                description:
                  "Every family works directly with our founder—no call centers, no runarounds.",
              },
              {
                icon: Target,
                title: "Transparency",
                description:
                  "Clear pricing, honest communication, and realistic expectations every step of the way.",
              },
              {
                icon: Award,
                title: "Accountability",
                description:
                  "Our 60-day guarantee shows we stand behind every placement we make.",
              },
            ].map((value, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              What Makes Us Different
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Founder-Led, Not Corporate",
                description:
                  "You'll work directly with our founder from intake to placement. We're small by design, ensuring personalized attention for every family.",
              },
              {
                title: "Referral-Only Nanny Network",
                description:
                  "Our nannies come from trusted referrals within our professional network. We don't accept applications from job boards.",
              },
              {
                title: "Focus on Fit, Not Volume",
                description:
                  "We'd rather make one perfect match than rush three mediocre ones. Our success is measured by lasting placements.",
              },
              {
                title: "Honest About Limitations",
                description:
                  "If we're not the right fit for your needs, we'll tell you—and help point you in the right direction.",
              },
              {
                title: "Local Expertise",
                description:
                  "We exclusively operate in Utah. We understand the local market, needs, and community.",
              },
            ].map((item, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Proudly Serving Utah
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We focus exclusively on Utah communities including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "Salt Lake",
                "Park City",
                "Heber",
                "Lehi",
                "American Fork",
                "Pleasant Grove",
                "Orem",
                "Provo",
                "Saratoga Springs",
                "Eagle Mountain",
                "Highland",
                "Spanish Fork",
              ].map((city, index) => (
                <div key={index} className="text-foreground">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              If your area isn't listed, reach out—we're always expanding!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Work With a Team That Gets It
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're not just a placement service—we're parents who've been
            there. Let us guide you to the right nanny match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2"
            >
              <Link to="/how-it-works">Learn Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}