import { Calendar, MapPin, Award, TrendingUp, Code } from 'lucide-react';
import { ExperienceItem } from '../data/experiences.data';

type ExperienceCard = {
    exp: ExperienceItem,
    isExpanded: boolean,
    onToggle: () => void
};

export function ExperienceCard({ exp, isExpanded, onToggle }: ExperienceCard) {
    return (
        <div className="relative">
            {/* Timeline dot and line */}
            <div className="absolute left-0 top-0 flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-white shadow-lg z-10`}></div>
                <div className="w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
            </div>

            {/* Card */}
            <div className="ml-12 mb-12">
                <div
                    onClick={onToggle}
                    className="w-full text-left group"
                >
                    <div className={`bg-(--color-tertiary) rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${isExpanded ? 'ring-2 ring-blue-500' : ''
                        }`}>
                        {/* Header */}
                        <div className="p-6 bg-(--color-tertiary)">
                            <div className="flex flex-col sm:flex-row items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-(color-secondary) group-hover:text-(--color-primary) transition-colors">
                                        {exp.role}
                                    </h3>
                                    <p className="text-lg text-gray-700 font-medium mt-1">{exp.company}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                                    {exp.type}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {exp.location}
                                </div>
                            </div>

                            <p className="mt-4 text-gray-600 leading-relaxed">{exp.description}</p>
                        </div>

                        {/* Expanded Content */}
                        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
                            } overflow-hidden`}>
                            <div className="p-6 border-t border-gray-100 bg-(--color-tertiary)">
                                {/* Metrics */}
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 mb-6">
                                    {Object.entries(exp?.metrics).map(([key, value]) => (
                                        <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                                            <div className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                                {value}
                                            </div>
                                            <div className="text-xs text-gray-600 mt-1 capitalize">{key}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Award className="w-5 h-5 text-gray-700" />
                                        <h4 className="font-semibold text-gray-900">Key Achievements</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                <TrendingUp className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <span className="text-sm">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Code className="w-5 h-5 text-gray-700" />
                                        <h4 className="font-semibold text-gray-900">Tech Stack</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech?.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Expand indicator */}
                        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-center">
                            <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                                {isExpanded ? 'Click to collapse' : 'Click to see details'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}