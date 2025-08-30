import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin, Twitter, Users, ArrowRight } from "lucide-react";

const Team = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  const teamMembers = [
    {
      name: "Aisha Y. ntakune",
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
        <section className='py-12 bg-muted/30'>
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
    </div>
  );
};

export default Team;
