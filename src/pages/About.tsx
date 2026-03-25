import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">About</h1>

      <div className="max-w-3xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-foreground">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">INTRODUCTION</h2>
          <p className="text-muted-foreground">
            Avishkar, the flagship event of IEEE - VBIT SB, is a Technical Paper Presentation competition held exclusively for the freshmen of VBIT. In the year 2011, Avishkar was awarded the esteemed 'Darrel Chong Gold Student Activity Award' in recognition of conducting Avishkar consecutively for five years. Avishkar significantly contributes to the experience of first-year VBIT students by offering a platform where they can present their innovative ideas and improve their communication abilities through technical presentations.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">WHAT IS AVISHKAR?</h2>
          <p className="text-muted-foreground">
            Avishkar aims to enhance the technical proficiency of students by providing an opportunity to develop innovative ideas, acquire exceptional problem-solving skills, and exhibit their capabilities. It consists of two rounds:
          </p>
          <ul className="mt-2 text-muted-foreground space-y-1 list-none">
            <li>Round 1: Preliminary round.</li>
            <li>Round 2: Final round.</li>
          </ul>
          <p className="mt-2 text-muted-foreground">
            In the Preliminary Round, participants present their solution for the chosen problem statement and are evaluated by a panel of judges. The top ten presentations, based on performance, advance to the final round, where the best are awarded with mementos and certificates.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">RULES AND REGULATIONS:</h2>
          <p className="text-muted-foreground mb-3">One must adhere to the following rules and regulations to participate in Avishkar 2K26.</p>

          <h3 className="text-lg font-bold font-display mb-2">ABSTRACT:</h3>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>The font style should be Times New Roman.</li>
            <li>The Problem statement must be written in a font size of 14.</li>
            <li>The subheading "Abstract" must be written in a font size of 12.</li>
            <li>The content should be in a font size of 10.</li>
            <li>Email ID must be mentioned in Italics.</li>
            <li>The content must be appropriate, italicized and should be divided into two columns.</li>
            <li>The word count for Abstract should not exceed 250 words.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-bold font-display mb-2">IMPORTANT NOTE:</h3>
          <p className="text-muted-foreground">After the abstract has been submitted, you will receive a sample PPT in IEEE format.</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
            <li>Abstract must be submitted in the .docx extension format.</li>
            <li>Name your Abstract as follows: 'Name_last3digitsofyourrollnumber'.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-bold font-display mb-2">PPT:</h3>
          <p className="text-muted-foreground">The PPT must have 10 slides and should include the following information:</p>
          <ol className="list-decimal pl-5 text-muted-foreground space-y-1 mt-2">
            <li>Home page.</li>
            <li>Problem statement.</li>
            <li>Problem explanation.</li>
            <li>Solution.</li>
            <li>Domain chosen and the reason for selecting the domain.</li>
            <li>Feasibility of the solution.</li>
            <li>Comparing with existing solution.</li>
            <li>Applications.</li>
            <li>Queries?</li>
            <li>Thank you.</li>
          </ol>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-3">
            <li>Homepage must contain "AVISHKAR" along with your Name, Roll Number and Branch - Section.</li>
            <li>Times New Roman font should be used in the PPT.</li>
            <li>No animations or transitions are to be used in the PPT.</li>
            <li>Both Abstract and PPT must be submitted within the provided deadline.</li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
);

export default About;
