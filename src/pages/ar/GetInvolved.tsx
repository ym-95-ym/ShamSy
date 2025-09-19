import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Handshake, 
  Gift, 
  ArrowRight, 
  CheckCircle,
  Star,
  Euro,
  UserPlus,
  Megaphone
} from "lucide-react";

const GetInvolved = () => {
  const supportOptions = [
    {
      id: 1,
      title: "التبرعات",
      subtitle: "الدعم المالي المباشر",
      icon: Heart,
      color: "shamsy-primary",
      description: "تبرعكم يصل 100% إلى الأيدي الصحيحة. يمكنكم أيضاً التبرع مباشرة لمشروع محدد. كل يورو يساعد في إعادة إعمار سوريا.",
      benefits: [
        "استخدام شفاف لتبرعكم",
        "تحديثات منتظمة حول تقدم المشاريع", 
        "إيصال تبرع للوفورات الضريبية",
        "دعوة لفعاليات المتبرعين الحصرية"
      ],
      cta: "تبرع الآن",
      ctaLink: "/ar/donate"
    },
    {
      id: 2,
      title: "عضوية الجمعية",
      subtitle: "المشاركة الفعالة واتخاذ القرارات",
      icon: Users,
      color: "shamsy-light",
      description: "كعضو في الجمعية، لديكم حق التصويت في القرارات المهمة وتشكيل مستقبل شمس سوريا بفعالية.",
      benefits: [
        "حق التصويت في اجتماعات الجمعية",
        "المشاركة في تشكيل استراتيجية المشاريع",
        "وصول حصري لاجتماعات الأعضاء",
        "التواصل مع أشخاص متشابهين في التفكير",
        "ابتداءً من 5 يورو شهرياً"
      ],
      cta: "كن عضواً",
      ctaLink: "/ar/donate"
    },
    {
      id: 3,
      title: "العمل التطوعي",
      subtitle: "استخدام الوقت والمهارات",
      icon: Handshake,
      color: "shamsy-dark", 
      description: "اجلبوا خبرتكم - سواء كان في التسويق أو التكنولوجيا أو التنظيم أو إدارة المشاريع.",
      benefits: [
        "إدارة مرنة للوقت",
        "عن بُعد أو في الموقع",
        "فرص التعليم المستمر",
        "اكتساب خبرة مشاريع دولية",
        "تأثير مباشر على المشاريع"
      ],
      cta: "تواصل معنا",
      ctaLink: "mailto:info.shamsyr@gmail.com"
    },
    {
      id: 4,
      title: "الشراكات مع الشركات",
      subtitle: "المسؤولية الاجتماعية للشركات",
      icon: Gift,
      color: "shamsy-glow",
      description: "يمكن لشركتكم تقديم مساهمة قيمة من خلال التعاون أو الرعاية أو الخدمات المجانية.",
      benefits: [
        "سمعة إيجابية للشركة",
        "إمكانية تقارير المسؤولية الاجتماعية",
        "تعاون تسويقي",
        "بناء الفريق من خلال المشاريع الخيرية",
        "مزايا ضريبية"
      ],
      cta: "طلب شراكة",
      ctaLink: "mailto:info.shamsyr@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <PageHeader 
        title="شارك معنا"
        subtitle="كن جزءاً من مهمتنا لإعادة إعمار سوريا"
      />

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              كيف يمكنك المساعدة
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              اختر نوع الدعم الذي يناسبك أكثر
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <Card key={option.id} className="shamsy-card border-shamsy-primary/20 hover:shadow-xl shamsy-transition group">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 bg-${option.color}/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 shamsy-transition`}>
                        <IconComponent className={`w-8 h-8 text-${option.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-shamsy-primary shamsy-transition">
                          {option.title}
                        </h3>
                        <p className="text-shamsy-primary font-medium">
                          {option.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {option.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-shamsy-primary" />
                        مزاياكم:
                      </h4>
                      <ul className="space-y-2">
                        {option.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-shamsy-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      asChild 
                      className="bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition group-hover:shamsy-shadow-green w-full"
                    >
                      {option.ctaLink.startsWith('mailto:') ? (
                        <a href={option.ctaLink} className="flex items-center justify-center gap-2 w-full">
                          <span className="truncate">{option.cta}</span>
                          <ArrowRight className="w-4 h-4 flex-shrink-0" />
                        </a>
                      ) : (
                        <Link to={option.ctaLink} className="flex items-center justify-center gap-2 w-full">
                          <span className="truncate">{option.cta}</span>
                          <ArrowRight className="w-4 h-4 flex-shrink-0" />
                        </Link>
                      )}
                    </Button>
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
 
export default GetInvolved;