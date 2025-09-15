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

const VergangeneProj = () => {
  const pastProjects = [
    {
      id: 1,
      title: "15 Notunterkünfte gebaut",
      category: "Unterkünfte",
      location: "Nordsyrien",
      year: "2020-2023",
      description: "Trotz enormer Sicherheitsrisiken haben wir 15 Notunterkünfte für Binnenflüchtlinge errichtet. Jede Unterkunft bot 6-8 Personen Schutz vor Witterung und Gewalt.",
      beneficiaries: "120 Familien",
      cost: "€18,500",
      challenges: "Materialtransport unter Kriegsbedingungen, Sicherheit der Bauteams, Geheimhaltung vor dem Regime",
      impact: "Über 400 Menschen erhielten sicheren Wohnraum",
      icon: Home,
      status: "Erfolgreich abgeschlossen",
      image: "/images/shelter-project.jpg"
    },
    {
      id: 2,
      title: "Medizinische Operationen finanziert",
      category: "Gesundheit",
      location: "Verschiedene Krankenhäuser",
      year: "2021-2024",
      description: "Finanzierung von über 50 lebensrettenden Operationen für Menschen, die sich diese nicht leisten konnten. Von Herzoperationen bis hin zu orthopädischen Eingriffen.",
      beneficiaries: "52 Patienten",
      cost: "€35,000",
      challenges: "Identifikation bedürftiger Patienten, Koordination mit Ärzten unter Geheimhaltung, Geldtransfer in Kriegsgebiet",
      impact: "52 Leben gerettet, Familien vor dem Ruin bewahrt",
      icon: Heart,
      status: "Erfolgreich abgeschlossen",
      image: "/images/medical-operations.jpg"
    },
    {
      id: 3,
      title: "Schulen renoviert und ausgestattet",
      category: "Bildung",
      location: "Aleppo & Damaskus",
      year: "2022-2024",
      description: "8 Schulen wurden renoviert und mit neuen Möbeln, Tafeln und Schulmaterialien ausgestattet. Bildung als Grundstein für die Zukunft Syriens.",
      beneficiaries: "2,400 Schüler",
      cost: "€28,000",
      challenges: "Beschaffung von Materialien, Transport in unsichere Gebiete, Koordination mit Schulleitern",
      impact: "Bessere Lernbedingungen für eine ganze Generation",
      icon: GraduationCap,
      status: "Erfolgreich abgeschlossen",
      image: "/images/school-renovation.jpg"
    }
  ];

  const totalStats = {
    totalBeneficiaries: 2972,
    totalCost: 81500,
    projectCount: 23,
    timespan: "2020-2024"
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Vergangene Projekte"
        subtitle="Unsere Erfolge vor der Befreiung - Hilfe trotz Angst und Verfolgung"
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
                    Hilfe unter extremen Bedingungen
                  </h3>
                  <p className="text-orange-700 leading-relaxed text-sm md:text-lg">
                    <strong>Alle folgenden Projekte wurden unter der Assad-Diktatur durchgeführt.</strong> 
                    Das bedeutete: Ständige Angst vor Verfolgung, Geheimhaltung zum Schutz unserer Familien in Syrien, 
                    und enorme logistische Herausforderungen. Jedes Projekt war ein Risiko - aber auch ein Akt der Hoffnung.
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
              Erfolge trotz Widrigkeiten
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Was wir in 4 Jahren heimlicher Arbeit erreicht haben
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-4 md:p-8">
                <Star className="w-8 h-8 md:w-12 md:h-12 text-shamsy-primary mx-auto mb-3 md:mb-4" />
                <div className="text-2xl md:text-4xl font-bold text-shamsy-primary mb-1 md:mb-2">
                  {totalStats.projectCount}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Projekte erfolgreich durchgeführt</div>
              </CardContent>
            </Card>
            
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-4 md:p-8">
                <Users className="w-8 h-8 md:w-12 md:h-12 text-shamsy-primary mx-auto mb-3 md:mb-4" />
                <div className="text-2xl md:text-4xl font-bold text-shamsy-primary mb-1 md:mb-2">
                  {totalStats.totalBeneficiaries.toLocaleString()}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Menschen geholfen</div>
              </CardContent>
            </Card>
            
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-4 md:p-8">
                <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-shamsy-primary mx-auto mb-3 md:mb-4" />
                <div className="text-2xl md:text-4xl font-bold text-shamsy-primary mb-1 md:mb-2">
                  €{totalStats.totalCost.toLocaleString()}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Spendengelder eingesetzt</div>
              </CardContent>
            </Card>
            
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-4 md:p-8">
                <AlertTriangle className="w-8 h-8 md:w-12 md:h-12 text-orange-500 mx-auto mb-3 md:mb-4" />
                <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-1 md:mb-2">0</div>
                <div className="text-xs md:text-sm text-muted-foreground">Sicherheitsvorfälle</div>
                <div className="text-xs text-orange-600 mt-1">Trotz hohem Risiko</div>
              </CardContent>
            </Card>
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
                                <span>{project.beneficiaries} begünstigt</span>
                                <span className="hidden md:inline">•</span>
                                <span>{project.cost} investiert</span>
                              </div>
                              <Badge 
                                className={`${
                                  project.status === 'Erfolgreich abgeschlossen' 
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
                                Herausforderungen
                              </h4>
                              <p className="text-red-700 text-sm leading-relaxed">
                                {project.challenges}
                              </p>
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                              <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                Erreichte Wirkung
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
                "Jedes dieser Projekte war ein Risiko für uns und unsere Familien. Aber wenn wir die Dankbarkeit in den Augen der Menschen sahen, 
                wussten wir: Es war richtig. Heute können wir endlich offen helfen - und das werden wir."
              </blockquote>
              
              <cite className="text-lg font-semibold text-shamsy-primary">
                — Ein ShamSy Gründungsmitglied
              </cite>

              <div className="mt-8 p-6 bg-shamsy-primary/5 rounded-lg border border-shamsy-primary/20">
                <p className="text-foreground font-medium">
                  <strong>Heute, in einem freien Syrien, können wir endlich das volle Potenzial unserer Arbeit entfalten.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default VergangeneProj;
