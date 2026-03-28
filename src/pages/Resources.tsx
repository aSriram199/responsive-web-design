import Layout from "@/components/Layout";
import ResourceCard from "@/components/ResourceCard";

const resources: { title: string; description: string; link: string }[] = [
  {
    title: "CORE",
    description:
      "Access millions of open access research papers aggregated from repositories and journals worldwide, making academic discovery simple and efficient.",
    link: "https://core.ac.uk",
  },
  {
    title: "IEEE Xplore",
    description:
      "IEEE Xplore digital library provides access to technical literature in engineering, computer science, and related technologies.",
    link: "https://ieeexplore.ieee.org",
  },
  {
    title: "Google Scholar",
    description:
      "Freely accessible web search engine that indexes scholarly literature across many disciplines and sources.",
    link: "https://scholar.google.com",
  },
  {
    title: "ResearchGate",
    description:
      "Professional network for scientists and researchers to share papers, ask and answer questions, and find collaborators.",
    link: "https://www.researchgate.net",
  },
  {
    title: "Semantic Scholar",
    description:
      "AI-powered research tool for scientific literature. It uses machine learning to help discover relevant papers.",
    link: "https://www.semanticscholar.org",
  },
  {
    title: "arXiv",
    description:
      "Open-access archive for scholarly articles in the fields of physics, mathematics, computer science, and more.",
    link: "https://arxiv.org",
  },
  {
    title: "PubMed",
    description:
      "Free search engine accessing primarily the MEDLINE database of references and abstracts on life sciences and biomedical topics.",
    link: "https://pubmed.ncbi.nlm.nih.gov",
  },
];

const Resources = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Resources</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  </Layout>
);

export default Resources;
