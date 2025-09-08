import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin, Twitter, Users, ArrowRight } from "lucide-react";

const Team = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  const teamMembers = [
    {
      name: "Aisha Y. Ntakune",
      role: "Executive Director",
      image: "#",
      bio: "With over 15 years of experience in community development, Aisha leads CEDO's mission to create lasting impact.",
      email: "ed@cedo.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Zacharia S. Nyahende",
      role: "Director of Programs",
      image: "#",
      bio: "Zacharia Program management expert who designs, implements, and oversees community initiatives that deliver measurable social impact and sustainable change..",
      email: "info@cedo.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Seviana S. Lyimo",
      role: "Director of Finance",
      image: "#",
      bio: "Financial strategist ensuring fiscal responsibility, transparency, and optimal resource allocation to maximize organizational effectiveness and donor trust.",
      email: "fn@cedo.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Eliabu S. nagunwa",
      role: "Member",
      image: "#",
      bio: "Community engagement specialist fostering grassroots partnerships and building lasting relationships between CEDO and the communities we serve.",
      email: "fn@cedo.org",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Petro E. Mfinanga",
      role: "Member",
      image: "#",
      bio: "Field coordinator with deep local knowledge who facilitates program delivery and maintains strong connections with community stakeholders and beneficiaries.",
      email: "fn@cedo.org",
      linkedin: "#",
      twitter: "#",
    },
  ];

  // Show first 3 members by default, or all if showAllMembers is true
  const displayedMembers = showAllMembers
    ? teamMembers
    : teamMembers.slice(0, 3);
  const remainingCount = teamMembers.length - 3;

  const TeamMemberCard = ({ member, index }) => (
    <Card
      key={member.name}
      className='hover-lift animate-fade-in group'
      style={{ animationDelay: `${index * 100}ms` }}>
      <CardContent className='p-6 text-center'>
        <Avatar className='w-24 h-24 mx-auto mb-4'>
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback className='bg-primary/10 text-primary text-lg font-semibold'>
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
  );

  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-24 overflow-hidden'>
        <div className='absolute inset-0 z-0 hero-gradient'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in'>
            Our <span className='text-gradient'>Team</span>
          </h1>
          <p className='text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in'>
            Meet the dedicated professionals driving positive change in
            communities across Tanzania
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

          {/* Main Team Members Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {displayedMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>

          {/* Show More/Less Button or Additional Members Card */}
          {!showAllMembers && remainingCount > 0 && (
            <div className='flex justify-center'>
              <Card className='hover-lift cursor-pointer transition-all duration-300 hover:shadow-lg border-dashed border-2 border-primary/20 bg-primary/5'>
                <CardContent
                  className='p-8 text-center'
                  onClick={() => setShowAllMembers(true)}>
                  <div className='w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                    <Users className='w-8 h-8 text-primary' />
                  </div>
                  <h3 className='text-xl font-semibold text-foreground mb-2'>
                    View All Team Members
                  </h3>
                  <p className='text-muted-foreground text-sm mb-4'>
                    {remainingCount} more team{" "}
                    {remainingCount === 1 ? "member" : "members"} to discover
                  </p>
                  <div className='flex items-center justify-center text-primary font-medium'>
                    <span className='mr-2'>See More</span>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Show Less Button when all members are displayed */}
          {showAllMembers && remainingCount > 0 && (
            <div className='flex justify-center mt-8'>
              <button
                onClick={() => setShowAllMembers(false)}
                className='inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium'>
                Show Less
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Team Stats Section */}
      {showAllMembers && (
        <section className='py-12 bg-secondary/30'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
              <div>
                <div className='text-3xl font-bold text-primary mb-2'>
                  {teamMembers.length}
                </div>
                <div className='text-muted-foreground'>Team Members</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-primary mb-2'>15+</div>
                <div className='text-muted-foreground'>Years Experience</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-primary mb-2'>100%</div>
                <div className='text-muted-foreground'>Commitment</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Additional Team Section */}
      <section className='py-16 bg-muted/20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-6'>
            Why Our Team Matters
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='p-6'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Local Expertise
              </h3>
              <p className='text-muted-foreground text-sm'>
                Deep understanding of Tanzania's communities and cultural
                contexts
              </p>
            </div>

            <div className='p-6'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <ArrowRight className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Proven Impact
              </h3>
              <p className='text-muted-foreground text-sm'>
                Track record of successful community development initiatives
              </p>
            </div>

            <div className='p-6'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-lg font-semibold text-foreground mb-2'>
                Collaborative Approach
              </h3>
              <p className='text-muted-foreground text-sm'>
                Working together with communities to create sustainable change
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
