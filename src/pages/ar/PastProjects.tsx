import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Heart, 
  GraduationCap, 
  Users, 
  ShieldCheck,
  AlertTriangle,
  Star
} from "lucide-react";

const PastProjects = () => {
  const pastProjects = [
    {
      id: 1,
      title: "تجديد وتجهيز المدارس",
      category: "التعليم",
      location: "دير العصافير، ريف دمشق",
      year: "2022-2024",
      description: "تم تمكين إعادة فتح مدرسة متضررة من الحرب من خلال تعبئة المتطوعين وإصلاح البنية التحتية واستعادة مساحات التعلم الآمنة. معاً، أعدنا للأطفال مستقبلهم - مكان يمكن للأمل والتعليم أن يزدهرا فيه مرة أخرى.",
      beneficiaries: "400 طالب",
      cost: "20,000 يورو",
      challenges: "شراء المواد، النقل إلى مناطق غير آمنة، التنسيق مع الشركاء المحليين تحت السرية",
      impact: "ظروف تعلم أفضل لجيل كامل",
      icon: GraduationCap,
      status: "اكتمل بنجاح",
      image: "/shamsy/images/kindergruppe.jpg"
    },
    {
      id: 2,
      title: "بناء 15 مأوى طوارئ",
      category: "المأوى",
      location: "الغوطة الشرقية",
      year: "2011-2024",
      description: "تم بناء 15 مأوى مقاوم للعائلات التي فقدت منازلها بسبب الحرب في ريف دمشق - من التخطيط إلى البناء حتى التأثيث الكامل. مع منظماتنا الشريكة المحلية، ضمنت عمليتنا الشفافة للاختيار وصول المساعدة للعائلات التي تحتاجها بشدة.",
      beneficiaries: "120 عائلة",
      cost: "200,000 يورو",
      challenges: "نقل المواد تحت ظروف الحرب، سلامة فرق البناء، السرية من النظام",
      impact: "أكثر من 500 شخص حصلوا على سكن آمن",
      icon: Home,
      status: "اكتمل بنجاح",
      image: "/shamsy/images/hero-destruction.jpg"
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <PageHeader 
        title="المشاريع السابقة"
        subtitle="نجاحاتنا قبل التحرير - المساعدة رغم الخوف والاضطهاد"
      />

      {/* Warning Banner */}
      <section className="py-8 md:py-12 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <Card className="border-orange-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold text-orange-800 mb-2 md:mb-3">
                    المساعدة تحت ظروف قاسية
                  </h3>
                  <p className="text-orange-700 leading-relaxed text-sm md:text-lg">
                    <strong>جميع المشاريع قبل 2024 تم تنفيذها تحت ديكتاتورية الأسد.</strong> 
                    هذا يعني: خوف مستمر من الاضطهاد، السرية لحماية عائلاتنا في سوريا، وتحديات لوجستية هائلة. كل مشروع كان مخاطرة - لكن أيضاً عمل أمل.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {pastProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.id} className="shamsy-card border-shamsy-primary/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      {/* Project Image */}
                      <div className="relative h-48 md:h-64 lg:h-auto">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 md:top-4 right-2 md:right-4">
                          <Badge className="bg-shamsy-primary text-white text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="absolute top-2 md:top-4 left-2 md:left-4">
                          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs">
                            {project.year}
                          </Badge>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="lg:col-span-2 p-4 md:p-8">
                        <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-shamsy-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-shamsy-primary" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-2">
                              {project.title}
                            </h3>
                            <div className="flex flex-col gap-1 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                              <span>{project.location}</span>
                              <span>{project.beneficiaries} مستفيد</span>
                              <span>{project.cost} مستثمر</span>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              {project.status}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-lg">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastProjects;