import HeroSection from './HeroSection';
import PersonalProjects from './PersonalProjects';
import ProfessionalProjects from './ProfessionalProjects';

export default function Projects() {
  return (
    <main className="flex-1" style={{ padding: 24, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
        <HeroSection />
        <ProfessionalProjects />
        <PersonalProjects />
    </main>
  );
}