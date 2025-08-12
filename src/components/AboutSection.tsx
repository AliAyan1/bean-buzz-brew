import { Button } from '@/components/ui/button';
import { Leaf, Heart, Award, Coffee } from 'lucide-react';
import coffeeVarieties from '@/assets/coffee-varieties.jpg';
import roastingProcess from '@/assets/roasting-process.jpg';

const features = [
  {
    icon: Leaf,
    title: "Ethically Sourced",
    description: "Direct trade partnerships with coffee farmers ensuring fair compensation and sustainable practices."
  },
  {
    icon: Coffee,
    title: "Artisan Roasted",
    description: "Small-batch roasting using traditional methods to unlock the full potential of each bean."
  },
  {
    icon: Heart,
    title: "Freshly Delivered",
    description: "Roasted to order and shipped within 48 hours to ensure maximum freshness and flavor."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by coffee experts and competitions for our exceptional quality and consistency."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Coffee Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2018, Aroma Beans began as a passionate pursuit to bring the world's 
              finest coffee directly from farmers to your cup. We believe that great coffee 
              starts with great relationships – with our farmers, our community, and with you.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every bean tells a story of dedication, from the high-altitude farms where they're 
              grown to our roastery where they're carefully crafted into the perfect roast. 
              We're committed to transparency, sustainability, and most importantly, exceptional taste.
            </p>
            <Button className="btn-hero">Learn Our Story</Button>
          </div>
          
          <div className="relative">
            <img
              src={coffeeVarieties}
              alt="Coffee varieties"
              className="rounded-xl shadow-[var(--shadow-warm)] w-full"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h3 className="text-3xl font-bold text-primary mb-6">
              From Farm to Cup
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our roasting process is where science meets art. Using traditional drum roasting 
              techniques combined with modern temperature control, we carefully develop each 
              bean's unique flavor profile.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold">Sourcing</h4>
                  <p className="text-muted-foreground">Direct relationships with farmers worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold">Roasting</h4>
                  <p className="text-muted-foreground">Small-batch artisan roasting to perfection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold">Delivery</h4>
                  <p className="text-muted-foreground">Fresh roasted beans delivered to your door</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:order-1">
            <img
              src={roastingProcess}
              alt="Coffee roasting process"
              className="rounded-xl shadow-[var(--shadow-warm)] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;