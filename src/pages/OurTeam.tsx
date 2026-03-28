import Layout from "@/components/Layout";

// ── Marketing ──
import gokulMarketing from "@/assets/team/marketing/GOKUL - MARKETING.jpeg";
import hasiniMarketing from "@/assets/team/marketing/HASINI - MARKETING.jpeg";
import sanjanaMarketing from "@/assets/team/marketing/SANJANA - MARKETING.jpeg";

// ── Documentation ──
import nethraDoc from "@/assets/team/documentation/NETHRA - DOC.jpeg";
import sathiDoc from "@/assets/team/documentation/SAHTHI - DOC.jpeg";
import snehithaDoc from "@/assets/team/documentation/SNEHITHA - DOC.jpeg";

// ── Poster Designing ──
import prashanthPD from "@/assets/team/poster-designing/PRASHANTH - PD.jpeg";
import sreenithiPD from "@/assets/team/poster-designing/SREENIDHI - PD.jpeg";

// ── Hospitality ──
import kripaHos from "@/assets/team/hospitality/KRIPA - HOS.jpeg";
import madhurHos from "@/assets/team/hospitality/MADHUR - HOS.jpeg";
import manaswiniHos from "@/assets/team/hospitality/MANASWINI - HOS.jpeg";
import ruthvikaHos from "@/assets/team/hospitality/RUTHVIKA - HOS.jpeg";

// ── Treasury ──
import akshayTreasury from "@/assets/team/treasury/AKSHAY - TREASURY.jpeg";
import faizTreasury from "@/assets/team/treasury/FAIZ ALI - TREASURY.jpeg";
import krishnaTreasury from "@/assets/team/treasury/KRISHNA - TREASURY.jpeg";
import rahulTreasury from "@/assets/team/treasury/RAHUL - TREASURY.jpeg";

// ── Web Designing ──
import jyothsnaWD from "@/assets/team/web-designing/JYOTHSNA - WD.jpeg";
import ramgopalWD from "@/assets/team/web-designing/RAM GOPAL - WD.jpeg";

// ── Social Media Promotions ──
import karthikeyaSMP from "@/assets/team/social-media-promotions/KARTHIKEYA - SMP.jpeg";
import saiveerSMP from "@/assets/team/social-media-promotions/SAI VEER - SMP.jpeg";
import viswajitSMP from "@/assets/team/social-media-promotions/VISWAJIT - SMP.jpeg";

interface Member {
  name: string;
  role: string;
  image?: string;
}

const members: Member[] = [
  // ── Marketing (3 photos uploaded) ──
  { name: "Gokul",   role: "Marketing", image: gokulMarketing },
  { name: "Hasini",  role: "Marketing", image: hasiniMarketing },
  { name: "Sanjana", role: "Marketing", image: sanjanaMarketing },
  { name: "Member 4", role: "Marketing" },
  { name: "Member 5", role: "Marketing" },

  // ── Documentation (3 photos uploaded) ──
  { name: "Nethra",   role: "Documentation", image: nethraDoc },
  { name: "Sathi",    role: "Documentation", image: sathiDoc },
  { name: "Snehitha", role: "Documentation", image: snehithaDoc },
  { name: "Member 4", role: "Documentation" },
  { name: "Member 5", role: "Documentation" },

  // ── Poster Designing (2 photos uploaded) ──
  { name: "Prashanth", role: "Poster Designing", image: prashanthPD },
  { name: "Sreenidhi", role: "Poster Designing", image: sreenithiPD },
  { name: "Member 3",  role: "Poster Designing" },
  { name: "Member 4",  role: "Poster Designing" },

  // ── Hospitality (4 photos uploaded) ──
  { name: "Kripa",     role: "Hospitality", image: kripaHos },
  { name: "Madhur",    role: "Hospitality", image: madhurHos },
  { name: "Manaswini", role: "Hospitality", image: manaswiniHos },
  { name: "Ruthvika",  role: "Hospitality", image: ruthvikaHos },
  { name: "Member 5",  role: "Hospitality" },

  // ── Treasury (4 photos uploaded) ──
  { name: "Akshay",   role: "Treasury", image: akshayTreasury },
  { name: "Faiz Ali", role: "Treasury", image: faizTreasury },
  { name: "Krishna",  role: "Treasury", image: krishnaTreasury },
  { name: "Rahul",    role: "Treasury", image: rahulTreasury },

  // ── Web Designing (2 photos uploaded) ──
  { name: "Jyothsna",  role: "Web Designing", image: jyothsnaWD },
  { name: "Ram Gopal", role: "Web Designing", image: ramgopalWD },
  { name: "Member 3",  role: "Web Designing" },

  // ── Social Media Promotions (3 photos uploaded) ──
  { name: "Karthikeya", role: "Social Media Promotions", image: karthikeyaSMP },
  { name: "Sai Veer",   role: "Social Media Promotions", image: saiveerSMP },
  { name: "Viswajit",   role: "Social Media Promotions", image: viswajitSMP },
  { name: "Member 4",   role: "Social Media Promotions" },
];

const OurTeam = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            {m.image ? (
              <img
                src={m.image}
                alt={m.name}
                className="w-full aspect-[3/4] object-cover object-top"
              />
            ) : (
              <div className="aspect-[3/4] bg-muted" />
            )}
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
