
import { StaticImageData } from "next/image";
import linkedinProfile from '@/app/assets/images/linkedin-profile.jpg';
import billLogo from '@/app/assets/images/bill-com.jpg';

export interface Project {
  image: StaticImageData | string;
  title: string;
  link: string;
}
export const projects = [
    {
      image: billLogo,
      title:
        "financial platform that helps businesses pay their bills and get paid by customers more simply and efficiently.",
      link: "https://bill.com",
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
