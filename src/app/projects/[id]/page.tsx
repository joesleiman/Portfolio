export const dynamic = "force-static";

import { notFound } from "next/navigation";
import { professionalProjects, personalProjects } from "../data/projects.data";
import Link from 'next/link';

export default async function ProjectDetailsPage(props: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await props.params;

    const allProjects = [...professionalProjects, ...personalProjects];
    const project = allProjects.find((p) => p.id === id);

    if (!project) {
        return notFound();
    }

    return (
        <main className="flex-1" style={{ padding: 24, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
            <h1>🧑‍💻 My portfolio is still in beta — features coming soon!</h1>
            <p>
                In the meantime, you can check out my projects below 👇
            </p>
            <p>
                <Link
                    href="https://joecsleiman.wixsite.com/joesleiman"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0366d6', textDecoration: 'underline' }}
                >
                    Open my external portfolio
                </Link>
            </p>
        </main>
    );
}
