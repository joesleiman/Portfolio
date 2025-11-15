
export type ExperienceItem = {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
  metrics: Record<string, string>;
  color: string;
};


export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "NTT DATA Americas",
    role: "Senior Front End Engineer",
    period: "February 2021 - January 2025",
    location: "Seattle - Remote",
    type: "Full-time",
    description: "Delivered front-end solutions for three enterprise clients — Bill.com, Uline, and Bio-Techne.",
    achievements: [
      "Developed and shipped multiple features on Bill.com, a large-scale platform used by hundreds of thousands of users",
      "Led development of the Recurring Bill feature (~65% ownership)",
      "Raised unit test coverage to ~99%,",
      "Authored over 50 Cypress end-to-end (E2E)",
      "Proactively resolved over 500 bugs",
      "Built two websites and a proof-of-concept for Bio-Techne, tailored to support their evolving business and product needs."
    ],
    tech: ["React", "Angular", "Vue", "TypeScript", "Javascript", "HTML5", "CSS", "Jest", "Cypress"],
    metrics: { users: "500K+", performance: "+60%", team: "3" },
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    company: "Netways",
    role: "Mobile and Web Frontend Developer",
    period: "June 2016 - October 2019",
    location: "Lebanon",
    type: "Full-time",
    description: "Front-End Developer — Built Large-Scale Web & Mobile Apps with Angular & Ionic",
    achievements: [
      "Built Ethrai, a full e-learning platform (web and mobile) serving over 1 million users.",
      "Maintained and enhanced the 'CDA Dubai' and 'CDA Volunteer' apps",
      "Integrated RESTful APIs using Angular’s HttpClient",
      "Managed state with NgRx",
      "Resolved technical issues"
    ],
    tech: ["Ionic", "Angular", "TypeScript", "Javascript", "HTML5", "CSS"],
    metrics: { projects: "10+", satisfaction: "98%", team: "3" },
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    company: "Ecomz",
    role: "Web Developer",
    period: "March - June 2016",
    location: "Lebanon",
    type: "Internship",
    description: "Built responsive web applications for e-commerce platform from scratch.",
    achievements: [
      "Converted hundreds of design files into responsive, high-quality web pages using HTML, SCSS, and Bootstrap for optimal look and fee"
    ],
    tech: ["Angular", "Bootstrap", "HTML", "CSS"],
    metrics: { projects: "1", satisfaction: "100%", improvement: "+30%" },
    color: "from-orange-500 to-red-500"
  }
];