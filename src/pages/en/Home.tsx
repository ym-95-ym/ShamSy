import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/shamsy/images/hero-destruction.jpg" 
            alt="Destruction in Syria - ShamSy Archive"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            Source: ShamSy Archive
          </div>
        </div>
        
        {/* Green Overlay */}
        <div className="absolute inset-0 shamsy-hero-gradient" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light mb-8 text-white drop-shadow-lg tracking-tight leading-tight">
              Shams Syria e.V.
            </h1>
            
            <div className="space-y-6 mb-12 text-lg md:text-xl leading-relaxed drop-shadow-md">
              <p>
                Syria is a country full of scars from <strong>14 years of war, 55 years of dictatorship,</strong> and lack of the most basic necessities of life.
              </p>
              
              <p>
                But despite all this darkness, there is hope: People who stayed. People who are returning. 
                People like us who <strong>build bridges between the world and destroyed Syria</strong>.<br/>
                We support from Germany, where we also call home.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild 
                size="lg"
                className="bg-shamsy-dark hover:bg-shamsy-primary shamsy-transition text-lg px-8 py-6 shamsy-shadow-green"
              >
                <Link to="/en/projects" className="flex items-center gap-2">
                  Our Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-white/20 border-white/80 text-white hover:bg-white/30 hover:border-white backdrop-blur-sm text-lg px-8 py-6"
              >
                <Link to="/en/get-involved" className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Help Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-4xl font-light italic text-foreground max-w-5xl mx-auto mb-8 leading-relaxed">
            "As <strong className="text-shamsy-primary">Syrians</strong>, we can ensure the success of relevant projects and implement them quickly through our <strong className="text-shamsy-primary">existing networks</strong>.<br/>
            As <strong className="text-shamsy-primary">Germans</strong>, we can design projects <strong className="text-shamsy-primary">sustainably and contemporarily</strong> and build a bridge for integration and cooperation."
          </blockquote>
          <cite className="text-xl md:text-2xl font-semibold text-shamsy-primary">
            — The ShamSy Team
          </cite>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Discover ShamSy
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn more about our mission, projects and how you can help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Our History",
                description: "From fleeing in 2011 to the official mission in 2025. Learn how we never stopped helping despite danger and can now finally act freely.",
                link: "/en/history",
                buttonText: "Read History"
              },
              {
                title: "Current Projects", 
                description: "Energy, education, health - our ongoing projects for sustainable reconstruction. From small projects to major infrastructure.",
                link: "/en/projects",
                buttonText: "View Projects"
              },
              {
                title: "Past Successes",
                description: "15 shelters, medical operations, school renovations - our successes before liberation, despite fear and persecution.",
                link: "/en/past-projects", 
                buttonText: "Discover Successes"
              },
              {
                title: "Get Involved Now",
                description: "Become part of our mission. As a member, donor or supporter - every help brings Syria closer to its reconstruction.",
                link: "/en/get-involved",
                buttonText: "Help Now"
              }
            ].map((item, index) => (
              <Card key={index} className="shamsy-card border-shamsy-primary/20 hover:shadow-xl shamsy-transition group">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-shamsy-primary shamsy-transition">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {item.description}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white shamsy-transition"
                  >
                    <Link to={item.link} className="flex items-center gap-2">
                      {item.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;