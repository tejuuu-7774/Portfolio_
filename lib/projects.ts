export type ProjectStackItem = {
  label: string;
  value: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: ProjectStackItem[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  status?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "LifeLens",
    description:
      "AI journaling system that captures thoughts, detects emotions, and helps users rediscover meaningful memories through intelligent retrieval.",
    techStack: [
      { label: "Frontend", value: "React + Tailwind" },
      { label: "Backend", value: "Node.js + Express" },
      { label: "Database", value: "MongoDB + Mongoose" },
      { label: "Auth", value: "JWT" },
      { label: "AI", value: "Groq LLaMA 3.1" },
      { label: "Deploy", value: "Vercel + Render" },
    ],
    githubUrl: "https://github.com/tejuuu-7774/LIFELENS-01.git",
    liveUrl: "https://lifelens-01.vercel.app",
    imageUrl: "/projects/Lifelens.png",
    status: ["Personal Project"],
  },
  {
    id: 2,
    title: "Habitus",
    description:
      "Habit tracking system with streak logic, filtering, and daily tracking designed to improve consistency through clean and focused user experience.",
    techStack: [
      { label: "Frontend", value: "React + Tailwind" },
      { label: "Backend", value: "Node.js + Express" },
      { label: "Database", value: "MongoDB + Mongoose" },
      { label: "Auth", value: "JWT cookies" },
      { label: "AI", value: "Groq LLaMA" },
    ],
    githubUrl: "https://github.com/tejuuu-7774/HABITUS.git",
    liveUrl: "https://habitus-six.vercel.app/",
    imageUrl: "/projects/Habitus.jpg",
    status: ["Personal Project"],
  },
  {
    id: 3,
    title: "AstraAI",
    description:
      "Document-grounded AI system using RAG to answer questions from PDFs with a hybrid retrieval pipeline and controlled response handling.",
    techStack: [
      { label: "Frontend", value: "Streamlit" },
      { label: "Backend", value: "FastAPI + Uvicorn" },
      { label: "RAG", value: "LangChain + ChromaDB" },
      { label: "Embeddings", value: "HuggingFace API" },
      { label: "LLM", value: "Groq" },
      { label: "Parsing", value: "PyMuPDF" },
    ],
    githubUrl: "https://github.com/tejuuu-7774/ASTRA-AI.git",
    liveUrl: "https://astra-ai-ui.onrender.com/",
    imageUrl: "/projects/AstraAI.png",
    status: ["Personal Project"],
  },
  {
    id: 4,
    title: "CRAVO",
    description:
      "Personalized diet planner that generates daily meal plans using real recipe data, tailored to user goals like weight loss, gain, or maintenance.",
    techStack: [
      { label: "Frontend", value: "React + Tailwind" },
      { label: "Motion", value: "Framer Motion" },
      { label: "Routing", value: "React Router" },
      { label: "Auth", value: "Firebase" },
      { label: "API", value: "Spoonacular" },
      { label: "Deploy", value: "Vercel" },
    ],
    githubUrl: "https://github.com/tejuuu-7774/Cravo-diet-planner.git",
    liveUrl: "https://cravo-diet-planner.vercel.app/",
    imageUrl: "/projects/Cravo.png",
    status: ["Personal Project"],
  },
  {
    id: 5,
    title: "AI Resume Screening",
    description:
      "Automated resume screening workflow that compares candidates with job descriptions using AI and sends intelligent email responses.",
    techStack: [
      { label: "Automation", value: "n8n" },
      { label: "AI", value: "Groq API" },
      { label: "Email", value: "SMTP automation" },
      { label: "Interface", value: "HTML + CSS" },
    ],
    githubUrl: "https://github.com/tejuuu-7774/ai-resume-screening-n8n.git",
    imageUrl: "/projects/ResumeAI.png",
    status: ["Personal Project"],
  },
  {
    id: 6,
    title: "UniHive",
    description:
      "Student-first marketplace that lets verified students across India buy, sell, and offer services inside a trusted peer-to-peer campus ecosystem.",
    techStack: [
      { label: "Frontend", value: "Next.js + TypeScript" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Backend", value: "Node.js + Express" },
      { label: "API", value: "REST architecture" },
      { label: "Database", value: "MongoDB + Mongoose" },
    ],
    githubUrl: "https://github.com/tejuuu-7774/unihive.git",
    status: ["Personal Project", "Ongoing"],
  },
  {
    id: 7,
    title: "Exam Question Difficulty Predictor",
    description:
      "Gen AI group project focused on predicting exam question difficulty using ML-driven analysis and an interactive Streamlit interface.",
    techStack: [
      { label: "App", value: "Streamlit" },
      { label: "ML", value: "XGBoost + scikit-learn" },
      { label: "Language", value: "Python 3.10+" },
      { label: "Data", value: "Pandas + NumPy" },
      { label: "Viz", value: "Matplotlib + Seaborn" },
    ],
    githubUrl: "https://github.com/RISHIK92/genai-project.git",
    liveUrl: "https://exam-question-analysis.streamlit.app/",
    imageUrl: "/projects/gen_ai.png",
    status: ["Group Project"],
  },
  {
    id: 8,
    title: "Kerala Residential Electricity Anomaly Detection",
    description:
      "District-level DVA project for identifying high-risk residential electricity anomalies in Kerala and helping authorities prioritize inspections proactively.",
    techStack: [
      { label: "Analysis", value: "Google Sheets" },
      { label: "Dashboard", value: "Pivot Tables" },
      { label: "Focus", value: "Anomaly detection" },
      { label: "Scope", value: "January 2023 residential data" },
    ],
    githubUrl: "https://github.com/aaneesa/Section-D_Group-3_Intelligent_abnormal_electricity_usage.git",
    imageUrl: "/projects/electricity_analomy.png",
    status: ["Group Project"],
  },
  {
    id: 9,
    title: "PayShield",
    description:
      "Ongoing group project building a digital banking system with fraud detection, secure authentication, and a full-stack TypeScript workflow.",
    techStack: [
      { label: "Frontend", value: "React + Tailwind" },
      { label: "Backend", value: "Node.js + Express" },
      { label: "Language", value: "TypeScript" },
      { label: "Database", value: "MongoDB + Mongoose" },
      { label: "Auth", value: "JWT + bcrypt" },
      { label: "Build", value: "Vite" },
    ],
    githubUrl: "https://github.com/Dhanvin1520/PayShield-Digital-Banking-System.git",
    status: ["Group Project", "Ongoing"],
  },
];
