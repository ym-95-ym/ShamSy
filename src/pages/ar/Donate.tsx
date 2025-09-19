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
      name: "حيث الحاجة أكبر",
      description: "ادعمنا في استخدام الأموال حيث تكون الحاجة إليها أكثر إلحاحاً.",
      progress: 0,
      goal: 0,
      raised: 0
    },
    {
      id: "patenschaft",
      name: "كفالة يتيم",
      description: "رعاية كاملة وتحمل تكاليف المدرسة لمدة عام.",
      progress: 0,
      goal: 80,
      raised: 0
    },
    {
      id: "schulanfang", 
      name: "تمكين بداية مدرسية جميلة",
      description: "ملابس وحقيبة مدرسية ودفاتر وأقلام لبداية مدرسية مناسبة.",
      progress: 0,
      goal: 40,
      raised: 0
    },
    {
      id: "gehalt",
      name: "إهداء راتب شهري لعائلة", 
      description: "دعم عائلة محتاجة لشهر واحد.",
      progress: 0,
      goal: 80,
      raised: 0
    },
    {
      id: "brunnen",
      name: "بئر مياه شرب للقرية",
      description: "شراء وتركيب بئر مياه شرب لقرية صغيرة.",
      progress: 0,
      goal: 1000,
      raised: 0
    },
    {
      id: "solar",
      name: "الطاقة الشمسية ريف دمشق",
      description: "تزويد 500 منزل في دير العصافير بطاقة شمسية مستدامة.",
      progress: 25,
      goal: 400000,
      raised: 100500
    },
    {
      id: "school",
      name: "تجديد المدارس ريف دمشق",
      description: "إعادة بناء كامل لـ5 مدارس في دوما لجيل كامل.",
      progress: 0,
      goal: 250000,
      raised: 0
    },
    {
      id: "medical",
      name: "إعادة بناء المستشفى", 
      description: "إعادة بناء مستشفى مدمر في دوما - حتى مليون مريض سنوياً.",
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
    if (amount >= 1000) return `تزويد ${Math.floor(amount / 50)} عائلة بالكهرباء الشمسية لشهر واحد`;
    if (amount >= 500) return `تجهيز ${Math.floor(amount / 25)} طفل مدرسة بالمواد المدرسية لعام واحد`;
    if (amount >= 100) return `تمكين ${Math.floor(amount / 20)} علاج طبي`;
    if (amount >= 50) return "مساعدة عائلتين بالإمداد الطارئ لأسبوع واحد";
    if (amount >= 25) return "مساعدة عائلة واحدة بالإمداد الأساسي لأسبوع واحد";
    return "كل مساهمة تساعد في إعادة الإعمار";
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <PageHeader 
        title="التبرعات"
        subtitle="تبرعك يحدث تغييراً فورياً ومستداماً في سوريا"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* نموذج التبرع الرئيسي */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* نوع التبرع */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-shamsy-primary" />
                    نوع التبرع
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
                        <h3 className="font-semibold text-foreground">تبرع لمرة واحدة</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        ادعمنا بتبرع لمرة واحدة للمساعدة الفورية.
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
                        <h3 className="font-semibold text-foreground">تبرع شهري</h3>
                        <Badge className="bg-shamsy-primary/20 text-shamsy-primary border-shamsy-primary/30">
                          موصى به
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        الدعم المنتظم يمكننا من التخطيط المستدام للمشاريع.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* اختيار المشروع */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-shamsy-primary" />
                    اختيار المشروع
                  </h2>
                  
                  <div className="space-y-4">
                    {/* حيث الحاجة أكبر - مرئي دائماً */}
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
                        <h3 className="font-semibold text-foreground">حيث الحاجة أكبر</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        ادعمنا في استخدام الأموال حيث تكون الحاجة إليها أكثر إلحاحاً.
                      </p>
                    </div>

                    {/* مشاريع تحت 100€ - قائمة منسدلة */}
                    <details className="group">
                      <summary className="p-4 rounded-lg border-2 border-gray-200 hover:border-shamsy-primary/50 cursor-pointer shamsy-transition list-none">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">مشاريع تحت 100€</h3>
                          <span className="group-open:rotate-180 shamsy-transition text-shamsy-primary">⌄</span>
                        </div>
                      </summary>
                      <div className="mt-2 space-y-2 pr-4">
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

                    {/* المشاريع الكبرى - قائمة منسدلة */}
                    <details className="group">
                      <summary className="p-4 rounded-lg border-2 border-gray-200 hover:border-shamsy-primary/50 cursor-pointer shamsy-transition list-none">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">المشاريع الكبرى (التبرعات الجزئية ممكنة)</h3>
                          <span className="group-open:rotate-180 shamsy-transition text-shamsy-primary">⌄</span>
                        </div>
                      </summary>
                      <div className="mt-2 space-y-2 pr-4">
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

              {/* اختيار المبلغ */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Euro className="w-6 h-6 text-shamsy-primary" />
                    مبلغ التبرع
                  </h2>
                  
                  {/* أزرار المبالغ السريعة */}
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

                  {/* مبلغ مخصص */}
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount" className="text-foreground font-medium">
                      أو مبلغ مخصص:
                    </Label>
                    <div className="relative">
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
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
                        className="pr-8 h-12 border-shamsy-primary/30 focus:border-shamsy-primary"
                      />
                    </div>
                  </div>

                  {/* معاينة التأثير */}
                  {getCurrentAmount() > 0 && (
                    <div className="mt-6 p-4 bg-shamsy-primary/5 rounded-lg border border-shamsy-primary/20">
                      <h4 className="font-semibold text-shamsy-primary mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        تأثيرك:
                      </h4>
                      <p className="text-foreground">
                        بـ €{getCurrentAmount()} يمكنك: <strong>{getImpactText(getCurrentAmount())}</strong>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* طرق الدفع */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-shamsy-primary" />
                    طرق الدفع
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      { id: "card", name: "بطاقة ائتمان", icon: CreditCard, available: true },
                      { id: "paypal", name: "PayPal", icon: Smartphone, available: true },
                      { id: "transfer", name: "تحويل مصرفي", icon: Building, available: true }
                    ].map((method) => (
                      <div
                        key={method.id}
                        className={`p-4 rounded-lg border-2 text-center cursor-pointer shamsy-transition ${
                          method.available 
                            ? 'border-shamsy-primary/30 hover:border-shamsy-primary hover:bg-shamsy-primary/5' 
                            : 'border-gray-200 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <method.icon className="w-8 h-8 mx-auto mb-2 text-shamsy-primary" />
                        <div className="font-medium text-foreground">{method.name}</div>
                        {method.available && (
                          <CheckCircle className="w-4 h-4 mx-auto mt-1 text-green-500" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button 
                      size="lg"
                      className="bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green px-12 py-6 text-lg"
                      disabled={getCurrentAmount() === 0}
                    >
                      {donationType === 'monthly' ? 'ابدأ التبرع الشهري' : 'تبرع الآن'} - €{getCurrentAmount()}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* الشريط الجانبي */}
            <div className="space-y-8">
              
              {/* معلومات الأمان */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-shamsy-primary" />
                    أمان ١٠٠%
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      تشفير SSL آمن
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      منظمة غير ربحية مسجلة
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      إيصال للخصم الضريبي
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      شفافية كاملة
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* تحديثات المشروع */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-shamsy-primary" />
                    تحديثات منتظمة
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    احصل على تحديثات منتظمة حول تقدم المشاريع واستخدام تبرعك.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-shamsy-primary" />
                      <span className="text-foreground">تقارير شهرية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-shamsy-primary" />
                      <span className="text-foreground">صور من الميدان</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-shamsy-primary" />
                      <span className="text-foreground">قصص تأثير</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* معلومات الاتصال */}
              <Card className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    أسئلة؟
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    نحن هنا لمساعدتك. اتصل بنا لأي أسئلة حول التبرع.
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white"
                  >
                    <a href="mailto:info.shamsyr@gmail.com">
                      راسلنا
                    </a>
                  </Button>
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