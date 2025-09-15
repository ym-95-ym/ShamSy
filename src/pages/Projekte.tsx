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

const Projekte = () => {
  // Kleinere humanitäre Projekte
  const humanitarianProjects = [
    {
      id: 1,
      category: "Humanitär",
      title: "Monatsgehalt an Familie in Not schenken",
      price: "80 € - einmalig",
      description: "JA! Tatsächlich sind die Gehälter in Syrien sehr niedrig, trotz neulicher Erhöhung seit Dezember 2024. Die Waren und Grundnahrungsmittel aber nicht. Sogar an mehreren Stellen wie in Deutschland! Mit einer -für Deutschland- nicht allzu hohen Summe können Sie die Möglichkeiten einer Familie in Not für einen Monat zu verdoppeln.",
      icon: Heart,
      image: "/images/gehalt.jpg"
    },
    {
      id: 2,
      category: "Humanitär", 
      title: "Waisenkind Patenschaft - Ein Jahr Essen und Bildung",
      price: "13 € mtl.",
      description: "Finanzierung von Lebensunterhalt und Bildungskosten eines Waisenindes in Syrien. Durch direkte Kommunikation mit unseren lokalen Partnern können wir für maximale Transparenz sorgen und sicherstellen, das das Geld an den richtigen Stellen kommt.",
      icon: Heart,
      image: "/images/children.jpg"
    },
    {
      id: 3,
      category: "Humanitär",
      title: "Schönen Schulanfang für ein Kind ermöglichen", 
      price: "40 € - einmalig",
      description: "Kleidung, Rücksack, Hefte, Stifte uvm. für einen ordentlichen Schulanfang besorgen, dass Kinder in Syrien mit Hoffnung aufs Jahr blicken können.",
      icon: GraduationCap,
      image: "/images/kindergruppe.jpg"
    },
    {
      id: 4,
      category: "Humanitär",
      title: "Medizinische Behandlung finanzieren",
      price: "beliebig", 
      description: "Ermöglichen Sie eine medizinische Behandlung oder Operation für eine Person in Not! Es gibt zahlreiche Menschen in Damaskus und Umgebung ohne Geld für medizinische Behandlung. Eine Versicherung gibt es auch nicht. Sie können uns eine beliebige Summe spenden und wir stellen sicher, dass damit eine medizinise Behandlung/Operation bezahlt wird. Ihr Beitrag kann Leben retten.",
      icon: Heart,
      image: "/images/operation.jpg"
    },
    {
      id: 5,
      category: "Humanitär",
      title: "Anschaffung Trinkwasserbrunnen für Dorf",
      price: "1.000 € (Teilspenden möglich!)",
      description: "Anschaffung und Installation eines Trinkwasserbrunnens für einen kleinen Dorf, besonders wichtig für die extreme Hitze aufgrund vom Klimawandel und Mangel an Trinkmöglichkeiten in Syrien.",
      icon: Users,
      image: "/images/water.jpg"
    },
    {
      id: 6,
      category: "Humanitär",
      title: "Anschaffung medizinischer Geräte für Krankenhäuser",
      price: "beliebig - für Geräte ab 6.000 € (Teilspenden möglich!)",
      description: "Wir haben zahlreiche Angebote von Krankenhäusern und Partner NGOs über diverse medizinische Geräte, die bei der Rehabilitierung von zerstörten Krankenhäusern fehlen. Darunter Bildgebungsgeräte (CT, Röntgen, Röntgen-Thorax, EKG) für Kliniken die Milionen von Menschen versorgen (Douma, Ibn El-Nafis, Qattana, uvm.).",
      icon: Heart,
      image: "/images/operation.jpg"
    },
    {
      id: 7,
      category: "Bildung",
      title: "Schule Rehabilitierung - Der El-Asafir",
      price: "5.000 € (Teilspenden möglich!)",
      description: "Unterstützung und Weiterbildung des Bildungskaders, Sanierung und Reparatur der Schule sowie Sicherung ihrer Versorgung.",
      icon: GraduationCap,
      image: "/images/schule-kind.jpg"
    }
  ];

  // Großprojekte für Sponsors und Crowdfunding
  const majorProjects = [
    {
      id: 1,
      category: "Energie & Bildung",
      title: "Der El-Asafir Gemeinschaftsinfrastruktur",
      price: "400.000 €",
      description: "250 kW Solarsystem für eine ländliche Schule, landwirtschaftlichen Hub und Wohnhäuser. Über 10.000 Menschen, 500 Schüler und 50 landwirtschaftliche Betriebe erhalten stabile Elektrizität für Bildung und Produktion.",
      icon: Zap,
      image: "/images/pv-sys.jpg",
      stats: [
        { number: "10.000", label: "Menschen mit Strom versorgen" },
        { number: "500+", label: "Schüler mit Strom versorgen" },
        { number: ">50", label: "landwirtschaftliche Betriebe mit Strom versorgen" }
      ]
    },
    {
      id: 2,
      category: "Gesundheit",
      title: "Douma National Hospital Renovierung",
      price: "350.000 €",
      description: "Wiederherstellung Teil der Kapazitäten eines Krankenhauses, das über 1 Million Patienten jährlich versorgt. Das Krankenhaus, nach 12.2024 mit Dronenaufnahme dokumentiert, wurde vom alten Regime komplett bombardiert. Unser Partner NGO (Al-Sahha al-Khairiyah) in Douma hat nach der Zerstörung eine Multi-Fachklinik eingerichtet und will das weiterbauen und zu einem Krankenhaus rehabilitieren. Heute wollen wir mit dem Wiederaufbau unterstützen und planen Anschaffung medizinischer Geräten z.B., CT-Scanner und einem voll-integrierten Solarsystem.",
      icon: Heart,
      image: "/images/douma-hospital-after.jpg",
      stats: [
        { number: "1 Mio+", label: "Patienten/Jahr" },
        { number: "100%", label: "Notwendig" },
        { number: "100%", label: "Nachhaltig" }
      ]
    },
    {
      id: 3,
      category: "Bildung",
      title: "Renovierung von 5 Schulen in Douma", 
      price: "250.000 €",
      description: "Sanierung von Schulen zu sicheren, hochwertigen Standards. 3.000+ Schüler erhalten verbesserte Bildungsumgebungen mit modernen Klassenzimmern, sanitären Anlagen und barrierefreiem Zugang.",
      icon: GraduationCap,
      image: "/images/schule.jpg",
      stats: [
        { number: "3000+", label: "Schüler" },
        { number: "5", label: "Schulen" },
        { number: "100%", label: "Zukunftssicher" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Aktuelle Projekte"
        subtitle="Energie, Bildung, Gesundheit - Unsere laufenden Initiativen für nachhaltigen Wiederaufbau"
      />

      {/* Overview Stats */}
      <section className="py-12 md:py-16 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-shamsy-primary mb-2">{humanitarianProjects.length + majorProjects.length}</div>
                <div className="text-xs md:text-sm text-muted-foreground">Aktuelle Projekte</div>
              </CardContent>
            </Card>
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-shamsy-primary mb-2">€1M+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Gesamtziel Großprojekte</div>
              </CardContent>
            </Card>
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-shamsy-primary mb-2">Ab €13</div>
                <div className="text-xs md:text-sm text-muted-foreground">Monatlich helfen</div>
              </CardContent>
            </Card>
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-shamsy-primary mb-2">13.500+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Geschätzte Begünstigte</div>
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
              Humanitäre Projekte
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Direkte Hilfe für Menschen in Not - jeder Beitrag kommt an
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                        Quelle: ShamSy Archive
                      </div>
                      <div className="absolute top-4 left-4 bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    <div className="p-4 md:p-6">
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

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-4">
                        {project.description}
                      </p>

                      <Button 
                        asChild 
                        className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
                      >
                        <Link to="/spenden" className="flex items-center justify-center gap-2">
                          Projekt unterstützen
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
              Großprojekte: Für Sponsors und Crowdfunding
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Teilspenden möglich! Nachhaltige Infrastrukturprojekte mit großer Wirkung
            </p>
          </div>

          <div className="space-y-12">
            {majorProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden hover:shadow-2xl shamsy-transition group">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Project Image */}
                      <div className="relative h-80 lg:h-auto">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 shamsy-transition"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                          Quelle: ShamSy Archive
                        </div>
                        <div className="absolute top-4 left-4 bg-shamsy-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {project.category}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:bg-gradient-to-t lg:from-black/50 lg:via-transparent lg:to-transparent" />
                      </div>

                      {/* Project Details */}
                      <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
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

                          {/* Project Stats */}
                          {project.stats && (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-8">
                              {project.stats.map((stat, index) => (
                                <div key={index} className="shamsy-card border-shamsy-primary/20 text-center p-4 md:p-6 hover:bg-shamsy-primary/5 shamsy-transition">
                                  <div className="text-2xl md:text-3xl font-bold text-shamsy-primary mb-2">
                                    {stat.number}
                                  </div>
                                  <div className="text-xs md:text-sm text-muted-foreground leading-tight">
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
                            <Link to="/spenden" className="flex items-center justify-center gap-2">
                              Projekt unterstützen
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </Button>
                          <Button 
                            asChild 
                            variant="outline"
                            size="lg"
                            className="w-full border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white shamsy-transition"
                          >
                            <Link to="/mitmachen" className="flex items-center justify-center gap-2">
                              Mehr erfahren
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
            <CardContent className="p-6 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Werden Sie Teil unserer Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Jeder Beitrag hilft uns dabei, Syrien Schritt für Schritt wieder aufzubauen. 
                Unterstützen Sie unsere Projekte und werden Sie Teil der Lösung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
                >
                  <Link to="/spenden">Jetzt Spenden</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white"
                >
                  <Link to="/mitmachen">Mitglied werden</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Projekte;
