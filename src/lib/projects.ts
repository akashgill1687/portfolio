export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "labor-timeclock-platform",
    title: "Labor & Time Clock Platform",
    summary:
      "Compliance-critical labor and time-clock system spanning Go APIs, PostgreSQL, and a React UI with shift and break tracking.",
    stack: ["Go", "PostgreSQL", "Gin", "GORM", "React", "Kubernetes", "GitHub Actions", "Datadog"],
    highlights: [
      "Owned API design and backend architecture for time-clock workflows",
      "Implemented break management and session integrity patterns",
      "Shipped through CI/CD to staging and production with operational visibility",
    ],
  },
  {
    slug: "cicd-infra-automation",
    title: "CI/CD & Infrastructure Automation",
    summary:
      "Deployment pipelines and production workflows optimized for reliability and repeatable releases across environments.",
    stack: ["GitHub Actions", "Docker", "Kubernetes", "AWS", "Datadog"],
    highlights: [
      "Improved release consistency with pipeline-driven deployments",
      "Standardized staging/prod workflows to reduce risk during shipping",
      "Strengthened service operability with health checks and monitoring patterns",
    ],
  },
  {
    slug: "audit-logging-compliance",
    title: "Audit Logging & Compliance",
    summary:
      "Audit logging foundations for traceability and operational accountability in compliance-sensitive domains.",
    stack: ["Go", "PostgreSQL", "GORM", "Kubernetes"],
    highlights: [
      "Designed a practical audit logging approach for key workflow events",
      "Kept implementation lightweight while preserving traceability",
      "Aligned logging patterns with long-term maintainability",
    ],
  },
  {
    slug: "ai-assistant-labor-dashboard",
    title: "AI Assistant for Labor Dashboard",
    summary:
      "Early-stage design and technical analysis for an AI assistant to help merchants query dashboards and improve scheduling efficiency.",
    stack: ["Python", "RAG", "LangChain", "LLM Orchestration"],
    highlights: [
      "Explored multi-agent / orchestration patterns for product workflows",
      "Focused on practical UX: query, navigation, and decision support",
      "Prototyped workflows and clarified integration boundaries",
    ],
  },
];