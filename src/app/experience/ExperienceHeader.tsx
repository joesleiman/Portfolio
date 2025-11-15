import { experiences } from "../data/experiences.data";
import { Briefcase } from 'lucide-react';

export function ExperienceHeader() {
    const titleStyle = "text-3xl font-bold";

    return (
            <div className="bg-(--color-primary) text-(--color-tertiary)">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="w-10 h-10" />
                        <h1 className="text-4xl md:text-5xl font-bold">Experience</h1>
                    </div>
                    <p className="text-xl max-w-2xl">
                        A journey of building scalable applications, leading teams, and delivering exceptional user experiences.
                    </p>
                    <div className="mt-8 flex gap-6 text-sm">
                        <div>
                            <div className={titleStyle}>{experiences.length}+</div>
                            <div>Positions</div>
                        </div>
                        <div>
                            <div className={titleStyle}>8+</div>
                            <div>Years</div>
                        </div>
                        <div>
                            <div className={titleStyle}>17+</div>
                            <div>Projects</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}