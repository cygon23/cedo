import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Globe,
  Users,
  Heart,
  Award,
  ArrowRight,
  HandHeart,
  Building,
  Briefcase,
  TrendingUp,
  MapPin,
  Calendar,
  CheckCircle,
  Target,
  Lightbulb,
} from "lucide-react";

const Partners = () => {
  const partnerStats = [
    {
      icon: Users,
      number: "50+",
      label: "Active Partners",
      description: "Organizations working with us across Tanzania",
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries",
      description: "International partners supporting our mission",
    },
    {
      icon: TrendingUp,
      number: "$2.5M+",
      label: "Resources Mobilized",
      description: "Combined funding through partnerships",
    },
    {
      icon: Target,
      number: "100+",
      label: "Joint Projects",
      description: "Collaborative initiatives implemented",
    },
  ];

  const partnershipTypes = [
    {
      icon: Globe,
      title: "International Organizations",
      description:
        "Global partnerships that bring international expertise and resources to our local initiatives",
      partners: [
        {
          name: "United Nations Development Programme (UNDP)",
          role: "Strategic development partner",
          focus: "Sustainable development goals implementation",
          duration: "2019 - Present",
        },
        {
          name: "World Health Organization (WHO)",
          role: "Technical advisor",
          focus: "Community health systems strengthening",
          duration: "2020 - Present",
        },
        {
          name: "UNICEF Tanzania",
          role: "Child protection partner",
          focus: "Children's rights and welfare programs",
          duration: "2021 - Present",
        },
        {
          name: "Oxfam International",
          role: "Capacity building partner",
          focus: "Women's economic empowerment",
          duration: "2018 - Present",
        },
      ],
    },
    {
      icon: Building,
      title: "Government Agencies",
      description:
        "Strong partnerships with government institutions ensure policy alignment and sustainable impact",
      partners: [
        {
          name: "Ministry of Health, Community Development, Gender, Elderly and Children",
          role: "Policy implementation partner",
          focus: "National health and social development strategies",
          duration: "2017 - Present",
        },
        {
          name: "Singida Regional Commissioner's Office",
          role: "Regional coordination partner",
          focus: "Regional development planning and implementation",
          duration: "2016 - Present",
        },
        {
          name: "District Executive Directors - Singida Urban & Rural",
          role: "Local implementation partners",
          focus: "Community-level program delivery",
          duration: "2016 - Present",
        },
        {
          name: "Ward Development Committees",
          role: "Grassroots partners",
          focus: "Community mobilization and participation",
          duration: "2015 - Present",
        },
      ],
    },
    {
      icon: Heart,
      title: "Local NGOs & Community Organizations",
      description:
        "Grassroots partnerships that ensure community ownership and cultural appropriateness",
      partners: [
        {
          name: "Tanzania Women Lawyers Association (TAWLA)",
          role: "Legal advocacy partner",
          focus: "Women's legal rights and gender-based violence",
          duration: "2019 - Present",
        },
        {
          name: "Community Health Fund (CHF) Groups",
          role: "Health financing partner",
          focus: "Community health insurance schemes",
          duration: "2018 - Present",
        },
        {
          name: "Singida Women's Cooperative Network",
          role: "Economic empowerment partner",
          focus: "Women's business development and microfinance",
          duration: "2017 - Present",
        },
        {
          name: "Youth Development Associations",
          role: "Youth engagement partner",
          focus: "Leadership development and skills training",
          duration: "2020 - Present",
        },
      ],
    },
    {
      icon: Briefcase,
      title: "Private Sector & Academic Institutions",
      description:
        "Innovation-driven partnerships that bring research, technology, and sustainable business solutions",
      partners: [
        {
          name: "University of Dar es Salaam - School of Public Health",
          role: "Research partner",
          focus: "Community health research and evaluation",
          duration: "2018 - Present",
        },
        {
          name: "Agricultural Marketing Cooperative Societies",
          role: "Value chain partner",
          focus: "Farmer income improvement and market access",
          duration: "2019 - Present",
        },
        {
          name: "Microfinance Institutions Network",
          role: "Financial inclusion partner",
          focus: "Community-based lending and savings programs",
          duration: "2017 - Present",
        },
        {
          name: "Technology for Development Organizations",
          role: "Innovation partner",
          focus: "Digital solutions for community development",
          duration: "2021 - Present",
        },
      ],
    },
  ];

  const partnershipPrinciples = [
    {
      icon: HandHeart,
      title: "Mutual Respect & Equality",
      description:
        "We believe in partnerships built on mutual respect, where each partner brings unique value and expertise to our shared mission.",
    },
    {
      icon: Target,
      title: "Shared Vision & Goals",
      description:
        "Our partnerships are anchored in common objectives for community empowerment and sustainable development in Tanzania.",
    },
    {
      icon: CheckCircle,
      title: "Transparency & Accountability",
      description:
        "We maintain open communication, shared reporting, and joint accountability for results and impact measurement.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Impact",
      description:
        "We focus on long-term partnerships that create lasting change and build local capacity for continued development.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Learning",
      description:
        "We encourage knowledge sharing, innovative approaches, and continuous learning from our diverse partner network.",
    },
    {
      icon: Users,
      title: "Community-Centered Approach",
      description:
        "All partnerships prioritize community needs, participation, and ownership of development processes.",
    },
  ];

  const successStories = [
    {
      title: "Maternal Health Initiative Success",
      partner: "WHO & Ministry of Health",
      description:
        "Through our partnership with WHO and the Ministry of Health, we reduced maternal mortality by 35% in target communities through improved prenatal care and skilled birth attendance.",
      impact: "2,500+ mothers reached",
      year: "2021-2023",
    },
    {
      title: "Women's Economic Empowerment Program",
      partner: "Oxfam & Local Cooperatives",
      description:
        "Collaborated with Oxfam and local cooperatives to establish 15 women's savings groups, providing microfinance and business training to rural women.",
      impact: "800+ women economically empowered",
      year: "2020-2023",
    },
    {
      title: "Community Health Worker Training",
      partner: "UNDP & University of Dar es Salaam",
      description:
        "Partnered to develop and implement a comprehensive training program for community health workers, improving healthcare access in remote areas.",
      impact: "150+ health workers trained",
      year: "2019-2022",
    },
  ];

  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section className='py-24 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in'>
            Our Partners
          </h1>
          <p className='text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in'>
            Building strategic alliances to amplify impact and create
            sustainable change across Tanzanian communities
          </p>
        </div>
      </section>

      {/* Partnership Statistics */}
      <section className='py-16 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {partnerStats.map((stat, index) => (
              <Card
                key={index}
                className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-primary/5'>
                <CardContent className='p-6 text-center'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                    <stat.icon className='w-6 h-6 text-primary' />
                  </div>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    {stat.number}
                  </div>
                  <div className='font-semibold text-foreground mb-1'>
                    {stat.label}
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types & Detailed Partners */}
      <section className='py-16 bg-secondary/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-4'>
              Our Partnership Network
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              We work with diverse organizations across sectors to maximize our
              collective impact and reach
            </p>
          </div>

          <div className='space-y-16'>
            {partnershipTypes.map((type, index) => (
              <div key={index}>
                <div className='flex items-center mb-8'>
                  <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4'>
                    <type.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-foreground'>
                      {type.title}
                    </h3>
                    <p className='text-muted-foreground'>{type.description}</p>
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  {type.partners.map((partner, idx) => (
                    <Card
                      key={idx}
                      className='border-0 shadow-md hover:shadow-lg transition-shadow duration-300'>
                      <CardContent className='p-6'>
                        <div className='flex justify-between items-start mb-3'>
                          <h4 className='font-bold text-foreground text-lg'>
                            {partner.name}
                          </h4>
                          <span className='text-xs bg-primary/10 text-primary px-2 py-1 rounded-full'>
                            {partner.duration}
                          </span>
                        </div>
                        <p className='text-sm text-primary font-semibold mb-2'>
                          {partner.role}
                        </p>
                        <p className='text-muted-foreground text-sm mb-3'>
                          {partner.focus}
                        </p>
                        <div className='flex items-center text-xs text-muted-foreground'>
                          <Calendar className='w-3 h-3 mr-1' />
                          Partnership Duration: {partner.duration}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Principles */}
      <section className='py-16 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-4'>
              Our Partnership Principles
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              The foundation of our collaborative approach is built on these
              core principles
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {partnershipPrinciples.map((principle, index) => (
              <Card
                key={index}
                className='border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift'>
                <CardContent className='p-6'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                    <principle.icon className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-lg font-bold text-foreground mb-3'>
                    {principle.title}
                  </h3>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className='py-16 bg-gradient-to-r from-primary/5 to-secondary/5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-4'>
              Partnership Success Stories
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Real results from our collaborative efforts with partners across
              Tanzania
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {successStories.map((story, index) => (
              <Card
                key={index}
                className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <CardContent className='p-6'>
                  <div className='flex items-center mb-4'>
                    <div className='w-3 h-3 bg-primary rounded-full mr-3'></div>
                    <span className='text-sm font-semibold text-primary'>
                      {story.year}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-2'>
                    {story.title}
                  </h3>
                  <p className='text-primary font-semibold text-sm mb-3'>
                    {story.partner}
                  </p>
                  <p className='text-muted-foreground text-sm mb-4 leading-relaxed'>
                    {story.description}
                  </p>
                  <div className='bg-primary/10 rounded-lg p-3'>
                    <p className='text-primary font-bold text-sm'>
                      {story.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-white mb-6'>
            Become Our Partner
          </h2>
          <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
            Join our network of committed organizations working to transform
            communities across Tanzania. Together, we can achieve greater impact
            and create lasting change.
          </p>
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8'>
            <h3 className='text-lg font-bold text-white mb-4'>
              Partnership Opportunities
            </h3>
            <div className='grid md:grid-cols-2 gap-4 text-white/90'>
              <div className='text-left'>
                <CheckCircle className='w-5 h-5 inline mr-2' />
                Funding and Resource Partnerships
              </div>
              <div className='text-left'>
                <CheckCircle className='w-5 h-5 inline mr-2' />
                Technical Expertise Collaboration
              </div>
              <div className='text-left'>
                <CheckCircle className='w-5 h-5 inline mr-2' />
                Implementation Partnerships
              </div>
              <div className='text-left'>
                <CheckCircle className='w-5 h-5 inline mr-2' />
                Research and Evaluation Partners
              </div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/contact'>
              <Button
                size='lg'
                className='bg-white text-primary hover:bg-white/90'>
                <HandHeart className='w-5 h-5 mr-2' />
                Start Partnership Discussion
              </Button>
            </Link>
            <Button
              variant='outline'
              size='lg'
              className='bg-transparent border-white text-white hover:bg-white/10'>
              Download Partnership Guidelines
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
