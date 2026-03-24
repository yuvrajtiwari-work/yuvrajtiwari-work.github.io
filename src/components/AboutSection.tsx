import { User, Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import sgsitsLogo from "@/assets/sgsits-logo.png";
import kvsLogo from "@/assets/kvs-logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-title-accent">About</span> Me
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Who am I */}
          <div className="card-portfolio">
            <div className="flex items-center gap-3 mb-4">
              <User className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">Who am I?</h3>
            </div>
            <div className="accent-line" />
            <h4 className="font-medium mb-3">A Data Analyst & ML Enthusiast</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              B.Tech graduate from SGSITS, Indore with hands-on experience in data analysis, 
              reporting, and machine learning. I transform complex datasets into actionable 
              insights and build intelligent solutions that drive business decisions.
            </p>
          </div>

          {/* Personal Info */}
          <div className="card-portfolio">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">Contact Info</h3>
            </div>
            <div className="accent-line" />
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">yuvrajtiwari.work@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">+91 6265890035</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">Indore, India</span>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="card-portfolio">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="accent-line" />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <img src={sgsitsLogo} alt="SGSITS" className="w-8 h-8 object-contain rounded shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary text-xs font-mono mb-1">2020 - 2024</p>
                  <h4 className="font-medium text-sm">B.Tech in Information Technology</h4>
                  <p className="text-muted-foreground text-xs">SGSITS, Indore • GPA: 7.52/10</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src={kvsLogo} alt="KV" className="w-8 h-8 object-contain rounded shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary text-xs font-mono mb-1">2018 - 2020</p>
                  <h4 className="font-medium text-sm">Senior High School (PCM)</h4>
                  <p className="text-muted-foreground text-xs">KV No.1, Indore • 93.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
