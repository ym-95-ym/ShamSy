import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Euro,
  ArrowLeft, 
  CheckCircle,
  Clock,
  MapPin,
  Target
} from "lucide-react";

const ProjectsAr = () => {
  const humanitarianProjects = [
    {
      id: 1,
      title: "راتب شهري لعائلة",
      description: "تأمين احتياجات عائلة أساسية براتب شهري يغطي تكاليف المعيشة الأساسية بما في ذلك الطعام والمأوى والرعاية الصحية الأساسية.",
      price: "€80",
      period: "شهرياً",
      beneficiaries: "عائلة واحدة (4-6 أشخاص)",
      impact: "يوفر الاستقرار والكرامة للعائلات المحتاجة",
      image: "/images/gehalt.jpg",
      category: "دعم العائلات",
      urgent: false
    },
    {
      id: 2, 
      title: "كفالة يتيم",
      description: "دعم طفل يتيم برعاية شهرية تشمل التعليم والرعاية الصحية والملابس والدعم العاطفي من خلال مقدمي رعاية مؤهلين.",
      price: "€13",
      period: "شهرياً",
      beneficiaries: "طفل واحد",
      impact: "يضمن التطور السليم والفرص المستقبلية",
      image: "/images/children.jpg", 
      category: "رعاية الأطفال",
      urgent: true
    },
    {
      id: 3,
      title: "أدوات مدرسية لطفل", 
      description: "تجهيز طفل للسنة الدراسية الجديدة بالأدوات الأساسية: الكتب، الدفاتر، الأقلام، الحقيبة المدرسية، والزي المدرسي.",
      price: "€40",
      period: "مرة واحدة",
      beneficiaries: "طفل واحد",
      impact: "يمكن التعليم ويبني الأمل للمستقبل",
      image: "/images/schule-kind.jpg",
      category: "تعليم",
      urgent: false
    },
    {
      id: 4,
      title: "علاجات طبية",
      description: "تمويل الإجراءات الطبية المنقذة للحياة والعلاجات للذين لا يستطيعون تحمل تكاليف الرعاية الصحية. كل مبلغ يحدث فرقاً.",
      price: "أي مبلغ",
      period: "حسب الحاجة",
      beneficiaries: "يختلف حسب الحالة",
      impact: "ينقذ الأرواح ويمنع المعاناة",
      image: "/images/operation.jpg",
      category: "رعاية صحية", 
      urgent: true
    },
    {
      id: 5,
      title: "بئر مياه",
      description: "توفير الوصول لمياه الشرب النظيفة لمجتمعات كاملة عن طريق تمويل بناء بئر مياه موثوق.",
      price: "€1,000",
      period: "مرة واحدة",
      beneficiaries: "200-300 شخص",
      impact: "وصول طويل الأمد للمياه النظيفة وتحسين الصحة",
      image: "/images/water.jpg",
      category: "بنية تحتية",
      urgent: false
    },
    {
      id: 6,
      title: "معدات طبية",
      description: "شراء أجهزة ومعدات طبية أساسية للمستشفيات والعيادات لتحسين جودة وقدرة الرعاية الصحية.",
      price: "من €6,000",
      period: "مرة واحدة", 
      beneficiaries: "آلاف المرضى",
      impact: "رعاية طبية محسنة وأرواح منقذة",
      image: "/images/operation.jpg",
      category: "رعاية صحية",
      urgent: false
    },
    {
      id: 7,
      title: "تأهيل مدرسة العصافير",
      description: "ترميم كامل لمدرسة العصافير يشمل الإصلاحات الهيكلية والأثاث الجديد والمواد التعليمية وتحسينات السلامة.",
      price: "€5,000",
      period: "مرة واحدة",
      beneficiaries: "+300 طالب",
      impact: "بيئة تعلم حديثة لجيل كامل",
      image: "/images/schule.jpg",
      category: "تعليم",
      urgent: false
    }
  ];

  const majorProjects = [
    {
      id: 8,
      title: "بنية العصافير التحتية المجتمعية", 
      description: "تطوير مجتمعي شامل يشمل الطرق وأنظمة المياه وشبكة الكهرباء والخدمات العامة الأساسية.",
      price: "€400,000",
      timeline: "18-24 شهر",
      beneficiaries: "+5,000 مقيم",
      impact: "تحول مجتمعي كامل وتنمية مستدامة",
      image: "/images/pv-sys.jpg",
      category: "بنية تحتية كبرى"
    },
    {
      id: 9,
      title: "ترميم مستشفى دوما",
      description: "ترميم وتحديث كامل لمستشفى دوما مع معدات جديدة وسعة موسعة ومرافق محسنة.",
      price: "€350,000", 
      timeline: "12-18 شهر",
      beneficiaries: "+50,000 مريض سنوياً",
      impact: "رعاية طبية حديثة للمنطقة",
      image: "/images/douma-hospital-after.jpg",
      category: "بنية تحتية صحية"
    },
    {
      id: 10,
      title: "5 مدارس في دوما",
      description: "بناء وتجهيز كامل لخمس مدارس حديثة لخدمة الاحتياجات التعليمية لأطفال دوما.",
      price: "€250,000",
      timeline: "15-20 شهر", 
      beneficiaries: "+2,000 طالب",
      impact: "أساس تعليم جيد للجيل القادم",
      image: "/images/schule.jpg",
      category: "بنية تحتية تعليمية"
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <PageHeader 
        title="مشاريعنا"
        subtitle="دعم العائلات السورية بشفافية وتأثير - كل تبرع يحدث فرقاً"
      />

      {/* Humanitarian Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              الدعم الإنساني
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مساعدة مباشرة تصل للعائلات فوراً وتخلق تأثيراً دائماً
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {humanitarianProjects.map((project) => (
              <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden group hover:shamsy-shadow-green shamsy-transition h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 shamsy-transition"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-shamsy-primary text-white text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  {project.urgent && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white text-xs animate-pulse">
                        عاجل
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4 md:p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-shamsy-primary shamsy-transition">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-shamsy-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{project.beneficiaries}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-shamsy-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{project.impact}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-shamsy-primary">
                          {project.price}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {project.period}
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition"
                    >
                      <Link to="/ar/donate" className="flex items-center justify-center gap-2">
                        تبرع الآن
                        <Heart className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              مشاريع البنية التحتية الكبرى
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مبادرات واسعة النطاق تحول مجتمعات كاملة وتخلق تغييراً دائماً
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {majorProjects.map((project) => (
              <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden group hover:shamsy-shadow-green shamsy-transition">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 shamsy-transition"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-shamsy-primary text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-shamsy-primary shamsy-transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Euro className="w-5 h-5 text-shamsy-primary" />
                      <span className="text-foreground font-medium">الميزانية: {project.price}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-shamsy-primary" />
                      <span className="text-foreground font-medium">الجدول الزمني: {project.timeline}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-shamsy-primary" />
                      <span className="text-foreground font-medium">المستفيدون: {project.beneficiaries}</span>
                    </div>
                  </div>
                  
                  <div className="bg-shamsy-primary/5 p-4 rounded-lg border border-shamsy-primary/20 mb-6">
                    <h4 className="font-semibold text-shamsy-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      التأثير المتوقع
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {project.impact}
                    </p>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition"
                  >
                    <Link to="/ar/donate" className="flex items-center justify-center gap-2">
                      ادعم هذا المشروع
                      <ArrowLeft className="w-4 h-4" />
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

export default ProjectsAr;