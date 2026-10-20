export const profile = {
  name: "Chitraksh Suri",
  role: "AI engineer",
  city: "Noida, India",
  email: "chitrakshsuri2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/chitrakshsuri",
  github: "https://github.com/ChitrakshSuri",
  resume: "https://drive.google.com/file/d/13BzM5TLUauc5uzSKYCE1PsEPwKDx20pQ/view?usp=drive_link",
  upwork: "https://www.upwork.com/freelancers/~015f55204594669b58",
  // link to the IEEE SCEECS paper; the research card becomes a link once this is filled in
  paper: "https://ieeexplore.ieee.org/document/11429907",
};

export type Project = {
  id: string;
  title: string;
  date: string; // display
  sort: string; // ISO, newest first
  blurb: string;
  tags: string[];
  live?: string;
  repo?: string;
  image?: string;
  art?: "pipeline" | "blog" | "mind" | "support" | "avatar" | "rag" | "medical";
  tone: "coral" | "yellow" | "mint" | "sky" | "lilac" | "pink";
};

// Newest first, ordered by last activity on GitHub.
const rawProjects: Project[] = [
  {
    id: "gpt-anatomy",
    title: "GPT Anatomy",
    date: "Oct 2026",
    sort: "2026-10-20",
    blurb:
      "A 10.8M-parameter GPT written from scratch in PyTorch, plus a 3D site that opens it up. Every attention weight, neuron and probability on screen comes from the trained model. Thread tuning made generation 8× faster on a throttled CPU.",
    tags: ["PyTorch", "FastAPI", "SSE", "Three.js", "Docker"],
    live: "https://gpt-anatomy.onrender.com",
    repo: "https://github.com/ChitrakshSuri/My-GPT",
    image: "/img/gpt-anatomy.png",
    tone: "yellow",
  },
  {
    id: "meetmind",
    title: "MeetMind",
    date: "Jun 2026",
    sort: "2026-06-14",
    blurb:
      "A meeting bot that joins Meet or Zoom, transcribes, and drafts Jira tickets with LLM self-correction. A 7-node LangGraph agent pauses for human review before anything is pushed, and survives restarts through Postgres checkpoints.",
    tags: ["LangGraph", "FastAPI", "React", "PostgreSQL", "GPT-4o"],
    live: "https://meetmind-green.vercel.app/",
    repo: "https://github.com/ChitrakshSuri/meetmind",
    image: "/img/meetmind-ui.jpg",
    tone: "sky",
  },
  {
    id: "blog-writer",
    title: "Agentic Blog Writer",
    date: "May 2026",
    sort: "2026-05-31",
    blurb:
      "Researches a topic, plans the article, writes every section in parallel with evidence grounding, then generates the diagrams. A router picks closed-book, hybrid or open-book research per topic.",
    tags: ["LangGraph", "Tavily", "Pydantic", "Gemini"],
    repo: "https://github.com/ChitrakshSuri/agentic-blog-writer",
    art: "blog",
    tone: "pink",
  },
  {
    id: "mental-health",
    title: "Lumira",
    date: "May 2026",
    sort: "2026-05-05",
    blurb:
      "An AI therapy companion and my final-year project: voice conversations with an empathetic therapist, session insights and secure accounts. It grew into the IEEE paper below.",
    tags: ["Next.js 15", "Vapi", "Gemini", "Firebase"],
    live: "https://final-year-project-mental-health.vercel.app",
    repo: "https://github.com/ChitrakshSuri/final-year-project-mental-health",
    image: "/img/lumira-home.jpg",
    tone: "mint",
  },
  {
    id: "support-agent",
    title: "Production AI Support Agent",
    date: "Jan 2026",
    sort: "2026-01-13",
    blurb:
      "Drop in PDFs and ask questions. Ingestion, chunking, embeddings and retrieval are orchestrated as Inngest functions over a Qdrant vector store.",
    tags: ["RAG", "Qdrant", "Inngest", "Streamlit"],
    live: "https://ai-support-agent.streamlit.app/",
    repo: "https://github.com/ChitrakshSuri/production-ai-support-agent",
    art: "support",
    tone: "lilac",
  },
  {
    id: "medical-chatbot",
    title: "Medical Chatbot: Vision & Voice",
    date: "Dec 2025",
    sort: "2025-12-19",
    blurb:
      "Speak your symptoms, upload a photo, get an answer read back to you in under ten seconds. LLaMA-4 Scout for vision, Whisper for speech, ElevenLabs for the voice.",
    tags: ["LLaMA-4", "Whisper", "ElevenLabs", "Gradio"],
    live: "https://huggingface.co/spaces/chitrakshsuri/ai-medical-chatbot-with-voice-and-vision",
    repo: "https://github.com/ChitrakshSuri/ai-medical-chatbot-with-vision-voice",
    image: "/img/medical.png",
    tone: "coral",
  },
  {
    id: "multi-rag",
    title: "Multi-Source RAG Agent",
    date: "Jul 2025",
    sort: "2025-07-15",
    blurb:
      "A LangChain agent that decides whether to answer from Wikipedia, Arxiv or an indexed documentation set, and cites where the answer came from.",
    tags: ["LangChain", "FAISS", "OpenAI", "Arxiv"],
    repo: "https://github.com/ChitrakshSuri/RAG-With-Multiple-Data-Source-Using-Langchain",
    art: "rag",
    tone: "yellow",
  },
  {
    id: "avatar-agent",
    title: "AI Avatar Agent",
    date: "Jun 2025",
    sort: "2025-06-26",
    blurb:
      "A conversational agent with a face: it joins a LiveKit room, listens, thinks with OpenAI and answers through a Tavus avatar in real time.",
    tags: ["LiveKit", "Tavus", "OpenAI", "Deepgram"],
    repo: "https://github.com/ChitrakshSuri/AI-Avatar-Agent-with-LiveKit-Tavus-Working",
    art: "avatar",
    tone: "pink",
  },
];

export const projects = [...rawProjects].sort((a, b) => b.sort.localeCompare(a.sort));

export const agentiq = {
  title: "AgentIQ",
  date: "Feb 2026 to now",
  company: "Prismberry Technologies",
  blurb:
    "An enterprise agent platform that lets people query production databases in plain language. A 9-stage text-to-SQL pipeline combines BM25, vector and foreign-key-graph retrieval, plans in two LLM stages and validates every query with sqlglot. A voice agent answers the same questions out loud.",
  points: [
    "Sarvam STT + OpenAI Realtime voice agent",
    "LiteLLM multi-provider routing on a LangGraph state machine",
    "Hybrid RAG with Cohere reranking, SSE streaming, Celery ingestion",
    "PII guardrails with Microsoft Presidio",
  ],
};

export const jobs = [
  {
    company: "Prismberry Technologies",
    role: "Software Engineer, AI / Backend",
    when: "Feb 2026 to now",
    where: "Noida",
    tone: "coral" as const,
    points: [
      "Built AgentIQ: a 9-stage text-to-SQL pipeline (hybrid BM25 + vector + FK-graph retrieval, two-stage LLM planning, sqlglot validation) and a voice agent for natural-language querying over production databases.",
      "Engineered multi-provider LLM orchestration with LiteLLM and a LangGraph state machine, hybrid RAG with Cohere reranking, SSE streaming, Celery ingestion and PII guardrails via Microsoft Presidio.",
    ],
  },
  {
    company: "The Ladder",
    role: "AI Automation Engineer",
    when: "Jul 2025 to Jan 2026",
    where: "Gurugram, hybrid",
    tone: "mint" as const,
    points: [
      "Built automation and RAG pipelines in n8n (40+ node workflows) with Apollo, Clay and Apify for lead generation, HubSpot CRM enrichment and AI personalization for enterprise clients.",
      "Developed inbound and outbound voice agents for sales and support, plus ad-creative pipelines (Midjourney, DALL·E, GPT) that cut manual effort and cost.",
    ],
  },
  {
    company: "Dreamable Inc.",
    role: "AI Agent Intern",
    when: "Jun to Aug 2025",
    where: "San Francisco Bay Area, remote",
    tone: "sky" as const,
    points: [
      "Built agents with n8n, LangChain and OpenAI for WhatsApp, LinkedIn and lead workflows.",
      "Designed RAG document Q&A over embeddings and vector databases; engineered voice agents with Whisper, ElevenLabs and Tavus.",
    ],
  },
];

export const skills = [
  { group: "Languages", tone: "yellow" as const, items: ["Python", "C / C++", "SQL"] },
  {
    group: "AI & ML",
    tone: "pink" as const,
    items: ["Agentic AI", "Generative AI", "Machine learning", "Deep learning", "NLP", "Multimodal AI", "Voice & speech AI", "Text-to-SQL", "Prompt engineering"],
  },
  {
    group: "LLMs & models",
    tone: "coral" as const,
    items: ["OpenAI GPT-4o", "Gemini", "LLaMA-4", "Groq", "vLLM", "Whisper", "Sarvam STT", "ElevenLabs", "Tavus"],
  },
  { group: "Vector DBs & retrieval", tone: "lilac" as const, items: ["FAISS", "Milvus", "Qdrant", "Pinecone", "BM25", "Hybrid search"] },
  {
    group: "AI frameworks",
    tone: "sky" as const,
    items: ["PyTorch", "LangChain", "LangGraph", "LiteLLM", "LlamaIndex", "LangSmith", "LiveKit Agents", "Pipecat", "Vapi", "Inngest", "Cohere rerank", "Multi-agent", "RAG"],
  },
  { group: "Automation & tools", tone: "mint" as const, items: ["n8n", "Relevance AI", "Apify", "Git", "Linux"] },
  {
    group: "Backend & infra",
    tone: "yellow" as const,
    items: ["FastAPI", "PostgreSQL", "Supabase", "Celery", "SSE streaming", "Docker", "Presidio", "sqlglot"],
  },
];

export const marquee = [
  "Agentic AI",
  "LLMs",
  "LangGraph",
  "RAG",
  "vLLM",
  "Vector DBs",
  "Voice agents",
  "Text-to-SQL",
  "FastAPI",
  "Machine learning",
  "PyTorch",
];

export const hire = {
  results: [
    { big: "90%", text: "lower costs for a mortgage broker, with an AI system that runs on its own", tone: "yellow" as const },
    { big: "18+ hrs", text: "saved every week for a hotel, by automating the manual work", tone: "mint" as const },
    { big: "3 days → <1s", text: "turnaround on a RAG-powered recommendation engine", tone: "sky" as const },
    { big: "7×", text: "content engagement in 60 days from an AI content pipeline", tone: "pink" as const },
  ],
  offers: [
    { title: "AI & voice agents", text: "Agents that book, answer and escalate: chat, WhatsApp or phone, with a human in the loop where it matters.", tone: "coral" as const },
    { title: "RAG pipelines", text: "Search and Q&A over your documents and databases, with retrieval that is actually relevant and answers that cite sources.", tone: "lilac" as const },
    { title: "Automation", text: "n8n and Python workflows for lead generation, CRM enrichment and the repetitive work your team does by hand.", tone: "mint" as const },
  ],
  production: {
    title: "Vibe-coded to production-ready",
    text: "You built it with AI and it works on your laptop. I turn it into something you can put customers on.",
    checks: [
      "Auth, secrets and input validation",
      "Error handling, retries and timeouts",
      "Tests for the parts that must not break",
      "Docker, CI and a real deploy",
      "Logging, tracing and cost / latency checks",
      "A short handover so your team can keep going",
    ],
  },
  trust: [
    "Rising Talent on Upwork",
    "5.0 on both rated jobs",
    "198 hours billed",
    "Replies within 0 to 4 hours",
    "30+ hrs a week",
    "Open to contract-to-hire",
  ],
  quote: {
    text: "It was very pleasant to work with Chitraksh. He is a very skilled developer, very good at communicating, and understood the problem and solved it quickly.",
    by: "Client, Upwork bug-fix job, June 2026",
  },
};
