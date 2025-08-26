import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Flag } from "lucide-react";

const Mission = () => {
  return (
    <section id='mission' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            What <span className='text-secondary'>We Do</span>
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
                  <Eye className='w-6 h-6 text-white' />
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
                  <Target className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-secondary'>
                  Our Mission
                </h3>
              </div>
              <p className='text-lg text-foreground leading-relaxed'>
                To achieve a better life by working together with communities to
                create social change for sustainable development through
                education, advocacy, and research.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Objectives */}
        {/* <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-warmth rounded-lg flex items-center justify-center">
                <Flag className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Objectives</h3>
            <p className="text-muted-foreground">Five key areas driving our impact across Tanzania</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Nutrition Access",
                description: "Empower society to increase access to nutrition services in rural and urban communities."
              },
              {
                number: "02", 
                title: "Health Advocacy",
                description: "Be a leading local organization for advocacy on health, nutrition, and livelihood system reforms in Tanzania."
              },
              {
                number: "03",
                title: "Collaborative Development",
                description: "Promote collaborative initiatives on development opportunities and challenges for evidence-based investments."
              },
              {
                number: "04",
                title: "Human Rights",
                description: "Advocate for human rights and gender equality to address violations such as Violence Against Women and Children."
              },
              {
                number: "05",
                title: "Community Health",
                description: "Promote community health and address both communicable and non-communicable diseases."
              }
            ].map((objective, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary/20 mb-2">{objective.number}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{objective.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Mission;