import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Sample = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Sample</h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="aspect-video bg-muted rounded-xl" />

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3 text-foreground">DOWNLOAD SAMPLE ABSTRACTS</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">INDIVIDUAL</Button>
            <Button variant="secondary">TEAM</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3 text-foreground">DOWNLOAD SAMPLE PPT</h2>
          <Button variant="secondary">PPT</Button>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3 text-foreground">DOWNLOAD PROBLEM STATEMENTS</h2>
          <Button variant="secondary">PROBLEM STATEMENTS</Button>
        </section>
      </div>
    </div>
  </Layout>
);

export default Sample;
