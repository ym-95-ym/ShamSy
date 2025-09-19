import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Heart, 
  GraduationCap, 
  Users, 
  ShieldCheck,
  AlertTriangle,
  Star
} from "lucide-react";

const PastProjects = () => {
  const pastProjects = [
    {
      id: 1,
      title: "Schools renovated and equipped",
      category: "Education",
      location: "Der El-Asafir, Rural Damascus",
      year: "2022-2024",
      description: "The reopening of a war-damaged school was made possible by mobilizing volunteers, repairing infrastructure and restoring safe learning spaces. Together, we gave children back their future – a place where hope and education can flourish again.",
      beneficiaries: "400 students",
      cost: "€20,000",
      challenges: "Procurement of materials, transport to unsafe areas, coordination with local partners under secrecy",
      impact: "Better learning conditions for an entire generation",
      icon: GraduationCap,
      status: "Successfully completed",
      image: "/shamsy/images/kindergruppe.jpg"
    },
    {
      id: 3,
      title: "Medical operations enabled",
      category: "Health",
      location: "Various hospitals",
      year: "2011-2024",
      description: "Life-changing surgeries and medical procedures for needy patients and children were financed and coordinated – including the provision of specialized hearing aids for war victims. Together, we gave people back their health and quality of life that had been lost due to the war.",
      cost: "€30,000",
      challenges: "Searching for needy patients during wartime, coordination with doctors and hospitals, procurement of medical equipment",
      impact: "Lives saved, new opportunities created",
      icon: Heart,
      status: "Successfully completed",
      image: "/shamsy/images/operation.jpg"
    },
    {
      id: 2,
      title: "15 emergency shelters built",
      category: "Shelter",
      location: "Eastern Ghouta",
      year: "2011-2024",
      description: "15 resilient shelters were built for families who lost their homes due to the war in rural Damascus – from planning through construction to complete furnishing. Together with our local partner NGOs, our transparent selection process ensured that aid reached the families who needed it most urgently.",
      beneficiaries: "120 families",
      cost: "€200,000",
      challenges: "Material transport under war conditions, safety of construction teams, secrecy from the regime",
      impact: "Over 500 people received safe housing",
      icon: Home,
      status: "Successfully completed",
      image: "/shamsy/images/hero-destruction.jpg"
    },
    {
      id: 4,
      title: "Food and clothing for all",
      category: "Humanitarian",
      location: "Damascus and surroundings",
      year: "2011-2024",
      description: "Winter aid, clothing and food reached displaced families, while young people and women gained new perspectives through IT and language workshops. Together, we created not only survival aid, but also paths to a self-determined future.",
      beneficiaries: "People who had to flee with nothing, children, women",
      cost: "Clothing, food",
      challenges: "Material transport under war conditions and from Germany to Syria, secrecy from the regime",
      icon: Home,
      status: "ongoing",
      image: "/shamsy/images/kindergruppe.jpg"
    },
    {
      id: 4,
      title: "Medicines provided",
      category: "Humanitarian",
      location: "Damascus and surroundings",
      year: "2011-2024",
      description: "Procurement and delivery of medicines and critical diagnostic equipment to improve emergency and specialized care. Safe delivery and training of hospital staff in Douma were ensured – so that life-saving help reaches where it is most urgently needed.",
      beneficiaries: "People in need and war victims",
      cost: "€10,000",
      challenges: "Material transport under war conditions and from Germany to Syria, secrecy from the regime",
      icon: Home,
      status: "Successfully completed",
      image: "/shamsy/images/help.jpg"
    }

  ];

  const totalStats = {
    totalBeneficiaries: 2972,
    totalCost: 300000,
    projectCount: 7,
    timespan: "2011-2024"
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Past Projects"
        subtitle="Our successes before liberation - help despite fear and persecution"
      />

      {/* Warning Banner */}
      <section className="py-8 md:py-12 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <Card className="border-orange-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold text-orange-800 mb-2 md:mb-3">
                    Help under extreme conditions
                  </h3>
                  <p className="text-orange-700 leading-relaxed text-sm md:text-lg">
                    <strong>All projects before 2024 were carried out under the Assad dictatorship.</strong> 
                    This meant: Constant fear of persecution, secrecy to protect our families in Syria, and enormous logistical challenges. Every project was a risk - but also an act of hope. Everything would have been impossible without the support of our partner NGOs and colleagues in Syria.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 md:mb-6">
              Success despite all obstacles
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              What we have achieved through years of secret work.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-2xl">
              <Card className="shamsy-card border-shamsy-primary/20 text-center">
                <CardContent className="p-4 md:p-8">
                  <Star className="w-8 h-8 md:w-12 md:h-12 text-shamsy-primary mx-auto mb-3 md:mb-4" />
                  <div className="text-2xl md:text-4xl font-bold text-shamsy-primary mb-1 md:mb-2">
                    {totalStats.projectCount}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Projects successfully implemented</div>
                </CardContent>
              </Card>
              
              <Card className="shamsy-card border-shamsy-primary/20 text-center">
                <CardContent className="p-4 md:p-8">
                  <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-shamsy-primary mx-auto mb-3 md:mb-4" />
                  <div className="text-2xl md:text-4xl font-bold text-shamsy-primary mb-1 md:mb-2">
                    €{totalStats.totalCost.toLocaleString()}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Donation funds deployed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {pastProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={project.id} className="relative">
                  {index < pastProjects.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-shamsy-primary/20 hidden lg:block" />
                  )}
                  
                  <Card className="shamsy-card border-shamsy-primary/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Project Image */}
                        <div className="relative h-48 md:h-64 lg:h-auto">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 md:top-4 left-2 md:left-4">
                            <Badge className="bg-shamsy-primary text-white text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <div className="absolute top-2 md:top-4 right-2 md:right-4">
                            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs">
                              {project.year}
                            </Badge>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="lg:col-span-2 p-4 md:p-8">
                          <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-shamsy-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-shamsy-primary" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-2">
                                {project.title}
                              </h3>
                              <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                                <span>{project.location}</span>
                                <span className="hidden md:inline">•</span>
                                <span>{project.beneficiaries} benefited</span>
                                <span className="hidden md:inline">•</span>
                                <span>{project.cost} invested</span>
                              </div>
                              <Badge 
                                className={`${
                                  project.status === 'Successfully completed' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {project.status}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-lg">
                            {project.description}
                          </p>

                          {/* Challenge & Impact */}
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                              <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Challenges
                              </h4>
                              <p className="text-red-700 text-sm leading-relaxed">
                                {project.challenges}
                              </p>
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                              <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                Impact achieved
                              </h4>
                              <p className="text-green-700 text-sm leading-relaxed">
                                {project.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <Card className="shamsy-card border-shamsy-primary/20 max-w-4xl mx-auto text-center">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-shamsy-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-shamsy-primary" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-light italic text-foreground mb-8 leading-relaxed">
                "Each of these projects came from necessity. Our dictator destroyed entire cities and many families. He crossed all red lines. Help was forbidden where bombs fell. Families of political prisoners were driven away. Injured from war zones could only be treated secretly. It was cruel... But the dictatorship is over!"
              </blockquote>
              
              <cite className="text-lg font-semibold text-shamsy-primary">
                — Yazan, ShamSy founding member
              </cite>

              <div className="mt-8 p-6 bg-shamsy-primary/5 rounded-lg border border-shamsy-primary/20">
                <p className="text-foreground font-medium">
                  <strong>Since 2024 we can plan and act systematically. Now we are allowed to officially help where it was forbidden.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PastProjects;