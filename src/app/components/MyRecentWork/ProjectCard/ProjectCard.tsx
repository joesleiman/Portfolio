// components/ProjectCard.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import { StaticImageData } from "next/image";

interface ProjectCardProps {
    image: StaticImageData | string;
    title: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, link }) => {
    return (
        <figure className="relative group overflow-hidden 
                           rounded-2xl shadow-lg cursor-pointer"
            tabIndex={0}>
            <Image className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                src={image}
                alt={`Preview of project: ${title}`} />
            {/* Overlay */}
            <figcaption className="absolute 
                                   inset-0 
                                   flex 
                                   flex-col 
                                   justify-center 
                                   items-center 
                                   text-center 
                                 bg-black/70 
                                 text-white 
                                   opacity-100 
                                   sm:opacity-0
                                   group-hover:opacity-100 
                                   group-focus-within:opacity-100
                                   transition-opacity 
                                   duration-500 
                                   p-6"
            >
                <h3 className="text-sm sm:text-lg  font-semibold mb-4">{title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex 
                               items-center 
                               gap-2 
                               border border-white 
                               px-4 py-2 rounded-full
                             hover:bg-white 
                             hover:text-black 
                               transition-colors 
                               duration-200 
                               focus:outline-none 
                               focus-visible:ring-2
                             focus-visible:ring-white 
                               focus-visible:ring-offset-2
                             focus-visible:ring-offset-black"
                >
                    <span>Visit Website</span>
                    <ArrowRight size={16} />
                </a>
            </figcaption>
        </figure>
    );
};

export default ProjectCard;
