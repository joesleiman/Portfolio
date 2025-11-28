export default function HeroSection() {
    return (
        <section role="region" 
                 aria-labelledby="projects-hero-heading"
                 className="text-center space-y-4">
            <h1 id="projects-hero-heading"
                className="text-4xl font-semibold text-(--color-secondary)">
                Projects I&#39;ve built and contributed to.
            </h1>
            <p className="text-lg text-(--color-secondary)/80 max-w-2xl mx-auto">
                A mix of enterprise tools, product features, and personal experiments —
                all crafted with attention to detail and user experience.
            </p>
        </section>
    );
}