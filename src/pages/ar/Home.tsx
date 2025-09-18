import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Globe, 
  ArrowLeft, 
  Star,
  Building,
  GraduationCap,
  Stethoscope,
  Home as HomeIcon,
  Shield
} from "lucide-react";

const HomeAr = () => {
  const impactStats = {
    peopleHelped: "+3000",
    projectsCompleted: 25,
    partnersActive: 8,
    countriesReached: 3
  };

  const featuredProjects = [
    {
      id: 1,
      title: "بناء ملاجئ طوارئ",
      description: "بناء مساكن آمنة للعائلات النازحة في شمال سوريا",
      beneficiaries: "+500 عائلة",
      status: "نشط",
      image: "/images/hero-destruction.jpg",
      icon: HomeIcon,
      category: "إسكان"
    },
    {
      id: 2,
      title: "دعم المعدات الطبية", 
      description: "توفير الأجهزة الطبية والأدوات الجراحية الأساسية",
      beneficiaries: "+10000 مريض",
      status: "نشط",
      image: "/images/operation.jpg",
      icon: Stethoscope,
      category: "رعاية صحية"
    },
    {
      id: 3,
      title: "تأهيل المدارس",
      description: "ترميم وتجهيز المدارس لتعليم الأطفال",
      beneficiaries: "+2400 طالب",
      status: "نشط", 
      image: "/images/schule.jpg",
      icon: GraduationCap,
      category: "تعليم"
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 shamsy-bg-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                  إعادة بناء <span className="text-shamsy-primary font-semibold">سوريا</span>
                  <br />معًا
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  دعم الشعب السوري في رحلته نحو الحرية والكرامة والأمل. 
                  كل مساهمة تحدث فرقًا.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green text-lg px-8 py-6"
                >
                  <Link to="/ar/donate" className="flex items-center gap-2">
                    تبرع الآن
                    <Heart className="w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-shamsy-primary text-shamsy-primary hover:bg-shamsy-primary hover:text-white shamsy-transition text-lg px-8 py-6"
                >
                  <Link to="/ar/projects" className="flex items-center gap-2">
                    عرض المشاريع
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shamsy-shadow-green">
                <img 
                  src="/images/hero-destruction.jpg" 
                  alt="جهود إعادة الإعمار السوري"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shamsy-shadow-green">
                <div className="text-center">
                  <div className="text-3xl font-bold text-shamsy-primary mb-1">
                    {impactStats.peopleHelped}
                  </div>
                  <div className="text-sm text-muted-foreground">شخص تم مساعدتهم</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              إنجازاتنا حتى الآن
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              معًا حققنا نتائج رائعة في دعم المجتمعات السورية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="shamsy-card border-shamsy-primary/20 text-center group hover:shamsy-shadow-green shamsy-transition">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-shamsy-primary mx-auto mb-4 group-hover:scale-110 shamsy-transition" />
                <div className="text-4xl font-bold text-shamsy-primary mb-2">
                  {impactStats.peopleHelped}
                </div>
                <div className="text-muted-foreground">شخص تم مساعدتهم</div>
              </CardContent>
            </Card>

            <Card className="shamsy-card border-shamsy-primary/20 text-center group hover:shamsy-shadow-green shamsy-transition">
              <CardContent className="p-8">
                <Building className="w-12 h-12 text-shamsy-primary mx-auto mb-4 group-hover:scale-110 shamsy-transition" />
                <div className="text-4xl font-bold text-shamsy-primary mb-2">
                  {impactStats.projectsCompleted}
                </div>
                <div className="text-muted-foreground">مشروع مكتمل</div>
              </CardContent>
            </Card>

            <Card className="shamsy-card border-shamsy-primary/20 text-center group hover:shamsy-shadow-green shamsy-transition">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-shamsy-primary mx-auto mb-4 group-hover:scale-110 shamsy-transition" />
                <div className="text-4xl font-bold text-shamsy-primary mb-2">
                  {impactStats.partnersActive}
                </div>
                <div className="text-muted-foreground">شريك نشط</div>
              </CardContent>
            </Card>

            <Card className="shamsy-card border-shamsy-primary/20 text-center group hover:shamsy-shadow-green shamsy-transition">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-shamsy-primary mx-auto mb-4 group-hover:scale-110 shamsy-transition" />
                <div className="text-4xl font-bold text-shamsy-primary mb-2">
                  {impactStats.countriesReached}
                </div>
                <div className="text-muted-foreground">دولة تم الوصول إليها</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              المشاريع الحالية
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              انظر كيف يحدث دعمك تأثيرًا مباشرًا على المجتمعات السورية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden group hover:shamsy-shadow-green shamsy-transition">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 shamsy-transition"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-shamsy-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-shamsy-primary" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-shamsy-primary shamsy-transition">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-shamsy-primary font-medium">
                        {project.beneficiaries}
                      </span>
                      <Button variant="ghost" size="sm" className="text-shamsy-primary hover:text-shamsy-dark">
                        اعرف المزيد
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg"
              className="bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
            >
              <Link to="/ar/projects" className="flex items-center gap-2">
                عرض جميع المشاريع
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="shamsy-card border-shamsy-primary/20 max-w-4xl mx-auto text-center">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-shamsy-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-shamsy-primary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                كل تبرع مهم
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                دعمك يؤثر بشكل مباشر على العائلات السورية التي تعيد بناء حياتها. 
                انضم إلينا في خلق تغيير دائم وأمل لمستقبل أكثر إشراقًا.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
                >
                  <Link to="/ar/donate" className="flex items-center gap-2">
                    تبرع الآن
                    <Heart className="w-5 h-5" />
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
                    <Users className="w-5 h-5" />
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

export default HomeAr;