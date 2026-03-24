import { Briefcase, Calendar } from "lucide-react";
import pharmaaceLogo from "@/assets/pharmaace-logo.png";
import bestpeersLogo from "@/assets/bestpeers-logo.png";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "BestPeers, Indore",
      logo: bestpeersLogo,
      period: "Feb 2026 – Present",
      responsibilities: [
        "Creating interactive dashboards in Power BI and Looker for data-driven decision making.",
        "Handling client calls and making custom visualizations tailored to business requirements.",
        "Training AI models on Vertex AI (Google Cloud Platform) for predictive analytics.",
      ],
      tools: ["Power BI", "Looker", "Vertex AI", "Google Cloud Platform"],
    },
    {
      title: "Data Analyst",
      company: "PharmaACE Analytics, Hyderabad",
      logo: pharmaaceLogo,
      period: "June 2024 – June 2025",
      responsibilities: [
        "Automated reports using Excel (PivotTables, slicers, graphs, macros) and PowerPoint, saving 10–15 hours/week for the analytics team.",
        "Created and updated 10+ weekly, monthly, and ad-hoc reports on US healthcare data for two cancer drugs under Bayer oncology project.",
        "Extracted and analyzed large datasets (TBs - 10 Million+ rows) from Snowflake using SQL.",
        "Performed SKU-level EDA in Python to segment units and new consumers by region/territory, uncovering trends and insights.",
        "Developed 10+ SOPs and quality documentation for monthly deliverables to ensure consistency and compliance.",
        "Conducted market research analysis leveraging GenAI tools (ChatGPT, Copilot) for faster insights.",
        "Designed visual reports for LTD (7+ years) data and YTD data with ad-hoc analysis support.",
      ],
      tools: ["Python", "SQL", "Snowflake", "Excel", "PowerPoint", "GenAI Tools"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-card/30">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-title-accent">Work</span> Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="card-portfolio relative">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {exp.logo && (
                    <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain rounded" />
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="text-primary" size={18} />
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="accent-line" />

              {/* Responsibilities */}
              <ul className="space-y-3 mt-6">
                {exp.responsibilities.map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tools Used */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Tools & Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <span key={tool} className="skill-tag text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
