import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Package, Truck, Clock, Phone, MessageCircle } from "lucide-react";

export default function OrderConfirmation() {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <div className="min-h-screen bg-background pt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your order. We've received your order and will start processing it soon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Order #{orderId}</h3>
                  <p className="text-sm text-muted-foreground">
                    Placed on {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Order Processing</p>
                      <p className="text-sm text-muted-foreground">
                        Your order is being prepared with fresh cuts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Estimated Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Tomorrow between 8:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Cold Chain Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Temperature controlled to maintain freshness
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Order Confirmation Email</h4>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a confirmation email with order details shortly.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Preparation & Packaging</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team will prepare your fresh cuts with halal certification.
                    </p>
                  </div>

                  <div className="border-l-4 border-muted-foreground pl-4">
                    <h4 className="font-semibold">Delivery Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll send SMS updates about your delivery status.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">
                    Need help with your order?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+919884660216" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call Us
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://wa.me/919884660216" target="_blank" className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t">
            <Button size="lg" asChild>
              <Link to="/shop">
                Continue Shopping
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/export">
                Explore Export Services
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 p-6 bg-secondary/30 rounded-lg">
            <h3 className="font-heading font-semibold text-center mb-4">
              Your Order is Protected
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <div>
                <p className="font-medium">✓ Halal Certified</p>
                <p className="text-muted-foreground">Religious compliance</p>
              </div>
              <div>
                <p className="font-medium">✓ Fresh Cuts</p>
                <p className="text-muted-foreground">Daily preparation</p>
              </div>
              <div>
                <p className="font-medium">✓ Cold Chain</p>
                <p className="text-muted-foreground">Temperature controlled</p>
              </div>
              <div>
                <p className="font-medium">✓ Quality Guarantee</p>
                <p className="text-muted-foreground">100% satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}