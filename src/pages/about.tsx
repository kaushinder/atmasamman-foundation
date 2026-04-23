import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-accent/50 py-20 border-b border-border">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground">
            A journey of a thousand miles, rooted in the simple belief that every life holds inherent dignity.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="bg-primary/5 border-primary/20 shadow-sm">
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-primary">Our Vision</h2>
                <p className="text-lg leading-relaxed text-foreground/80">
                  A society where marginalized communities are empowered, self-reliant, and able to lead lives of dignity, free from poverty and discrimination. We envision a world where cultural heritage is celebrated alongside modern progress.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/5 border-secondary/20 shadow-sm">
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-secondary">Our Mission</h2>
                <p className="text-lg leading-relaxed text-foreground/80">
                  To uplift underprivileged populations through holistic, community-driven interventions in education, healthcare, and livelihood, while operating on the timeless Indian principle of 'Seva' (selfless service).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Narrative */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/gallery-4.png" 
                  alt="Community building project in India" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-8 top-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -left-8 bottom-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">The Beginning</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                Born from a quiet promise.
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed prose prose-stone">
                <p>
                  The Atmasamman Foundation was established 15 years ago by a group of passionate individuals who witnessed the stark realities of rural poverty. 
                </p>
                <p>
                  What started as a small evening school under a banyan tree has now grown into a comprehensive institution serving over 120 villages. The name "Atmasamman" — self-respect — was chosen carefully. We do not view the communities we serve as beneficiaries of charity, but as partners in their own upliftment.
                </p>
                <p>
                  Over the years, we have seen that when individuals are provided with the right tools—be it a book, a health checkup, or a loom—they build their own futures. Our role is simply to provide the foundation upon which they can stand with dignity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-accent">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every program we design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dignity First",
                desc: "We believe charity that compromises self-respect is harmful. All our interventions are designed to empower, not to create dependency."
              },
              {
                title: "Seva (Selfless Service)",
                desc: "We serve without expectation of reward, recognizing that in serving others, we elevate our own humanity."
              },
              {
                title: "Cultural Respect",
                desc: "We honor local wisdom and traditions, integrating modern solutions with indigenous knowledge systems."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-serif font-bold">
                  0{i+1}
                </div>
                <h3 className="text-2xl font-serif font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustees */}
      <section className="py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Trustees</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by experienced leaders dedicated to social change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Dr. Anand Sharma", role: "Founder & Chairman", exp: "Public Health" },
              { name: "Meera Desai", role: "Managing Trustee", exp: "Education Policy" },
              { name: "Vikram Singh", role: "Trustee", exp: "Rural Development" },
              { name: "Dr. Pallavi Rao", role: "Trustee", exp: "Women's Empowerment" }
            ].map((trustee, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="w-32 h-32 mx-auto bg-accent rounded-full mb-6 overflow-hidden flex items-center justify-center text-4xl font-serif text-muted-foreground border-4 border-white shadow-lg group-hover:border-primary/20 transition-colors">
                  {trustee.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold">{trustee.name}</h3>
                  <p className="text-primary font-medium text-sm my-1">{trustee.role}</p>
                  <p className="text-muted-foreground text-sm">{trustee.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
