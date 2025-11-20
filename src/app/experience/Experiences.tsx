"use client";

import { useState } from "react";
import { experiences } from "../data/experiences.data";
import { ExperienceCard } from "./ExperienceCard";

export function Experiences() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    function handleToggle(id: number) {
        setExpandedId(expandedId === id ? null : id);
    }

    return (
        <>
            {experiences.map((exp) => (
                <ExperienceCard
                    key={exp.id}
                    exp={exp}
                    isExpanded={expandedId === exp.id}
                    onToggle={() => handleToggle(exp.id)}
                />
            ))}
        </>
    );
}