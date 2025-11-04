
import { StaticImageData } from "next/image";
import billLogo from '@/app/assets/images/bill-com.jpg';
import biotechne from '@/app/assets/images/biotechne.jpg';
import Ethrai from '@/app/assets/images/ethrai.jpg';

export interface Project {
  image: StaticImageData | string;
  title: string;
  link: string;
}
export const projects = [
     {
      image: Ethrai,
      title: "an electronic training and knowledge platform for public employees in Saudi Arabia to develop their skills through e-learning, e-books, and interactive sessions.",
      link: "https://apps.apple.com/us/app/ethrai/id1438205024",
    },
    {
      image: billLogo,
      title:
        "financial platform that helps businesses pay their bills and get paid by customers more simply and efficiently.",
      link: "https://www.bill.com/",
    },
    {
      image: biotechne,
      title: "empowers researchers in Life Science and Clinical Diagnostics by providing high-quality workflow solutions.",
      link: "https://www.bio-techne.com/reagents/rnascope-ish-technology/probes/custom/request-form",
    }
  ];
