import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Award } from "lucide-react";
import FloatingImpactStories from "../components/FloatingImpactStories";
const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "42,000+",
      label: "Lives Impacted",
      description: "Community members reached through our programs"
    },
    {
      icon: MapPin,
      number: "25+",
      label: "Communities",
      description: "Rural and urban areas where we operate"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Success Rate",
      description: "Of our community empowerment initiatives"
    },
    {
      icon: Award,
      number: "12+",
      label: "Years",
      description: "Of dedicated service to Tanzanian communities"
    }
  ];

  const achievements = [
    {
      title: "Health Education Reach",
      description: "Conducted comprehensive health and nutrition education programs reaching over 15,000 community members across rural Tanzania.",
      year: "2023"
    },
    {
      title: "Women's Rights Advocacy",
      description: "Successfully advocated for policy changes protecting women and children, supporting over 1,200 cases of gender-based violence.",
      year: "2022-2023"
    },
    {
      title: "Agricultural Innovation",
      description: "Introduced sustainable farming techniques to 800+ farmers, increasing crop yields by 40% and improving food security.",
      year: "2022"
    },
    {
      title: "Community Health Workers",
      description: "Trained and deployed 150+ community health workers providing essential healthcare services in remote areas.",
      year: "2021-2023"
    }
  ];

  return (
    <section id='impact' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Our <span className='text-impact'>Impact</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Measurable change and lasting transformation in the communities we
            serve
          </p>
        </div>

        {/* Statistics */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {stats.map((stat, index) => (
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

        {/* Key Achievements */}
        <div className='bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-foreground mb-4'>
              Key Achievements
            </h3>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Highlighting our most significant accomplishments in community
              empowerment and development
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
                <div className='flex items-center mb-4'>
                  <div className='w-3 h-3 bg-primary rounded-full mr-3'></div>
                  <span className='text-sm font-semibold text-primary'>
                    {achievement.year}
                  </span>
                </div>
                <h4 className='text-xl font-bold text-foreground mb-3'>
                  {achievement.title}
                </h4>
                <p className='text-muted-foreground leading-relaxed'>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stories Teaser */}
        <FloatingImpactStories />
      </div>
    </section>
  );
};

export default Impact;