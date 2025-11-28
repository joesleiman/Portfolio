import FadeUpCard from "./FadeUpCard";
import { personalProjects } from "./projects.data";

export default function PersonalProjects() {
    return (
        <section className="space-y-6"
                 aria-labelledby="personal-projects-heading">
            <div>
                <h2 id="personal-projects-heading"
                    className="text-2xl font-semibold text-(--color-secondary) mt-6">
                    Personal Projects
                </h2>
                <p className="text-(--color-secondary)/70 text-sm">
                    Experiments and side work I built for learning and creativity.
                </p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
                {personalProjects.map((project) => (
                    <li key={project.id}>
                        <FadeUpCard project={project} />
                    </li>
                ))}
            </ul>
        </section>
    );
}