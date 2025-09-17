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
                      ShamSy entstand aus dem tiefen Wunsch, trotz aller Widrigkeiten niemals aufzuhören, den Menschen in Syrien zu helfen. Unsere Geschichte beginnt mit der Flucht, aber sie endet mit einer Mission der Hoffnung und des Wiederaufbaus.
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
                        2011-2015
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Der Beginn: Flucht aus Syrien
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Wir gingen auf die Straße für Freiheit und Gerechtigkeit. Die Antwort war: Verfolgung, Folter und Bomben. Rund sieben Millionen, ein Viertel der Bevölkerung, mussten in die Sicherheit fliehen - manche sowie wir nach Deutschland. Aber unser Herz blieb in Syrien und mit denen, die nicht fliehen konnten.
                    </p>
                    <p className="text-foreground font-medium">
                      "Schon damals wussten wir: Wir müssen die helfen, die nicht fliehen konnten. Sie haben sonst Nichts."
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
                        2015-2019
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Integration und Netzwerkaufbau
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Während wir uns in Deutschland integrierten und neue Heimat fanden, 
                      bauten wir kontinuierlich Netzwerke auf. Wir lernten das Leben in Deutschland kennen, studierten, arbeiteten - und behielten dabei immer Syrien im Herzen.
                    </p>
                    <div className="bg-shamsy-primary/5 p-4 rounded-lg">
                      <p className="text-foreground font-medium">
                        Parallel organisierten wir im Geheimen erste Hilfsaktionen in Syrien, trotz der Gefahr durch das Assad-Regime.
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
                        2011-2024
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Heimliche Hilfe trotz Gefahr
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Trotz der Gefahr für uns und unsere Familien haben wir nie aufgehört zu helfen. Durch Unterstützung unserer zahlreichen lokalen Partner und NGOs konnten wir dort unterstützen, wo keine Hilfe reingelassen wurde. Viele Projekte und humanitäre Hilfsaktionen wurden geplant und realisiert. Am prägantesten sind: Unterstützung Familien in Not, Aufbau 15 Unterkünfte für vertriebene Familien, lebensrettende Operationen für Kriegsopfer, Schulrenovierungen in zerbombten Vierteln, Planung Solar-Systeme für Dörfer und Industrie - alles heimlich, alles gegen den Willen des Regimes, alles aus Liebe und für Gerechtigkeit zu einem unterdrückten Volk.
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
                        2025-Heute
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Die Befreiung nach 55 Jahren! ShamSy wird offiziell
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Nach über einem halben Jahrhundert Diktatur ist Syrien endlich frei. Zum ersten Mal können wir ohne Angst leben, ohne Verstecken helfen, ohne Korruption wiederaufbauen. Ein neues Kapitel beginnt für unser geliebtes aber ausgebeutetes Land. Ein entscheidendes Kapitel für die Zukunft Syriens, was wir aber diesmal alle mit gestalten können.
ShamSy e.V. ist jetzt offiziell als NGO registriert - in Deutschland und in Syrien. Was einst im Schatten und über Dritte geschah, führen wir nun offiziell fort. Durch unsere Jahre in Syrien und in Deutschland haben wir diverse Erfahrung und weitgestreckte Netzwerke etabliert. Damit bauen wir unser Land nachhaltig und für Alle wieder auf. Wir haben die Hoffnung einer ganzen Generation!
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
                          Gesundheitssystem nach heutigen Standards
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