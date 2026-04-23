import { Layout } from "@/components/layout";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/images/gallery-1.png", alt: "Volunteers distributing food", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
    { src: "/images/gallery-2.png", alt: "A smiling elderly Indian woman", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "/images/gallery-3.png", alt: "Children playing in a village", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "/images/gallery-4.png", alt: "Community building project in India", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
    { src: "/images/hero.png", alt: "Community gathering", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
    { src: "/images/program-education.png", alt: "Education program", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "/images/program-culture.png", alt: "Cultural event", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "/images/program-healthcare.png", alt: "Healthcare camp", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "/images/program-women.png", alt: "Women empowerment", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "/images/program-livelihood.png", alt: "Livelihood program", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-accent/50 py-20 border-b border-border">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Moments of Seva</h1>
          <p className="text-xl text-muted-foreground">
            A visual journey through our programs, capturing the resilience, joy, and dignity of the communities we serve.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 pb-24">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {images.map((img, i) => (
              <div 
                key={i} 
                className={`relative overflow-hidden rounded-xl group cursor-pointer shadow-sm hover:shadow-xl transition-all ${img.colSpan} ${img.rowSpan}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-full max-h-[90vh] object-contain rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
