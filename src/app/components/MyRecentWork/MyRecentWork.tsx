import { projects } from "@/app/data/projects.data";
import Link from "next/link";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function MyRecentWork() {
    return (
        <section className="px-4 sm:px-[4.5rem] py-[9rem]">
            <h1 className="text-center">My Recent Work</h1>
            <h2 className="text-center font-medium mb-[1.5rem]">
                Here are a few past projects I&#39;ve worked on. Want to see more?&nbsp;
                <Link href='https://joecsleiman.wixsite.com/joesleiman'
                      target="_blank" 
                      className="text-(--color-primary)
                               hover:text-(--color-tertiary)
                               hover:bg-(--color-primary)
                               rounded-[20px]
                               px-4 py-2
                               transition duration-300">
                    Click Here
                </Link>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}