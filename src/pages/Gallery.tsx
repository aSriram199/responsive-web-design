import Layout from "@/components/Layout";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", alt: "Students participating in a hackathon" },
  { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", alt: "Technical robotics project demonstration" },
  { url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800", alt: "Classroom workshop session" },
  { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", alt: "Large stage event presentation" },
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", alt: "Group photo of students" },
  { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800", alt: "Engaged audience during a fest" },
  { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", alt: "College campus fest atmosphere and lighting" },
  { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "Team collaborating on laptops" },
  { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800", alt: "Keynote speaker on stage" }
];

const Gallery = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">GALLERY</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {galleryImages.map((image, i) => (
          <div key={i} className="aspect-[4/3] bg-muted rounded-xl hover:shadow-lg transition-shadow overflow-hidden group">
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Gallery;
