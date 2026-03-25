import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const resources = [
  { title: "CORE", desc: "Access millions of open access research papers aggregated from repositories and journals worldwide, making academic discovery simple and efficient.", url: "https://core.ac.uk" },
  { title: "IEEE Xplore", desc: "IEEE Xplore digital library provides access to technical literature in engineering, computer science, and related technologies.", url: "https://ieeexplore.ieee.org" },
  { title: "Google Scholar", desc: "Freely accessible web search engine that indexes scholarly literature across many disciplines and sources.", url: "https://scholar.google.com" },
  { title: "ResearchGate", desc: "Professional network for scientists and researchers to share papers, ask and answer questions, and find collaborators.", url: "https://www.researchgate.net" },
  { title: "Semantic Scholar", desc: "AI-powered research tool for scientific literature. It uses machine learning to help discover relevant papers.", url: "https://www.semanticscholar.org" },
  { title: "arXiv", desc: "Open-access archive for scholarly articles in the fields of physics, mathematics, computer science, and more.", url: "https://arxiv.org" },
  { title: "PubMed", desc: "Free search engine accessing primarily the MEDLINE database of references and abstracts on life sciences and biomedical topics.", url: "https://pubmed.ncbi.nlm.nih.gov" },
];

const Resources = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Resources</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {resources.map((r, i) => (
          <div key={i} className="bg-muted rounded-xl p-5 sm:p-6 space-y-2">
            <h3 className="text-lg font-bold text-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="mt-2">
                click here <ExternalLink size={14} className="ml-1" />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Resources;
