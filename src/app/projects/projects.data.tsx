import { StaticImageData } from "next/image";
import bill from '@/app/assets/images/bill-com.jpg';
import biotechne from '@/app/assets/images/biotechne.jpg';
import ethrai from '@/app/assets/images/ethrai.jpg';

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
        id: "bio-probe",
        title: "Bio-Techne Probe Request Form",
        description: "A multi-step form for scientists to submit complex probe specifications.",
        why: "Reduced internal processing time, improved accuracy, and supported lab workflows.",
        image: bill,
        stack: ["React", "TypeScript", "Next.js", "SCSS"],
        bullets: [
            "Reduced processing time by 80%.",
            "Multi-step validated UI with conditional logic.",
            "API integration with custom debouncing for performance."
        ],
        category: 'professional'
    },
    {
        id: "bulk-upload",
        title: "Bio-Techne Bulk Upload Tool",
        description: "A spreadsheet-like interface for large SKU uploads and validations.",
        why: "Helped global teams process thousands of SKUs faster with fewer errors.",
        image: biotechne,
        stack: ["React", "TypeScript", "Redux", "Tailwind"],
        bullets: [
            "Validated thousands of SKUs in real time.",
            "Built custom table components with keyboard navigation.",
            "Improved internal team workflows across multiple departments."
        ],
        category: 'professional'
    },
     {
        id: "probe-pricing",
        title: "Bio-Techne Bulk Upload Tool",
        description: "A spreadsheet-like interface for large SKU uploads and validations.",
        why: "Helped global teams process thousands of SKUs faster with fewer errors.",
        image: ethrai,
        stack: ["React", "TypeScript", "Redux", "Tailwind"],
        bullets: [
            "Validated thousands of SKUs in real time.",
            "Built custom table components with keyboard navigation.",
            "Improved internal team workflows across multiple departments."
        ],
        category: 'professional'
    }
];

export const personalProjects: Project[] = [
    {
        id: "portfolio",
        title: "Portfolio Website",
        description: "The website you're browsing right now.",
        why: "Built to reflect my personality, design taste, and engineering standards.",
        image: bill,
        stack: ["Next.js 14", "React 19", "Tailwind"],
        bullets: [
            "Clean, elegant, performant.",
            "Fully responsive + accessible.",
            "Demonstrates React patterns and custom UI."
        ],
        category: 'personal'
    }
];