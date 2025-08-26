import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Newspaper, BookOpen, Search, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";

const Latest = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const latestSections = [
    {
      id: "news",
      title: "News",
      icon: Newspaper,
      items: [
        { title: "CEDO Launches New Agriculture Initiative", date: "March 15, 2024", type: "Press Release" },
        { title: "Climate Resilience Workshop Success", date: "March 10, 2024", type: "Event Update" },
        { title: "Partnership with Local Schools Announced", date: "March 5, 2024", type: "News" }
      ]
    },
    {
      id: "story",
      title: "Stories",
      icon: BookOpen,
      items: [
        { title: "Maria's Journey: From Farmer to Entrepreneur", date: "March 12, 2024", type: "Success Story" },
        { title: "Building Climate Resilience in Coastal Communities", date: "March 8, 2024", type: "Impact Story" },
        { title: "Education Transforms Lives in Rural Tanzania", date: "March 3, 2024", type: "Community Story" }
      ]
    },
    {
      id: "search",
      title: "Research",
      icon: Search,
      items: [
        { title: "Impact Assessment: Health and Nutrition Programs", date: "March 14, 2024", type: "Research" },
        { title: "Gender Inclusion in Agricultural Development", date: "March 7, 2024", type: "Study" },
        { title: "Early Childhood Development Outcomes Report", date: "March 1, 2024", type: "Analysis" }
      ]
    },
    {
      id: "report",
      title: "Reports",
      icon: FileText,
      items: [
        { title: "Annual Impact Report 2023", date: "February 28, 2024", type: "Annual Report" },
        { title: "Financial Transparency Report Q1 2024", date: "February 25, 2024", type: "Financial Report" },
        { title: "Program Evaluation Summary", date: "February 20, 2024", type: "Evaluation Report" }
      ]
    }
  ];

  return (
    <section id="latest" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest <span className="text-primary">Updates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our latest news, stories, research, and reports
          </p>
        </div>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {latestSections.map((section) => (
              <TabsTrigger 
                key={section.id} 
                value={section.id}
                className="flex items-center gap-2"
              >
                <section.icon className="w-4 h-4" />
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {latestSections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {item.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary p-0">
                        Read More →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={() => toggleDropdown(section.id)}
                  className="flex items-center gap-2"
                >
                  View All {section.title}
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    activeDropdown === section.id ? 'rotate-180' : ''
                  }`} />
                </Button>
                
                {activeDropdown === section.id && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-muted-foreground">
                      More {section.title.toLowerCase()} content will be loaded here...
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Latest;