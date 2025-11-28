import HeroSection from './components/HeroSection';
import PersonalProjects from './components/PersonalProjects';
import ProfessionalProjects from './components/ProfessionalProjects';

export default function Projects() {
  return (
    <main className="flex-1" style={{ padding: 24, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
        <HeroSection />
        <ProfessionalProjects />
        <PersonalProjects />
    </main>
  );
}