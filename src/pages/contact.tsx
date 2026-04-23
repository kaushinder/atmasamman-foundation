import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. Our team will respond shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5 py-20 border-b border-primary/10">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Connect With Us</h1>
          <p className="text-xl text-muted-foreground">
            Whether you want to volunteer, donate, or learn more about our programs, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Your support enables us to continue our work. Reach out to us for partnerships, donations, or general inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Head Office</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      123 Seva Marg, Heritage District<br/>
                      Near City Center<br/>
                      New Delhi, 110001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">namaste@atmasamman.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <Card className="bg-secondary text-secondary-foreground border-none mt-10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <HeartHandshake className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-xl font-bold text-white">Bank Details</h3>
                  </div>
                  <p className="text-sm text-secondary-foreground/80 mb-4">For direct bank transfers within India:</p>
                  <div className="space-y-2 text-sm text-white font-mono bg-black/20 p-4 rounded-md">
                    <p>A/C Name: Atmasamman Foundation</p>
                    <p>A/C No: 12345678901234</p>
                    <p>IFSC: SBIN0001234</p>
                    <p>Bank: State Bank of India</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl font-serif font-bold mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" required placeholder="Shri/Smt. Name" className="bg-accent/50 border-transparent focus-visible:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required placeholder="email@example.com" className="bg-accent/50 border-transparent focus-visible:border-primary" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" required placeholder="How can we help?" className="bg-accent/50 border-transparent focus-visible:border-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Please write your message here..." 
                        className="min-h-[150px] bg-accent/50 border-transparent focus-visible:border-primary resize-none" 
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full rounded-full h-14 text-base">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden aspect-[21/9] bg-accent relative border border-border">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground">
                  <MapPin className="w-8 h-8 mb-2 opacity-50" />
                  <p className="font-medium">Interactive Map Placeholder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
