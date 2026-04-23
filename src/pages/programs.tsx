import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, HeartPulse, Sprout, Users, Landmark } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      id: "education",
      title: "Education for All",
      icon: BookOpen,
      image: "/images/program-education.png",
      tagline: "Building foundations for the future",
      description: "Education is the most powerful tool for breaking the cycle of poverty. Our education initiatives focus on providing quality learning opportunities to children in remote villages who would otherwise drop out due to financial constraints or lack of access.",
      points: [
        "Running 45 rural learning centers for foundational literacy",
        "Providing scholarships for higher education to 500+ meritorious students",
        "Distributing learning materials, uniforms, and digital devices",
        "Training local youth to become educators in their own communities"
      ],
      color: "bg-blue-50 text-blue-900",
      iconColor: "text-blue-600"
    },
    {
      id: "healthcare",
      title: "Rural Healthcare",
      icon: HeartPulse,
      image: "/images/program-healthcare.png",
      tagline: "Bringing healing to the last mile",
      description: "Access to basic healthcare is a fundamental human right. Our healthcare programs address the critical gap in medical services in rural areas, focusing on preventive care, maternal health, and treating chronic conditions.",
      points: [
        "Operating 3 mobile medical vans equipped with essential diagnostics",
        "Conducting monthly specialist health camps (eye, dental, general)",
        "Providing nutritional support for pregnant women and malnourished children",
        "Training community health workers in basic first aid and hygiene"
      ],
      color: "bg-rose-50 text-rose-900",
      iconColor: "text-rose-600"
    },
    {
      id: "livelihood",
      title: "Sustainable Livelihood",
      icon: Sprout,
      image: "/images/program-livelihood.png",
      tagline: "Dignity through self-reliance",
      description: "We empower communities to become economically independent by enhancing existing skills and introducing sustainable agricultural practices. We believe in creating entrepreneurs, not dependents.",
      points: [
        "Supporting 1,200+ local artisans with raw materials and market access",
        "Training youth in modern vocational skills like solar repair and tailoring",
        "Promoting organic farming techniques to increase yield and reduce debt",
        "Facilitating micro-loans for small village enterprises"
      ],
      color: "bg-green-50 text-green-900",
      iconColor: "text-green-600"
    },
    {
      id: "women",
      title: "Women Empowerment",
      icon: Users,
      image: "/images/program-women.png",
      tagline: "Strengthening the heart of the community",
      description: "When you empower a woman, you empower an entire family. Our women-centric programs focus on financial independence, legal awareness, and building confident leadership at the grassroots level.",
      points: [
        "Forming and mentoring 150+ Self-Help Groups (SHGs)",
        "Providing seed capital for women-led micro-businesses",
        "Conducting workshops on legal rights and domestic violence prevention",
        "Adult literacy programs designed specifically for rural women"
      ],
      color: "bg-purple-50 text-purple-900",
      iconColor: "text-purple-600"
    },
    {
      id: "culture",
      title: "Cultural Preservation",
      icon: Landmark,
      image: "/images/program-culture.png",
      tagline: "Honoring our roots",
      description: "Progress should not come at the cost of identity. We actively work to preserve indigenous art forms, folk traditions, and local languages that are at risk of being lost in the modern era.",
      points: [
        "Organizing annual folk art festivals to provide a platform for rural artists",
        "Documenting oral histories and traditional stories of tribal communities",
        "Supporting artisans practicing dying traditional crafts",
        "Integrating local cultural education into our rural learning centers"
      ],
      color: "bg-amber-50 text-amber-900",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 border-b border-border/10">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Programs</h1>
          <p className="text-xl text-white/80">
            Holistic interventions designed to create sustainable change, honor dignity, and uplift communities across rural India.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-12">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto space-y-24">
          {programs.map((program, index) => (
            <div key={program.id} id={program.id} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              
              <div className={`relative ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                {/* Decorative blob behind image */}
                <div className={`absolute -inset-4 opacity-50 rounded-3xl blur-2xl -z-10 ${program.color.split(' ')[0]}`}></div>
              </div>

              <div className={`space-y-6 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${program.color}`}>
                    <program.icon className={`w-7 h-7 ${program.iconColor}`} />
                  </div>
                  <span className="font-medium text-muted-foreground uppercase tracking-widest text-sm">
                    {program.tagline}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  {program.title}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {program.description}
                </p>

                <div className="pt-4 space-y-3">
                  <h4 className="font-semibold text-foreground">Key Activities:</h4>
                  <ul className="space-y-3">
                    {program.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary/5" asChild>
                    <Link href="/contact">Support this Program</Link>
                  </Button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/50 mt-12">
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Want to see our work in action?</h2>
          <p className="text-lg text-muted-foreground">
            Browse our gallery to see the faces and stories of the communities we serve, or contact us to volunteer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/gallery">View Gallery</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-white" asChild>
              <Link href="/contact">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
