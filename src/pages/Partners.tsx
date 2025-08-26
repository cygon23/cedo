import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Users,
  Heart,
  Award,
  ArrowRight,
  HandHeart,
} from "lucide-react";

const Partners = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />

      <section className='py-24 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
            Our Partners
          </h1>
          <p className='text-xl text-white/90 mb-8'>
            Collaborating with organizations worldwide to maximize our impact
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-4'>
              Partnership Categories
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              We work with diverse partners who share our commitment to
              community empowerment
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            <div className='text-center p-6 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                <Globe className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                International Organizations
              </h3>
              <p className='text-muted-foreground text-sm'>
                UN agencies, global foundations, and international NGOs
              </p>
            </div>

            <div className='text-center p-6 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Government Agencies
              </h3>
              <p className='text-muted-foreground text-sm'>
                Ministry departments and local government authorities
              </p>
            </div>

            <div className='text-center p-6 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4'>
                <Heart className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Local NGOs
              </h3>
              <p className='text-muted-foreground text-sm'>
                Community-based organizations and local development partners
              </p>
            </div>

            <div className='text-center p-6 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                <Award className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Academic Institutions
              </h3>
              <p className='text-muted-foreground text-sm'>
                Universities and research organizations
              </p>
            </div>
          </div>

          <div className='bg-secondary/30 rounded-2xl p-8 mb-16'>
            <h3 className='text-2xl font-bold text-foreground mb-6 text-center'>
              Current Partnerships
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='bg-card p-6 rounded-lg'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Ministry of Health Tanzania
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Collaborating on community health programs and policy
                  development
                </p>
              </div>
              <div className='bg-card p-6 rounded-lg'>
                <h4 className='font-semibold text-foreground mb-2'>
                  University of Dar es Salaam
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Research partnerships in nutrition and community development
                </p>
              </div>
              <div className='bg-card p-6 rounded-lg'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Global Health Initiative
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Technical and funding support for health programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-white mb-6'>
            Become Our Partner
          </h2>
          <p className='text-xl text-white/90 mb-8'>
            Join us in creating sustainable change across Tanzania
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/get-involved'>
              <Button variant='donate' size='lg'>
                <HandHeart className='w-5 h-5' />
                Partner With Us
              </Button>
            </Link>
            <Link to='/contact'>
              <Button
                variant='outline'
                size='lg'
                className='bg-white/10 border-white text-white hover:bg-white hover:text-primary'>
                Contact Us <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
