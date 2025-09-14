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
            src="./public/images/hero-destruction.jpg" 
            alt="Zerstörung in Syrien - ShamSy Archive"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            Quelle: ShamSy Archive
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
                Syrien ist ein Land voller Narben — <strong>14 Jahre Krieg, 55 Jahre Diktatur,</strong> sowie Mangel an den wichtigsten Lebensgrundlagen.
              </p>
              
              <p>
                Doch trotz all dieser Dunkelheit gibt es Hoffnung: Menschen, die geblieben sind. Menschen, die zurückkehren. 
                Menschen wie wir, die <strong>Brücken zwischen der Welt und einem zerstörten Syrien</strong> schlagen.<br/>
                Wir unterstützen aus Deutschland, in dem wir auch Zuhause sind.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild 
                size="lg"
                className="bg-shamsy-dark hover:bg-shamsy-primary shamsy-transition text-lg px-8 py-6 shamsy-shadow-green"
              >
                <Link to="/projekte" className="flex items-center gap-2">
                  Unsere Projekte
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-white/20 border-white/80 text-white hover:bg-white/30 hover:border-white backdrop-blur-sm text-lg px-8 py-6"
              >
                <Link to="/mitmachen" className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Jetzt helfen
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
            "Als <strong>Syrer</strong> können wir den Erfolg relevanter Projekte sicherstellen und durch unsere <strong>bestehenden Netzwerke</strong> schnell realisieren.<br/>
            Als <strong>Deutsche</strong> können wir die Projekte <strong>nachhaltig und zeitgemäß</strong> gestalten und eine Brücke für Integration und Zusammenarbeit bauen."
          </blockquote>
          <cite className="text-xl md:text-2xl font-semibold text-shamsy-primary">
            — Das ShamSy Team
          </cite>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Entdecken Sie ShamSy
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Erfahren Sie mehr über unsere Mission, Projekte und wie Sie helfen können
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unsere Geschichte",
                description: "Von der Flucht 2011 bis zur offiziellen Mission 2025. Erfahren Sie, wie wir trotz Gefahr nie aufgehört haben zu helfen und nun endlich frei agieren können.",
                link: "/geschichte",
                buttonText: "Geschichte lesen"
              },
              {
                title: "Aktuelle Projekte", 
                description: "Energie, Bildung, Gesundheit - unsere laufenden Projekte für nachhaltigen Wiederaufbau. Von Kleinprojekten bis zu Großinfrastruktur.",
                link: "/projekte",
                buttonText: "Projekte ansehen"
              },
              {
                title: "Vergangene Erfolge",
                description: "15 Shelters, medizinische Operationen, Schulrenovierungen - unsere Erfolge vor der Befreiung, trotz Angst und Verfolgung.",
                link: "/vergangene-projekte", 
                buttonText: "Erfolge entdecken"
              },
              {
                title: "Jetzt mitmachen",
                description: "Werden Sie Teil unserer Mission. Als Mitglied, Spender oder Unterstützer - jede Hilfe bringt Syrien seinem Wiederaufbau näher.",
                link: "/mitmachen",
                buttonText: "Jetzt helfen"
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
