import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  ClipboardCheck,
  MessageCircle,
  Users,
  Search,
  ShieldCheck,
  Heart,
  FileCheck,
  CheckCircle,
} from "lucide-react";

export function Vetting() {
  const vettingSteps = [
    {
      number: 1,
      icon: ClipboardCheck,
      title: "Application Review",
      description:
        "Every candidate completes a detailed application including work history, education, certifications, and childcare philosophy.",
      checks: [
        "Complete work history verification",
        "Education credentials review",
        "Certifications & training validation",
        "Childcare experience assessment",
      ],
    },
    {
      number: 2,
      icon: MessageCircle,
      title: "Initial & Follow-Up Interviews",
      description:
        "We conduct in-depth interviews to assess experience, personality, values, and professionalism.",
      checks: [
        "Behavioral interview questions",
        "Scenario-based assessments",
        "Values alignment discussion",
        "Communication skills evaluation",
      ],
    },
    {
      number: 3,
      icon: Users,
      title: "Reference Checks",
      description:
        "We personally contact previous employers and families to verify experience and gather detailed feedback.",
      checks: [
        "Minimum 3 professional references",
        "Direct employer conversations",
        "Performance & reliability verification",
        "Character & professionalism assessment",
      ],
    },
    {
      number: 4,
      icon: Search,
      title: "Social Media & Online Review",
      description:
        "We review public social media profiles to ensure professional conduct and appropriate online presence.",
      checks: [
        "Public profile screening",
        "Professional reputation check",
        "Red flag identification",
        "Online behavior assessment",
      ],
    },
    {
      number: 5,
      icon: ShieldCheck,
      title: "Background Check",
      description:
        "Comprehensive criminal background check including national and state-level searches.",
      checks: [
        "National criminal database search",
        "State & county records check",
        "Sex offender registry verification",
        "Driving record review (if applicable)",
      ],
    },
    {
      number: 6,
      icon: Heart,
      title: "CPR & First Aid Verification",
      description:
        "We verify current CPR and First Aid certifications appropriate for infant and child care.",
      checks: [
        "Current CPR certification",
        "Pediatric First Aid training",
        "Certification date verification",
        "Training organization validation",
      ],
    },
    {
      number: 7,
      icon: FileCheck,
      title: "Legal Work Authorization",
      description:
        "We verify candidates are legally authorized to work in the United States and can provide required documentation.",
      checks: [
        "Work authorization verification",
        "Required documentation review",
        "I-9 compliance preparation",
        "Employment eligibility confirmation",
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
              Our 7-Step Vetting Process
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We take safety and quality seriously. Every nanny in our network
              goes through rigorous screening before we ever introduce them to
              your family.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 md:py-10 border-y border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "100%", label: "Background Checked" },
              { stat: "7-Step", label: "Vetting Process" },
              { stat: "3+", label: "Years of Experience" },
              { stat: "CPR", label: "Certified Nannies" },
            ].map((badge, index) => (
              <div key={index}>
                <div className="font-serif text-3xl md:text-4xl text-primary mb-2">
                  {badge.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {vettingSteps.map((step, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[auto_1fr] gap-6 p-8">
                    {/* Icon & Number */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-background">
                          <span className="text-sm font-bold text-foreground">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h2 className="font-serif text-2xl mb-4 text-foreground">
                        {step.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.checks.map((check, checkIndex) => (
                          <div
                            key={checkIndex}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">
                              {check}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Why Our Vetting Process Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 text-foreground">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  Your children's safety is paramount. Our comprehensive
                  background checks give you peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 text-foreground">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  We only work with experienced, professional nannies who meet
                  our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 text-foreground">Trust & Confidence</h3>
                <p className="text-sm text-muted-foreground">
                  Know that every candidate has been thoroughly vetted before
                  entering your home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ongoing Standards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground text-center">
              Ongoing Standards
            </h2>
            <Card className="shadow-md">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Our commitment to quality doesn't end after the initial
                  vetting. We maintain ongoing relationships with our nannies
                  and require:
                </p>
                <ul className="space-y-4">
                  {[
                    "Annual background check renewals",
                    "Current CPR/First Aid certification maintenance",
                    "Continuing education in child development",
                    "Professional conduct standards",
                    "Regular check-ins and performance reviews",
                  ].map((standard, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{standard}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Experience the Difference of Pre-Vetted Care
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Skip the stress of screening candidates yourself. Work with nannies
            who have already passed our rigorous 7-step vetting process.
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
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}