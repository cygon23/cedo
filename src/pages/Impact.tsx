import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImpactCard from "@/components/shared/ImpactCard";
import {
  Users,
  Heart,
  GraduationCap,
  Sprout,
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import healthImage from "@/assets/hero-community.jpg";
import educationImage from "@/assets/hero-community.jpg";
import agricultureImage from "@/assets/hero-community.jpg";

const Impact = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section className='py-24 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in'>
            Our Impact
          </h1>
          <p className='text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in'>
            Measuring the positive change we create in communities across
            Tanzania
          </p>
        </div>
      </section>

      {/* Key Impact Statistics */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
              Impact by the Numbers
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Tangible results from our community-driven programs across
              Tanzania
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
            <ImpactCard
              icon={<Users className='w-8 h-8' />}
              number='50,000+'
              label='Lives Transformed'
              description='Community members directly impacted by our programs'
            />
            <ImpactCard
              icon={<MapPin className='w-8 h-8' />}
              number='25+'
              label='Communities Served'
              description='Villages and regions actively participating in our initiatives'
            />
            <ImpactCard
              icon={<GraduationCap className='w-8 h-8' />}
              number='5,000+'
              label='People Trained'
              description='Community leaders and health workers trained'
            />
            <ImpactCard
              icon={<Heart className='w-8 h-8' />}
              number='200+'
              label='Health Programs'
              description='Health and nutrition initiatives successfully implemented'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <ImpactCard
              icon={<Sprout className='w-8 h-8' />}
              number='15,000+'
              label='Farmers Supported'
              description='Agricultural training and support provided'
            />
            <ImpactCard
              icon={<TrendingUp className='w-8 h-8' />}
              number='40%'
              label='Income Increase'
              description='Average income improvement in supported communities'
            />
            <ImpactCard
              icon={<Award className='w-8 h-8' />}
              number='95%'
              label='Program Success Rate'
              description='Programs meeting or exceeding their goals'
            />
            <ImpactCard
              icon={<Calendar className='w-8 h-8' />}
              number='15'
              label='Years of Impact'
              description='Continuous community service and development'
            />
          </div>
        </div>
      </section>

      {/* Health Impact */}
      <section className='py-16 bg-secondary/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-6'>
                Health & Nutrition Impact
              </h2>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>65%</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Reduced Malnutrition
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Significant decrease in childhood malnutrition rates in
                      program communities
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>80%</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Improved Health Knowledge
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Community members demonstrating improved health and
                      nutrition knowledge
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>90%</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Maternal Health Improvement
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Increase in skilled birth attendance and prenatal care
                      uptake
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>300</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Community Health Workers Trained
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Local health champions serving their communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img
                src={healthImage}
                alt='Health impact in communities'
                className='w-full rounded-xl shadow-medium'
              />
              <div className='absolute inset-0 bg-primary/10 rounded-xl'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Impact */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='order-2 lg:order-1 relative'>
              <img
                src={educationImage}
                alt='Education impact in communities'
                className='w-full rounded-xl shadow-medium'
              />
              <div className='absolute inset-0 bg-accent/10 rounded-xl'></div>
            </div>
            <div className='order-1 lg:order-2'>
              <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-6'>
                Education & Training Impact
              </h2>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>75%</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Improved Literacy Rates
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Adult literacy improvement in program communities
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>150</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Community Leaders Trained
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Local leaders equipped with development skills
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>85%</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Women's Participation
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Increase in women's participation in community
                      decision-making
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>500</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Skills Training Graduates
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Individuals with new vocational and life skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Impact */}
      <section className='py-16 bg-secondary/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-6'>
                Agriculture & Livelihoods Impact
              </h2>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>60%</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Increased Crop Yields
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Average improvement in agricultural productivity
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>45%</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Income Growth
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Average household income increase from agriculture
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>120</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Farmer Groups Established
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Active cooperatives supporting member farmers
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-sm'>80%</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      Food Security Improvement
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      Households with improved food security status
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img
                src={agricultureImage}
                alt='Agriculture impact in communities'
                className='w-full rounded-xl shadow-medium'
              />
              <div className='absolute inset-0 bg-accent/10 rounded-xl'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
              Stories of Change
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Real stories from communities whose lives have been transformed
              through our programs
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-card p-6 rounded-xl shadow-soft hover-lift'>
              <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4'>
                <Heart className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Maria's Health Journey
              </h3>
              <p className='text-muted-foreground text-sm mb-4'>
                How community health training helped Maria become a health
                champion in her village of 2,000 people.
              </p>
              <Link
                to='/stories'
                className='text-primary hover:text-accent transition-smooth text-sm font-medium'>
                Read Full Story →
              </Link>
            </div>

            <div className='bg-card p-6 rounded-xl shadow-soft hover-lift'>
              <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4'>
                <Sprout className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                John's Farm Transformation
              </h3>
              <p className='text-muted-foreground text-sm mb-4'>
                From subsistence farming to sustainable agriculture - John's
                journey to food security and prosperity.
              </p>
              <Link
                to='/stories'
                className='text-primary hover:text-accent transition-smooth text-sm font-medium'>
                Read Full Story →
              </Link>
            </div>

            <div className='bg-card p-6 rounded-xl shadow-soft hover-lift'>
              <div className='w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-4'>
                <GraduationCap className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Grace's Leadership Story
              </h3>
              <p className='text-muted-foreground text-sm mb-4'>
                How leadership training empowered Grace to become her
                community's first female village chairperson.
              </p>
              <Link
                to='/stories'
                className='text-primary hover:text-accent transition-smooth text-sm font-medium'>
                Read Full Story →
              </Link>
            </div>
          </div>

          <div className='text-center mt-12'>
            <Link to='/stories'>
              <Button variant='cta' size='lg'>
                Read More Stories
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
            Help Us Create More Impact
          </h2>
          <p className='text-xl text-white/90 mb-8 leading-relaxed'>
            Join us in scaling our proven programs to reach even more
            communities across Tanzania
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/get-involved'>
              <Button variant='secondary' size='lg'>
                Get Involved
                <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
            <Link to='/partners'>
              <Button
                variant='outline'
                size='lg'
                className='bg-white/10 border-white text-white hover:bg-white hover:text-primary'>
                Partner With Us
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

export default Impact;
