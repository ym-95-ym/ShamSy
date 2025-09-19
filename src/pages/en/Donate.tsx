import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"single" | "monthly">("single");
  const [selectedProject, setSelectedProject] = useState("general");

  const quickAmounts = [5, 10, 25, 50, 100, 250, 500, 1000];
  
  const projects = [
    {
      id: "general",
      name: "Where most needed",
      description: "Support us in deploying funds where they are most urgently needed.",
      progress: 0,
      goal: 0,
      raised: 0
    },
    {
      id: "patenschaft",
      name: "Orphan sponsorship",
      description: "Complete care and taking over school costs for one year.",
      progress: 0,
      goal: 80,
      raised: 0
    },
    {
      id: "schulanfang", 
      name: "Enable a good school start",
      description: "Clothing, backpack, notebooks, pens for a proper school start.",
      progress: 0,
      goal: 40,
      raised: 0
    },
    {
      id: "gehalt",
      name: "Give monthly salary to a family", 
      description: "Support a family in need for one month.",
      progress: 0,
      goal: 80,
      raised: 0
    },
    {
      id: "brunnen",
      name: "Drinking water well for village",
      description: "Procurement and installation of a drinking water well for a small village.",
      progress: 0,
      goal: 1000,
      raised: 0
    },
    {
      id: "solar",
      name: "Solar energy Rural Damascus",
      description: "Supply 500 households in Der El-Asafir with sustainable solar energy.",
      progress: 25,
      goal: 400000,
      raised: 100500
    },
    {
      id: "school",
      name: "School renovation Rural Damascus",
      description: "Complete reconstruction of 5 schools in Douma for an entire generation.",
      progress: 0,
      goal: 250000,
      raised: 0
    },
    {
      id: "medical",
      name: "Hospital reconstruction", 
      description: "Rebuild a destroyed hospital in Douma - up to 1 million patients per year.",
      progress: 25,
      goal: 350000,
      raised: 80000
    }
  ];

  const getCurrentAmount = () => {
    if (customAmount) return parseFloat(customAmount) || 0;
    return selectedAmount || 0;
  };

  const getImpactText = (amount: number) => {
    if (amount >= 1000) return `Supply ${Math.floor(amount / 50)} families with solar power for 1 month`;
    if (amount >= 500) return `Equip ${Math.floor(amount / 25)} school children with school materials for 1 year`;
    if (amount >= 100) return `Enable ${Math.floor(amount / 20)} medical treatments`;
    if (amount >= 50) return "Help 2 families with emergency supplies for 1 week";
    if (amount >= 25) return "Help 1 family with basic supplies for 1 week";
    return "Every contribution helps with reconstruction";
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Donate"
        subtitle="Your donation creates immediate and sustainable change in Syria"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Donation Form */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Donation Type */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-shamsy-primary" />
                    Donation Type
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
                        <h3 className="font-semibold text-foreground">One-time donation</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Support us with a one-time donation for immediate help.
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
                        <h3 className="font-semibold text-foreground">Donate monthly</h3>
                        <Badge className="bg-shamsy-primary/20 text-shamsy-primary border-shamsy-primary/30">
                          Recommended
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Regular support enables us to plan projects sustainably.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Selection with Dropdowns */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-shamsy-primary" />
                    Select Project
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Where most needed - Always visible */}
                    <div
                      className={`p-4 rounded-lg border-2 cursor-pointer shamsy-transition ${
                        selectedProject === "general"
                          ? 'border-shamsy-primary bg-shamsy-primary/5'
                          : 'border-gray-200 hover:border-shamsy-primary/50 hover:bg-shamsy-primary/2'
                      }`}
                      onClick={() => setSelectedProject("general")}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <input
                          type="radio"
                          name="project"
                          checked={selectedProject === "general"}
                          onChange={() => setSelectedProject("general")}
                          className="text-shamsy-primary"
                        />
                        <h3 className="font-semibold text-foreground">Where most needed</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Support us in deploying funds where they are most urgently needed.
                      </p>
                    </div>

                    {/* Projects under €100 - Dropdown */}
                    <details className="group">
                      <summary className="p-4 rounded-lg border-2 border-gray-200 hover:border-shamsy-primary/50 cursor-pointer shamsy-transition list-none">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">Projects under €100</h3>
                          <span className="group-open:rotate-180 shamsy-transition text-shamsy-primary">⌄</span>
                        </div>
                      </summary>
                      <div className="mt-2 space-y-2 pl-4">
                        {projects.filter(p => p.id !== "general" && p.goal <= 100).map((project) => (
                          <div
                            key={project.id}
                            className={`p-3 rounded-lg border cursor-pointer shamsy-transition ${
                              selectedProject === project.id
                                ? 'border-shamsy-primary bg-shamsy-primary/5'
                                : 'border-gray-200 hover:border-shamsy-primary/50'
                            }`}
                            onClick={() => setSelectedProject(project.id)}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <input
                                type="radio"
                                name="project"
                                checked={selectedProject === project.id}
                                onChange={() => setSelectedProject(project.id)}
                                className="text-shamsy-primary"
                              />
                              <h4 className="font-medium text-sm text-foreground">{project.name}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </details>

                    {/* Major projects - Dropdown */}
                    <details className="group">
                      <summary className="p-4 rounded-lg border-2 border-gray-200 hover:border-shamsy-primary/50 cursor-pointer shamsy-transition list-none">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">Major projects (partial donations possible)</h3>
                          <span className="group-open:rotate-180 shamsy-transition text-shamsy-primary">⌄</span>
                        </div>
                      </summary>
                      <div className="mt-2 space-y-2 pl-4">
                        {projects.filter(p => p.goal > 100).map((project) => (
                          <div
                            key={project.id}
                            className={`p-3 rounded-lg border cursor-pointer shamsy-transition ${
                              selectedProject === project.id
                                ? 'border-shamsy-primary bg-shamsy-primary/5'
                                : 'border-gray-200 hover:border-shamsy-primary/50'
                            }`}
                            onClick={() => setSelectedProject(project.id)}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <input
                                type="radio"
                                name="project"
                                checked={selectedProject === project.id}
                                onChange={() => setSelectedProject(project.id)}
                                className="text-shamsy-primary"
                              />
                              <h4 className="font-medium text-sm text-foreground">{project.name}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                            <div className="flex justify-between text-xs">
                              <span className="text-shamsy-primary font-medium">{project.progress}%</span>
                              <span className="text-muted-foreground">€{project.raised.toLocaleString()} / €{project.goal.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                              <div 
                                className="bg-gradient-to-r from-shamsy-primary to-shamsy-light h-1 rounded-full shamsy-transition"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                </CardContent>
              </Card>

              {/* Amount Selection */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Euro className="w-6 h-6 text-shamsy-primary" />
                    Donation Amount
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
                      Or custom amount:
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
                        Your Impact:
                      </h4>
                      <p className="text-foreground">
                        With €{getCurrentAmount()} you can: <strong>{getImpactText(getCurrentAmount())}</strong>
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
                    Payment Methods
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      { id: "card", name: "Credit Card", icon: CreditCard, available: true },
                      { id: "paypal", name: "PayPal", icon: Smartphone, available: true },
                      { id: "transfer", name: "Bank Transfer", icon: Building, available: true }
                    ].map((method) => (
                      <div
                        key={method.id}
                        className={`p-4 rounded-lg border-2 text-center ${
                          method.available 
                            ? 'border-shamsy-primary/30 hover:border-shamsy-primary/50 cursor-pointer' 
                            : 'border-gray-200 opacity-50'
                        } shamsy-transition`}
                      >
                        <method.icon className="w-8 h-8 text-shamsy-primary mx-auto mb-2" />
                        <h3 className="font-medium text-foreground text-sm">{method.name}</h3>
                        {method.available && (
                          <CheckCircle className="w-4 h-4 text-green-500 mx-auto mt-1" />
                        )}
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition text-lg py-6 shamsy-shadow-green"
                    size="lg"
                    onClick={() => {
                      const amount = getCurrentAmount();
                      const projectName = projects.find(p => p.id === selectedProject)?.name || "General";
                      const type = donationType === "monthly" ? "monthly" : "one-time";
                      const subject = `Donation - €${amount} ${type} for ${projectName}`;
                      const body = `Hello,\n\nI would like to make a ${type} donation of €${amount} for the project: ${projectName}.\n\nPlease send me the payment details.\n\nThank you for your work!\n\nBest regards`;
                      
                      window.location.href = `mailto:info.shamsyr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    }}
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate €{getCurrentAmount()} now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Trust & Security */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-shamsy-primary" />
                    Trust & Security
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">Transparency</h4>
                        <p className="text-xs text-muted-foreground">100% of your donation reaches the projects</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">Secure data transfer</h4>
                        <p className="text-xs text-muted-foreground">SSL encryption for all payments</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">Recognized non-profit</h4>
                        <p className="text-xs text-muted-foreground">Officially registered e.V. in Germany</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Impact */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-shamsy-primary" />
                    Recent Impact
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-shamsy-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-shamsy-primary mb-1">15</div>
                      <div className="text-sm text-foreground font-medium">Emergency shelters built</div>
                      <div className="text-xs text-muted-foreground">500+ people with safe housing</div>
                    </div>
                    
                    <div className="p-4 bg-shamsy-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-shamsy-primary mb-1">50+</div>
                      <div className="text-sm text-foreground font-medium">Medical operations</div>
                      <div className="text-xs text-muted-foreground">Life-saving interventions</div>
                    </div>
                    
                    <div className="p-4 bg-shamsy-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-shamsy-primary mb-1">8</div>
                      <div className="text-sm text-foreground font-medium">Schools renovated</div>
                      <div className="text-xs text-muted-foreground">400+ students better learning conditions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-shamsy-primary" />
                    Questions?
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      We are happy to answer your questions about donations and projects.
                    </p>
                    
                    <div className="space-y-2">
                      <div>
                        <div className="font-medium text-foreground text-sm">Email</div>
                        <a 
                          href="mailto:info.shamsyr@gmail.com" 
                          className="text-shamsy-primary text-sm hover:underline"
                        >
                          info.shamsyr@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="w-full border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white"
                    >
                      <a href="mailto:info.shamsyr@gmail.com?subject=Question about donation">
                        Contact us
                      </a>
                    </Button>
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

export default Donate;