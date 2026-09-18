import { Icons } from "@/components/icons";
import {
  BrainCircuit,
  FolderCode,
  House,
  Microscope,
  PenLine,
} from "lucide-react";

export const DATA = {
  name: "Mohammad Farhadi, MD",
  initials: "MF",
  url: "https://fsunroo.com",
  location: "Shiraz, Iran",
  description:
    "Physician, clinical AI researcher, and health-technology founder building reliable systems for safer clinical decisions.",
  summary:
    "I work across clinical medicine, applied AI, and production software—turning complex clinical requirements into evidence-linked tools that can operate inside real hospital workflows.",
  avatarUrl: "https://avatars.githubusercontent.com/u/48972765?v=4",
  ogImage: "/og_image.png",
  resumeUrl: "/Mohammad-Farhadi-Resume.pdf",
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/clinical-ai", icon: BrainCircuit, label: "Clinical AI" },
    { href: "/research", icon: Microscope, label: "Research" },
    { href: "/projects", icon: FolderCode, label: "Projects" },
    { href: "/blog", icon: PenLine, label: "Writing" },
  ],
  contact: {
    email: "fsunroo@gmail.com",
    telegram: "@fsunroo",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Fsunroo",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/fsunroo",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:fsunroo@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/fsunroo",
        icon: Icons.telegram,
        navbar: true,
      },
    },
  },
} as const;

export const PROOF_POINTS = [
  { value: "43", label: "hospitals" },
  { value: "3,500+", label: "physicians supported" },
  { value: "700k", label: "patients reached" },
  { value: "1.2M+", label: "safety alerts processed" },
] as const;

export const CASE_STUDIES = [
  {
    slug: "synrx",
    eyebrow: "Medication safety",
    title: "SynRx",
    summary:
      "An explainable decision-support system that evaluates drug interactions, contraindications, and dose mismatches in context.",
    problem:
      "Medication alerts are only useful when they are timely, specific, and grounded in the patient's clinical context. Generic rules create noise and erode clinician trust.",
    role:
      "Co-founder and technical lead, responsible for clinical translation, system architecture, inference services, evaluation, deployment, and hospital integration.",
    system:
      "Python and FastAPI services, MySQL, RabbitMQ, Docker, and a retrieval-augmented evidence pipeline built from verified pharmacology sources.",
    scale: "1.2M+ medication-safety alerts across a network serving 43 hospitals.",
    evidence:
      "Traceable source material, curated clinical rules, validation datasets, and mixed-methods implementation evaluation using RE-AIM and CFIR.",
    outcome:
      "Patient- and context-specific guidance embedded in prescribing workflows, with an auditable path from evidence to alert.",
    tags: ["Clinical decision support", "RAG", "FastAPI", "Medication safety"],
  },
  {
    slug: "longitudinal-labs",
    eyebrow: "Temporal clinical reasoning",
    title: "Longitudinal laboratory intelligence",
    summary:
      "A clinical data pipeline and interpretable reasoning layer for detecting meaningful changes across a patient's laboratory trajectory.",
    problem:
      "Laboratory results arrive from heterogeneous systems as isolated values. Clinicians need reliable trajectories connected to medication exposure and patient context.",
    role:
      "Architected the ingestion model, normalization logic, incremental synchronization, validation, monitoring, and temporal reasoning layer.",
    system:
      "Patient- and admission-level time series with idempotent upserts, batch processing, data-quality checks, and interpretable risk signals.",
    scale: "2M+ laboratory records spanning more than 50 biomarkers.",
    evidence:
      "Source-level validation, explicit temporal alignment, reproducible transformations, and clinician-interpretable signal logic.",
    outcome:
      "A foundation for earlier recognition of AKI, DILI, infection, and evolving clinical deterioration without hiding the underlying trajectory.",
    tags: ["Time series", "Data engineering", "AKI", "DILI"],
  },
  {
    slug: "hospital-integration",
    eyebrow: "Clinical infrastructure",
    title: "Hospital-system integration",
    summary:
      "A data-integration layer that turns fragmented legacy hospital systems into a consistent longitudinal clinical model.",
    problem:
      "Prescriptions, laboratory results, safety events, clinical records, and financial data live in incompatible systems with inconsistent identifiers and semantics.",
    role:
      "Designed SynVx's integration architecture and translated operational and clinical requirements into resilient production services.",
    system:
      "Incremental extract-and-normalize pipelines, unified data models, asynchronous orchestration, observability, and SQL/Metabase decision dashboards.",
    scale: "Multi-hospital infrastructure supporting clinical and operational analysis across the Synara network.",
    evidence:
      "Validated models, monitored pipelines, auditable transformations, and dashboards exposing prescribing, safety, laboratory, and financial trends.",
    outcome:
      "A dependable data layer for clinical decision support, research, and hospital-level operational visibility.",
    tags: ["Interoperability", "ETL", "Observability", "Clinical analytics"],
  },
] as const;

export type PublicationStatus = "Published" | "Accepted" | "Preprint" | "Under review";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: PublicationStatus;
  doi?: string;
  pdf?: string;
  citation: string;
  note?: string;
};

const scholar = (title: string) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;

export const PUBLICATIONS: Publication[] = [
  {
    title: "Impact of COVID-19 on survival and relapse in pediatric cancer patients",
    authors: "Abdipour Mehrian SR, Pishdad P, Mansouri Z, et al., including Farhadi M",
    venue: "Archives of Pediatric Infectious Diseases, 14(4)",
    year: 2026,
    status: "Published",
    doi: "https://doi.org/10.5812/apid-160947",
    pdf: "https://brieflands.com/journals/apid/articles/160947.pdf",
    citation: scholar("Impact of COVID-19 on survival and relapse in pediatric cancer patients"),
  },
  {
    title: "Network signatures of oncology prescribing patterns: Insights from a decade of hospital data",
    authors: "Abbasi A, Amanati A, Jaafar Nejad A, Farhadi M, et al.",
    venue: "Annals of Oncology",
    year: 2025,
    status: "Published",
    citation: scholar("Network signatures of oncology prescribing patterns Insights from a decade of hospital data"),
  },
  {
    title: "The effect of aminophylline on renal function after liver transplant surgery",
    authors: "Mohammad Hossein E, Pirahmadi A, Abbasi A, Khosravi MB, Valipour A, Farhadi M",
    venue: "Journal of Anesthesiology and Pain, 15(4), 44–56",
    year: 2025,
    status: "Published",
    citation: scholar("The effect of aminophylline on renal function after liver transplant surgery"),
  },
  {
    title: "Correlation between clinical presentation and brain CT findings in acute dizziness",
    authors: "Abbasi A, Farhadi M, Sadegh R, et al.",
    venue: "medRxiv",
    year: 2026,
    status: "Preprint",
    doi: "https://doi.org/10.64898/2026.06.25.26356549",
    pdf: "https://www.medrxiv.org/content/10.64898/2026.06.25.26356549v1.full.pdf",
    citation: scholar("Correlation between clinical presentation and brain CT findings in acute dizziness"),
  },
  {
    title: "Predictive factors of abnormal brain CT scan in patients with opioid poisoning",
    authors: "Abbasi A, Farhadi M, Sadegh R, et al.",
    venue: "Medical Journal of the Islamic Republic of Iran",
    year: 2026,
    status: "Accepted",
    citation: scholar("Predictive factors of abnormal brain CT scan in patients with opioid poisoning"),
  },
  {
    title: "Real-world implementation and evaluation of an AI-enabled drug–drug interaction clinical decision support system",
    authors: "Abbasi A, Farhadi M, Nasiri Z, Amanati A, Molavi Vardanjani H",
    venue: "Manuscript under review",
    year: 2026,
    status: "Under review",
    citation: scholar("Real-world implementation evaluation AI-enabled drug-drug interaction clinical decision support system"),
    note: "Mixed-methods evaluation using RE-AIM and CFIR.",
  },
  {
    title: "Leveraging a multi-task protein language model for robust sequence-only antibody–antigen affinity prediction",
    authors: "Abbasi A, Farhadi M, Malekpour M, et al.",
    venue: "Manuscript under review",
    year: 2026,
    status: "Under review",
    citation: scholar("multi-task protein language model antibody antigen affinity prediction"),
  },
  {
    title: "A decade of drug–drug interactions in oncology: Clinical trends, risk determinants, and CDSS-based insights",
    authors: "Abbasi A, Farhadi M, Homayounifar F, Amanati A",
    venue: "Manuscript under review",
    year: 2026,
    status: "Under review",
    citation: scholar("A decade of drug-drug interactions in oncology"),
    note: "Co-first author.",
  },
  {
    title: "Clinical teaching during crises: An experience from Iran",
    authors: "Abbasi A, Goodarzian MR, Seifi S, Farhadi M, et al.",
    venue: "Manuscript under review",
    year: 2026,
    status: "Under review",
    citation: scholar("Clinical teaching during crises An experience from Iran"),
  },
  {
    title: "Fertility preservation challenges from pediatric oncologists' perspectives",
    authors: "Abbasi A, Amanati A, Razmjouyi P, Farhadi M, et al.",
    venue: "Manuscript under review",
    year: 2026,
    status: "Under review",
    citation: scholar("Fertility preservation challenges pediatric oncologists perspectives"),
  },
  {
    title: "Drug interactions in Iran: Findings from the PERSIAN Cohort Study",
    authors: "Bahmanipour K, Abbasi A, Farhadi M, et al.",
    venue: "Manuscript under review",
    year: 2026,
    status: "Under review",
    citation: scholar("Drug interactions in Iran Findings from the PERSIAN Cohort Study"),
  },
];

type Project = {
  title: string;
  category: string;
  description: string;
  tags: readonly string[];
  href?: string;
  links?: readonly { label: string; href: string }[];
};

export const PROJECTS: readonly Project[] = [
  {
    title: "Protein language models for antibody affinity",
    category: "Computational biology",
    description:
      "A leakage-resistant IBM MAMMAL pipeline for sequence-only antibody–antigen binding-affinity prediction across 1.2M biological records.",
    tags: ["Protein LLM", "PyTorch", "Evaluation"],
  },
  {
    title: "DICOM Downloader Client",
    category: "Medical imaging",
    description:
      "A multithreaded, authenticated, and resumable Python client for structured retrieval of DICOM CT studies from hospital imaging systems.",
    tags: ["Python", "DICOM", "PACS"],
    href: "https://github.com/Fsunroo/DicomDownloaderClient",
  },
  {
    title: "Cancer Drug Sensitivity — SMILE",
    category: "Translational AI",
    description:
      "A deep-learning project using the GDSC2 dataset to model cancer drug sensitivity from molecular features.",
    tags: ["Deep learning", "GDSC2", "Python"],
    href: "https://github.com/Fsunroo/CancerDrugSensetivity-SMILE",
  },
  {
    title: "Medical imaging prototypes",
    category: "Computer vision",
    description:
      "Open research prototypes for skin-cancer classification, bone-age prediction from RSNA radiographs, and colorectal histopathology analysis.",
    tags: ["TensorFlow", "CNN", "Imaging"],
    links: [
      { label: "Skin cancer", href: "https://github.com/Fsunroo/Skin-Cancer" },
      { label: "Bone age", href: "https://github.com/Fsunroo/RSNA-BoneAge" },
      { label: "Histopathology", href: "https://github.com/Fsunroo/CRChisto" },
    ],
  },
  {
    title: "Sensor reconstruction and fault analysis",
    category: "Time-series systems",
    description:
      "FFT-based features and recurrent convolutional models for reconstructing sensor signals and identifying temporal fault patterns in automotive suspension systems.",
    tags: ["Time series", "FFT", "RNN"],
    href: "https://github.com/Fsunroo/PPPrediction",
  },
  {
    title: "Gaussian Plume",
    category: "Scientific computing",
    description:
      "An open-source atmospheric dispersion modeling project and the most-starred original repository in the public GitHub profile.",
    tags: ["Python", "Modeling", "Open source"],
    href: "https://github.com/Fsunroo/Gaussian-Plume",
  },
] as const;

export const CLINICAL_EXPERIENCE = [
  {
    role: "General Practitioner — Oncology and Hematology",
    institution: "Amir Oncology Hospital",
    period: "2023 — Present",
    description:
      "Inpatient and outpatient care for adults and children with hematologic and solid malignancies, including treatment monitoring, oncologic emergencies, transplantation support, and infection prevention.",
  },
  {
    role: "Emergency Medicine Physician",
    institution: "Qaem Hospital",
    period: "2023 — 2024",
    description:
      "Assessment and stabilization of critically ill and injured patients in a high-volume emergency department, coordinating investigations, consultation, admission, and transfer.",
  },
] as const;
