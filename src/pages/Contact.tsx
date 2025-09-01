import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["Singida, Tanzania", "Singida Regional Office"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+255 769 044 455", "+255 769 044 455"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cedonia.org", "programs@cedonia.org"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section with Gradient Background */}
        <section className='py-24 hero-gradient'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in'>
              Get In Touch
            </h1>
            <p className='text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in'>
              Ready to partner with us or learn more about our work? We'd love
              to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className='py-20 bg-background'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Contact Information */}
              <div>
                <h3 className='text-2xl font-bold text-foreground mb-8'>
                  Contact Information
                </h3>
                <div className='space-y-6 mb-8'>
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className='border-0 shadow-md hover:shadow-lg transition-shadow duration-300'>
                      <CardContent className='p-6'>
                        <div className='flex items-start'>
                          <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0'>
                            <info.icon className='w-6 h-6 text-primary' />
                          </div>
                          <div>
                            <h4 className='font-semibold text-foreground mb-2'>
                              {info.title}
                            </h4>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className='text-muted-foreground'>
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className='bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6'>
                  <h4 className='text-xl font-bold mb-3'>Join Our Mission</h4>
                  <p className='mb-4 text-white/90'>
                    Whether you're an individual, organization, or government
                    entity, there are many ways to get involved and support our
                    community empowerment initiatives.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='bg-white text-primary hover:bg-white/90'>
                      Volunteer
                    </Button>
                    <Button
                      variant='default'
                      size='sm'
                      className='bg-primary text-white hover:bg-primary-dark'>
                      Donate
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className='border-0 shadow-lg'>
                  <CardContent className='p-8'>
                    <h3 className='text-2xl font-bold text-foreground mb-6'>
                      Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div>
                          <label
                            htmlFor='firstName'
                            className='block text-sm font-medium text-foreground mb-2'>
                            First Name
                          </label>
                          <Input
                            id='firstName'
                            name='firstName'
                            required
                            className='border-border focus:ring-primary'
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='lastName'
                            className='block text-sm font-medium text-foreground mb-2'>
                            Last Name
                          </label>
                          <Input
                            id='lastName'
                            name='lastName'
                            required
                            className='border-border focus:ring-primary'
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-foreground mb-2'>
                          Email Address
                        </label>
                        <Input
                          id='email'
                          name='email'
                          type='email'
                          required
                          className='border-border focus:ring-primary'
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='organization'
                          className='block text-sm font-medium text-foreground mb-2'>
                          Organization (Optional)
                        </label>
                        <Input
                          id='organization'
                          name='organization'
                          className='border-border focus:ring-primary'
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='subject'
                          className='block text-sm font-medium text-foreground mb-2'>
                          Subject
                        </label>
                        <Input
                          id='subject'
                          name='subject'
                          required
                          className='border-border focus:ring-primary'
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='message'
                          className='block text-sm font-medium text-foreground mb-2'>
                          Message
                        </label>
                        <Textarea
                          id='message'
                          name='message'
                          rows={5}
                          required
                          className='border-border focus:ring-primary'
                          placeholder="Tell us how we can help or how you'd like to get involved..."
                        />
                      </div>

                      <Button
                        type='submit'
                        variant='default'
                        size='lg'
                        className='w-full bg-primary text-white hover:bg-primary-dark'>
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
