import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Target, Heart } from "lucide-react";

const History = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our History"
        subtitle="From migration to mission - a path full of challenges and hope"
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
                      A Story of Hope
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      ShamSy emerged from the deep desire to never stop helping the people in Syria, despite all adversities. Our story begins with migration, but it ends with a mission of hope and reconstruction.
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
                        The Beginning: Flight from Syria
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We took to the streets for freedom and justice. The answer was: persecution, torture, and bombs. About seven million, a quarter of the population, were forced to flee to safety - some like us to Germany. But our hearts remained in Syria and with those who couldn't escape.
                    </p>
                    <p className="text-foreground font-medium">
                      "Even then we knew: We must help those who couldn't escape. They have nothing else."
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
                        Integration and Network Building
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      While we integrated in Germany and found a new home, 
                      we continuously built networks. We learned life in Germany, studied, worked - and always kept Syria in our hearts.
                    </p>
                    <div className="bg-shamsy-primary/5 p-4 rounded-lg">
                      <p className="text-foreground font-medium">
                        In parallel, we organized the first secret aid campaigns in Syria, despite the danger from Assad's regime.
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
                        Secret Help Despite Danger
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4 break-words">
                      Despite the danger to us and our families, we never stopped helping. Through support for our local partners and NGOs, we were able to provide help where no help was allowed. Many projects and humanitarian aid campaigns were planned and implemented. The most important ones: support for needy families, construction of 15 shelters for displaced families, life-saving operations for war victims, renovation of schools in destroyed neighborhoods, planning of solar energy systems for villages and industry - all in secret, all against the regime's will, all out of love and for justice for an oppressed people.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-shamsy-primary/5 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-shamsy-primary mb-2">15</div>
                        <div className="text-sm text-foreground">Shelters built</div>
                      </div>
                      <div className="bg-shamsy-primary/5 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-shamsy-primary mb-2">50+</div>
                        <div className="text-sm text-foreground">Medical operations</div>
                      </div>
                      <div className="bg-shamsy-primary/5 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-shamsy-primary mb-2">8</div>
                        <div className="text-sm text-foreground">Schools renovated</div>
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
                        2025-Today
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Liberation after 55 years! ShamSy becomes official
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      After more than half a century of dictatorship, Syria is finally free. For the first time we can live without fear, help without hiding, rebuild without corruption. A new chapter begins for our beloved but exploited country. A decisive chapter for Syria's future, but this time we can all participate in shaping it.
ShamSy is now officially registered as an NGO - in Germany and in Syria. What happened in the shadows and through third parties, we now continue officially. Through our years in Syria and in Germany, we have built diverse expertise and extensive networks. With this we sustainably rebuild our country for everyone. We carry the hope of an entire generation!
                    </p>
                    
                    <div className="bg-gradient-to-r from-shamsy-primary/10 to-shamsy-light/10 p-6 rounded-lg border border-shamsy-primary/20">
                      <h4 className="text-xl font-semibold text-shamsy-primary mb-3">
                        Our vision for free Syria:
                      </h4>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          Sustainable energy projects for reconstruction
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          Educational infrastructure for a new generation
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          Healthcare system according to today's standards
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-shamsy-primary rounded-full"></div>
                          Bridge between diaspora and homeland
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
                Today: Free, open, full of hope
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                After 14 years in the shadows, we can finally do what we always wanted: 
                <strong className="text-shamsy-primary"> help Syria rebuild - openly, professionally, and sustainably.</strong>
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