import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "#",
      bio: "With over 15 years of experience in community development, Sarah leads CEDO's mission to create lasting impact.",
      email: "sarah@cedo.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Chen",
      role: "Program Manager",
      image: "#",
      bio: "Michael oversees our community programs and ensures effective delivery of services to those in need.",
      email: "michael@cedo.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Amara Okafor",
      role: "Community Outreach Coordinator",
      image: "#",
      bio: "Amara builds bridges between CEDO and the communities we serve, fostering meaningful partnerships.",
      email: "amara@cedo.org",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='hero-gradient pt-24 pb-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in'>
            Our Team
          </h1>
          <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in'>
            Meet the dedicated professionals driving positive change in
            communities worldwide
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Leadership Team
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Our experienced team combines passion, expertise, and dedication
              to create meaningful impact in the communities we serve.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className='hover-lift animate-fade-in'
                style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className='p-6 text-center'>
                  <Avatar className='w-24 h-24 mx-auto mb-4'>
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className='text-xl font-semibold text-foreground mb-2'>
                    {member.name}
                  </h3>

                  <Badge variant='secondary' className='mb-4'>
                    {member.role}
                  </Badge>

                  <p className='text-muted-foreground text-sm mb-6 leading-relaxed'>
                    {member.bio}
                  </p>

                  <div className='flex justify-center space-x-4'>
                    <a
                      href={`mailto:${member.email}`}
                      className='text-muted-foreground hover:text-primary transition-colors'
                      aria-label={`Email ${member.name}`}>
                      <Mail className='w-5 h-5' />
                    </a>
                    <a
                      href={member.linkedin}
                      className='text-muted-foreground hover:text-primary transition-colors'
                      aria-label={`${member.name}'s LinkedIn`}>
                      <Linkedin className='w-5 h-5' />
                    </a>
                    <a
                      href={member.twitter}
                      className='text-muted-foreground hover:text-primary transition-colors'
                      aria-label={`${member.name}'s Twitter`}>
                      <Twitter className='w-5 h-5' />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className='py-16 bg-muted/30'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-foreground mb-4'>
            Join Our Mission
          </h2>
          <p className='text-lg text-muted-foreground mb-8'>
            We're always looking for passionate individuals who want to make a
            difference. Explore opportunities to join our team or volunteer with
            us.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact'
              className='inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors font-medium'>
              Career Opportunities
            </a>
            <a
              href='/contact'
              className='inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium'>
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
