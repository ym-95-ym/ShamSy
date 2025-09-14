import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  CreditCard, 
  Banknote, 
  Shield, 
  CheckCircle, 
  Gift,
  Star,
  Target,
  Users,
  Euro,
  Smartphone,
  Building,
  FileText,
  Award
} from "lucide-react";

const Spenden = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"single" | "monthly">("single");
  const [selectedProject, setSelectedProject] = useState("general");

  const quickAmounts = [25, 50, 100, 250, 500, 1000];
  
  const projects = [
    {
      id: "general",
      name: "Wo am nötigsten",
      description: "Unterstützen Sie uns dabei, die Mittel dort einzusetzen, wo sie am dringendsten gebraucht werden."
    },
    {
      id: "solar",
      name: "Solarenergie",
      description: "Unterstützen Sie ein Projekt für Solarenergie",
      progress: 75,
      goal: 50000,
      raised: 37500
    },
    {
      id: "school",
      name: "Schulrenovierung Damaskus",
      description: "Moderne Bildungsinfrastruktur für 800 Schulkinder schaffen.",
      progress: 25,
      goal: 30000,
      raised: 7500
    },
    {
      id: "medical",
      name: "Mobile Klinik Idlib", 
      description: "Medizinische Versorgung in entlegene Gebiete bringen.",
      progress: 60,
      goal: 25000,
      raised: 15000
    }
  ];

  const getCurrentAmount = () => {
    if (customAmount) return parseFloat(customAmount) || 0;
    return selectedAmount || 0;
  };

  const getImpactText = (amount: number) => {
    if (amount >= 1000) return `${Math.floor(amount / 50)} Familien 1 Monat mit Solarstrom versorgen`;
    if (amount >= 500) return `${Math.floor(amount / 25)} Schulkinder 1 Jahr mit Schulmaterialien ausstatten`;
    if (amount >= 100) return `${Math.floor(amount / 20)} > 1 Monatsgehalt! Eine medizinische Behandlungen ermöglichen`;
    if (amount >= 50) return "2 Familien 2 Woche mit Notversorgung helfen";
    if (amount >= 25) return "1 Familie 2 Woche mit Grundversorgung helfen";
    return "Jeder Beitrag hilft beim Wiederaufbau";
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Spenden"
        subtitle="Ihre Spende bewirkt sofortigen und nachhaltigen Wandel in Syrien"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Donation Form */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Project Selection */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-shamsy-primary" />
                    Projekt auswählen
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer shamsy-transition ${
                          selectedProject === project.id
                            ? 'border-shamsy-primary bg-shamsy-primary/5'
                            : 'border-gray-200 hover:border-shamsy-primary/50 hover:bg-shamsy-primary/2'
                        }`}
                        onClick={() => setSelectedProject(project.id)}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <input
                            type="radio"
                            name="project"
                            checked={selectedProject === project.id}
                            onChange={() => setSelectedProject(project.id)}
                            className="text-shamsy-primary"
                          />
                          <h3 className="font-semibold text-foreground">{project.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        
                        {/* Progress Bar */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-shamsy-primary font-medium">{project.progress}%</span>
                            <span className="text-muted-foreground">€{project.raised.toLocaleString()} / €{project.goal.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-shamsy-primary to-shamsy-light h-2 rounded-full shamsy-transition"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Donation Type */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-shamsy-primary" />
                    Spenden-Art
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div
                      className={`p-6 rounded-lg border-2 cursor-pointer shamsy-transition ${
                        donationType === 'single'
                          ? 'border-shamsy-primary bg-shamsy-primary/5'
                          : 'border-gray-200 hover:border-shamsy-primary/50'
                      }`}
                      onClick={() => setDonationType('single')}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <input
                          type="radio"
                          name="donationType"
                          checked={donationType === 'single'}
                          onChange={() => setDonationType('single')}
                          className="text-shamsy-primary"
                        />
                        <Gift className="w-6 h-6 text-shamsy-primary" />
                        <h3 className="font-semibold text-foreground">Einmalspende</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Unterstützen Sie uns mit einer einmaligen Spende für sofortige Hilfe.
                      </p>
                    </div>

                    <div
                      className={`p-6 rounded-lg border-2 cursor-pointer shamsy-transition ${
                        donationType === 'monthly'
                          ? 'border-shamsy-primary bg-shamsy-primary/5'
                          : 'border-gray-200 hover:border-shamsy-primary/50'
                      }`}
                      onClick={() => setDonationType('monthly')}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <input
                          type="radio"
                          name="donationType"
                          checked={donationType === 'monthly'}
                          onChange={() => setDonationType('monthly')}
                          className="text-shamsy-primary"
                        />
                        <Star className="w-6 h-6 text-shamsy-primary" />
                        <h3 className="font-semibold text-foreground">Monatlich spenden</h3>
                        <Badge className="bg-shamsy-primary/20 text-shamsy-primary border-shamsy-primary/30">
                          Empfohlen
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Regelmäßige Unterstützung ermöglicht uns nachhaltige Projektplanung.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amount Selection */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Euro className="w-6 h-6 text-shamsy-primary" />
                    Spendenbetrag
                  </h2>
                  
                  {/* Quick Amount Buttons */}
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                    {quickAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={`h-12 ${
                          selectedAmount === amount
                            ? 'bg-shamsy-primary hover:bg-shamsy-dark'
                            : 'border-shamsy-primary/30 text-shamsy-primary hover:bg-shamsy-primary/10'
                        }`}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        €{amount}
                      </Button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount" className="text-foreground font-medium">
                      Oder eigener Betrag:
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        €
                      </span>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="0"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="pl-8 h-12 border-shamsy-primary/30 focus:border-shamsy-primary"
                      />
                    </div>
                  </div>

                  {/* Impact Preview */}
                  {getCurrentAmount() > 0 && (
                    <div className="mt-6 p-4 bg-shamsy-primary/5 rounded-lg border border-shamsy-primary/20">
                      <h4 className="font-semibold text-shamsy-primary mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Ihre Wirkung:
                      </h4>
                      <p className="text-foreground">
                        Mit €{getCurrentAmount()} können Sie: <strong>{getImpactText(getCurrentAmount())}</strong>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-shamsy-primary" />
                    Zahlungsmethoden
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      { id: "card", name: "Kreditkarte", icon: CreditCard, available: true },
                      { id: "paypal", name: "PayPal", icon: Smartphone, available: true },
                      { id: "transfer", name: "Überweisung", icon: Building, available: true }
                    ].map((method) => (
                      <div
                        key={method.id}
                        className={`p-4 rounded-lg border-2 text-center ${
                          method.available
                            ? 'border-shamsy-primary/30 hover:border-shamsy-primary cursor-pointer shamsy-transition'
                            : 'border-gray-200 opacity-50'
                        }`}
                      >
                        <method.icon className="w-8 h-8 text-shamsy-primary mx-auto mb-2" />
                        <h3 className="font-medium text-foreground">{method.name}</h3>
                        {method.available && (
                          <Badge className="mt-2 bg-green-100 text-green-800">Verfügbar</Badge>
                        )}
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green h-14 text-lg"
                    disabled={getCurrentAmount() === 0}
                  >
                    {donationType === 'monthly' ? 'Monatliche Spende einrichten' : 'Jetzt Spenden'} - €{getCurrentAmount() || 0}
                  </Button>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar - Trust & Transparency */}
            <div className="space-y-8">
              
              {/* Trust Indicators */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-shamsy-primary" />
                    Vertrauen & Sicherheit
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        icon: CheckCircle,
                        title: "100% Transparenz",
                        description: "Detaillierte Berichte über Mittelverwendung"
                      },
                      {
                        icon: Shield,
                        title: "Sichere Übertragung",
                        description: "SSL-verschlüsselte Datenübertragung"
                      },
                      {
                        icon: Award,
                        title: "Gemeinnützig anerkannt",
                        description: "Spendenquittung für Steuererleichterung"
                      },
                      {
                        icon: FileText,
                        title: "Regelmäßige Updates",
                        description: "Quartalsweise Projektberichte"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-shamsy-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-shamsy-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Impact */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-shamsy-primary" />
                    Aktuelle Erfolge
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: "Solar-Installation Aleppo",
                        progress: "15 von 20 Haushalten versorgt",
                        date: "Diese Woche"
                      },
                      {
                        title: "Schulmaterial Damaskus",
                        progress: "200 Kinder ausgestattet",
                        date: "Letzter Monat"
                      },
                      {
                        title: "Medizinische Hilfe",
                        progress: "8 Operationen finanziert",
                        date: "Januar 2025"
                      }
                    ].map((success, index) => (
                      <div key={index} className="p-3 bg-shamsy-primary/5 rounded-lg border border-shamsy-primary/10">
                        <h4 className="font-medium text-foreground text-sm mb-1">{success.title}</h4>
                        <p className="text-xs text-shamsy-primary font-medium">{success.progress}</p>
                        <p className="text-xs text-muted-foreground">{success.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Fragen zur Spende?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Unser Team hilft Ihnen gerne weiter.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-shamsy-primary">📧</span>
                      <a href="mailto:info.shamsyr@gmail.com" className="text-shamsy-primary hover:underline">
                        info.shamsyr@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-shamsy-primary">📞</span>
                      <a href="tel:+4991143332925" className="text-shamsy-primary hover:underline">
                        +49 911 43332925
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spenden;
