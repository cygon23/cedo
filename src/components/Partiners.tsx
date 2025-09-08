import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Globe,
  HandHeart,
  Award,
  Building,
  Heart,
  Briefcase,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Partners = () => {
  const partnerCategories = [
    {
      icon: Building,
      title: "Government Partners",
      description: "Collaborating with local and national government agencies",
      partners: [
        "Ministry of Health, Community Development, Gender, Elderly and Children",
        "Singida Regional Commissioner's Office",
        "District Councils - Singida Urban & Rural",
        "Ward Development Committees",
      ],
    },
    {
      icon: Heart,
      title: "Local NGOs & CBOs",
      description: "Partnering with community-based organizations",
      partners: [
        "Tanzania Women Lawyers Association (TAWLA)",
        "Community Health Fund (CHF)",
        "Local Women's Groups",
        "Youth Development Organizations",
      ],
    },
    {
      icon: Briefcase,
      title: "Private Sector",
      description: "Engaging businesses for sustainable development",
      partners: [
        "Local Agricultural Cooperatives",
        "Microfinance Institutions",
        "Health Insurance Companies",
        "Technology Partners",
      ],
    },
  ];

  const achievements = [
    {
      title: "Strategic Partnerships",
      description:
        "Building lasting relationships that amplify our impact across Tanzania's communities.",
      stat: "50+",
      label: "Active Partners",
    },
    {
      title: "Collaborative Projects",
      description:
        "Joint initiatives addressing health, education, and women's rights challenges.",
      stat: "25+",
      label: "Joint Programs",
    },
    {
      title: "Resource Mobilization",
      description:
        "Leveraging partnerships to secure funding and resources for community development.",
      stat: "$2M+",
      label: "Resources Mobilized",
    },
    {
      title: "Capacity Building",
      description:
        "Strengthening partner organizations through training and knowledge sharing.",
      stat: "200+",
      label: "Partners Trained",
    },
  ];

  return (
    <>
      <main>
        {/* Hero Section with Gradient Background */}
        <section className='py-24 hero-gradient'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in'>
              Our Partners
            </h1>
            <p className='text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in'>
              Collaborating with diverse stakeholders to create lasting change
              in Tanzanian communities
            </p>
          </div>
        </section>

        {/* Partners Content Section */}
        <section className='py-20 bg-background'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Partnership Stats */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-primary/5'>
                  <CardContent className='p-6 text-center'>
                    <div className='text-3xl font-bold text-primary mb-2'>
                      {achievement.stat}
                    </div>
                    <div className='font-semibold text-foreground mb-1'>
                      {achievement.label}
                    </div>
                    <div className='text-lg font-semibold text-foreground mb-2'>
                      {achievement.title}
                    </div>
                    <p className='text-sm text-muted-foreground'>
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Partner Categories */}
            <div className='grid md:grid-cols-2 gap-8 mb-16'>
              {partnerCategories.map((category, index) => (
                <Card
                  key={index}
                  className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <CardContent className='p-8'>
                    <div className='flex items-start mb-6'>
                      <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0'>
                        <category.icon className='w-6 h-6 text-primary' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold text-foreground mb-2'>
                          {category.title}
                        </h3>
                        <p className='text-muted-foreground mb-4'>
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <ul className='space-y-3'>
                      {category.partners.map((partner, idx) => (
                        <li key={idx} className='flex items-center'>
                          <div className='w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0'></div>
                          <span className='text-foreground'>{partner}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Partnership Approach */}
            <div className='bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-16'>
              <div className='text-center mb-8'>
                <h3 className='text-3xl font-bold text-foreground mb-4'>
                  Our Partnership Approach
                </h3>
                <p className='text-muted-foreground max-w-2xl mx-auto'>
                  We believe in collaborative partnerships that leverage each
                  organization's strengths to create sustainable impact in
                  Tanzanian communities.
                </p>
              </div>

              <div className='grid md:grid-cols-3 gap-6'>
                <div className='bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300'>
                  <Users className='w-8 h-8 text-primary mx-auto mb-4' />
                  <h4 className='text-lg font-bold text-foreground mb-2'>
                    Collaborative Planning
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    Joint strategy development ensuring all voices are heard and
                    resources optimized
                  </p>
                </div>
                <div className='bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300'>
                  <HandHeart className='w-8 h-8 text-primary mx-auto mb-4' />
                  <h4 className='text-lg font-bold text-foreground mb-2'>
                    Shared Impact
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    Measuring success together through transparent reporting and
                    accountability
                  </p>
                </div>
                <div className='bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300'>
                  <Award className='w-8 h-8 text-primary mx-auto mb-4' />
                  <h4 className='text-lg font-bold text-foreground mb-2'>
                    Mutual Growth
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    Capacity building and knowledge sharing that strengthens all
                    partners
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className='text-center'>
              <div className='bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 max-w-4xl mx-auto'>
                <h3 className='text-2xl font-bold mb-4'>Become a Partner</h3>
                <p className='text-white/90 mb-6 max-w-2xl mx-auto'>
                  Join us in creating sustainable change across Tanzania.
                  Whether you're a government agency, NGO, private company, or
                  community organization, we welcome collaborative partnerships.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    variant='outline'
                    size='lg'
                    className='bg-white text-primary hover:bg-white/90'>
                    Partnership Opportunities
                  </Button>
                  <Button
                    variant='default'
                    size='lg'
                    className='bg-transparent border-white text-white hover:bg-white/10'>
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Partners;
