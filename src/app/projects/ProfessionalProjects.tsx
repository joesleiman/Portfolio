import FadeUpCard from "./FadeUpCard";
import { professionalProjects } from "./projects.data";

export default function ProfessionalProjects() {
    return (
        <section className="space-y-6"
            aria-labelledby="professional-projects-heading">
            <div>
                <h2 id="professional-projects-heading"
                    className="text-2xl font-semibold text-(--color-primary) mt-6">
                    Professional Projects
                </h2>
                <p className="text-(--color-secondary)/70 text-sm font-semibold">
                    Real-world work I delivered across teams and companies.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
                {professionalProjects.map((project) => (
                    <li key={project.id}>
                        <FadeUpCard project={project} />
                    </li>
                ))}
            </div>
        </section>
    );
}