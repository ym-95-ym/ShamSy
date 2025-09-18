import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Euro,
  ArrowRight, 
  CheckCircle,
  Clock,
  MapPin,
  Target
} from "lucide-react";

const ProjectsEn = () => {
  const humanitarianProjects = [
    {
      id: 1,
      title: "Monthly Salary for Family",
      description: "Secure a family's basic needs with a monthly salary that covers essential living costs including food, shelter, and basic healthcare.",
      price: "€80",
      period: "per month",
      beneficiaries: "1 family (4-6 people)",
      impact: "Provides stability and dignity to families in need",
      image: "/images/gehalt.jpg",
      category: "Family Support",
      urgent: false
    },
    {
      id: 2, 
      title: "Orphan Sponsorship",
      description: "Support an orphaned child with monthly care covering education, healthcare, clothing, and emotional support through qualified caregivers.",
      price: "€13",
      period: "per month",
      beneficiaries: "1 child",
      impact: "Ensures proper development and future opportunities",
      image: "/images/children.jpg", 
      category: "Child Care",
      urgent: true
    },
    {
      id: 3,
      title: "School Supplies for Child", 
      description: "Equip a child for the new school year with essential supplies: books, notebooks, pens, backpack, and uniforms.",
      price: "€40",
      period: "one-time",
      beneficiaries: "1 child",
      impact: "Enables education and builds hope for the future",
      image: "/images/schule-kind.jpg",
      category: "Education",
      urgent: false
    },
    {
      id: 4,
      title: "Medical Treatments",
      description: "Fund life-saving medical procedures and treatments for those who cannot afford healthcare. Every amount makes a difference.",
      price: "Any amount",
      period: "as needed",
      beneficiaries: "Varies by case",
      impact: "Saves lives and prevents suffering",
      image: "/images/operation.jpg",
      category: "Healthcare", 
      urgent: true
    },
    {
      id: 5,
      title: "Water Well",
      description: "Provide clean drinking water access to entire communities by funding the construction of a reliable water well.",
      price: "€1,000",
      period: "one-time",
      beneficiaries: "200-300 people",
      impact: "Long-term access to clean water and improved health",
      image: "/images/water.jpg",
      category: "Infrastructure",
      urgent: false
    },
    {
      id: 6,
      title: "Medical Equipment",
      description: "Purchase essential medical devices and equipment for hospitals and clinics to improve healthcare quality and capacity.",
      price: "From €6,000",
      period: "one-time", 
      beneficiaries: "Thousands of patients",
      impact: "Enhanced medical care and saved lives",
      image: "/images/operation.jpg",
      category: "Healthcare",
      urgent: false
    },
    {
      id: 7,
      title: "School Rehabilitation El-Asafir",
      description: "Complete restoration of El-Asafir school including structural repairs, new furniture, educational materials, and safety improvements.",
      price: "€5,000",
      period: "one-time",
      beneficiaries: "300+ students",
      impact: "Modern learning environment for entire generation",
      image: "/images/schule.jpg",
      category: "Education",
      urgent: false
    }
  ];

  const majorProjects = [
    {
      id: 8,
      title: "El-Asafir Community Infrastructure", 
      description: "Comprehensive community development including roads, water systems, electricity grid, and essential public services.",
      price: "€400,000",
      timeline: "18-24 months",
      beneficiaries: "5,000+ residents",
      impact: "Complete community transformation and sustainable development",
      image: "/images/pv-sys.jpg",
      category: "Major Infrastructure"
    },
    {
      id: 9,
      title: "Douma Hospital Renovation",
      description: "Complete renovation and modernization of Douma Hospital with new equipment, expanded capacity, and improved facilities.",
      price: "€350,000", 
      timeline: "12-18 months",
      beneficiaries: "50,000+ patients annually",
      impact: "State-of-the-art medical care for the region",
      image: "/images/douma-hospital-after.jpg",
      category: "Healthcare Infrastructure"
    },
    {
      id: 10,
      title: "5 Schools in Douma",
      description: "Construction and full equipping of five modern schools to serve the educational needs of Douma's children.",
      price: "€250,000",
      timeline: "15-20 months", 
      beneficiaries: "2,000+ students",
      impact: "Quality education foundation for the next generation",
      image: "/images/schule.jpg",
      category: "Educational Infrastructure"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Projects"
        subtitle="Supporting Syrian families with transparency and impact - every donation makes a difference"
      />

      {/* Humanitarian Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Humanitarian Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Direct assistance that reaches families immediately and creates lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {humanitarianProjects.map((project) => (
              <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden group hover:shamsy-shadow-green shamsy-transition h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 shamsy-transition"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-shamsy-primary text-white text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  {project.urgent && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-red-500 text-white text-xs animate-pulse">
                        Urgent
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4 md:p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-shamsy-primary shamsy-transition">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-shamsy-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{project.beneficiaries}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-shamsy-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{project.impact}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-shamsy-primary">
                          {project.price}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {project.period}
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition"
                    >
                      <Link to="/en/donate" className="flex items-center justify-center gap-2">
                        Donate Now
                        <Heart className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Major Infrastructure Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Large-scale initiatives that transform entire communities and create lasting change
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {majorProjects.map((project) => (
              <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden group hover:shamsy-shadow-green shamsy-transition">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 shamsy-transition"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-shamsy-primary text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-shamsy-primary shamsy-transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Euro className="w-5 h-5 text-shamsy-primary" />
                      <span className="text-foreground font-medium">Budget: {project.price}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-shamsy-primary" />
                      <span className="text-foreground font-medium">Timeline: {project.timeline}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-shamsy-primary" />
                      <span className="text-foreground font-medium">Beneficiaries: {project.beneficiaries}</span>
                    </div>
                  </div>
                  
                  <div className="bg-shamsy-primary/5 p-4 rounded-lg border border-shamsy-primary/20 mb-6">
                    <h4 className="font-semibold text-shamsy-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Expected Impact
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {project.impact}
                    </p>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition"
                  >
                    <Link to="/en/donate" className="flex items-center justify-center gap-2">
                      Support This Project
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

export default ProjectsEn;