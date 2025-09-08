import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Twitter,
  Users,
  ArrowRight,
  Phone,
  MapPin,
  Calendar,
  Award,
  Target,
  Quote,
} from "lucide-react";

const Team = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Aisha Y. Ntakune",
      role: "Executive Director",
      image: "#",
      bio: "With over 5 years of experience in community development, Aisha leads CEDO's mission to create lasting impact.",
      email: "ed@cedo.org",
      phone: "+255 769 044 455",
      linkedin: "#",
      twitter: "#",
      experience: "10+ years",
      specialization: "Community Development & Strategic Leadership",
      achievements: [
        "Led 10+ community projects",
        "Trained 200+ community leaders",
        "Secured $1M+ in funding",
      ],
      quote:
        "Empowering communities is not just our mission—it's our passion and commitment to sustainable change.",
    },
    {
      name: "Zacharia S. Nyahende",
      role: "Director of Programs",
      image: "#",
      bio: "Zacharia Program management expert who designs, implements, and oversees community initiatives that deliver measurable social impact and sustainable change.",
      email: "info@cedo.org",
      phone: "+255 769 044 456",
      linkedin: "#",
      twitter: "#",
      experience: "5+ years",
      specialization: "Program Design & Implementation",
      achievements: [
        "Managed 6+ development programs",
        "Impacted 10,000+ beneficiaries",
        "95% project success rate",
      ],
      quote:
        "Every program we design is a bridge between community needs and sustainable solutions.",
    },
    {
      name: "Seviana S. Lyimo",
      role: "Director of Finance",
      image: "#",
      bio: "Financial strategist ensuring fiscal responsibility, transparency, and optimal resource allocation to maximize organizational effectiveness and donor trust.",
      email: "fn@cedo.org",
      phone: "+255 769 044 457",
      linkedin: "#",
      twitter: "#",
      experience: "4+ years",
      specialization: "Financial Management & Compliance",
      achievements: [
        "Maintained 100% financial transparency",
        "Reduced operational costs by 20%",
        "Zero audit findings for 5 years",
      ],
      quote:
        "Financial integrity is the foundation of trust that enables us to serve our communities effectively.",
    },
    {
      name: "Eliabu S. nagunwa",
      role: "Member",
      image: "#",
      bio: "Community engagement specialist fostering grassroots partnerships and building lasting relationships between CEDO and the communities we serve.",
      email: "fn@cedo.org",
      phone: "+255 769 044 458",
      linkedin: "#",
      twitter: "#",
      experience: "8+ years",
      specialization: "Community Engagement & Partnerships",
      achievements: [
        "Built partnerships with 25+ communities",
        "Facilitated 100+ community meetings",
        "Developed 15 local leader networks",
      ],
      quote:
        "True development happens when communities lead their own transformation journey.",
    },
    {
      name: "Petro E. Mfinanga",
      role: "Member",
      image: "#",
      bio: "Field coordinator with deep local knowledge who facilitates program delivery and maintains strong connections with community stakeholders and beneficiaries.",
      email: "fn@cedo.org",
      phone: "+255 769 044 459",
      linkedin: "#",
      twitter: "#",
      experience: "6+ years",
      specialization: "Field Operations & Stakeholder Relations",
      achievements: [
        "Coordinated 40+ field operations",
        "Maintained 98% stakeholder satisfaction",
        "Established 20+ community networks",
      ],
      quote:
        "Being close to the ground helps us understand real needs and deliver meaningful solutions.",
    },
  ];

  const displayedMembers = showAllMembers
    ? teamMembers
    : teamMembers.slice(0, 3);
  const remainingCount = teamMembers.length - 3;

  const stats = [
    { value: teamMembers.length, label: "Expert Team Members", suffix: "" },
    { value: 20, label: "Years Combined Experience", suffix: "+" },
    { value: 100, label: "Commitment to Excellence", suffix: "%" },
    { value: 300, label: "Lives Impacted", suffix: "+" },
  ];

  const AnimatedCounter = ({ value, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!animateStats) return;

      const increment = value / (duration / 50);
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= value) {
            clearInterval(timer);
            return value;
          }
          return Math.min(prev + increment, value);
        });
      }, 50);

      return () => clearInterval(timer);
    }, [animateStats, value, duration]);

    return (
      <span>
        {Math.round(count)}
        {suffix}
      </span>
    );
  };

  const TeamMemberCard = ({ member, index }) => (
    <Card
      key={member.name}
      className='hover:shadow-xl transition-all duration-500 group cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50'
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={() => setSelectedMember(member)}>
      <CardContent className='p-8 text-center relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

        <div className='relative z-10'>
          <div className='relative mb-6'>
            <Avatar className='w-32 h-32 mx-auto border-4 border-white shadow-lg'>
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback className='bg-gradient-to-br from-primary to-primary/80 text-white text-2xl font-bold'>
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {/* Experience Badge */}
            <div className='absolute -bottom-2 -right-2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg'>
              {member.experience}
            </div>
          </div>

          <h3 className='text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300'>
            {member.name}
          </h3>

          <Badge
            variant='secondary'
            className='mb-4 bg-primary/10 text-primary border-primary/20'>
            {member.role}
          </Badge>

          <p className='text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3'>
            {member.specialization}
          </p>

          <div className='flex justify-center space-x-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300'>
            <Button
              size='sm'
              variant='ghost'
              className='h-9 w-9 p-0 hover:bg-primary/10 hover:text-primary'
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = `mailto:${member.email}`;
              }}>
              <Mail className='w-4 h-4' />
            </Button>
            <Button
              size='sm'
              variant='ghost'
              className='h-9 w-9 p-0 hover:bg-primary/10 hover:text-primary'
              onClick={(e) => {
                e.stopPropagation();
                window.open(member.linkedin, "_blank");
              }}>
              <Linkedin className='w-4 h-4' />
            </Button>
            <Button
              size='sm'
              variant='ghost'
              className='h-9 w-9 p-0 hover:bg-primary/10 hover:text-primary'
              onClick={(e) => {
                e.stopPropagation();
                window.open(member.twitter, "_blank");
              }}>
              <Twitter className='w-4 h-4' />
            </Button>
          </div>

          <div className='mt-4 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
            Click to view profile
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const MemberModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div
        className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'
        onClick={onClose}>
        <div
          className='bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl'
          onClick={(e) => e.stopPropagation()}>
          <div className='p-8'>
            {/* Header */}
            <div className='flex items-start gap-6 mb-8'>
              <Avatar className='w-24 h-24 border-4 border-primary/20 shadow-lg'>
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className='bg-gradient-to-br from-primary to-primary/80 text-white text-2xl font-bold'>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className='flex-1'>
                <h2 className='text-3xl font-bold text-foreground mb-2'>
                  {member.name}
                </h2>
                <Badge className='mb-3 bg-primary text-white'>
                  {member.role}
                </Badge>
                <p className='text-muted-foreground'>{member.specialization}</p>
              </div>
              <Button
                variant='ghost'
                onClick={onClose}
                className='text-gray-400 hover:text-gray-600'>
                ✕
              </Button>
            </div>

            {/* Quote */}
            <div className='bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 mb-8 border-l-4 border-primary'>
              <Quote className='w-8 h-8 text-primary mb-3' />
              <p className='italic text-foreground font-medium leading-relaxed'>
                "{member.quote}"
              </p>
            </div>

            {/* Bio */}
            <div className='mb-8'>
              <h3 className='text-xl font-semibold mb-3 text-foreground'>
                About
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                {member.bio}
              </p>
            </div>

            {/* Achievements */}
            <div className='mb-8'>
              <h3 className='text-xl font-semibold mb-4 text-foreground flex items-center gap-2'>
                <Award className='w-5 h-5 text-primary' />
                Key Achievements
              </h3>
              <div className='grid gap-3'>
                {member.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
                    <div className='w-2 h-2 bg-primary rounded-full flex-shrink-0'></div>
                    <span className='text-muted-foreground'>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className='border-t pt-6'>
              <h3 className='text-xl font-semibold mb-4 text-foreground'>
                Contact
              </h3>
              <div className='flex flex-wrap gap-4'>
                <Button
                  className='flex items-center gap-2'
                  onClick={() =>
                    (window.location.href = `mailto:${member.email}`)
                  }>
                  <Mail className='w-4 h-4' />
                  Email
                </Button>
                <Button
                  variant='outline'
                  className='flex items-center gap-2'
                  onClick={() =>
                    (window.location.href = `tel:${member.phone}`)
                  }>
                  <Phone className='w-4 h-4' />
                  Call
                </Button>
                <Button
                  variant='outline'
                  className='flex items-center gap-2'
                  onClick={() => window.open(member.linkedin, "_blank")}>
                  <Linkedin className='w-4 h-4' />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gray-50/30'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-24 overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent'>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in'>
            Meet Our{" "}
            <span className='bg-gradient-to-r from-blue-700  to-blue-400 bg-clip-text text-transparent'>
              Expert Team
            </span>
          </h1>
          <p className='text-xl sm:text-2xl text-white/95 mb-8 leading-relaxed animate-fade-in max-w-3xl mx-auto'>
            Dedicated professionals driving transformative change across
            Tanzania through innovative community development solutions
          </p>
          <div className='flex items-center justify-center gap-8 text-white/90'>
            <div className='text-center'>
              <div className='text-2xl font-bold'>15+</div>
              <div className='text-sm'>Years Experience</div>
            </div>
            <div className='w-px h-12 bg-white/30'></div>
            <div className='text-center'>
              <div className='text-2xl font-bold'>5</div>
              <div className='text-sm'>Expert Leaders</div>
            </div>
            <div className='w-px h-12 bg-white/30'></div>
            <div className='text-center'>
              <div className='text-2xl font-bold'>300+</div>
              <div className='text-sm'>Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Leadership Excellence
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
              Our experienced team combines passion, expertise, and dedication
              to create meaningful impact in the communities we serve
            </p>
          </div>

          {/* Team Members Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {displayedMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>

          {/* Show More/Less Controls */}
          {!showAllMembers && remainingCount > 0 && (
            <div className='flex justify-center'>
              <Card className='cursor-pointer transition-all duration-300 hover:shadow-xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10'>
                <CardContent
                  className='p-10 text-center'
                  onClick={() => setShowAllMembers(true)}>
                  <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg'>
                    <Users className='w-10 h-10 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-foreground mb-3'>
                    Discover Our Full Team
                  </h3>
                  <p className='text-muted-foreground mb-6 max-w-sm mx-auto'>
                    Meet {remainingCount} more dedicated team{" "}
                    {remainingCount === 1 ? "member" : "members"} working to
                    transform communities
                  </p>
                  <Button className='group'>
                    View All Members
                    <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {showAllMembers && remainingCount > 0 && (
            <div className='flex justify-center mt-12'>
              <Button
                variant='outline'
                size='lg'
                onClick={() => setShowAllMembers(false)}
                className='px-8 py-3 hover:bg-primary hover:text-white transition-all duration-300'>
                Show Core Team
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className='py-16 bg-gradient-to-r from-primary/5 via-transparent to-accent/5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
            {stats.map((stat, index) => (
              <div key={index} className='p-6'>
                <div className='text-4xl lg:text-5xl font-bold text-primary mb-2'>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className='text-muted-foreground font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-6'>
              What Makes Us Different
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Our team's commitment to excellence is reflected in everything we
              do
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Users className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-4'>
                Local Expertise
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                Deep understanding of Tanzania's communities, cultural contexts,
                and development challenges
              </p>
            </div>

            <div className='text-center p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Target className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-4'>
                Proven Results
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                Track record of successful community development initiatives
                with measurable, lasting impact
              </p>
            </div>

            <div className='text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Award className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-4'>
                Collaborative Spirit
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                Working hand-in-hand with communities to create sustainable,
                community-owned solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      <Footer />
    </div>
  );
};

export default Team;
