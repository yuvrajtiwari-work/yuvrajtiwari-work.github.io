import { ArrowDown, Download, Linkedin, Mail, Github } from "lucide-react";
import mlWordcloud from "@/assets/ml-wordcloud-bg.jpg";

const KaggleIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.233-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.378z"/>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/6 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left - Content */}
          <div className="flex-1 text-left">
            <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-up">
              Hello, I am
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-up stagger-1">
              Yuvraj <span className="text-gradient">Tiwari</span>
            </h1>
            
            <h2 className="text-lg md:text-xl text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-2">
              Data Analyst & ML Engineer
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mb-8 opacity-0 animate-fade-up stagger-3">
              Transforming complex data into actionable insights. IBM Certified Data Analyst 
              & Data Science Professional | Python, SQL, Power BI | Analytics & ML
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 opacity-0 animate-fade-up stagger-4">
              <a href="#contact" className="hero-btn hero-btn-primary">
                <Mail size={18} />
                Get In Touch
              </a>
              <a 
                href="/Yuvraj_Resume_2026.pdf" 
                download
                className="hero-btn hero-btn-outline"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 opacity-0 animate-fade-up stagger-5">
              <a
                href="https://linkedin.com/in/yuvraj-tiwari-31ba1739a"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:yuvrajtiwari.work@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/yuvrajtiwari-work"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.kaggle.com/yuvrajwork"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Kaggle"
              >
                <KaggleIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right - Word Cloud */}
          <div className="flex-1 flex items-center justify-center opacity-0 animate-fade-up stagger-2">
            <img 
              src={mlWordcloud} 
              alt="ML and Data Science tools word cloud" 
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-muted-foreground" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
