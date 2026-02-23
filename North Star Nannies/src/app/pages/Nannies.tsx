import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  ClipboardList,
  UserCheck,
  Shield,
  Briefcase,
  CheckCircle,
  Search,
  FileCheck,
  Award,
} from "lucide-react";

export function Nannies() {
  const howItWorksSteps = [
    {
      number: "01",
      title: "Nanny Intake Form",
      description:
        "Complete our comprehensive application to help us understand your experience, skills, and childcare philosophy.",
      icon: ClipboardList,
      details: [
        "Professional background & experience",
        "Childcare certifications & training",
        "Schedule availability & preferences",
        "Ideal family match criteria",
      ],
    },
    {
      number: "02",
      title: "Vetting Process",
      description:
        "We conduct a thorough 7-step screening to ensure you meet our high standards for professional nanny placement.",
      icon: Shield,
      details: [
        "Social media screening",
        "In-depth phone or video interview",
        "Professional reference verification",
        "Comprehensive background check",
      ],
    },
    {
      number: "03",
      title: "Placement",
      description:
        "Once vetted, we match you with families that align with your skills, values, and career goals.",
      icon: Briefcase,
      details: [
        "Personalized family matching",
        "Interview preparation & support",
        "Contract negotiation guidance",
        "Trial period coordination",
      ],
    },
  ];

  const benefits = [
    {
      icon: UserCheck,
      title: "Work with Vetted Families",
      description: "All families are pre-screened and committed to professional childcare relationships",
    },
    {
      icon: Award,
      title: "Professional Support",
      description: "Receive guidance on contracts, compensation, and career development",
    },
    {
      icon: Search,
      title: "Quality Matches",
      description: "We focus on finding the right fit for your skills and preferences",
    },
    {
      icon: FileCheck,
      title: "No Placement Fees",
      description: "Our service is completely free for qualified nannies",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground leading-tight">
              Join Our Nanny Network
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-foreground/80">
              Connect with professional families in Utah County who value quality childcare.
            </p>
            <p className="text-lg mb-8 text-foreground/70 leading-relaxed">
              We're seeking experienced, passionate nannies to join our selective network.
              No placement fees—just quality family matches.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              How It Works for Nannies
            </h2>
            <p className="text-lg text-muted-foreground">
              Our simple, thorough process ensures the best matches for both nannies and families.
            </p>
          </div>

          <div className="space-y-16">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <Card className="shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="font-serif text-5xl text-primary/20">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl mb-4 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3"></div>
                    <div className="relative bg-primary/10 rounded-lg p-8 text-center">
                      <step.icon className="w-24 h-24 text-primary mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Why Join Our Network?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              What We Look For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Minimum 2 years of professional childcare experience",
              "Current CPR & First Aid certification (or willingness to obtain)",
              "Clean background check",
              "Professional references from previous families",
              "Commitment to ongoing professional development",
              "Strong communication & reliability",
            ].map((requirement, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{requirement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Ready to Take the Next Step in Your Nanny Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our network of professional nannies and connect with families who value your skills and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Apply Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2"
            >
              <Link to="/vetting">Learn About Our Vetting Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}