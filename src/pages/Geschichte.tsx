import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Target, Heart } from "lucide-react";

const Geschichte = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Unsere Geschichte"
        subtitle="Von der Flucht zur Mission - Ein Weg voller Herausforderungen und Hoffnung"
      />

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <Card className="shamsy-card border-shamsy-primary/20 mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Heart className="w-8 h-8 text-shamsy-primary mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Eine Geschichte der Hoffnung
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      ShamSy entstand aus dem tiefen Wunsch, trotz aller Widrigkeiten niemals aufzuhören, 
                      den Menschen in Syrien zu helfen. Unsere Geschichte beginnt mit der Flucht, 
                      aber sie endet mit einer Mission der Hoffnung und des Wiederaufbaus.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline Items */}
            <div className="space-y-12">
              
              {/* 2011 - Der Anfang */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 h-24 bg-shamsy-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-shamsy-primary" />
                </div>
                <Card className="shamsy-card border-shamsy-primary/20 flex-grow">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        2011
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Der Beginn: Flucht aus Syrien
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Als der syrische Konflikt eskalierte, waren wir gezwungen, unser Heimatland zu verlassen. 
                      Doch bereits während der Flucht begann unsere Mission: Wir halfen anderen Flüchtlingen 
                      und organisierten erste Hilfsaktionen.
                    </p>
                    <p className="text-foreground font-medium">
                      "Schon damals wussten wir: Wir werden zurückkehren - wenn nicht körperlich, dann mit unserer Hilfe."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2012-2020 - Aufbau in Deutschland */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 h-24 bg-shamsy-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-shamsy-primary" />
                </div>
                <Card className="shamsy-card border-shamsy-primary/20 flex-grow">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        2012-2020
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Integration und Netzwerkaufbau
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Während wir uns in Deutschland integrierten und neue Heimat fanden, 
                      bauten wir kontinuierlich Netzwerke auf. Wir lernten das deutsche System kennen, 
                      studierten, arbeiteten - und behielten dabei immer Syrien im Herzen.
                    </p>
                    <div className="bg-shamsy-primary/5 p-4 rounded-lg">
                      <p className="text-foreground font-medium">
                        Parallel organisierten wir im Geheimen erste Hilfsaktionen für Syrien, 
                        trotz der Gefahr durch das Assad-Regime.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 2020-2024 - Heimliche Hilfe */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 h-24 bg-shamsy-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-shamsy-primary" />
                </div>
                <Card className="shamsy-card border-shamsy-primary/20 flex-grow">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        2020-2024
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Heimliche Hilfe trotz Gefahr
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Trotz der anhaltenden Diktatur und der Gefahr für unsere Familien in Syrien 
                      organisierten wir kontinuierlich Hilfsprojekte. Unter größter Geheimhaltung 
                      realisierten wir bedeutende Projekte.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-shamsy-primary/5 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-shamsy-primary mb-2">15</div>
                        <div className="text-sm text-foreground">Shelter gebaut</div>
                      </div>
                      <div className="bg-shamsy-primary/5 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-shamsy-primary mb-2">50+</div>
                        <div className="text-sm text-foreground">Medizinische Operationen</div>
                      </div>
                      <div className="bg-shamsy-primary/5 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-shamsy-primary mb-2">8</div>
                        <div className="text-sm text-foreground">Schulen renoviert</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 2025 - Die Befreiung */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 h-24 bg-shamsy-light/20 rounded-full flex items-center justify-center ring-4 ring-shamsy-light/30">
                  <Heart className="w-8 h-8 text-shamsy-primary" />
                </div>
                <Card className="shamsy-card border-shamsy-light/30 flex-grow shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gradient-to-r from-shamsy-primary to-shamsy-light text-white px-4 py-2 rounded-full text-sm font-semibold">
                        2025 - HEUTE
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Endlich frei: ShamSy wird offiziell
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Mit dem Fall des Assad-Regimes können wir endlich offen und offiziell arbeiten! 
                      ShamSy wird als gemeinnütziger Verein in Deutschland gegründet. 
                      Keine Angst mehr, keine Geheimhaltung - nur pure Mission und Hoffnung.
                    </p>
                    
                    <div className="bg-gradient-to-r from-shamsy-primary/10 to-shamsy-light/10 p-6 rounded-lg border border-shamsy-primary/20">
                      <h4 className="text-xl font-semibold text-shamsy-primary mb-3">
                        Unsere Vision für das freie Syrien:
                      </h4>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          Nachhaltige Energieprojekte für den Wiederaufbau
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          Bildungsinfrastruktur für eine neue Generation
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          Gesundheitssystem nach europäischen Standards
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          Brücke zwischen der Diaspora und der Heimat
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4 text-center">
          <Card className="shamsy-card border-shamsy-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                Heute: Frei, offen, hoffnungsvoll
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Nach 14 Jahren im Schatten können wir endlich das tun, was wir immer wollten: 
                <strong className="text-shamsy-primary"> Syrien beim Wiederaufbau helfen - offen, professionell und nachhaltig.</strong>
              </p>
              <div className="w-24 h-1 bg-shamsy-primary mx-auto rounded-full"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Geschichte;