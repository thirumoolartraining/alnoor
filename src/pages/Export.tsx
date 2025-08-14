import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Globe, Truck, Package, Shield, MapPin, Building, Users, FileText } from "lucide-react";
import { products } from "@/data/products";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-butcher-shop.jpg";

export default function Export() {
  const [searchParams] = useSearchParams();
  const preSelectedProduct = searchParams.get("product");
  
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    website: "",
    products: preSelectedProduct ? [preSelectedProduct] : [],
    estimatedVolume: "",
    frequency: "",
    message: "",
    agreeToTerms: false,
  });

  const exportProducts = products.filter(p => p.exportAvailable);

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProductToggle = (productId: string, checked: boolean) => {
    const updatedProducts = checked 
      ? [...formData.products, productId]
      : formData.products.filter(id => id !== productId);
    handleInputChange("products", updatedProducts);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    if (formData.products.length === 0) {
      toast({
        title: "Products Required",
        description: "Please select at least one product for export inquiry.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Export Inquiry Submitted",
      description: "We'll contact you within 24 hours with detailed information and quotations.",
    });

    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      website: "",
      products: [],
      estimatedVolume: "",
      frequency: "",
      message: "",
      agreeToTerms: false,
    });
  };

  const capabilities = [
    {
      icon: Package,
      title: "Export-Grade Packaging",
      description: "International standard packaging with vacuum sealing and temperature control"
    },
    {
      icon: Truck,
      title: "Cold Chain Logistics",
      description: "Complete cold chain from processing to destination port delivery"
    },
    {
      icon: Shield,
      title: "Halal Certification",
      description: "Authentic halal certificates recognized internationally"
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete export documentation including health certificates and COA"
    }
  ];

  const countries = [
    "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain",
    "Malaysia", "Singapore", "Brunei", "Indonesia", "Maldives",
    "South Africa", "Kenya", "Tanzania", "Morocco", "Egypt"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
              <Globe className="w-4 h-4 mr-2" />
              International B2B Solutions
            </Badge>
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Export <span className="hero-text">Premium Halal Meat</span> Globally
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Partner with Al Noor for reliable, high-quality halal meat exports. We serve 
              international distributors, restaurants, and retail chains with export-grade 
              packaging, complete documentation, and cold chain logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Our Export Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive export solutions designed for international markets with 
              compliance, quality, and reliability at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="product-card border-0 shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground text-sm">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Export Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">MT Monthly Capacity</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Halal Certified</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Cold Chain Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Inquiry Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Submit Export Inquiry
              </h2>
              <p className="text-lg text-muted-foreground">
                Get detailed quotations, specifications, and delivery terms for international orders.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Fields */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Company Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        Company Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            required
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="contactPerson">Contact Person *</Label>
                          <Input
                            id="contactPerson"
                            required
                            value={formData.contactPerson}
                            onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Input
                            id="country"
                            required
                            value={formData.country}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                            placeholder="Select or type country"
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            required
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="website">Website (Optional)</Label>
                          <Input
                            id="website"
                            type="url"
                            value={formData.website}
                            onChange={(e) => handleInputChange("website", e.target.value)}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Product Selection */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        Product Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-base font-medium">Select Products for Export *</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                          {exportProducts.map((product) => (
                            <div key={product.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                              <Checkbox
                                id={`product-${product.id}`}
                                checked={formData.products.includes(product.id)}
                                onCheckedChange={(checked) => handleProductToggle(product.id, checked === true)}
                              />
                              <Label 
                                htmlFor={`product-${product.id}`}
                                className="flex-1 cursor-pointer"
                              >
                                <div className="font-medium">{product.name}</div>
                                <div className="text-sm text-muted-foreground">{product.category}</div>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="estimatedVolume">Estimated Monthly Volume (MT) *</Label>
                          <Input
                            id="estimatedVolume"
                            required
                            value={formData.estimatedVolume}
                            onChange={(e) => handleInputChange("estimatedVolume", e.target.value)}
                            placeholder="e.g., 10-20 MT"
                          />
                        </div>
                        <div>
                          <Label htmlFor="frequency">Order Frequency *</Label>
                          <Input
                            id="frequency"
                            required
                            value={formData.frequency}
                            onChange={(e) => handleInputChange("frequency", e.target.value)}
                            placeholder="e.g., Monthly, Weekly"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Additional Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Label htmlFor="message">Special Requirements & Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please specify any special requirements, packaging preferences, delivery terms, or other details..."
                          className="mt-2 min-h-[120px]"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Terms and Submit */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="exportTerms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked === true)}
                          />
                          <Label htmlFor="exportTerms" className="text-sm cursor-pointer">
                            I agree to the export terms and conditions, understand that this is an inquiry 
                            for quotation, and consent to be contacted regarding this export requirement.
                          </Label>
                        </div>
                        
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full"
                          disabled={!formData.agreeToTerms || formData.products.length === 0}
                        >
                          Submit Export Inquiry
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar Information */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Countries We Serve */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Countries We Serve
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {countries.map((country) => (
                          <Badge key={country} variant="secondary" className="text-xs">
                            {country}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Don't see your country? Contact us to discuss export possibilities.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Export Benefits */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Why Choose Al Noor</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span className="text-sm">Halal certified by recognized authorities</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span className="text-sm">Export-grade packaging and labeling</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span className="text-sm">Complete documentation support</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span className="text-sm">Flexible payment terms</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span className="text-sm">Dedicated export team support</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span className="text-sm">Competitive pricing for bulk orders</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Need Immediate Assistance?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Our export team is ready to help with your requirements.
                      </p>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href="tel:+919884660216">Call Export Team</a>
                        </Button>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href="mailto:shop@alnoormeatcenter.com">Email Us</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}