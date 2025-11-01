
import { StaticImageData } from "next/image";
import linkedinProfile from '@/app/assets/images/linkedin-profile.jpg';

export interface Project {
  image: StaticImageData | string;
  title: string;
  link: string;
}
export const projects = [
    {
      image: linkedinProfile,
      title:
        "High-end, custom residential renovators serving Fraser Valley homeowners.",
      link: "https://wfdesignbuild.com",
    },
    {
      image: linkedinProfile,
      title: "Modern web app for creative professionals.",
      link: "https://example.com",
    },
    {
      image: linkedinProfile,
      title: "AI-powered design automation platform.",
      link: "https://example.ai",
    },
  ];
