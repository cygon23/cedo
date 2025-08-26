import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  GraduationCap,
  Sprout,
  Users,
  ArrowRight,
  CheckCircle,
  Target,
} from "lucide-react";
import healthImage from "@/assets/hero-community.jpg";
import educationImage from "@/assets/hero-community.jpg";
import agricultureImage from "@/assets/hero-community.jpg";

const WhatWeDo = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section className='py-24 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in'>
            What We Do
          </h1>
          <p className='text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in'>
            Comprehensive programs addressing health, education, and sustainable
            development challenges across Tanzania
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
              Our Core Programs
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Integrated approaches that address the interconnected challenges
              facing Tanzanian communities
            </p>
          </div>
        </div>
      </section>

      {/* Health & Nutrition */}
      <section id='health' className='py-16 bg-secondary/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4'>
                  <Heart className='w-6 h-6 text-white' />
                </div>
                <h2 className='text-3xl sm:text-4xl font-bold text-foreground'>
                  Health & Nutrition
                </h2>
              </div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Comprehensive health education and nutrition programs designed
                to improve community wellbeing and reduce preventable diseases
                across Tanzania.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-accent mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Community Health Education
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Training community health workers and promoting health
                      literacy
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-accent mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Maternal & Child Health
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Supporting mothers and children through critical health
                      phases
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-accent mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Nutrition Awareness
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Promoting proper nutrition and addressing malnutrition
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-accent mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Disease Prevention
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Preventive care and health promotion initiatives
                    </p>
                  </div>
                </div>
              </div>

              <Link to='/impact'>
                <Button variant='cta'>
                  View Health Impact
                  <ArrowRight className='w-5 h-5' />
                </Button>
              </Link>
            </div>
            <div className='relative'>
              <img
                src={healthImage}
                alt='Health and nutrition programs'
                className='w-full rounded-xl shadow-medium'
              />
              <div className='absolute inset-0 bg-primary/10 rounded-xl'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section id='education' className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='order-2 lg:order-1 relative'>
              <img
                src={educationImage}
                alt='Education and capacity building'
                className='w-full rounded-xl shadow-medium'
              />
              <div className='absolute inset-0 bg-accent/10 rounded-xl'></div>
            </div>
            <div className='order-1 lg:order-2'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4'>
                  <GraduationCap className='w-6 h-6 text-white' />
                </div>
                <h2 className='text-3xl sm:text-4xl font-bold text-foreground'>
                  Education & Training
                </h2>
              </div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Capacity building and educational programs that equip
                communities with knowledge and skills for sustainable
                development and self-reliance.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Community Leadership Development
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Training local leaders to drive community change
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Skills Training Programs
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Vocational and life skills for economic empowerment
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Gender Equality Training
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Promoting inclusive participation and women's empowerment
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Behavior Change Communication
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Effective communication strategies for social change
                    </p>
                  </div>
                </div>
              </div>

              <Link to='/impact'>
                <Button variant='cta'>
                  View Education Impact
                  <ArrowRight className='w-5 h-5' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Agriculture */}
      <section id='agriculture' className='py-16 bg-secondary/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mr-4'>
                  <Sprout className='w-6 h-6 text-white' />
                </div>
                <h2 className='text-3xl sm:text-4xl font-bold text-foreground'>
                  Sustainable Agriculture
                </h2>
              </div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Nutrition-sensitive agriculture and food systems programs that
                enhance food security, improve livelihoods, and promote economic
                empowerment.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-accent mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Climate-Smart Agriculture
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Sustainable farming practices adapted to climate change
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-accent mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Food Systems Strengthening
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Improving food production, processing, and distribution
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-accent mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Market Linkages
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Connecting farmers with markets for better income
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-5 h-5 text-accent mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      Cooperative Development
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Supporting farmer groups and cooperatives
                    </p>
                  </div>
                </div>
              </div>

              <Link to='/impact'>
                <Button variant='cta'>
                  View Agriculture Impact
                  <ArrowRight className='w-5 h-5' />
                </Button>
              </Link>
            </div>
            <div className='relative'>
              <img
                src={agricultureImage}
                alt='Sustainable agriculture programs'
                className='w-full rounded-xl shadow-medium'
              />
              <div className='absolute inset-0 bg-accent/10 rounded-xl'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Consultancy */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
              Research & Consultancy
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Evidence-based research and expert consultancy services supporting
              development initiatives across East Africa
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center p-6 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                <Target className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                GESI Research
              </h3>
              <p className='text-muted-foreground text-sm'>
                Gender equality and social inclusion research and programming
              </p>
            </div>

            <div className='text-center p-6 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                <Sprout className='w-6 h-6 text-accent' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Food Systems
              </h3>
              <p className='text-muted-foreground text-sm'>
                Nutrition-sensitive agriculture and food systems analysis
              </p>
            </div>

            <div className='text-center p-6 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                <Users className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Community Engagement
              </h3>
              <p className='text-muted-foreground text-sm'>
                Participatory approaches and community mobilization strategies
              </p>
            </div>

            <div className='text-center p-6 bg-card rounded-xl shadow-soft hover-lift'>
              <div className='w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                <Heart className='w-6 h-6 text-accent' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Health Systems
              </h3>
              <p className='text-muted-foreground text-sm'>
                Health system strengthening and program evaluation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
            Support Our Programs
          </h2>
          <p className='text-xl text-white/90 mb-8 leading-relaxed'>
            Help us expand our reach and impact across Tanzania's communities
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/get-involved'>
              <Button variant='donate' size='lg'>
                Get Involved
                <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
            <Link to='/impact'>
              <Button
                variant='outline'
                size='lg'
                className='bg-white/10 border-white text-white hover:bg-white hover:text-primary'>
                View Our Impact
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

export default WhatWeDo;
