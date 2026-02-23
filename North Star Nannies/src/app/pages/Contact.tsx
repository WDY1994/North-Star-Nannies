import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  ClipboardList,
  Calendar,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
              Ready to Get Started?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Finding the perfect nanny for your family starts here. Complete
              our intake form or reach out directly—we'll respond within 1-2
              business days.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 border-y border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: ClipboardList,
                number: "1",
                title: "Complete Intake",
                description: "Fill out our family needs form",
              },
              {
                icon: Calendar,
                number: "2",
                title: "Schedule Call",
                description: "We'll arrange a consultation",
              },
              {
                icon: CheckCircle,
                number: "3",
                title: "We Handle the Rest",
                description: "Matching, vetting, and placement",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-background">
                    <span className="text-xs font-bold text-foreground">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl md:text-3xl mb-6 text-foreground">
                    Family Intake Form
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="Jane"
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Smith"
                          required
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(801) 555-0100"
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="Lehi"
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">
                            Full-Time Nanny
                          </SelectItem>
                          <SelectItem value="part-time">
                            Part-Time Nanny
                          </SelectItem>
                          <SelectItem value="live-in">
                            Live-In Nanny
                          </SelectItem>
                          <SelectItem value="night-nurse">
                            Night Nanny
                          </SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="children">
                        Number & Ages of Children *
                      </Label>
                      <Input
                        id="children"
                        placeholder="e.g., 2 kids - ages 2 and 4"
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Desired Start Date *</Label>
                      <Input
                        id="startDate"
                        placeholder="e.g., March 2026"
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="schedule">
                        Approximate Schedule Needed *
                      </Label>
                      <Textarea
                        id="schedule"
                        placeholder="e.g., Monday-Friday, 8am-5pm"
                        rows={3}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Tell Us About Your Family & Needs
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Share any specific needs, preferences, or questions..."
                        rows={5}
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referral">How Did You Hear About Us?</Label>
                      <Input
                        id="referral"
                        placeholder="Referral, Google, Facebook, etc."
                        className="rounded-lg"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full"
                    >
                      Submit Intake Form
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We'll review your submission and respond within 1-2
                      business days to schedule your consultation call.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6 sticky top-24">
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-foreground">
                      Contact Information
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            Email
                          </div>
                          <a
                            href="mailto:hello@northstarnanny.com"
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            mortensenaubrie@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            Phone
                          </div>
                          <a
                            href="tel:8015550100"
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            (435) 558-5750
                          </a>
                        </div>
                      </li>
                      
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-foreground">
                      What Happens Next?
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "We review your intake within 1-2 business days",
                        "Schedule a 30-minute consultation call",
                        "Discuss your needs and answer questions",
                        "Begin matching you with candidates",
                        "Present 2-3 vetted nannies for interviews",
                      ].map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-foreground">
                      Prefer to Call First?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Feel free to call us directly. We're happy to answer
                      questions before you submit an intake form.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-2"
                      asChild
                    >
                      <a href="tel:8015550100">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Placeholder Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Already submitted your intake? Book your consultation call directly.
          </p>
          <Card className="shadow-lg">
            <CardContent className="p-12">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
              <p className="text-muted-foreground mb-6">
                Calendar integration placeholder - Connect your scheduling tool here
              </p>
              <Button size="lg" className="rounded-full">
                Book Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}