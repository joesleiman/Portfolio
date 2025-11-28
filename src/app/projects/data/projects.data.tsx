import { StaticImageData } from "next/image";
import bill from '@/app/assets/images/bill-com.jpg';
import biotechne from '@/app/assets/images/biotechne.jpg';
import ethrai from '@/app/assets/images/ethrai.jpg';
import profile from '@/app/assets/images/linkedin-profile.jpg';

export type ProjectCategory = "professional" | "personal";

export type Project = {
    id: string;
    title: string;
    description: string;
    why: string;
    image: StaticImageData | string;
    stack: string[];
    bullets: string[];
    category: ProjectCategory;
};


export const professionalProjects: Project[] = [
    {
        id: "bill-com",
        title: "Bill.com — Recurring Bill & Intelligent Bill Automation",
        description: "Architected and shipped multiple high-impact features for a large-scale financial platform used by hundreds of thousands of businesses.",
        why: "These features streamlined recurring payments, reduced user input time, and significantly improved billing reliability and workflow efficiency.",
        image: bill,
        stack: ["Angular", "TypeScript", "GraphQL", "Jest", "Cypress", "Javascript", "SCSS"],
        bullets: [
            "Led development of the Recurring Bill feature (~65% ownership), enabling automated scheduling and management of recurring payments.",
            "Built IVA 1-Click Panel (~30% ownership) to auto-fill bill data and allow one-click save/pay, reducing user input time.",
            "Raised unit test coverage to ~99% using Jest, FluffySpoon, and advanced debugging strategies.",
            "Resolved 500+ bugs and authored 50+ Cypress E2E tests to improve platform stability.",
        ],
        category: 'professional'
    },
    {
        id: "bio-techne",
        title: "Bio-Techne — Scientific Workflow Platforms",
        description: "Designed and built multiple production-grade websites and complex form-heavy UIs for global biotech researchers and internal teams.",
        why: "These tools streamline scientific workflows, reduce manual processing, and deliver a consistent and accessible user experience.",
        image: biotechne,
        stack: ["React", "Angular", "TypeScript", "Redux", "Tailwind", "React Hook Form"],
        bullets: [
            "Built three production websites and one POC from scratch using Angular and React, supporting thousands of researchers globally.",
            "Created a full UI component library (dropdowns, step tracker, phone input) entirely from scratch—no external UI libraries used.",
            "Developed highly interactive, multi-step, form-intensive UIs with complex validation and scroll-synced step navigation.",
            "Prioritized accessibility via semantic HTML, ARIA roles, full keyboard navigation, contrast standards, and animation control.",
        ],
        category: 'professional'
    },
    {
        id: "ethrai",
        title: "Ethrai, E-Learning Platform (1M+ Users)",
        description: "Built a full mobile and web learning platform, enabling over one million users to access training and educational content.",
        why: "This platform expanded digital learning access across the Middle East and showcased strong hybrid mobile development expertise.",
        image: ethrai,
        stack: ["Angular", "Ionic", "JavaScript", "Typescript", "HTML", "CSS"],
        bullets: [
            "Built Ethrai, a web + mobile e-learning platform now serving over 1 million users across the Middle East.",
            "Developed reusable Angular components shared across mobile and web for consistency and faster development.",
            "Integrated REST APIs using HttpClient and managed state with NgRx.",
            "Converted hundreds of design files into responsive, pixel-perfect UI using SCSS, Angular Material, and Bootstrap.",
            "Debugged and resolved issues based on user feedback, improving reliability and preventing regressions."
        ],
        category: 'professional'
    }
];

export const personalProjects: Project[] = [
    {
        id: "portfolio",
        title: "Portfolio Website (joesleiman.dev)",
        description: "A modern, fully custom personal portfolio.",
        why: "Showcases my professional experience, technical capabilities, and UI/UX standards.",
        image: profile,
        stack: ["Next.js", "React", "Tailwind", "TypeScript", "Shadcn-ui"],
        bullets: [
            "Designed and built a clean, accessible, mobile-first UI with custom animations.",
            "Implemented reusable components, semantic HTML, ARIA roles, and full keyboard navigation.",
            "Created a structured project system with dynamic detail pages and fade-up animations.",
            "Optimized performance with image sizing, lazy-loading, and code-splitting.",
            "Demonstrates proficiency with modern React patterns, accessibility, and design best practices."
        ],
        category: 'personal'
    }
];