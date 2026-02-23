import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  ClipboardList,
  Phone,
  Users,
  Calendar,
  CheckCircle,
} from "lucide-react";

export function HowItWorks() {
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our simple, transparent 5-step process takes you from initial
              consultation to a successful nanny placement—with support every
              step of the way.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Card className="shadow-sm">
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

            <Card className="shadow-sm">
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

            <Card className="shadow-sm">
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
              <Link to="/services">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}