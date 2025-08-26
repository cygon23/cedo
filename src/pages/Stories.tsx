import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Sprout,
  GraduationCap,
  Users,
  ArrowRight,
  Calendar,
  MapPin,
} from "lucide-react";
import healthImage from "@/assets/hero-community.jpg";
import educationImage from "@/assets/hero-community.jpg";
import agricultureImage from "@/assets/hero-community.jpg";

const Stories = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />

      <section className='py-24 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
            Success Stories
          </h1>
          <p className='text-xl text-white/90 mb-8'>
            Real stories of transformation from the communities we serve
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-16'>
            {/* Story 1 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <div className='flex items-center mb-4'>
                  <Heart className='w-6 h-6 text-primary mr-3' />
                  <span className='text-sm text-muted-foreground'>
                    Health & Nutrition
                  </span>
                </div>
                <h2 className='text-3xl font-bold text-foreground mb-4'>
                  Maria's Journey to Community Health Leadership
                </h2>
                <div className='flex items-center space-x-4 text-sm text-muted-foreground mb-6'>
                  <div className='flex items-center'>
                    <MapPin className='w-4 h-4 mr-1' />
                    <span>Dodoma Region</span>
                  </div>
                  <div className='flex items-center'>
                    <Calendar className='w-4 h-4 mr-1' />
                    <span>2023</span>
                  </div>
                </div>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  Maria Mwalimu was a mother of three struggling to understand
                  why children in her village kept falling sick. Through CEDO's
                  community health training program, she learned about
                  nutrition, hygiene, and preventive care. Today, she serves as
                  a community health worker for over 2,000 people in her
                  village.
                </p>
                <blockquote className='border-l-4 border-primary pl-6 text-foreground italic mb-6'>
                  "CEDO didn't just teach me about health - they empowered me to
                  become a health champion for my entire community. Now I can
                  help other mothers keep their children healthy."
                </blockquote>
                <div className='text-sm text-muted-foreground'>
                  <strong>Impact:</strong> 65% reduction in childhood
                  malnutrition cases in Maria's village
                </div>
              </div>
              <div className='relative'>
                <img
                  src={healthImage}
                  alt="Maria's health program"
                  className='w-full rounded-xl shadow-medium'
                />
                <div className='absolute inset-0 bg-primary/10 rounded-xl'></div>
              </div>
            </div>

            {/* Story 2 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='order-2 lg:order-1 relative'>
                <img
                  src={agricultureImage}
                  alt="John's farm transformation"
                  className='w-full rounded-xl shadow-medium'
                />
                <div className='absolute inset-0 bg-accent/10 rounded-xl'></div>
              </div>
              <div className='order-1 lg:order-2'>
                <div className='flex items-center mb-4'>
                  <Sprout className='w-6 h-6 text-accent mr-3' />
                  <span className='text-sm text-muted-foreground'>
                    Sustainable Agriculture
                  </span>
                </div>
                <h2 className='text-3xl font-bold text-foreground mb-4'>
                  From Subsistence to Prosperity: John's Farm
                </h2>
                <div className='flex items-center space-x-4 text-sm text-muted-foreground mb-6'>
                  <div className='flex items-center'>
                    <MapPin className='w-4 h-4 mr-1' />
                    <span>Morogoro Region</span>
                  </div>
                  <div className='flex items-center'>
                    <Calendar className='w-4 h-4 mr-1' />
                    <span>2022-2024</span>
                  </div>
                </div>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  John Masawe's farm could barely feed his family. Through
                  CEDO's sustainable agriculture program, he learned
                  climate-smart farming techniques, crop diversification, and
                  market linkages. His harvest doubled, and he now sells surplus
                  crops to neighboring communities.
                </p>
                <blockquote className='border-l-4 border-accent pl-6 text-foreground italic mb-6'>
                  "I never thought farming could make me prosperous. CEDO taught
                  me that with the right knowledge, my small farm could feed my
                  family and support my community."
                </blockquote>
                <div className='text-sm text-muted-foreground'>
                  <strong>Impact:</strong> 120% increase in crop yield, now
                  supports 15 other farming families
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <div className='flex items-center mb-4'>
                  <GraduationCap className='w-6 h-6 text-primary mr-3' />
                  <span className='text-sm text-muted-foreground'>
                    Leadership Development
                  </span>
                </div>
                <h2 className='text-3xl font-bold text-foreground mb-4'>
                  Grace Breaks Barriers as Village Leader
                </h2>
                <div className='flex items-center space-x-4 text-sm text-muted-foreground mb-6'>
                  <div className='flex items-center'>
                    <MapPin className='w-4 h-4 mr-1' />
                    <span>Mwanza Region</span>
                  </div>
                  <div className='flex items-center'>
                    <Calendar className='w-4 h-4 mr-1' />
                    <span>2023</span>
                  </div>
                </div>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  Grace was passionate about community development but felt her
                  voice wasn't heard. CEDO's leadership training program
                  equipped her with skills in communication, project management,
                  and community mobilization. She became her village's first
                  female chairperson, leading transformative development
                  projects.
                </p>
                <blockquote className='border-l-4 border-primary pl-6 text-foreground italic mb-6'>
                  "CEDO believed in my potential when others didn't. They gave
                  me the confidence and skills to lead change in my community.
                  Now young girls see that leadership has no gender."
                </blockquote>
                <div className='text-sm text-muted-foreground'>
                  <strong>Impact:</strong> First female village chairperson,
                  launched 5 community development projects
                </div>
              </div>
              <div className='relative'>
                <img
                  src={educationImage}
                  alt="Grace's leadership journey"
                  className='w-full rounded-xl shadow-medium'
                />
                <div className='absolute inset-0 bg-primary/10 rounded-xl'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-white mb-6'>
            Create More Success Stories
          </h2>
          <p className='text-xl text-white/90 mb-8'>
            Help us reach more communities and transform more lives
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/get-involved'>
              <Button variant='donate' size='lg'>
                Get Involved <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
            <Link to='/impact'>
              <Button
                variant='outline'
                size='lg'
                className='bg-white/10 border-white text-white hover:bg-white hover:text-primary'>
                View Our Impact <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
