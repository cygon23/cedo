import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, Globe, Zap } from "lucide-react";

const Donate = () => {
  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const impactItems = [
    {
      icon: <Heart className='w-6 h-6' />,
      title: "Healthcare Access",
      description: "$50 provides basic healthcare for one family for a month",
      color: "text-success",
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: "Education Support",
      description: "$100 sponsors a child's education for one semester",
      color: "text-primary",
    },
    {
      icon: <Globe className='w-6 h-6' />,
      title: "Community Development",
      description: "$250 funds a community development project",
      color: "text-accent",
    },
    {
      icon: <Zap className='w-6 h-6' />,
      title: "Emergency Relief",
      description: "$500 provides emergency relief for 10 families",
      color: "text-warning",
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='hero-gradient text-white py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Make a Difference Today
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white/90'>
            Your donation directly impacts communities in need. Every
            contribution matters.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' variant='secondary' className='text-lg px-8 py-4'>
              Donate Monthly
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary'>
              One-Time Donation
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Amount Selection */}
      <section className='py-16 bg-muted/50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Choose Your Impact
            </h2>
            <p className='text-lg text-muted-foreground'>
              Select an amount that works for you
            </p>
          </div>

          <Card className='shadow-medium'>
            <CardHeader>
              <CardTitle className='text-center text-2xl'>
                Donation Amount
              </CardTitle>
              <CardDescription className='text-center'>
                Select a preset amount or enter a custom amount
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              {/* Preset Amounts */}
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {donationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant='outline'
                    size='lg'
                    className='h-16 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors'>
                    ${amount}
                  </Button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className='flex flex-col space-y-2'>
                <label
                  htmlFor='custom-amount'
                  className='text-sm font-medium text-foreground'>
                  Custom Amount
                </label>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground'>
                    $
                  </span>
                  <input
                    id='custom-amount'
                    type='number'
                    placeholder='Enter amount'
                    className='w-full pl-8 pr-4 py-3 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent'
                  />
                </div>
              </div>

              {/* Donation Type */}
              <div className='flex flex-col sm:flex-row gap-3'>
                <Button variant='cta' size='lg' className='flex-1'>
                  Donate Monthly
                </Button>
                <Button variant='outline' size='lg' className='flex-1'>
                  One-Time Donation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Your Impact in Action
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              See exactly how your donation creates positive change in
              communities around the world
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {impactItems.map((item, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-medium transition-shadow hover-lift'>
                <CardHeader className='pb-4'>
                  <div
                    className={`mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center ${item.color}`}>
                    {item.icon}
                  </div>
                  <CardTitle className='text-lg'>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-sm'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className='py-16 bg-muted/50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
            Your Trust Matters
          </h2>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <div>
              <div className='text-4xl font-bold text-primary mb-2'>95%</div>
              <p className='text-muted-foreground'>
                of donations go directly to programs
              </p>
            </div>
            <div>
              <div className='text-4xl font-bold text-primary mb-2'>50+</div>
              <p className='text-muted-foreground'>
                communities served worldwide
              </p>
            </div>
            <div>
              <div className='text-4xl font-bold text-primary mb-2'>10K+</div>
              <p className='text-muted-foreground'>lives impacted annually</p>
            </div>
          </div>

          <Card className='shadow-medium'>
            <CardContent className='p-8'>
              <h3 className='text-2xl font-bold mb-4'>Secure & Transparent</h3>
              <p className='text-muted-foreground mb-6'>
                Your donation is processed securely and we provide detailed
                reports on how your contribution is making a difference.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button variant='outline'>View Impact Reports</Button>
                <Button variant='ghost'>Download Tax Receipt</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className='py-16 bg-primary text-primary-foreground mb-2'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to Make a Difference?
          </h2>
          <p className='text-xl mb-8 text-primary-foreground/90'>
            Join thousands of supporters creating positive change worldwide
          </p>
          <Button size='lg' variant='secondary' className='text-lg px-8 py-4'>
            Start Your Donation
          </Button>
        </div>
      </section> */}
    </div>
  );
};

export default Donate;
