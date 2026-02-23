import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  CheckCircle,
  Shield,
  Heart,
  Users,
  Clock,
  Award,
  UserCheck,
  Star,
  DollarSign,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroImage from "figma:asset/90e21d7248892c3893979e25033cbf495bce5870.png";
import coreServiceImage from "figma:asset/e8cc4c5c5fe9eabad746af50f159af47b654005f.png";

export function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground leading-tight text-center">North Star Nannies</h1>
            <h2 className="font-serif mb-6 text-primary text-[20px] text-center">Professional Nanny Placement & Matching Services</h2>
            <p className="text-xl md:text-2xl mb-6 text-foreground/80 italic text-center">
              Guiding families to the right nanny match with clarity, trust, and
              confidence.
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
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">Finding the Right Nanny Can Be Overwhelming.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Long Daycare Waitlists",
                description: "Months-long waits for quality care",
              },
              {
                title: "Risky Job Boards",
                description: "Unvetted candidates and safety concerns",
              },
              {
                title: "Time-Consuming Screening",
                description: "Hours spent reviewing applications",
              },
              {
                title: "Disruptive Bad Hires",
                description: "Starting over when it doesn't work out",
              },
            ].map((problem, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-foreground">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">That's where we step in—fast, safe, and aligned with your values.</p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              A Concierge Nanny Placement Experience
            </h2>
            <p className="text-lg text-muted-foreground">Our referral-only model ensures quality-first matching with a replacement window for peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "30-Day Guarantee",
                description:
                  "Find a placement or get your money back",
              },
              {
                icon: Shield,
                title: "Rigorous Screening",
                description:
                  "7-step vetting process for every candidate",
              },
              {
                icon: Heart,
                title: "Personalized Matching",
                description: "We find nannies who fit your family's values",
              },
              {
                icon: UserCheck,
                title: "Ongoing Support",
                description:
                  "We're here through placement and beyond",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Who We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Parents with demanding schedules",
              "Families in Salt Lake & Utah County",
              "Dual-income professional families",
              "Those who value safety & efficiency",
            ].map((audience, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-8 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{audience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Service Highlight */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-lg border-2 border-primary/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Most Popular</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
                    Full-Time Nanny Placement
                  </h2>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Personalized family intake",
                      "30-day placement guarantee",
                      "2–3 vetted candidates matched to you",
                      "Interview support & guidance",
                      "Trial day coordination",
                      "60-day replacement window",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-8">
                    <div className="text-sm text-muted-foreground mb-2">
                      Flat Fee
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-4xl text-primary">
                        $1,950
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button asChild size="lg" className="w-full rounded-full">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full rounded-full">
                      <Link to="/services">See More Options & Pricing</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative min-h-[300px] md:min-h-0">
                  <img
                    src={coreServiceImage}
                    alt="Professional nanny with child"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Why Families Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Founder-Led Service",
                description: "Direct access to leadership, not a call center",
              },
              {
                icon: DollarSign,
                title: "Affordable Placement",
                description: "Professional service at a transparent, accessible price",
              },
              {
                icon: Clock,
                title: "Clear Pricing",
                description: "No hidden fees or surprises",
              },
              {
                icon: Shield,
                title: "Strict Screening",
                description: "Only top-tier candidates make it through",
              },
              {
                icon: Heart,
                title: "Exclusive Nanny Network",
                description: "Quality over quantity in our network",
              },
              {
                icon: Award,
                title: "Peace of Mind",
                description: "Flexible replacement window to meet your needs",
              },
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-foreground">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Ready to Find Your Perfect Nanny Match?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us handle the stress of finding, vetting, and matching you with
            the right caregiver for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2"
            >
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}