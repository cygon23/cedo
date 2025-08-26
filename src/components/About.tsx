import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community Care",
      description: "We prioritize the health and well-being of every community member."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with communities to create lasting change."
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Using proven approaches to maximize our impact and effectiveness."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Finding creative solutions to complex socio-economic challenges."
    }
  ];

  return (
    <section id='about' className='py-20 bg-section-gradient'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            About <span className='text-primary'>CEDO</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Empowering communities across Tanzania through health education,
            advocacy, and sustainable development initiatives.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
          <div>
            <h3 className='text-2xl font-bold text-foreground mb-6'>
              About Us
            </h3>
            <div className='space-y-4 text-muted-foreground leading-relaxed'>
              <p>
                Community Empowerment and Development Organization (CEDO) is a
                local non-governmental, non-profit organization committed to
                empowering communities and addressing health, nutrition, and
                socio-economic challenges in Tanzania.
              </p>
              <p>
                Our core focus areas include health and nutrition education,
                gender and social inclusion, agriculture, livelihoods, and
                economic empowerment, with a strong emphasis on evidence-based
                advocacy and community-driven solutions. CEDO is led by a team
                of five dedicated professionals with extensive experience and a
                shared passion for transformative community development.
              </p>
              <p>
                We work directly with communities to raise awareness, build
                capacity, and promote active participation in initiatives that
                improve health and nutrition outcomes. Our programs are grounded
                in participatory approaches that ensure local ownership and
                sustainability.
              </p>
              <p>
                In addition to community-based interventions, CEDO also conducts
                research and consultancy services for other organizations and
                institutions, particularly in the areas of:
              </p>
              <ul className='list-disc list-inside pl-4 space-y-1'>
                <li>Gender equality and social inclusion (GESI)</li>
                <li>Nutrition-sensitive agriculture and food systems</li>
                <li>Livelihoods and economic empowerment</li>
                <li>Community engagement and behavior change communication</li>
              </ul>
              <p>
                Through this dual approach—community empowerment and applied
                research—we aim to generate practical knowledge, influence
                policy, and scale up proven models that enhance well-being and
                resilience at the grassroots level.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <CardContent className='p-6 text-center'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                    <value.icon className='w-6 h-6 text-primary' />
                  </div>
                  <h4 className='font-semibold text-foreground mb-2'>
                    {value.title}
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;