import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, ArrowLeft, Globe, Shield, Truck, Package } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import certificationsImage from "@/assets/certifications.jpg";
import { ProductImageGallery } from "@/components/ProductImageGallery";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to Cart",
      description: `${quantity} ${product.unit} of ${product.name} added to cart.`,
    });
  };

  const handleExportInquiry = () => {
    toast({
      title: "Export Inquiry",
      description: "Redirecting to export inquiry form...",
    });
    // Redirect to export page with pre-filled product
  };

  return (
    <div className="min-h-screen bg-background pt-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-primary transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <div className="space-y-6">
            <ProductImageGallery 
              images={product.images} 
              productName={product.name}
              thumbnail={product.thumbnail}
            />
            
            {/* Certifications */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Certifications & Quality</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="text-sm">Halal Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-accent" />
                    <span className="text-sm">FSSAI Licensed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-accent" />
                    <span className="text-sm">Cold Chain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-accent" />
                    <span className="text-sm">Export Grade</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-heading font-bold text-foreground">
                  {product.name}
                </h1>
                {product.exportAvailable && (
                  <Badge className="bg-accent/10 text-accent border-accent/30">
                    <Globe className="w-3 h-3 mr-1" />
                    Export Available
                  </Badge>
                )}
              </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                <span className="text-lg text-muted-foreground">{product.unit}</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="quantity" className="text-base font-medium">
                  Quantity ({product.unit})
                </Label>
                <div className="flex items-center gap-3 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    ₹{(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="w-full"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              {product.exportAvailable && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleExportInquiry}
                  className="w-full export-highlight border-accent/30 hover:bg-accent/10"
                  asChild
                >
                  <Link to={`/export?product=${product.id}`}>
                    <Globe className="w-5 h-5 mr-2" />
                    Request Bulk Export Quote
                  </Link>
                </Button>
              )}

              <Button variant="ghost" size="lg" className="w-full" asChild>
                <Link to="/shop">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>

            {/* Delivery Information */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Delivery & Packaging</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Cold chain delivery maintains freshness
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Vacuum-sealed packaging for extended shelf life
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Same-day delivery available in local areas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Export packaging meets international standards
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}