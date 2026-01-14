import { Film, Stethoscope, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    icon: Film,
    title: "Movie Recommendation System",
    type: "Personal Project",
    description:
      "Content-based recommendation engine using TMDB Movies Dataset (5000 movies) with cosine similarity for personalized movie suggestions.",
    highlights: [
      "Engineered combined 'tags' feature (genres, cast, crew, overview) for enhanced similarity detection",
      "Applied CountVectorizer and cosine similarity to recommend top-5 similar movies",
      "Integrated TMDB API for dynamic poster fetching with interactive Streamlit UI",
    ],
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "GitHub"],
    github: "https://github.com/yuvrajtiwari-work",
  },
  {
    icon: Stethoscope,
    title: "Kidney Stone Detection",
    type: "Academic Project",
    description:
      "Deep learning solution for kidney stone detection from CT-scan images using VGG-16 architecture with 99% accuracy.",
    highlights: [
      "Collected and preprocessed 8,000–10,000 CT-scan images with augmentation",
      "Built and trained VGG-16 based model using TensorFlow and Keras",
      "Achieved 99% accuracy with comprehensive evaluation metrics",
    ],
    tools: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "Google Colab"],
    github: "https://github.com/yuvrajtiwari-work",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-title-accent">My</span> Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-portfolio group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <project.icon className="text-primary" size={24} />
                </div>
                <span className="text-xs text-primary font-mono">{project.type}</span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="accent-line" />

              {/* Highlights */}
              <ul className="space-y-2 my-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                    <span className="text-primary mt-0.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs text-primary font-mono">
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
