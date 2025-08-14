import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Globe, Truck, Package } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero.png";
import certificationsImage from "@/assets/certifications.jpg";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Halal Integrity",
      description: "Strict adherence to halal principles with certified religious oversight and documentation."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Premium grade meat with rigorous quality control and FSSAI compliance standards."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated customer service with personalized attention to every order and inquiry."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International export capabilities with proper documentation and cold chain logistics."
    }
  ];

  const milestones = [
    { year: "2009", event: "Al Noor established with local retail focus" },
    { year: "2012", event: "Obtained Halal Certification Authority approval" },
    { year: "2015", event: "FSSAI license acquired for food safety compliance" },
    { year: "2018", event: "Export operations launched for international markets" },
    { year: "2021", event: "Online platform launched for home delivery" },
    { year: "2024", event: "15+ years serving premium halal meat" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
              <Award className="w-4 h-4 mr-2" />
              15+ Years of Excellence
            </Badge>
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              About Al Noor Chicken & Mutton Center
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 15 years, we've been committed to providing the finest halal meat products, 
              serving both local families and international businesses with unwavering quality, 
              religious integrity, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Our Story & Mission
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Al Noor Chicken & Mutton Center was founded in 2009 with a simple yet 
                  profound mission: to provide the Muslim community and conscious consumers 
                  with the highest quality halal meat products available.
                </p>
                <p>
                  What started as a small local butcher shop has grown into a trusted name 
                  in halal meat processing, serving thousands of families and exporting to 
                  international markets while never compromising on our core values of 
                  quality, integrity, and religious compliance.
                </p>
                <p>
                  Today, we combine traditional halal practices with modern food safety 
                  standards, cold chain logistics, and digital convenience to serve customers 
                  both locally and globally.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link to="/shop">Explore Products</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Al Noor facility"
                className="w-full rounded-lg shadow-brand"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-accent">
                <div className="text-center text-white">
                  <div className="font-bold text-2xl">5000+</div>
                  <div className="text-sm">Happy</div>
                  <div className="text-xs">Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing to delivery, 
              ensuring consistent quality and service excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="product-card border-0 shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={certificationsImage} 
                alt="Certifications and Awards"
                className="w-full rounded-lg shadow-brand"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Certifications & Standards
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to quality and religious compliance is validated by 
                leading certification authorities and regulatory bodies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <Shield className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">Halal Certification Authority</h4>
                    <p className="text-sm text-muted-foreground">
                      Certified halal compliance with religious oversight and regular audits
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <Package className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">FSSAI License</h4>
                    <p className="text-sm text-muted-foreground">
                      Food Safety and Standards Authority of India compliance certification
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <Globe className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">Export License</h4>
                    <p className="text-sm text-muted-foreground">
                      Authorized for international trade with proper documentation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <Truck className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">ISO 22000</h4>
                    <p className="text-sm text-muted-foreground">
                      Food Safety Management System certification for quality assurance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a local butcher shop to an international halal meat provider, 
              here are the key milestones in our growth story.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-4">
                    <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-primary">
                      <p className="text-lg font-medium text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Experience the Al Noor Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their halal meat needs. 
            Quality, integrity, and service excellence - that's our promise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/shop">
                Shop Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/export">
                Export Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}