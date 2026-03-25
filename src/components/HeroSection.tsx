import { ArrowDown, Download, Linkedin, Mail, Github } from "lucide-react";
import mlWordcloud from "@/assets/ml-wordcloud-bg.jpg";

const KaggleIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.233-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.378z"/>
  </svg>
);

const HackerRankIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.886-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.117-.258-.258-.258h-1.2c-.141 0-.258.115-.258.258v9.886c0 .143.117.258.258.258h1.2c.141 0 .258-.115.258-.258v-3.875h4.074v3.875c0 .143.115.258.258.258h1.2c.143 0 .258-.115.258-.258V7.057c0-.143-.115-.258-.258-.258h-1.2z"/>
  </svg>
);

const LeetCodeIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
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
            
            <h2 className="text-sm md:text-base text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-2">
              Data Analyst | Aspiring Machine Learning & MLOps Engineer | Python • SQL • Snowflake • Power BI | B.Tech IT '24 | IBM Certified Data Analyst & Data Science Professional
            </h2>

            {/* Socials & Platforms side by side with CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-6 opacity-0 animate-fade-up stagger-3">
              {/* Socials + Get In Touch */}
              <div className="flex flex-col">
                <p className="text-xs font-mono text-muted-foreground mb-2">Socials</p>
                <div className="flex items-center gap-4 mb-4">
                  <a href="https://linkedin.com/in/yuvraj-tiwari-31ba1739a" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
                  <a href="mailto:yuvrajtiwari.work@gmail.com" className="social-icon" aria-label="Email"><Mail size={20} /></a>
                  <a href="https://github.com/yuvrajtiwari-work" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><Github size={20} /></a>
                </div>
                <a href="#contact" className="hero-btn hero-btn-primary">
                  <Mail size={18} />
                  Get In Touch
                </a>
              </div>

              {/* Platforms + Download CV */}
              <div className="flex flex-col">
                <p className="text-xs font-mono text-muted-foreground mb-2">Platforms</p>
                <div className="flex items-center gap-4 mb-4">
                  <a href="https://www.kaggle.com/yuvrajwork" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Kaggle"><KaggleIcon size={20} /></a>
                  <a href="https://www.hackerrank.com/profile/yuvrajtiwari_wo1" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="HackerRank"><HackerRankIcon size={20} /></a>
                  <a href="https://leetcode.com/u/Yuvraj_Tiwari_Work/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode"><LeetCodeIcon size={20} /></a>
                </div>
                <a href="/Yuvraj_Resume_2026.pdf" download className="hero-btn hero-btn-outline">
                  <Download size={18} />
                  Download CV
                </a>
              </div>
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
