import Layout from "@/components/Layout";

const Gallery = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">GALLERY</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] bg-muted rounded-xl hover:shadow-lg transition-shadow" />
        ))}
      </div>
    </div>
  </Layout>
);

export default Gallery;
