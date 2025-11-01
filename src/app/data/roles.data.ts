export type Role = {
  id: string;
  title: string;
  icon: string;
  description: string;
  sections: {
    heading: string;
    items: string[];
  }[];
};


export const roles: Role[] = [
  {
    id: 'frontend-engineer',
    title: 'Front-End Engineer',
    icon: '💻',
    description:
      'I craft responsive, accessible, and performant user interfaces — from concept to production.',
    sections: [
      {
        heading: 'Things I love building:',
        items: ['Web apps', 'Hybrid mobile apps', 'Reusable UI libraries'],
      },
      {
        heading: 'Core Tools:',
        items: ['Javascript', 'Angular', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      },
    ],
  },
  {
    id: 'problem-solver',
    title: 'Problem Solver',
    icon: '⚙️',
    description:
      'I enjoy analyzing complex requirements, breaking them into manageable parts, and finding clean, scalable solutions.',
    sections: [
      {
        heading: 'Skills I rely on:',
        items: ['Debugging', 'Performance optimization', 'Testing', 'Accessibility'],
      },
      {
        heading: 'Tech Toolbox:',
        items: ['Testing Library', 'Jest', 'Cypress', 'Postman', 'GitHub', 'VS Code'],
      },
    ],
  },
  {
    id: 'team-collaborator',
    title: 'Team Collaborator',
    icon: '🤝',
    description:
      'I thrive in collaborative environments — sharing knowledge, conducting code reviews, and supporting teammates to deliver their best work.',
    sections: [
      {
        heading: 'Experiences I draw from:',
        items: ['Leading feature development', 'Mentoring new hires', 'Code reviews'],
      },
      {
        heading: 'Collaboration Tools:',
        items: ['Jira', 'Agile Scrum', 'Slack', 'Figma'],
      },
    ],
  },
];