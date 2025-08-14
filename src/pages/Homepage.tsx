import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Truck, Package, Zap, Globe, Award } from "lucide-react";
import heroImage from "@/assets/hero-butcher-shop.jpg";
import chickenImage from "@/assets/chicken-products.jpg";
import muttonImage from "@/assets/mutton-products.jpg";
import certificationsImage from "@/assets/certifications.jpg";

export default function Homepage() {
  const features = [
    {
      icon: Shield,
      title: "Halal Certified",
      description: "100% halal certified meat with authentic documentation and religious compliance."
    },
    {
      icon: Truck,
      title: "Cold Chain Logistics",
      description: "Temperature-controlled delivery ensuring freshness from farm to your table."
    },
    {
      icon: Package,
      title: "Export-Grade Packaging",
      description: "International standard packaging suitable for global export and long-distance shipping."
    },
    {
      icon: Zap,
      title: "Daily Fresh Cuts",
      description: "Fresh cuts prepared daily with the highest hygiene standards and quality control."
    }
  ];

  const categories = [
    {
      name: "Premium Chicken",
      image: chickenImage,
      description: "Fresh halal chicken cuts",
      link: "/shop?category=Chicken"
    },
    {
      name: "Quality Mutton",
      image: muttonImage,
      description: "Premium mutton and lamb",
      link: "/shop?category=Mutton"
    },
    {
      name: "Bulk Export",
      image: heroImage,
      description: "International B2B solutions",
      link: "/export"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
            <Award className="w-4 h-4 mr-2" />
            Halal Certified & Export Ready
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Premium <span className="hero-text">Halal</span> Chicken & Mutton
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fresh, Clean, Export-Ready — Order online for home delivery or bulk export with 
            halal certification, hygienic handling, and 100% freshness guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="btn-hero pulse-cta">
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <Link to="/export">
                <Globe className="mr-2 h-5 w-5" />
                Export Inquiry
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80">
            <div className="trust-badge bg-white/10 border-white/20">
              <Shield className="w-5 h-5" />
              Halal Certified
            </div>
            <div className="trust-badge bg-white/10 border-white/20">
              <Truck className="w-5 h-5" />
              Cold Chain Delivery
            </div>
            <div className="trust-badge bg-white/10 border-white/20">
              <Package className="w-5 h-5" />
              Export Quality
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Al Noor?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards in halal meat processing, ensuring quality, 
              freshness, and religious compliance in every product.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="product-card border-0 shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From fresh daily cuts to export-ready bulk orders, we serve both 
              retail customers and international businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} to={category.link} className="group">
                <Card className="category-card h-full overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                      Explore Products
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Trusted by Thousands, Certified by Authorities
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to quality and religious compliance has earned us certifications 
                from leading halal authorities and food safety organizations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Halal Certification Authority Approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-foreground">FSSAI Licensed Food Business</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Export License for International Trade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-foreground">ISO 22000 Food Safety Management</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={certificationsImage} 
                alt="Halal and FSSAI Certifications"
                className="w-full rounded-lg shadow-brand"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-accent">
                <div className="text-center text-white">
                  <div className="font-bold text-2xl">15+</div>
                  <div className="text-sm">Years</div>
                  <div className="text-xs">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Ready to Experience Premium Halal Meat?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're shopping for your family or looking for bulk export solutions, 
            we're here to serve you with the finest halal meat products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/shop">
                Browse Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
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