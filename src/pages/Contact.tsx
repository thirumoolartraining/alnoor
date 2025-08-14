import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Car } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours. Thank you for contacting us!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: [
        "No: 36, Pandiyan Street, Medavakkam Main Road",
        "Ullagaram, Chennai - 600091",
        "Near Medavakkam Main Road"
      ],
      action: "Get Directions",
      actionLink: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Store: +91 9884660216",
        "Export: +91 9884660216",
        "WhatsApp: +91 9884660216"
      ],
      action: "Call Now",
      actionLink: "tel:+919884660216"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "Email: shop@alnoormeatcenter.com"
      ],
      action: "Send Email",
      actionLink: "mailto:shop@alnoormeatcenter.com"
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: [
        "Monday - Saturday: 8:00 AM - 8:00 PM",
        "Sunday: 10:00 AM - 6:00 PM",
        "Holidays: 10:00 AM - 4:00 PM"
      ],
      action: "View Calendar",
      actionLink: "#"
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick support via WhatsApp",
      link: "https://wa.me/919876543210",
      color: "bg-green-500"
    },
    {
      icon: Phone,
      title: "Call Direct",
      description: "Speak with our team now",
      link: "tel:+919884660216",
      color: "bg-blue-500"
    },
    {
      icon: Car,
      title: "Home Delivery",
      description: "Schedule a delivery",
      link: "/shop",
      color: "bg-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Contact Al Noor Chicken & Mutton Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for orders, inquiries, export requirements, or any questions 
            about our premium halal meat products. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
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
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your inquiry, order requirements, or questions..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8">
              <h3 className="text-xl font-heading font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <a 
                          href={action.link} 
                          target={action.link.startsWith('http') ? '_blank' : '_self'}
                          className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                        >
                          <div className={`w-10 h-10 ${action.color} rounded-full flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium">{action.title}</div>
                            <div className="text-sm text-muted-foreground">{action.description}</div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg mb-2">{info.title}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground mb-4">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex}>{detail}</p>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href={info.actionLink}
                            target={info.actionLink.startsWith('http') ? '_blank' : '_self'}
                          >
                            {info.action}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Map Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Find Our Store</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/50 rounded-lg p-8 text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Al Noor Chicken & Mutton Center</h3>
              <p className="text-muted-foreground mb-4">
                No: 36, Pandiyan Street, Medavakkam Main Road<br />
                Ullagaram, Chennai - 600091
              </p>
              <Button asChild>
                <a href="https://maps.google.com" target="_blank">
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Do you deliver to my area?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We deliver within 25 km of our store. Check delivery availability during checkout 
                  or call us to confirm.
                </p>

                <h4 className="font-semibold mb-2">What are your delivery charges?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Delivery is free for orders above $50. Below that, delivery charges vary by distance 
                  and typically range from $3-8.
                </p>

                <h4 className="font-semibold mb-2">How fresh is the meat?</h4>
                <p className="text-sm text-muted-foreground">
                  All our meat is cut fresh daily. We maintain strict cold chain protocols from 
                  processing to delivery to ensure maximum freshness.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Do you accept bulk orders?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Yes! We handle bulk orders for restaurants, events, and institutions. 
                  Contact us 24-48 hours in advance for bulk requirements.
                </p>

                <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We accept cash on delivery, all major credit/debit cards, UPI, and bank transfers. 
                  Online payment options are available during checkout.
                </p>

                <h4 className="font-semibold mb-2">Are all products halal certified?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, 100% of our products are halal certified by recognized authorities. 
                  We provide certificates upon request for commercial customers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}