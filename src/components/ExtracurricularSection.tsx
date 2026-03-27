import { Award } from "lucide-react";

const activities = [
  {
    title: "Graphic Design Lead",
    organization: "Club Kshitij (Cultural Club)",
    subtitle: "Associated with SGSITS, Indore",
    period: "Mar 2022 – Apr 2024 · 2 yrs 2 mos",
    category: "Arts and Culture",
  },
  {
    title: "Commander",
    organization: "NATIONAL CADET CORPS - India",
    subtitle: "Associated with KV No.1, Indore",
    
    period: "Apr 2016 – Mar 2018 · 2 yrs",
    category: "Govt. Youth Organisation",
  },
];

const ExtracurricularSection = () => {
  return (
    <section id="extracurricular" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-title-accent">Extra</span>curricular
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {activities.map((item, index) => (
            <div key={index} className="card-portfolio">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                   <p className="text-sm text-muted-foreground">{item.organization}</p>
                   {item.subtitle && <p className="text-xs text-muted-foreground">{item.subtitle}</p>}
                   
                   <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
