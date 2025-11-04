
import { StaticImageData } from "next/image";
import ecomzLogo from '@/app/assets/images/companies-logo/ecomz-logo.jpg';
import netwaysLogo from '@/app/assets/images/companies-logo/netways-logo.png';
import nttDataLogo from '@/app/assets/images/companies-logo/nttdata-logo.png';
import billLogo from '@/app/assets/images/companies-logo/bill-logo.png';
import uLineLogo from '@/app/assets/images/companies-logo/uline-logo.png';
import biotechneLogo from '@/app/assets/images/companies-logo/bio-techne-logo.jpg';

import cdaDubaiLogo from '@/app/assets/images/companies-logo/cda-dubai-logo.png';
import dubaiVolunteerLogo from '@/app/assets/images/companies-logo/dubai-volunteer-logo.jpg';
import ethraiLogo from '@/app/assets/images/companies-logo/ethrai-logo-arabic.svg';
import gsaLogo from '@/app/assets/images/companies-logo/genral-sport-authority.jpg';
import governmentDubaiLogo from '@/app/assets/images/companies-logo/government-of-dubai-logo.svg';
import manateqLogo from '@/app/assets/images/companies-logo/manateq_logo.png';



export interface CompanyLogo {
  image: StaticImageData | string;
  title: string;
}
export const companiesLogo = [
     {
      image: ecomzLogo,
      title: "Ecomz ecommerce company logo",
    },
    {
      image: netwaysLogo,
      title: "Netways company logo",
    },
    {
      image: nttDataLogo,
      title: "NTT DATA company logo",
    },
       {
      image: billLogo,
      title: "bill.com company logo",
    },
    {
      image: uLineLogo,
      title: "Uline shipping supply company logo",
    },
    {
      image: biotechneLogo,
      title: "biotechne company logo",
    },
       {
      image: cdaDubaiLogo,
      title: "Community Development Authority logo",
    },
    {
      image: dubaiVolunteerLogo,
      title: "Dubai Volunteer logo",
    },
    {
      image: ethraiLogo,
      title: "Ethrai company logo",
    },
       {
      image: gsaLogo,
      title: "General Sport of Authority logo",
    },
    {
      image: governmentDubaiLogo,
      title: "Government of Dubai logo",
    },
    {
      image: manateqLogo,
      title: "Manateq logo",
    }
  ];
