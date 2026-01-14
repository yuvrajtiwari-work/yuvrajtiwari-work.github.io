import { ArrowDown, Download, Linkedin, Mail, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(0_72%_51%_/_0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220_50%_30%_/_0.1)_0%,_transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-up">
            Hello, I am
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up stagger-1">
            Yuvraj <span className="text-gradient">Tiwari</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-up stagger-2">
            Data Analyst & Machine Learning Enthusiast
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-up stagger-3">
            Transforming complex data into actionable insights. Experienced in analytics, 
            reporting, and building intelligent solutions with Python, SQL, and ML.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up stagger-4">
            <a href="#contact" className="hero-btn hero-btn-primary">
              <Mail size={18} />
              Get In Touch
            </a>
            <a 
              href="mailto:yuvrajtiwari.work@gmail.com" 
              className="hero-btn hero-btn-outline"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up stagger-5">
            <a
              href="https://linkedin.com/in/yuvrajtiwari"
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
              href="https://github.com/yuvrajtiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
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
