import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/shamsy/images/hero-destruction.jpg" 
            alt="الدمار في سوريا - أرشيف شمس سوريا"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            المصدر: أرشيف شمس سوريا
          </div>
        </div>
        
        {/* Green Overlay */}
        <div className="absolute inset-0 shamsy-hero-gradient" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light mb-8 text-white drop-shadow-lg tracking-tight leading-tight">
              شمس سوريا
            </h1>
            
            <div className="space-y-6 mb-12 text-lg md:text-xl leading-relaxed drop-shadow-md">
              <p>
                سوريا بلد مليء بالندوب من <strong>14 عاماً من الحرب، 55 عاماً من الديكتاتورية،</strong> ونقص في أهم ضروريات الحياة.
              </p>
              
              <p>
                لكن رغم كل هذا الظلام، هناك أمل: أناس بقوا. أناس يعودون. 
                أناس مثلنا <strong>يبنون جسوراً بين العالم وسوريا المدمرة</strong>.<br/>
                ندعم من ألمانيا، حيث نسميها أيضاً وطننا.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild 
                size="lg"
                className="bg-shamsy-dark hover:bg-shamsy-primary shamsy-transition text-lg px-8 py-6 shamsy-shadow-green"
              >
                <Link to="/ar/projects" className="flex items-center gap-2">
                  مشاريعنا
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-white/20 border-white/80 text-white hover:bg-white/30 hover:border-white backdrop-blur-sm text-lg px-8 py-6"
              >
                <Link to="/ar/get-involved" className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  ساعد الآن
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
            "كـ<strong className="text-shamsy-primary">سوريين</strong>، يمكننا ضمان نجاح المشاريع ذات الصلة وتنفيذها بسرعة من خلال <strong className="text-shamsy-primary">شبكاتنا الموجودة</strong>.<br/>
            كـ<strong className="text-shamsy-primary">ألمان</strong>، يمكننا تصميم المشاريع <strong className="text-shamsy-primary">بشكل مستدام ومعاصر</strong> وبناء جسر للاندماج والتعاون."
          </blockquote>
          <cite className="text-xl md:text-2xl font-semibold text-shamsy-primary">
            — فريق شمس سوريا
          </cite>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              اكتشف شمس سوريا
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              تعرف على المزيد حول مهمتنا ومشاريعنا وكيف يمكنك المساعدة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "تاريخنا",
                description: "من الهجرة في 2011 إلى المهمة الرسمية في 2025. تعلم كيف لم نتوقف أبداً عن المساعدة رغم الخطر ويمكننا الآن أخيراً التصرف بحرية.",
                link: "/ar/history",
                buttonText: "اقرأ التاريخ"
              },
              {
                title: "المشاريع الحالية", 
                description: "الطاقة، التعليم، الصحة - مشاريعنا الجارية لإعادة الإعمار المستدام. من المشاريع الصغيرة إلى البنية التحتية الكبرى.",
                link: "/ar/projects",
                buttonText: "شاهد المشاريع"
              },
              {
                title: "النجاحات السابقة",
                description: "15 مأوى، عمليات طبية، تجديد المدارس - نجاحاتنا قبل التحرير، رغم الخوف والاضطهاد.",
                link: "/ar/past-projects", 
                buttonText: "اكتشف النجاحات"
              },
              {
                title: "شارك الآن",
                description: "كن جزءاً من مهمتنا. كعضو أو مانح أو مؤيد - كل مساعدة تقرب سوريا من إعادة إعمارها.",
                link: "/ar/get-involved",
                buttonText: "ساعد الآن"
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
                      <ArrowRight className="w-4 h-4 rotate-180" />
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