import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  TrendingUp,
  ArrowRight,
  Quote,
  MapPin,
  Calendar,
} from "lucide-react";

const FloatingImpactStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const impactStories = [
    {
      id: 1,
      icon: Heart,
      title: "Health Education Transformation",
      location: "Mwanza Region",
      date: "2023",
      shortDescription:
        "Comprehensive health and nutrition education programs reaching rural communities",
      impact: "15,000+ community members reached",
      beneficiaries: "42,000+ lives impacted",
      quote:
        "CEDO's health education program changed everything for our village. We now have better nutrition, cleaner water, and hope for our children's future.",
      author: "Maria, Community Leader",
      color: "from-primary to-primary",
      bgGradient: "from-primary/5 to-secondary/5",
      position: { x: 15, y: 25 },
    },
    {
      id: 2,
      icon: Users,
      title: "Women's Rights Advocacy",
      location: "Rural Tanzania",
      date: "2022-2023",
      shortDescription:
        "Successfully advocated for policy changes protecting women and children",
      impact: "1,200+ cases supported",
      beneficiaries: "85% success rate",
      quote:
        "Thanks to CEDO's advocacy, I now know my rights and can protect myself and my children from violence.",
      author: "Sarah K., Women's Group Member",
      color: "from-primary to-primary",
      bgGradient: "from-impact/5 to-hope/5",
      position: { x: 65, y: 20 },
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Community Health Workers Program",
      location: "25+ Communities",
      date: "2021-2023",
      shortDescription:
        "Trained and deployed community health workers providing essential healthcare services",
      impact: "150+ health workers trained",
      beneficiaries: "25+ communities served",
      quote:
        "As a trained health worker, I can now provide life-saving care to my community members who couldn't reach the hospital.",
      author: "John M., Community Health Worker",
      color: "from-primary to-primary",
      bgGradient: "from-secondary/5 to-primary/5",
      position: { x: 40, y: 55 },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % impactStories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const FloatingCard = ({ story, index, isActive }) => {
    const Icon = story.icon;

    return (
      <div
        className={`absolute transition-all duration-1000 ease-in-out transform ${
          isActive ? "scale-110 z-20" : "scale-100 z-10"
        }`}
        style={{
          left: `${story.position.x}%`,
          top: `${story.position.y}%`,
          animation: `float-${index} 6s ease-in-out infinite`,
          animationDelay: `${index * 0.5}s`,
        }}>
        <Card
          className={`w-80 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
            isActive ? "ring-4 ring-primary/30" : ""
          }`}
          onClick={() => setActiveStory(index)}>
          <div className={`h-2 bg-gradient-to-r ${story.color}`}></div>
          <CardContent
            className={`p-6 bg-gradient-to-br ${story.bgGradient} backdrop-blur-sm`}>
            <div className='flex items-start justify-between mb-4'>
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${story.color} flex items-center justify-center shadow-lg`}>
                <Icon className='w-6 h-6 text-white' />
              </div>
              <div className='text-right'>
                <div className='flex items-center text-xs text-gray-600 mb-1'>
                  <MapPin className='w-3 h-3 mr-1' />
                  {story.location}
                </div>
                <div className='flex items-center text-xs text-gray-600'>
                  <Calendar className='w-3 h-3 mr-1' />
                  {story.date}
                </div>
              </div>
            </div>

            <h3 className='font-bold text-lg text-gray-800 mb-2 leading-tight'>
              {story.title}
            </h3>

            <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
              {story.shortDescription}
            </p>

            <div className='grid grid-cols-2 gap-3 mb-4'>
              <div className='bg-white/70 rounded-lg p-2 text-center'>
                <div
                  className={`text-lg font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>
                  {story.impact.split(" ")[0]}
                </div>
                <div className='text-xs text-gray-600'>
                  {story.impact.split(" ").slice(1).join(" ")}
                </div>
              </div>
              <div className='bg-white/70 rounded-lg p-2 text-center'>
                <div
                  className={`text-lg font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>
                  {story.beneficiaries.split(" ")[0]}
                </div>
                <div className='text-xs text-gray-600'>
                  {story.beneficiaries.split(" ").slice(1).join(" ")}
                </div>
              </div>
            </div>

            {isActive && (
              <div className='bg-white/90 rounded-lg p-3 mb-4 animate-fade-in'>
                <Quote className='w-4 h-4 text-primary mb-2' />
                <p className='text-sm text-gray-700 italic mb-2'>
                  "{story.quote}"
                </p>
                <p className='text-xs text-primary font-semibold'>
                  - {story.author}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className='mt-16'>
      <div className='text-center mb-12'>
        <h3 className='text-2xl font-bold text-foreground mb-4'>
          Stories of Change
        </h3>
        <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
          Every number represents a life transformed, a community empowered, and
          hope restored. Behind our statistics are real people whose lives have
          been positively impacted.
        </p>
      </div>

      {/* Floating Stories Container */}
      <div
        className='
            relative h-[28rem] mb-12 overflow-hidden 
            md:h-[24rem] 
            sm:h-auto sm:flex sm:flex-col sm:items-center sm:space-y-6
          '>
        {impactStories.map((story, index) => (
          <FloatingCard
            key={story.id}
            story={story}
            index={index}
            isActive={activeStory === index}
          />
        ))}
      </div>

      {/* Story Navigation */}
      <div className='flex justify-center items-center space-x-3 mb-8'>
        {impactStories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStory(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeStory === index
                ? "bg-primary scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingImpactStories;
