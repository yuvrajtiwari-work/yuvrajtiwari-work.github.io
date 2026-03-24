import { Award, ExternalLink, Trophy, BookOpen, Code, Terminal } from "lucide-react";
import excelBasicsCert from "@/assets/excel-basics-certificate.jpg";
import powerBiCert from "@/assets/power-bi-certificate.jpg";
import vertexAiCert from "@/assets/vertex-ai-studio-certificate.jpg";
import lookerStudioCert from "@/assets/looker-studio-certificate.jpg";
import mlopsVertexCert from "@/assets/mlops-vertex-ai-certificate.jpg";
import ibmDataAnalystCert from "@/assets/ibm-data-analyst-certificate.jpg";
import ibmDataScienceCert from "@/assets/ibm-data-science-certificate.jpg";
import sqlBasicCert from "@/assets/sql-basic-certificate.jpg";
import sqlIntermediateCert from "@/assets/sql-intermediate-certificate.jpg";
import sqlAdvancedCert from "@/assets/sql-advanced-certificate.jpg";
import pythonBasicCert from "@/assets/python-basic-certificate.jpg";
import kaggleDataCleaning from "@/assets/kaggle-data-cleaning.png";
import kaggleIntroML from "@/assets/kaggle-intro-ml.png";
import kagglePython from "@/assets/kaggle-python.png";
import kagglePandas from "@/assets/kaggle-pandas.png";
import kaggleIntroProgramming from "@/assets/kaggle-intro-programming.png";
import leetcodeSql50 from "@/assets/leetcode-sql50.png";
import leetcodePandas from "@/assets/leetcode-pandas.png";
import hackerrankSqlBadge from "@/assets/hackerrank-sql-badge.png";
import hackerrankPythonBadge from "@/assets/hackerrank-python-badge.png";
const professionalCertifications = [
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM (Coursera)",
    date: "05 Mar, 2026",
    id: "2HSBR1ZANYXS",
    link: "https://coursera.org/verify/professional-cert/2HSBR1ZANYXS",
    image: ibmDataScienceCert,
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    issuer: "IBM (Coursera)",
    date: "26 Feb, 2026",
    id: "H3PA2HREYELN",
    link: "https://coursera.org/verify/professional-cert/H3PA2HREYELN",
    image: ibmDataAnalystCert,
  },
];

const courseCertifications = [
  {
    title: "Excel Basics for Data Analysis",
    issuer: "IBM (Coursera)",
    date: "25 Jan, 2026",
    id: "9WD8A070ZYK4",
    link: "https://coursera.org/verify/9WD8A070ZYK4",
    image: excelBasicsCert,
  },
  {
    title: "Data Analysis and Visualization with Power BI",
    issuer: "Microsoft (Coursera)",
    date: "01 Feb, 2026",
    id: "YL1GSNM57SKQ",
    link: "https://coursera.org/verify/YL1GSNM57SKQ",
    image: powerBiCert,
  },
  {
    title: "Introduction to Vertex AI Studio",
    issuer: "Google Cloud (Coursera)",
    date: "13 Feb, 2026",
    id: "K9H11PGRQKL1",
    link: "https://coursera.org/verify/K9H11PGRQKL1",
    image: vertexAiCert,
  },
  {
    title: "Looker Studio Essentials",
    issuer: "Google Cloud (Coursera)",
    date: "13 Feb, 2026",
    id: "DMU64NT4HJTJ",
    link: "https://coursera.org/verify/DMU64NT4HJTJ",
    image: lookerStudioCert,
  },
  {
    title: "MLOps with Vertex AI: Model Evaluation",
    issuer: "Google Cloud (Coursera)",
    date: "13 Feb, 2026",
    id: "S6830P4ZCTYM",
    link: "https://coursera.org/verify/S6830P4ZCTYM",
    image: mlopsVertexCert,
  },
];

const hackerrankCerts = [
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "22 Jan, 2026",
    id: "903428A4F64C",
    link: "https://www.hackerrank.com/certificates/903428a4f64c",
    image: sqlBasicCert,
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "24 Jan, 2026",
    id: "354064326EE0",
    link: "https://www.hackerrank.com/certificates/354064326ee0",
    image: sqlIntermediateCert,
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "26 Jan, 2026",
    id: "B197F8AFBAF5",
    link: "https://www.hackerrank.com/certificates/b197f8afbaf5",
    image: sqlAdvancedCert,
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "30 Jan, 2026",
    id: "C371312ABC10",
    link: "https://www.hackerrank.com/certificates/c371312abc10",
    image: pythonBasicCert,
  },
];

const kaggleCerts = [
  {
    title: "Intro to Programming",
    issuer: "Kaggle",
    date: "19 Mar, 2026",
    id: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/yuvraj/intro-to-programming",
    image: kaggleIntroProgramming,
  },
  {
    title: "Data Cleaning",
    issuer: "Kaggle",
    date: "17 Mar, 2026",
    id: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/yuvraj/data-cleaning",
    image: kaggleDataCleaning,
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "13 Mar, 2026",
    id: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/yuvraj/intro-to-machine-learning",
    image: kaggleIntroML,
  },
  {
    title: "Python",
    issuer: "Kaggle",
    date: "12 Mar, 2026",
    id: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/yuvraj/python",
    image: kagglePython,
  },
  {
    title: "Pandas",
    issuer: "Kaggle",
    date: "26 Feb, 2026",
    id: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/yuvraj/pandas",
    image: kagglePandas,
  },
];

interface CertCardProps {
  cert: {
    title: string;
    issuer: string;
    date: string;
    id: string;
    link: string;
    image: string;
  };
}

const CertCard = ({ cert }: CertCardProps) => (
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="card-portfolio group cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img
        src={cert.image}
        alt={`${cert.title} Certificate`}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
        <span className="flex items-center gap-2 text-sm text-primary font-medium">
          <ExternalLink size={16} />
          View Certificate
        </span>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-primary/10">
        <Award className="text-primary" size={20} />
      </div>
      <div>
        <h3 className="font-bold group-hover:text-primary transition-colors">
          {cert.title}
        </h3>
        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
        <p className="text-xs text-muted-foreground mt-1">Earned on: {cert.date}</p>
        <p className="text-xs font-mono text-primary/70 mt-1">ID: {cert.id}</p>
      </div>
    </div>
  </a>
);

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-card/30">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-title-accent">My</span> Certifications
        </h2>

        {/* Professional Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="text-primary" size={22} />
            <h3 className="text-lg font-bold">Professional Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {professionalCertifications.map((cert, index) => (
              <CertCard key={index} cert={cert} />
            ))}
          </div>
        </div>

        {/* Course Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-primary" size={22} />
            <h3 className="text-lg font-bold">Course Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {courseCertifications.map((cert, index) => (
              <CertCard key={index} cert={cert} />
            ))}
          </div>
        </div>

        {/* Platform Badges & Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-primary" size={22} />
            <h3 className="text-lg font-bold">Platform Badges & Achievements</h3>
          </div>

          {/* HackerRank Certs */}
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 ml-1">HackerRank Certifications</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto mb-8">
            {hackerrankCerts.map((cert, index) => (
              <CertCard key={index} cert={cert} />
            ))}
          </div>

          {/* Kaggle Courses - Bullet list with image on right */}
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 ml-1">Kaggle Courses</h4>
          <div className="max-w-4xl mx-auto mb-8 space-y-0 divide-y divide-border rounded-lg overflow-hidden border border-border">
            {kaggleCerts.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 bg-card hover:bg-muted/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <h4 className="font-bold group-hover:text-primary transition-colors">{cert.title}</h4>
                </div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-12 h-12 rounded-lg object-cover shrink-0 ml-4"
                />
              </a>
            ))}
          </div>

          {/* Badges Grid - 2 HackerRank + 2 LeetCode */}
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 ml-1">Badges</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a href="https://www.hackerrank.com/profile/yuvrajtiwari_wo1" target="_blank" rel="noopener noreferrer" className="card-portfolio group cursor-pointer flex flex-col items-center text-center">
              <div className="w-32 h-32 overflow-hidden rounded-lg mb-3">
                <img src={hackerrankSqlBadge} alt="HackerRank SQL Badge" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h4 className="font-bold text-sm group-hover:text-primary transition-colors">SQL Gold Badge</h4>
              <p className="text-xs text-muted-foreground">HackerRank · ⭐⭐⭐⭐⭐</p>
            </a>
            <a href="https://www.hackerrank.com/profile/yuvrajtiwari_wo1" target="_blank" rel="noopener noreferrer" className="card-portfolio group cursor-pointer flex flex-col items-center text-center">
              <div className="w-32 h-32 overflow-hidden rounded-lg mb-3">
                <img src={hackerrankPythonBadge} alt="HackerRank Python Badge" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Python Bronze Badge</h4>
              <p className="text-xs text-muted-foreground">HackerRank · ⭐⭐</p>
            </a>
            <a href="https://leetcode.com/u/Yuvraj_Tiwari_Work/" target="_blank" rel="noopener noreferrer" className="card-portfolio group cursor-pointer flex flex-col items-center text-center">
              <div className="w-32 h-32 overflow-hidden rounded-lg mb-3">
                <img src={leetcodeSql50} alt="LeetCode SQL 50 Badge" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h4 className="font-bold text-sm group-hover:text-primary transition-colors">SQL 50</h4>
              <p className="text-xs text-muted-foreground">LeetCode</p>
            </a>
            <a href="https://leetcode.com/u/Yuvraj_Tiwari_Work/" target="_blank" rel="noopener noreferrer" className="card-portfolio group cursor-pointer flex flex-col items-center text-center">
              <div className="w-32 h-32 overflow-hidden rounded-lg mb-3">
                <img src={leetcodePandas} alt="LeetCode Pandas Badge" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Introduction to Pandas</h4>
              <p className="text-xs text-muted-foreground">LeetCode</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
