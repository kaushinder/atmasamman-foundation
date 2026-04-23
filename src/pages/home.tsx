import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, HeartPulse, Sprout, Users, HandHeart } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Community gathering under warm sunlight" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 py-20 text-white">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium tracking-wide mb-6 backdrop-blur-sm">
              Empowering Communities in India
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-white drop-shadow-lg">
              Where dignity <br />
              <span className="text-primary italic">and compassion</span> meet.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Atmasamman Foundation operates with the spirit of selfless service, honoring every human as worthy of respect, hope, and opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-xl" asChild>
                <Link href="/contact">Support Our Mission</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 h-14 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground relative z-20 -mt-10 mx-4 md:mx-auto md:max-w-5xl rounded-2xl shadow-xl">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-serif font-bold">25k+</h3>
              <p className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider">Lives Touched</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-serif font-bold">120</h3>
              <p className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider">Villages Reached</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-serif font-bold">15</h3>
              <p className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider">Years of Seva</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-serif font-bold">500+</h3>
              <p className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Uplifting marginalized communities through education, healthcare, and livelihood.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The name "Atmasamman" means "self-respect" in Sanskrit. We believe that true charity is not just giving, but enabling individuals to stand on their own feet with dignity.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Through our integrated programs across rural India, we address the root causes of poverty while preserving the rich cultural heritage of the communities we serve.
              </p>
              <div className="pt-4">
                <Button variant="ghost" className="group rounded-full pl-0 hover:bg-transparent" asChild>
                  <Link href="/about" className="flex items-center text-primary font-semibold text-lg">
                    Read our full mission 
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/gallery-2.png" 
                  alt="A smiling elderly Indian woman" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <HandHeart className="w-10 h-10 text-primary mb-3" />
                <p className="font-serif font-medium text-lg leading-snug">"Every human being is worthy of respect and opportunity."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-accent/50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Impact Areas</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Featured Programs</h2>
            <p className="text-muted-foreground text-lg">Comprehensive initiatives designed to create sustainable, generational change in rural communities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education",
                icon: BookOpen,
                desc: "Quality foundational education and scholarships for children in remote areas.",
                img: "/images/program-education.png"
              },
              {
                title: "Healthcare",
                icon: HeartPulse,
                desc: "Mobile medical camps, maternal health, and essential care access.",
                img: "/images/program-healthcare.png"
              },
              {
                title: "Livelihood",
                icon: Sprout,
                desc: "Skill development and support for local artisans and farmers.",
                img: "/images/program-livelihood.png"
              }
            ].map((program, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={program.img} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <program.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">{program.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <p className="text-muted-foreground mb-6">{program.desc}</p>
                  <Button variant="outline" className="w-full rounded-full border-primary/20 text-primary hover:bg-primary/5" asChild>
                    <Link href="/programs">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="rounded-full px-8" asChild>
               <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Join us in spreading hope and dignity.
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Your contribution, no matter the size, helps us provide education, healthcare, and livelihood opportunities to those who need it most.
            </p>
            <div className="pt-4">
              <Button size="lg" className="rounded-full text-lg px-10 h-16 bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-2xl" asChild>
                <Link href="/contact">Make a Donation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
