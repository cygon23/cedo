import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const About = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-24 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src={heroImage}
            alt='About CEDO'
            className='w-full h-full object-cover opacity-20'
          />
        </div>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in'>
            About <span className='text-gradient'>CEDO</span>
          </h1>
          <p className='text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in'>
            Empowering communities across Tanzania through health education,
            advocacy, and sustainable development
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='text-center p-8 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6'>
                <Target className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-foreground mb-4'>
                Our Mission
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                To empower communities in Tanzania by addressing health,
                nutrition, and socio-economic challenges through evidence-based
                advocacy, education, and community-driven solutions.
              </p>
            </div>

            <div className='text-center p-8 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6'>
                <Eye className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-foreground mb-4'>
                Our Vision
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                A Tanzania where all communities have the knowledge, resources,
                and capacity to achieve optimal health, nutrition, and
                sustainable livelihoods.
              </p>
            </div>

            <div className='text-center p-8 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6'>
                <Heart className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-foreground mb-4'>
                Our Values
              </h3>
              <ul className='text-muted-foreground text-left space-y-2'>
                <li>• Community Ownership</li>
                <li>• Evidence-Based Approach</li>
                <li>• Sustainability</li>
                <li>• Gender Equality</li>
                <li>• Transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-16 bg-secondary/30'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-6'>
                Our Story
              </h2>
              <div className='space-y-4 text-muted-foreground leading-relaxed'>
                <p>
                  Community Empowerment and Development Organization (CEDO) was
                  founded with a vision to address the pressing health and
                  nutrition challenges facing communities across Tanzania.
                </p>
                <p>
                  Our organization emerged from the recognition that sustainable
                  development requires a community-driven approach that empowers
                  local populations with knowledge, skills, and resources to
                  create lasting change.
                </p>
                <p>
                  Over the years, CEDO has grown into a trusted partner for
                  communities, government institutions, and international
                  organizations working towards improved health outcomes and
                  sustainable livelihoods in Tanzania.
                </p>
                <p>
                  Today, we continue to expand our reach and impact, always
                  staying true to our core principle of putting communities at
                  the center of everything we do.
                </p>
              </div>
            </div>
            <div className='relative'>
              <img
                src={heroImage}
                alt="CEDO's journey"
                className='w-full rounded-xl shadow-medium'
              />
              <div className='absolute inset-0 bg-hero-gradient opacity-20 rounded-xl'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
              Our Approach
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              We believe in participatory, evidence-based interventions that
              ensure community ownership and sustainability
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-10 h-10 text-primary' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Community-Driven
              </h3>
              <p className='text-muted-foreground text-sm'>
                Local communities lead the identification of challenges and
                solutions
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Award className='w-10 h-10 text-accent' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Evidence-Based
              </h3>
              <p className='text-muted-foreground text-sm'>
                All programs are grounded in research and proven methodologies
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Target className='w-10 h-10 text-primary' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Sustainable
              </h3>
              <p className='text-muted-foreground text-sm'>
                Long-term solutions that continue beyond project timelines
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Heart className='w-10 h-10 text-accent' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Inclusive
              </h3>
              <p className='text-muted-foreground text-sm'>
                Gender equality and social inclusion in all our initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className='py-16 bg-secondary/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
              Our Leadership
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Led by a team of five dedicated professionals with extensive
              experience and shared passion for transformative community
              development
            </p>
          </div>

          <div className='text-center'>
            <p className='text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed'>
              Our leadership team combines decades of experience in public
              health, community development, agriculture, gender equality, and
              social research. Each member brings unique expertise and a deep
              commitment to empowering communities across Tanzania.
            </p>
            <Link to='/contact'>
              <Button variant='cta'>
                Meet Our Team
                <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
            Partner With Us
          </h2>
          <p className='text-xl text-white/90 mb-8 leading-relaxed'>
            Join us in our mission to empower communities and transform lives
            across Tanzania
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/what-we-do'>
              <Button
                variant='outline'
                size='lg'
                className='bg-white/10 border-white text-white hover:bg-white hover:text-primary'>
                Our Programs
                <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
            <Link to='/get-involved'>
              <Button variant='donate' size='lg'>
                Get Involved
                <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
