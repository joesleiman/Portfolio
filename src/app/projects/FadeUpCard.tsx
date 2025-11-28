"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "./projects.data";
import { useInView } from "./useInView";

interface FadeUpCardProps {
  project: Project;
}

export default function FadeUpCard({ project }: FadeUpCardProps) {
  const { ref, inView } = useInView();

  return (
    <article
      ref={ref}
      aria-labelledby={`project-${project.id}`}
      className={`
        flex flex-col h-full
        transition-all duration-700 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        bg-(--color-secondary) rounded-xl overflow-hidden shadow-sm
        hover:shadow-xl hover:-translate-y-1 hover:border-(--color-tertiary)/40
        border border-transparent
      `}
    >
      {inView ? (
        <>
          {/* IMAGE */}
          <div className="relative h-40 overflow-hidden">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              placeholder="blur"
              sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6 flex flex-col flex-grow space-y-4">

            {/* TITLE */}
            <h3
              id={`project-${project.id}`}
              className="text-xl font-semibold text-(--color-tertiary)"
            >
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-(--color-tertiary)/80 text-sm">
              {project.description}
            </p>

            {/* WHY */}
            <p className="text-(--color-tertiary)/60 text-xs italic">
              {project.why}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-(--color-primary) text-(--color-tertiary)"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BULLETS */}
            <ul className="list-disc ml-4 text-sm text-(--color-tertiary)/80 space-y-1">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {/* CTA BUTTON */}
            <div className="mt-auto pt-4">
              <Link
                href={`/projects/${project.id}`}
                aria-label={`View details for ${project.title}`}
                className="
                      inline-block w-full text-center px-4 py-2 rounded-lg 
                      border border-(--color-tertiary)
                      text-(--color-tertiary)
                      hover:bg-(--color-tertiary)
                      hover:text-(--color-primary)
                      transition text-sm

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-(--color-tertiary)
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-(--color-secondary)
            "
              >
                View Details
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* LIGHT SKELETON — FAST! */}
          <div className="h-100 bg-gray-200/30 animate-pulse" />
        </>
      )}
    </article>
  );
}
