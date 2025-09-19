import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  GraduationCap, 
  Heart, 
  Users, 
  ArrowRight, 
  MapPin, 
  Clock,
  Target,
  CheckCircle
} from "lucide-react";
 
const Projects = () => {
  // Smaller humanitarian projects
  const humanitarianProjects = [
    {
      id: 1,
      category: "Humanitarian",
      title: "Give a monthly salary to a family in need",
      price: "€80 - one-time",
      description: "YES! Salaries in Syria are actually very low, despite the recent increase since December 2024. But goods and basic foodstuffs are not. Even in several places like in Germany! With a sum that is not too high for Germany, you can double a family in need's possibilities for a month.",
      icon: Heart,
      image: "/shamsy/images/gehalt.jpg"
    },
    {
      id: 2,
      category: "Humanitarian", 
      title: "Orphan sponsorship - One year of food and education",
      price: "€13 monthly",
      description: "Financing living costs and educational expenses for an orphan child in Syria. Through direct communication with our local partners, we can ensure maximum transparency and make sure the money reaches the right places.",
      icon: Heart,
      image: "/shamsy/images/children.jpg"
    },
    {
      id: 3,
      category: "Humanitarian",
      title: "Enable a beautiful school start for a child", 
      price: "€40 - one-time",
      description: "Provide clothing, backpack, notebooks, pens and much more for a proper school start, so children in Syria can look forward to the year with hope.",
      icon: GraduationCap,
      image: "/shamsy/images/kindergruppe.jpg"
    },
    {
      id: 4,
      category: "Humanitarian",
      title: "Finance medical treatment",
      price: "any amount", 
      description: "Enable medical treatment or surgery for a person in need! There are numerous people in Damascus and surrounding areas without money for medical treatment. There is no insurance either. You can donate any amount to us and we ensure that medical treatment/surgery is paid for with it. Your contribution can save lives.",
      icon: Heart,
      image: "/shamsy/images/operation.jpg"
    },
    {
      id: 5,
      category: "Humanitarian",
      title: "Purchase drinking water well for village",
      price: "€1,000 (partial donations possible!)",
      description: "Purchase and installation of a drinking water well for a small village, especially important for extreme heat due to climate change and lack of drinking opportunities in Syria.",
      icon: Users,
      image: "/shamsy/images/water.jpg"
    },
    {
      id: 6,
      category: "Humanitarian",
      title: "Purchase medical equipment for hospitals",
      price: "any amount - for equipment from €6,000 (partial donations possible!)",
      description: "We have numerous offers from hospitals and partner NGOs for various medical equipment that is missing in the rehabilitation of destroyed hospitals. Including imaging equipment (CT, X-ray, chest X-ray, ECG) for clinics that serve millions of people (Douma, Ibn El-Nafis, Qattana, and more).",
      icon: Heart,
      image: "/shamsy/images/operation.jpg"
    },
    {
      id: 7,
      category: "Education",
      title: "School rehabilitation - Der El-Asafir",
      price: "€5,000 (partial donations possible!)",
      description: "Support and training of educational staff, renovation and repair of the school as well as securing its supply.",
      icon: GraduationCap,
      image: "/shamsy/images/schule-kind.jpg"
    }
  ];

  // Major projects for sponsors and crowdfunding
  const majorProjects = [
    {
      id: 1,
      category: "Energy & Education",
      title: "Der El-Asafir Community Infrastructure",
      price: "€400,000",
      description: "250 kW solar system for a rural school, agricultural hub and residential houses. Over 10,000 people, 500 students and 50 agricultural businesses receive stable electricity for education and production.",
      icon: Zap,
      image: "/shamsy/images/pv-sys.jpg",
      stats: [
        { number: "10,000", label: "People supplied with electricity" },
        { number: "500+", label: "Students supplied with electricity" },
        { number: ">50", label: "Agricultural businesses supplied with electricity" }
      ]
    },
    {
      id: 2,
      category: "Health",
      title: "Douma National Hospital Renovation",
      price: "€350,000",
      description: "Restoration of part of the capacities of a hospital that serves over 1 million patients annually. The hospital, documented with drone footage after 12.2024, was completely bombed by the old regime. Our partner NGO (Al-Sahha al-Khairiyah) in Douma established a multi-specialty clinic after the destruction and wants to continue building it and rehabilitate it into a hospital. Today we want to support the reconstruction and plan procurement of medical equipment e.g., CT scanner and a fully integrated solar system.",
      icon: Heart,
      image: "/shamsy/images/douma-hospital-after.jpg",
      stats: [
        { number: "1 Million+", label: "Patients/Year" },
        { number: "100%", label: "Necessary" },
        { number: "100%", label: "Sustainable" }
      ]
    },
    {
      id: 3,
      category: "Education",
      title: "Renovation of 5 schools in Douma", 
      price: "€250,000",
      description: "Renovation of schools to safe, high-quality standards. 3,000+ students receive improved educational environments with modern classrooms, sanitary facilities and barrier-free access.",
      icon: GraduationCap,
      image: "/shamsy/images/schule.jpg",
      stats: [
        { number: "3000+", label: "Students" },
        { number: "5", label: "Schools" },
        { number: "100%", label: "Future-proof" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Current Projects"
        subtitle="Energy, Education, Health - Our ongoing initiatives for sustainable reconstruction"
      />

      {/* Overview Stats */}
      <section className="py-16 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-shamsy-primary mb-2">{humanitarianProjects.length + majorProjects.length}</div>
                <div className="text-sm text-muted-foreground">Current Projects</div>
              </CardContent>
            </Card>
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-shamsy-primary mb-2">1 Million+</div>
                <div className="text-sm text-muted-foreground">People to help</div>
              </CardContent>
            </Card>
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-shamsy-primary mb-2">from €17 monthly</div>
                <div className="text-sm text-muted-foreground">Support orphan</div>
              </CardContent>
            </Card>
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-shamsy-primary mb-2">€80</div>
                <div className="text-sm text-muted-foreground">Support family</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Humanitarian Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Humanitarian Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Direct help for people in need - every contribution reaches its destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {humanitarianProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden hover:shadow-xl shamsy-transition group hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 shamsy-transition"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        Source: ShamSy Archive
                      </div>
                      <div className="absolute top-4 left-4 bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 bg-shamsy-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-shamsy-primary/20 shamsy-transition">
                          <IconComponent className="w-6 h-6 text-shamsy-primary" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-shamsy-primary shamsy-transition leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="text-shamsy-primary font-bold text-2xl mb-4">
                        {project.price}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                        {project.description}
                      </p>

                      <Button 
                        asChild 
                        className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
                      >
                        <Link to="/en/donate" className="flex items-center justify-center gap-2">
                          Support Project
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Major Projects: For Sponsors and Crowdfunding
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partial donations possible! Sustainable infrastructure projects with great impact
            </p>
          </div>

          <div className="space-y-12">
            {majorProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden hover:shadow-2xl shamsy-transition group">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative h-80 lg:h-auto">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 shamsy-transition"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                          Source: ShamSy Archive
                        </div>
                        <div className="absolute top-4 left-4 bg-shamsy-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {project.category}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:bg-gradient-to-t lg:from-black/50 lg:via-transparent lg:to-transparent" />
                      </div>

                      <div className="p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 bg-shamsy-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-shamsy-primary/20 shamsy-transition">
                              <IconComponent className="w-8 h-8 text-shamsy-primary" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3 group-hover:text-shamsy-primary shamsy-transition leading-tight">
                                {project.title}
                              </h3>
                              <div className="text-shamsy-primary font-bold text-3xl">
                                {project.price}
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                            {project.description}
                          </p>

                          {project.stats && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                              {project.stats.map((stat, index) => (
                                <div key={index} className="shamsy-card border-shamsy-primary/20 text-center p-6 hover:bg-shamsy-primary/5 shamsy-transition">
                                  <div className="text-3xl font-bold text-shamsy-primary mb-2">
                                    {stat.number}
                                  </div>
                                  <div className="text-sm text-muted-foreground leading-tight">
                                    {stat.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="space-y-4">
                          <Button 
                            asChild 
                            size="lg"
                            className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
                          >
                            <Link to="/en/donate" className="flex items-center justify-center gap-2">
                              Support Project
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </Button>
                          <Button 
                            asChild 
                            variant="outline"
                            size="lg"
                            className="w-full border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white shamsy-transition"
                          >
                            <Link to="/en/get-involved" className="flex items-center justify-center gap-2">
                              Learn More
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4 text-center">
          <Card className="shamsy-card border-shamsy-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Become Part of Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Every contribution helps us rebuild Syria step by step. 
                Support our projects and become part of the solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
                >
                  <Link to="/en/donate" className="flex items-center gap-2">
                    Donate Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white shamsy-transition"
                >
                  <Link to="/en/get-involved" className="flex items-center gap-2">
                    Get Involved
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
 
export default Projects;