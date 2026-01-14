import { 
  Database, 
  BarChart3, 
  Brain, 
  Code2, 
  FileSpreadsheet,
  Users
} from "lucide-react";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Data Analysis & Reporting",
    skills: [
      "Data Extraction",
      "Data Cleaning",
      "Transformation",
      "Visualization",
      "Dashboards",
      "Insights Generation",
      "SOP Writing",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: [
      "Data Collection",
      "Exploration",
      "Preprocessing",
      "Feature Engineering",
      "Model Selection",
      "Training",
      "Evaluation",
    ],
  },
  {
    icon: Code2,
    title: "Python",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-Learn",
      "Streamlit",
      "SciPy",
      "PyTorch",
    ],
  },
  {
    icon: Database,
    title: "SQL & Databases",
    skills: [
      "Query Generation",
      "Filtering & Sorting",
      "Aggregations",
      "Joins",
      "Snowflake",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Excel & Tools",
    skills: [
      "Pivot Tables",
      "Lookup Functions",
      "Macros",
      "Conditional Formatting",
      "Data Validation",
      "Charts & Dashboards",
      "Microsoft Office",
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      "Stakeholder Management",
      "Data Storytelling",
      "Requirement Analysis",
      "Presentation Skills",
      "Communication",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-card/30">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-title-accent">My</span> Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-portfolio">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              
              <div className="accent-line" />

              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">Other tools I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["GitHub", "Kaggle", "Jupyter Notebook", "Google Colab", "GenAI Tools", "ChatGPT", "Copilot"].map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full bg-secondary text-sm border border-border">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
