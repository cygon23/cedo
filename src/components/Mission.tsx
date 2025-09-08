import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Flag } from "lucide-react";

const Mission = () => {
  return (
    <section id='mission' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            What <span className='text-primary'>We Do</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Our comprehensive approach to sustainable development and community
            empowerment
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mb-16'>
          {/* Vision */}
          <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary/5 to-secondary/5'>
            <CardContent className='p-8'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4'>
                  <Eye className='w-6 h-6 text-black' />
                </div>
                <h3 className='text-2xl font-bold text-primary'>Our Vision</h3>
              </div>
              <p className='text-lg text-foreground leading-relaxed'>
                A nation in which everyone is empowered, developed, and
                experiences lasting change.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-secondary/5 to-warmth/5'>
            <CardContent className='p-8'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4'>
                  <Target className='w-6 h-6 text-black' />
                </div>
                <h3 className='text-2xl font-bold text-primary'>Our Mission</h3>
              </div>
              <p className='text-lg text-foreground leading-relaxed'>
                To achieve a better life by working together with communities to
                create social change for sustainable development through
                education, advocacy, and research.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;