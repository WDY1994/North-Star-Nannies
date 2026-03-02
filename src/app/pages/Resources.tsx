import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  FileText,
  ClipboardList,
  Baby,
  Users,
  ArrowRight,
  Download,
} from "lucide-react";

export function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "Nanny Tax 101",
      description:
        "A complete guide to understanding your obligations as a household employer, including taxes, payroll, and legal requirements.",
      topics: [
        "Social Security & Medicare taxes",
        "Federal & state unemployment",
        "Workers' compensation requirements",
        "Annual tax filing (Schedule H)",
      ],
      cta: "Download Guide",
    },
    {
      icon: ClipboardList,
      title: "Interview Question Guide",
      description:
        "Our curated list of essential questions to ask during nanny interviews, covering experience, philosophy, and scenarios.",
      topics: [
        "Experience & qualifications",
        "Childcare philosophy questions",
        "Scenario-based questions",
        "Red flags to watch for",
      ],
      cta: "Download Guide",
    },
    {
      icon: Baby,
      title: "Developmental Milestones",
      description:
        "Age-by-age guide to child development milestones and what to expect from birth through age 5.",
      topics: [
        "0-12 months: Infant development",
        "1-2 years: Toddler milestones",
        "3-4 years: Preschool development",
        "5+ years: School readiness",
      ],
      cta: "Download Guide",
    },
    {
      icon: Users,
      title: "Working With Your Nanny",
      description:
        "Best practices for building a successful, long-term relationship with your nanny including communication and expectations.",
      topics: [
        "Setting clear expectations",
        "Effective communication strategies",
        "Handling conflicts professionally",
        "Performance reviews & feedback",
      ],
      cta: "Download Guide",
    },
  ];

  const partners = [
    {
      name: "Utah Nanny Tax Service",
      description: "Payroll and tax management for household employers",
      category: "Tax & Payroll",
    },
    {
      name: "SafeKids Utah County",
      description: "Child safety education and resources",
      category: "Safety",
    },
    {
      name: "Utah Family Law Group",
      description: "Legal guidance for household employment",
      category: "Legal",
    },
    {
      name: "CPR Utah",
      description: "Pediatric CPR & First Aid certification",
      category: "Training",
    },
  ];

  const faqs = [
    {
      question: "How do I pay my nanny?",
      answer:
        "You can pay your nanny via direct deposit, check, or payroll service. We recommend using a payroll service to ensure proper tax withholding and compliance.",
    },
    {
      question: "What should I include in a nanny contract?",
      answer:
        "Include work schedule, pay rate, duties, benefits, time off, sick days, termination notice period, and any house rules. We provide contract templates to all clients.",
    },
    {
      question: "Do I need to provide benefits?",
      answer:
        "While not legally required for most positions, offering paid time off, sick days, and holidays helps attract and retain quality nannies. We can help you create a competitive package.",
    },
    {
      question: "What if my nanny gets sick?",
      answer:
        "Have a backup care plan in place. Many families maintain relationships with backup caregivers or family members. We also recommend including sick day policies in your contract.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
              Resources for Families
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Helpful guides, tools, and information to support you through the
              nanny hiring process and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                    <resource.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-foreground">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {resource.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {resource.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {resource.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Have more questions?
            </p>
            <Button asChild variant="outline" className="rounded-full border-2">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Partners */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
              Trusted Local Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              We partner with these Utah County organizations to support
              families and nannies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-foreground">{partner.name}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Stay Informed
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for childcare tips, local resources,
            and updates from North Star Nanny Agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-2 border-border bg-background"
            />
            <Button className="rounded-full px-8">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Ready to Find Your Nanny?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us handle the hard part. Start your personalized nanny
            placement journey today.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
