import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["Dar es Salaam, Tanzania", "Mwanza Regional Office"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+255 XXX XXX XXX", "+255 XXX XXX XXX"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cedo.or.tz", "programs@cedo.or.tz"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-trust">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to partner with us or learn more about our work? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Join Our Mission</h4>
              <p className="mb-4 text-white/90">
                Whether you're an individual, organization, or government entity, 
                there are many ways to get involved and support our community empowerment initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" size="sm" className="bg-white text-primary hover:bg-white/90">
                  Volunteer
                </Button>
                <Button variant="cta" size="sm">
                  Donate
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                      Organization (Optional)
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="border-border focus:ring-primary"
                      placeholder="Tell us how we can help or how you'd like to get involved..."
                    />
                  </div>

                  <Button type="submit" variant="impact" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;