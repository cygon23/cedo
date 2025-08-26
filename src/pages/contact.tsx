import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 2 business days.",
    });
  };

  return (
    <div className='min-h-screen'>
      <Navigation />

      <section className='py-24 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
            Contact Us
          </h1>
          <p className='text-xl text-white/90 mb-8'>
            Get in touch with our team to learn more about our work
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold text-foreground mb-8'>
                Get in Touch
              </h2>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <MapPin className='w-6 h-6 text-primary mt-1' />
                  <div>
                    <h3 className='font-semibold text-foreground'>Address</h3>
                    <p className='text-muted-foreground'>
                      Dar es Salaam, Tanzania
                      <br />
                      P.O. Box 12345
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <Phone className='w-6 h-6 text-primary mt-1' />
                  <div>
                    <h3 className='font-semibold text-foreground'>Phone</h3>
                    <p className='text-muted-foreground'>+255 123 456 789</p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <Mail className='w-6 h-6 text-primary mt-1' />
                  <div>
                    <h3 className='font-semibold text-foreground'>Email</h3>
                    <p className='text-muted-foreground'>info@cedo.org</p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <Clock className='w-6 h-6 text-primary mt-1' />
                  <div>
                    <h3 className='font-semibold text-foreground'>
                      Office Hours
                    </h3>
                    <p className='text-muted-foreground'>
                      Monday - Friday: 8:00 AM - 5:00 PM EAT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className='shadow-medium'>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                      <Label htmlFor='firstName'>First Name</Label>
                      <Input id='firstName' required />
                    </div>
                    <div>
                      <Label htmlFor='lastName'>Last Name</Label>
                      <Input id='lastName' required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' type='email' required />
                  </div>
                  <div>
                    <Label htmlFor='subject'>Subject</Label>
                    <Input id='subject' required />
                  </div>
                  <div>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea id='message' className='h-32' required />
                  </div>
                  <Button type='submit' variant='hero' className='w-full'>
                    Send Message <ArrowRight className='w-4 h-4' />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
