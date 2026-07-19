export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  status: "live" | "repo";
  liveUrl?: string;
  repoUrl: string;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "computer-vision",
    title: "Computer Vision",
    description:
      "MNIST digit classifier — a trained neural network model paired with an app for handwritten digit recognition.",
    tech: ["Python", "TensorFlow/Keras", "Computer Vision"],
    status: "repo",
    repoUrl: "#",
  },
  {
    slug: "gemini-to-word",
    title: "GEMINI to WORD",
    description:
      "A React + TypeScript tool that converts AI-generated content into Word documents, with full math support via KaTeX/MathML rendering.",
    tech: ["React", "TypeScript", "KaTeX", "MathML"],
    status: "repo",
    repoUrl: "#",
  },
  {
    slug: "ibm-cv-portfolio-genai",
    title: "IBM CV Portfolio with GenAI",
    description:
      "A Streamlit-based GenAI chatbot portfolio, containerized with Docker for consistent, reproducible deployment.",
    tech: ["Python", "Streamlit", "Generative AI", "Docker"],
    status: "repo",
    repoUrl: "#",
  },
  {
    slug: "ibm-watson-voice-assistant",
    title: "IBM Watson Voice Assistant",
    description:
      "A Flask voice assistant integrating GPT-3 for natural conversation, containerized with Docker.",
    tech: ["Python", "Flask", "GPT-3", "Docker"],
    status: "repo",
    repoUrl: "#",
    note: "Built on an IBM guided project, extended with custom voice + GPT-3 integration.",
  },
  {
    slug: "insta-marketer",
    title: "Insta Marketer (AI Auto Marketer)",
    description:
      "An n8n-based Instagram automation system combining Gemini and Google Sheets to plan and publish content on autopilot.",
    tech: ["n8n", "Gemini API", "Google Sheets", "Automation"],
    status: "repo",
    repoUrl: "#",
  },
  {
    slug: "linkedin-post-generator",
    title: "LinkedIn Post Generator",
    description:
      "An automated pipeline that generates and schedules daily LinkedIn posts on a recurring cron cycle.",
    tech: ["Python", "LLM APIs", "Automation", "Cron"],
    status: "repo",
    repoUrl: "#",
  },
  {
    slug: "openmaic",
    title: "OPENMAIC",
    description:
      "An AI application built on Next.js 16 / React 19 with LangGraph-orchestrated agents, configured for both Docker and Vercel deployment.",
    tech: ["Next.js", "React 19", "LangGraph", "Docker"],
    status: "repo",
    repoUrl: "#",
    note: "Extended from the open-source OpenMAIC project.",
  },
  {
    slug: "past-papers-downloader",
    title: "Past Papers Downloader",
    description:
      "A Flask web dashboard for browsing and downloading academic past papers.",
    tech: ["Python", "Flask"],
    status: "repo",
    repoUrl: "#",
  },
  {
    slug: "react-portfolio",
    title: "React Portfolio",
    description:
      "An earlier personal portfolio build on React, Vite, and Tailwind — superseded by this site, kept as an archive.",
    tech: ["React", "Vite", "Tailwind CSS"],
    status: "repo",
    repoUrl: "#",
  },
  {
    slug: "reddit-lens",
    title: "Reddit API Access (Redit Lens)",
    description:
      "A single-page tool for browsing Reddit content through the Reddit API, previously deployed to Firebase.",
    tech: ["JavaScript", "Reddit API", "Firebase"],
    status: "live",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "voice-clone-huggingface",
    title: "Voice Clone (HuggingFace)",
    description:
      "XTTS-v2 voice cloning deployed as a Hugging Face Space for on-demand text-to-speech in a cloned voice.",
    tech: ["Python", "XTTS-v2", "Hugging Face Spaces"],
    status: "live",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "watson-nlp-emotions",
    title: "Watson NLP Emotions App",
    description:
      "A Flask app that analyzes user-submitted text to detect emotional tone using IBM Watson NLP.",
    tech: ["Python", "Flask", "IBM Watson NLP"],
    status: "repo",
    repoUrl: "#",
    note: "IBM guided project.",
  },
  {
    slug: "whatsapp-ai-marketer",
    title: "WhatsApp AI Marketer",
    description:
      "A full-stack WhatsApp marketing automation platform built for a tutoring-industry client, handling messaging campaigns end to end.",
    tech: ["React", "Node.js", "Express", "Selenium"],
    status: "repo",
    repoUrl: "#",
  },
  {
    slug: "datesheet-checker",
    title: "Datesheet Checker",
    description:
      "A Python app for checking and tracking exam datesheets, deployed on Google Cloud Platform.",
    tech: ["Python", "GCP"],
    status: "live",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "md-to-docx",
    title: "Free MD ⇄ DOCX Converter",
    description:
      "A free, bidirectional Markdown <-> Word converter — Astro frontend on Cloudflare Pages, Flask + Pandoc backend on Google Cloud Run.",
    tech: ["Astro", "Flask", "Pandoc", "Cloudflare Pages", "Google Cloud Run"],
    status: "live",
    liveUrl: "https://free-md-to-docx.pages.dev",
    repoUrl: "https://github.com/AsadAliQuant/md-to-docx",
  },
  {
    slug: "md-to-pdf",
    title: "md-to-pdf",
    description:
      "A self-contained Flask app with an embedded web UI for converting Markdown files into PDF documents.",
    tech: ["Python", "Flask"],
    status: "repo",
    repoUrl: "#",
  },
];
