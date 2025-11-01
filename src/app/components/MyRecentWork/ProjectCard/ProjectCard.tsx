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
        <figure className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <Image className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                src={image}
                alt={title} />
            {/* Overlay */}
            <figcaption
                className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6"
            >
                <h3 className="text-lg font-semibold mb-4">{title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                    <span>Visit Website</span>
                    <ArrowRight size={16} />
                </a>
            </figcaption>
        </figure>
    );
};

export default ProjectCard;
