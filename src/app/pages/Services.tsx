import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  CheckCircle,
  Star,
  Clock,
  Home,
  Moon,
  Zap,
  Shield,
  ClipboardList,
  Phone,
  Users,
  Calendar,
} from "lucide-react";
import { useEffect } from "react";

export function Services() {
  const services = [
    {
      name: "Full-Time Nanny Placement",
      price: "$1,950",
      period: "Flat Fee",
      popular: true,
      icon: Star,
      description:
        "Perfect for families needing consistent, full-time childcare",
      features: [
        "Personalized family intake",
        "2–3 vetted candidates matched to you",
        "Interview support & guidance",
        "Trial day coordination",
        "60-day replacement window",
        "30-day placement support",
        "Employment contract templates",
        "Onboarding best practices",
      ],
      cta: "Get Started",
    },
    {
      name: "Part-Time Placement",
      price: "$1,950",
      period: "Flat Fee",
      popular: false,
      icon: Clock,
      description: "Ideal for families needing flexible, part-time care",
      features: [
        "Everything in Full-Time Placement",
        "Part-time schedule coordination",
        "Nanny share consultation",
        "Flexible arrangement support",
        "Extended guarantee period",
        "Payment plan option",
      ],
      cta: "Get Started",
    },
    {
      name: "Live-In Nanny Placement",
      price: "$2,450",
      period: "or $408/month for 6 months",
      popular: false,
      icon: Home,
      description: "For families seeking live-in childcare arrangements",
      features: [
        "Everything in Full-Time Placement",
        "Live-in arrangement expertise",
        "Housing & privacy guidance",
        "Contract addendums for live-in",
        "Extended support period",
        "Flexible payment plan available",
      ],
      cta: "Get Started",
    },
    {
      name: "Night Nanny Placement",
      price: "$2,450",
      period: "or $408/month for 6 months",
      popular: false,
      icon: Moon,
      description: "Specialized overnight newborn care placement",
      features: [
        "Specialized newborn care candidates",
        "Night shift expertise",
        "Postpartum support knowledge",
        "Sleep training experience",
        "Medical background verification",
        "Extended matching timeline",
        "Flexible payment options",
      ],
      cta: "Get Started",
    },
  ];

  const addOns = [
    {
      name: "Expedited Service",
      price: "+$500",
      description:
        "Priority matching within 14 business days (subject to availability)",
      icon: Zap,
    },
    {
      name: "Extended Replacement Window",
      price: "+$250",
      description: "Extend your replacement window from 60 to 90 days",
      icon: Shield,
    },
  ];

  const steps = [
    {
      number: "1",
      icon: ClipboardList,
      title: "Family Intake",
      description:
        "Complete our detailed intake form about your family's needs, schedule, values, and preferences. This helps us understand exactly what you're looking for in a nanny.",
      details: [
        "Share your family's schedule and needs",
        "Describe your ideal nanny",
        "Outline your values and priorities",
        "Tell us about your children",
      ],
    },
    {
      number: "2",
      icon: Phone,
      title: "Intake Call",
      description:
        "Schedule a call with our founder to discuss your needs in detail. We'll answer questions, clarify expectations, and ensure we're the right fit for each other.",
      details: [
        "30-minute consultation",
        "Review your specific needs",
        "Answer all your questions",
        "Discuss timeline and process",
      ],
    },
    {
      number: "3",
      icon: Users,
      title: "Matching",
      description:
        "We carefully review our vetted nanny bench and handpick 2-3 candidates who align with your family's specific needs, values, and schedule requirements.",
      details: [
        "Personalized candidate selection",
        "Values-based matching",
        "Schedule compatibility check",
        "Detailed candidate profiles",
      ],
    },
    {
      number: "4",
      icon: Calendar,
      title: "Interviews & Trial Day",
      description:
        "Interview your matched candidates with our guidance. Schedule a trial day with your top choice to see how they interact with your children in your home.",
      details: [
        "Interview coordination support",
        "Question guides provided",
        "Trial day scheduling",
        "Feedback and guidance throughout",
      ],
    },
    {
      number: "5",
      icon: CheckCircle,
      title: "Placement & Support",
      description:
        "Make your hire with confidence! We provide 30 days of ongoing support and a 60-day replacement window to ensure everything goes smoothly.",
      details: [
        "Employment agreement templates",
        "Onboarding best practices",
        "30-day check-ins",
        "60-day replacement window",
      ],
    },
  ];

  useEffect(() => {
    // Add any side effects or cleanup here if needed
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
              Services & Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent, straightforward pricing with no hidden fees. Find
              the service that fits your family's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  service.popular ? "border-2 border-primary" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">
                      <Star className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-foreground">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl text-primary">
                          {service.price}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {service.period}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full rounded-full ${
                      service.popular ? "" : "variant-outline"
                    }`}
                    variant={service.popular ? "default" : "outline"}
                  >
                    <Link to="/contact">{service.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Add-On Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Customize your placement experience with these optional add-ons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {addOns.map((addOn, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <addOn.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-foreground">{addOn.name}</h3>
                        <span className="font-serif text-xl text-primary whitespace-nowrap ml-4">
                          {addOn.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {addOn.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Our simple, transparent 5-step process takes you from initial
              consultation to a successful nanny placement—with support every
              step of the way.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-full bg-primary/20 -z-10 hidden md:block" />
                  )}

                  <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[auto_1fr] gap-8 p-8">
                        {/* Number & Icon */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                              <step.icon className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-background">
                              <span className="text-xs font-bold text-foreground">
                                {step.number}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div>
                          <h2 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
                            {step.title}
                          </h2>
                          <p className="text-lg text-muted-foreground mb-6">
                            {step.description}
                          </p>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {step.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              What to Expect: Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              Most families find their perfect match within 2-4 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-serif text-primary mb-4">
                  1-2 days
                </div>
                <h3 className="mb-2 text-foreground">Initial Response</h3>
                <p className="text-sm text-muted-foreground">
                  After intake submission, we'll schedule your consultation call
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-serif text-primary mb-4">
                  1-2 weeks
                </div>
                <h3 className="mb-2 text-foreground">Matching Process</h3>
                <p className="text-sm text-muted-foreground">
                  We'll present 2-3 carefully selected candidates for your review
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-serif text-primary mb-4">
                  1-2 weeks
                </div>
                <h3 className="mb-2 text-foreground">Interviews & Placement</h3>
                <p className="text-sm text-muted-foreground">
                  Conduct interviews, trial day, and make your final decision
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Begin your journey to finding the perfect nanny for your family
            today. Our process is designed to be simple, transparent, and
            stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Start Your Intake</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}