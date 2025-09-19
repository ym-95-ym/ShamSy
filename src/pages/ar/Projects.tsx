import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

const Projects = () => {
  // Smaller humanitarian projects
  const humanitarianProjects = [
    {
      id: 1,
      category: "إنساني",
      title: "إهداء راتب شهري لعائلة محتاجة",
      price: "80 € - مرة واحدة",
      description: "نعم! الرواتب في سوريا منخفضة جداً فعلاً، رغم الزيادة الأخيرة منذ ديسمبر 2024. لكن البضائع والمواد الغذائية الأساسية ليست كذلك. حتى في عدة أماكن مثل ألمانيا! بمبلغ ليس مرتفعاً جداً بالنسبة لألمانيا، يمكنك مضاعفة إمكانيات عائلة محتاجة لشهر واحد.",
      icon: Heart,
      image: "/shamsy/images/gehalt.jpg"
    },
    {
      id: 2,
      category: "إنساني", 
      title: "كفالة يتيم - عام من الطعام والتعليم",
      price: "13 € شهرياً",
      description: "تمويل تكاليف المعيشة والتعليم لطفل يتيم في سوريا. من خلال التواصل المباشر مع شركائنا المحليين، يمكننا ضمان أقصى شفافية والتأكد من وصول المال إلى الأماكن الصحيحة.",
      icon: Heart,
      image: "/shamsy/images/children.jpg"
    },
    {
      id: 3,
      category: "إنساني",
      title: "تمكين بداية مدرسية جميلة لطفل", 
      price: "40 € - مرة واحدة",
      description: "توفير الملابس والحقيبة المدرسية والدفاتر والأقلام وأكثر لبداية مدرسية مناسبة، حتى يتمكن الأطفال في سوريا من التطلع إلى العام بأمل.",
      icon: GraduationCap,
      image: "/shamsy/images/kindergruppe.jpg"
    },
    {
      id: 4,
      category: "إنساني",
      title: "تمويل العلاج الطبي",
      price: "أي مبلغ", 
      description: "تمكين العلاج الطبي أو الجراحة لشخص محتاج! هناك العديد من الأشخاص في دمشق والمناطق المحيطة بدون مال للعلاج الطبي. لا يوجد تأمين أيضاً. يمكنك التبرع بأي مبلغ لنا وسنضمن دفع العلاج الطبي/الجراحة به. مساهمتك يمكن أن تنقذ الأرواح.",
      icon: Heart,
      image: "/shamsy/images/operation.jpg"
    },
    {
      id: 5,
      category: "إنساني",
      title: "شراء بئر مياه شرب للقرية",
      price: "1.000 € (التبرعات الجزئية ممكنة!)",
      description: "شراء وتركيب بئر مياه شرب لقرية صغيرة، مهم بشكل خاص للحرارة الشديدة بسبب تغير المناخ ونقص فرص الشرب في سوريا.",
      icon: Users,
      image: "/shamsy/images/water.jpg"
    },
    {
      id: 6,
      category: "إنساني",
      title: "شراء معدات طبية للمستشفيات",
      price: "أي مبلغ - للمعدات من 6.000 € (التبرعات الجزئية ممكنة!)",
      description: "لدينا عروض عديدة من المستشفيات والمنظمات غير الحكومية الشريكة لمعدات طبية متنوعة مفقودة في إعادة تأهيل المستشفيات المدمرة. تشمل معدات التصوير (CT، الأشعة السينية، أشعة الصدر، ECG) للعيادات التي تخدم ملايين الأشخاص (دوما، ابن النفيس، قطنا، وأكثر).",
      icon: Heart,
      image: "/shamsy/images/operation.jpg"
    },
    {
      id: 7,
      category: "تعليم",
      title: "إعادة تأهيل المدرسة - دير العصافير",
      price: "5.000 € (التبرعات الجزئية ممكنة!)",
      description: "دعم وتدريب الكادر التعليمي، تجديد وإصلاح المدرسة وضمان إمدادها.",
      icon: GraduationCap,
      image: "/shamsy/images/schule-kind.jpg"
    }
  ];

  // Major projects for sponsors and crowdfunding
  const majorProjects = [
    {
      id: 1,
      category: "الطاقة والتعليم",
      title: "البنية التحتية المجتمعية دير العصافير",
      price: "400.000 €",
      description: "نظام شمسي بقوة 250 كيلو واط لمدرسة ريفية ومركز زراعي ومنازل سكنية. أكثر من 10.000 شخص و500 طالب و50 مشروع زراعي يحصلون على كهرباء مستقرة للتعليم والإنتاج.",
      icon: Zap,
      image: "/shamsy/images/pv-sys.jpg",
      stats: [
        { number: "10.000", label: "شخص يحصل على الكهرباء" },
        { number: "500+", label: "طالب يحصل على الكهرباء" },
        { number: ">50", label: "مشروع زراعي يحصل على الكهرباء" }
      ]
    },
    {
      id: 2,
      category: "صحة",
      title: "تجديد مستشفى دوما الوطني",
      price: "350.000 €",
      description: "استعادة جزء من قدرات مستشفى يخدم أكثر من مليون مريض سنوياً. المستشفى، الموثق بلقطات الطائرة المسيرة بعد 12.2024، تم قصفه بالكامل من قبل النظام القديم. منظمتنا الشريكة غير الحكومية (الصحة الخيرية) في دوما أنشأت عيادة متعددة التخصصات بعد الدمار وتريد الاستمرار في بنائها وإعادة تأهيلها إلى مستشفى. اليوم نريد دعم إعادة البناء ونخطط لشراء معدات طبية مثل ماسح CT ونظام شمسي متكامل بالكامل.",
      icon: Heart,
      image: "/shamsy/images/douma-hospital-after.jpg",
      stats: [
        { number: "1 مليون+", label: "مريض/سنة" },
        { number: "100%", label: "ضروري" },
        { number: "100%", label: "مستدام" }
      ]
    },
    {
      id: 3,
      category: "تعليم",
      title: "تجديد 5 مدارس في دوما", 
      price: "250.000 €",
      description: "تجديد المدارس إلى معايير آمنة وعالية الجودة. أكثر من 3000 طالب يحصلون على بيئات تعليمية محسنة مع فصول دراسية حديثة ومرافق صحية ووصول خالٍ من الحواجز.",
      icon: GraduationCap,
      image: "/shamsy/images/schule.jpg",
      stats: [
        { number: "3000+", label: "طالب" },
        { number: "5", label: "مدارس" },
        { number: "100%", label: "مضمون للمستقبل" }
      ]
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <PageHeader 
        title="المشاريع الحالية"
        subtitle="الطاقة، التعليم، الصحة - مبادراتنا الجارية لإعادة الإعمار المستدام"
      />

      {/* Overview Stats */}
      <section className="py-16 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-shamsy-primary mb-2">{humanitarianProjects.length + majorProjects.length}</div>
                <div className="text-sm text-muted-foreground">المشاريع الحالية</div>
              </CardContent>
            </Card>
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-shamsy-primary mb-2">1 مليون+</div>
                <div className="text-sm text-muted-foreground">شخص للمساعدة</div>
              </CardContent>
            </Card>
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-shamsy-primary mb-2">من 17 € شهرياً</div>
                <div className="text-sm text-muted-foreground">دعم يتيم</div>
              </CardContent>
            </Card>
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-shamsy-primary mb-2">80 €</div>
                <div className="text-sm text-muted-foreground">دعم عائلة</div>
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
              المشاريع الإنسانية
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مساعدة مباشرة للأشخاص المحتاجين - كل مساهمة تصل إلى وجهتها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        المصدر: أرشيف شمس سوريا
                      </div>
                      <div className="absolute top-4 right-4 bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
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

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                        {project.description}
                      </p>

                      <Button 
                        asChild 
                        className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
                      >
                        <Link to="/ar/donate" className="flex items-center justify-center gap-2">
                          دعم المشروع
                          <ArrowRight className="w-4 h-4 rotate-180" />
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
              المشاريع الكبرى: للرعاة والتمويل الجماعي
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              التبرعات الجزئية ممكنة! مشاريع البنية التحتية المستدامة ذات التأثير الكبير
            </p>
          </div>

          <div className="space-y-12">
            {majorProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden hover:shadow-2xl shamsy-transition group">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative h-80 lg:h-auto">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 shamsy-transition"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                          المصدر: أرشيف شمس سوريا
                        </div>
                        <div className="absolute top-4 right-4 bg-shamsy-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {project.category}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent lg:bg-gradient-to-t lg:from-black/50 lg:via-transparent lg:to-transparent" />
                      </div>

                      <div className="p-8 lg:p-10 flex flex-col justify-between">
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

                          {project.stats && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                              {project.stats.map((stat, index) => (
                                <div key={index} className="shamsy-card border-shamsy-primary/20 text-center p-6 hover:bg-shamsy-primary/5 shamsy-transition">
                                  <div className="text-3xl font-bold text-shamsy-primary mb-2">
                                    {stat.number}
                                  </div>
                                  <div className="text-sm text-muted-foreground leading-tight">
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
                            <Link to="/ar/donate" className="flex items-center justify-center gap-2">
                              دعم المشروع
                              <ArrowRight className="w-5 h-5 rotate-180" />
                            </Link>
                          </Button>
                          <Button 
                            asChild 
                            variant="outline"
                            size="lg"
                            className="w-full border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white shamsy-transition"
                          >
                            <Link to="/ar/get-involved" className="flex items-center justify-center gap-2">
                              تعرف على المزيد
                              <ArrowRight className="w-5 h-5 rotate-180" />
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
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                كن جزءاً من مهمتنا
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                كل مساهمة تساعدنا في إعادة بناء سوريا خطوة بخطوة. 
                ادعم مشاريعنا وكن جزءاً من الحل.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
                >
                  <Link to="/ar/donate" className="flex items-center gap-2">
                    تبرع الآن
                    <ArrowRight className="w-5 h-5 rotate-180" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white shamsy-transition"
                >
                  <Link to="/ar/get-involved" className="flex items-center gap-2">
                    شارك معنا
                    <ArrowRight className="w-5 h-5 rotate-180" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
 
export default Projects;