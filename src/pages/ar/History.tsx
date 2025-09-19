import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Target, Heart } from "lucide-react";

const History = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <PageHeader 
        title="تاريخنا"
        subtitle="من الهجرة إلى المهمة - طريق مليء بالتحديات والأمل"
      />
 
      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <Card className="shamsy-card border-shamsy-primary/20 mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Heart className="w-8 h-8 text-shamsy-primary mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      قصة أمل
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      نشأت شمس سوريا من الرغبة العميقة في عدم التوقف أبداً عن مساعدة الشعب في سوريا، رغم كل المحن. قصتنا تبدأ بالهجرة، لكنها تنتهي بمهمة أمل وإعادة إعمار.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              
              {/* 2011 - The Beginning */}
              <div className="flex gap-4 md:gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-shamsy-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 md:w-8 md:h-8 text-shamsy-primary" />
                </div>
                <Card className="shamsy-card border-shamsy-primary/20 flex-grow">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        2011-2015
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        البداية: الهجرة من سوريا
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      نزلنا إلى الشوارع من أجل الحرية والعدالة. كان الجواب: الاضطهاد والتعذيب والقنابل. حوالي سبعة ملايين، ربع السكان، اضطروا للفرار إلى الأمان - بعضهم مثلنا إلى ألمانيا. لكن قلوبنا بقيت في سوريا ومع الذين لم يستطيعوا الهرب.
                    </p>
                    <p className="text-foreground font-medium">
                      "حتى في ذلك الوقت كنا نعلم: يجب أن نساعد الذين لم يستطيعوا الهرب. ليس لديهم شيء آخر."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2012-2020 - Building in Germany */}
              <div className="flex gap-4 md:gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-shamsy-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 md:w-8 md:h-8 text-shamsy-primary" />
                </div>
                <Card className="shamsy-card border-shamsy-primary/20 flex-grow">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        2015-2019
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        الاندماج وبناء الشبكات
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      بينما كنا ندمج في ألمانيا ونجد وطناً جديداً، 
                      كنا نبني الشبكات باستمرار. تعلمنا الحياة في ألمانيا، درسنا، عملنا - وأبقينا سوريا دائماً في قلوبنا.
                    </p>
                    <div className="bg-shamsy-primary/5 p-4 rounded-lg">
                      <p className="text-foreground font-medium">
                        بالتوازي، نظمنا في السر حملات مساعدات أولى في سوريا، رغم الخطر من نظام الأسد.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 2020-2024 - Secret Help */}
              <div className="flex gap-4 md:gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-shamsy-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 md:w-8 md:h-8 text-shamsy-primary" />
                </div>
                <Card className="shamsy-card border-shamsy-primary/20 flex-grow">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-shamsy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        2011-2024
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        المساعدة السرية رغم الخطر
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      رغم الخطر علينا وعلى عائلاتنا، لم نتوقف أبداً عن المساعدة. من خلال دعم شركائنا المحليين والمنظمات غير الحكومية، تمكنا من تقديم المساعدة حيث لم يُسمح بأي مساعدة. تم التخطيط وتنفيذ العديد من المشاريع وحملات المساعدات الإنسانية. الأهم منها: دعم العائلات المحتاجة، بناء 15 مأوى للعائلات المهجرة، عمليات منقذة للحياة لضحايا الحرب، تجديد المدارس في الأحياء المدمرة، التخطيط لأنظمة طاقة شمسية للقرى والصناعة - كله في السر، كله ضد إرادة النظام، كله من الحب ومن أجل العدالة لشعب مضطهد.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-shamsy-primary/5 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-shamsy-primary mb-2">15</div>
                        <div className="text-sm text-foreground">مأوى تم بناؤه</div>
                      </div>
                      <div className="bg-shamsy-primary/5 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-shamsy-primary mb-2">50+</div>
                        <div className="text-sm text-foreground">عمليات طبية</div>
                      </div>
                      <div className="bg-shamsy-primary/5 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-shamsy-primary mb-2">8</div>
                        <div className="text-sm text-foreground">مدارس تم تجديدها</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 2025 - Liberation */}
              <div className="flex gap-4 md:gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-shamsy-light/20 rounded-full flex items-center justify-center ring-2 md:ring-4 ring-shamsy-light/30">
                  <Heart className="w-5 h-5 md:w-8 md:h-8 text-shamsy-primary" />
                </div>
                <Card className="shamsy-card border-shamsy-light/30 flex-grow shadow-2xl">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gradient-to-r from-shamsy-primary to-shamsy-light text-white px-4 py-2 rounded-full text-sm font-semibold">
                        2025-اليوم
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        التحرير بعد 55 عاماً! شمس سوريا تصبح رسمية
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      بعد أكثر من نصف قرن من الديكتاتورية، سوريا حرة أخيراً. لأول مرة يمكننا العيش دون خوف، المساعدة دون اختباء، إعادة الإعمار دون فساد. فصل جديد يبدأ لبلدنا المحبوب لكن المستغل. فصل حاسم لمستقبل سوريا، لكن هذه المرة يمكننا جميعاً المشاركة في تشكيله.
شمس سوريا مسجلة الآن رسمياً كمنظمة غير حكومية - في ألمانيا وفي سوريا. ما كان يحدث في الظلال وعبر طرف ثالث، نواصله الآن رسمياً. من خلال سنواتنا في سوريا وفي ألمانيا، أسسنا خبرة متنوعة وشبكات واسعة. بهذا نعيد بناء بلدنا بشكل مستدام وللجميع. نحمل أمل جيل كامل!
                    </p>
                    
                    <div className="bg-gradient-to-r from-shamsy-primary/10 to-shamsy-light/10 p-6 rounded-lg border border-shamsy-primary/20">
                      <h4 className="text-xl font-semibold text-shamsy-primary mb-3">
                        رؤيتنا لسوريا الحرة:
                      </h4>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          مشاريع طاقة مستدامة لإعادة الإعمار
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          البنية التحتية التعليمية لجيل جديد
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          نظام صحي وفق معايير اليوم
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          جسر بين الشتات والوطن
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4 text-center">
          <Card className="shamsy-card border-shamsy-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-6 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                اليوم: أحرار، منفتحون، مفعمون بالأمل
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                بعد 14 عاماً في الظلال، يمكننا أخيراً فعل ما أردناه دائماً: 
                <strong className="text-shamsy-primary"> مساعدة سوريا في إعادة الإعمار - بانفتاح ومهنية واستدامة.</strong>
              </p>
              <div className="w-24 h-1 bg-shamsy-primary mx-auto rounded-full"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
 
export default History;