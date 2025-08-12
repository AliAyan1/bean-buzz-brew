import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import productImage from '@/assets/product-1.jpg';

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    price: "$24.99",
    description: "Bright and floral with notes of citrus and tea",
    rating: 4.9,
    image: productImage,
  },
  {
    id: 2,
    name: "Colombian Supremo",
    price: "$22.99",
    description: "Rich and balanced with chocolate undertones",
    rating: 4.8,
    image: productImage,
  },
  {
    id: 3,
    name: "Brazilian Santos",
    price: "$21.99",
    description: "Smooth and nutty with low acidity",
    rating: 4.7,
    image: productImage,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="shop" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Signature Roasts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully selected beans from the world's finest coffee regions, 
            expertly roasted to bring out their unique characteristics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="card-product group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button className="btn-secondary flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-hero">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;