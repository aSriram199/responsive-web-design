import Layout from "@/components/Layout";

const members = Array.from({ length: 9 }).map((_, i) => ({
  name: "Jyothsna",
  role: "Web Designing",
}));

const OurTeam = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[3/4] bg-muted" />
            <div className="p-4 text-center">
              <h3 className="font-bold text-foreground">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default OurTeam;
