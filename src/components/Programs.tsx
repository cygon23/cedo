import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, GraduationCap, Shield, Sprout, Users, Heart } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Sprout,
      title: "Agriculture and Food Security",
      description:
        "Promoting sustainable agricultural practices and ensuring food security through innovative farming techniques and community support.",
      impact: "2,500+ farmers supported",
      color: "bg-primary",
    },
    {
      icon: Shield,
      title: "Climate Resilience",
      description:
        "Building community capacity to adapt to climate change through resilience programs and sustainable environmental practices.",
      impact: "1,800+ households reached",
      color: "bg-primary",
    },
    {
      icon: Stethoscope,
      title: "Health and Nutrition",
      description:
        "Comprehensive health programs focused on nutrition education, disease prevention, and wellness promotion in communities.",
      impact: "15,000+ people reached",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "Gender and Social Inclusion",
      description:
        "Promoting gender equality and social inclusion through advocacy, awareness programs, and community empowerment initiatives.",
      impact: "3,200+ beneficiaries",
      color: "bg-secondary",
    },
    {
      icon: Heart,
      title: "Early Childhood Development",
      description:
        "Supporting early childhood development through nutrition, health, and educational programs for children under 5 years.",
      impact: "1,500+ children supported",
      color: "bg-secondary",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Improving access to quality education and literacy programs for children and adults in underserved communities.",
      impact: "4,200+ students enrolled",
      color: "bg-secondary",
    },
    {
      icon: Users,
      title: "Livelihood",
      description:
        "Economic empowerment through skill development, microfinance, and entrepreneurship programs to improve livelihoods.",
      impact: "2,800+ entrepreneurs",
      color: "bg-secondary",
    },
  ];

  return (
    <section id='programs' className='py-20 bg-section-gradient'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Our <span className='text-warmth'>Programs</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Comprehensive initiatives addressing health, nutrition, and
            community development across Tanzania
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {programs.map((program, index) => (
            <Card
              key={index}
              className='border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 bg-white'>
              <CardContent className='p-6'>
                <div
                  className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-4`}>
                  <program.icon className='w-7 h-7 text-black' />
                </div>
                <h3 className='text-xl font-bold text-foreground mb-3'>
                  {program.title}
                </h3>
                <p className='text-muted-foreground mb-4 leading-relaxed'>
                  {program.description}
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-semibold text-primary'>
                    {program.impact}
                  </span>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-primary hover:text-primary'>
                    Learn More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className='bg-gradient-to-r from-primary to-primary rounded-2xl p-8 md:p-12 text-center text-white'>
          <h3 className='text-3xl font-bold mb-4'>
            Ready to Make a Difference?
          </h3>
          <p className='text-xl mb-8 text-white/90 max-w-2xl mx-auto'>
            Join us in our mission to empower communities and transform lives
            across Tanzania. Your support can help us reach even more
            communities in need.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='outline'
              size='lg'
              className='bg-white text-primary hover:bg-white/90'>
              Partner With Us
            </Button>
            <Button variant='cta' size='lg'>
              Support Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;