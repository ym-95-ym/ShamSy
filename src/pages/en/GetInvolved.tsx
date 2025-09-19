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
      title: "Donations",
      subtitle: "Direct financial support",
      icon: Heart,
      color: "shamsy-primary",
      description: "Your donation flows 100% into the right hands. You can also donate directly for a project. Every euro helps with Syria's reconstruction.",
      benefits: [
        "Transparent use of your donation",
        "Regular updates on project progress", 
        "Donation receipt for tax savings",
        "Invitation to exclusive donor events"
      ],
      cta: "Donate Now",
      ctaLink: "/en/donate"
    },
    {
      id: 2,
      title: "Association Membership",
      subtitle: "Actively participate and decide",
      icon: Users,
      color: "shamsy-light",
      description: "As an association member, you have a say in important decisions and actively shape ShamSy's future.",
      benefits: [
        "Voting rights at association meetings",
        "Co-design of project strategy",
        "Exclusive access to member meetings",
        "Networking with like-minded people",
        "Starting from €5/month possible"
      ],
      cta: "Become a Member",
      ctaLink: "/en/donate"
    },
    {
      id: 3,
      title: "Volunteer Work",
      subtitle: "Use time and skills",
      icon: Handshake,
      color: "shamsy-dark", 
      description: "Bring in your expertise - whether marketing, technology, organization or project management.",
      benefits: [
        "Flexible time management",
        "Remote or on-site possible",
        "Further education opportunities",
        "Gain international project experience",
        "Have direct impact on projects"
      ],
      cta: "Get in Touch",
      ctaLink: "mailto:info.shamsyr@gmail.com"
    },
    {
      id: 4,
      title: "Corporate Partnerships",
      subtitle: "Corporate Social Responsibility",
      icon: Gift,
      color: "shamsy-glow",
      description: "Your company can make a valuable contribution through cooperation, sponsoring or pro-bono services.",
      benefits: [
        "Positive corporate reputation",
        "CSR reporting possible",
        "Marketing cooperations",
        "Team building through charitable projects",
        "Tax advantages"
      ],
      cta: "Request Partnership",
      ctaLink: "mailto:info.shamsyr@gmail.com"
    }
  ];

  const currentStats = {
    totalDonated: "€300,000",
    activeMembers: 10,
    volunteers: 10,
    partnerships: 1
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Get Involved"
        subtitle="Become part of our mission for Syria's reconstruction"
      />

      {/* Current Impact Stats */}
      <section className="py-16 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Achieved Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Thanks to our supporters, we have already made a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <Euro className="w-12 h-12 text-shamsy-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-shamsy-primary mb-2">
                  {currentStats.totalDonated}
                </div>
                <div className="text-sm text-muted-foreground">Donation funds deployed with our partners</div>
              </CardContent>
            </Card>

            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <UserPlus className="w-12 h-12 text-shamsy-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-shamsy-primary mb-2">
                  {currentStats.activeMembers}
                </div>
                <div className="text-sm text-muted-foreground">Active members</div>
              </CardContent>
            </Card>

            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <Handshake className="w-12 h-12 text-shamsy-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-shamsy-primary mb-2">
                  {currentStats.volunteers}
                </div>
                <div className="text-sm text-muted-foreground">Volunteer helpers</div>
              </CardContent>
            </Card>

            <Card className="shamsy-card border-shamsy-primary/20 text-center">
              <CardContent className="p-6">
                <Gift className="w-12 h-12 text-shamsy-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-shamsy-primary mb-2">
                  {currentStats.partnerships}
                </div>
                <div className="text-sm text-muted-foreground">Corporate partnerships</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              How You Can Help
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the type of support that suits you best
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
                        Your Benefits:
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
                      ) : option.id === 2 ? (
                        <a href="mailto:info.shamsyr@gmail.com?subject=Association Membership&body=Hello, I am interested in an association membership with ShamSy." className="flex items-center justify-center gap-2 w-full">
                          <span className="truncate">{option.cta}</span>
                          <ArrowRight className="w-4 h-4 flex-shrink-0" />
                        </a>
                      ) : option.id === 4 ? (
                        <a href="mailto:info.shamsyr@gmail.com?subject=Corporate Partnership&body=Hello, we are interested in a corporate partnership with ShamSy." className="flex items-center justify-center gap-2 w-full">
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

      {/* Testimonial */}
      <section className="py-20 shamsy-bg-gradient">
        <div className="container mx-auto px-4">
          <Card className="shamsy-card border-shamsy-primary/20 max-w-4xl mx-auto text-center">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-shamsy-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Megaphone className="w-8 h-8 text-shamsy-primary" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-light italic text-foreground mb-8 leading-relaxed">
                "I support ShamSy because I know that my donation really arrives. 
                The transparency and regular updates show me how my contribution helps concretely."
              </blockquote>
              
              <cite className="text-lg font-semibold text-shamsy-primary">
                — Maria K., Donor since 2023
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Answers to the most important questions about getting involved
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How transparent is ShamSy with donation funds?",
                answer: "We publish detailed project reports and financial reports. Every euro is documented and you receive regular updates on the use of your donation."
              },
              {
                question: "Can I become a member as a non-Syrian/German?",
                answer: "Absolutely! ShamSy is open to all people who want to support our mission, regardless of nationality or origin."
              },
              {
                question: "How much time do I need to invest as a volunteer?",
                answer: "You decide that yourself! We have tasks from 2-3 hours per month up to larger projects. Every help is valuable."
              },
              {
                question: "Are in-kind donations possible?",
                answer: "Yes, gladly! We can especially use medical equipment, school supplies or tools. Contact us for details."
              }
            ].map((faq, index) => (
              <Card key={index} className="shamsy-card border-shamsy-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default GetInvolved;