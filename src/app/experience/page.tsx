import { ExperienceHeader } from "./ExperienceHeader";
import { CallToAction } from "../components/CallToAction/CallToAction";
import { Experiences } from "./Experiences";


export default function Experience() {
    return (
        <main className="flex-1 px-4 sm:px-8 py-[2rem] ">
            <ExperienceHeader />
            {/* Timeline */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <Experiences />
                <CallToAction
                    title="Let's Build Something Amazing"
                    description="Ready to bring your next project to life?"
                    btnText="Get In Touch" />
            </div>
        </main>
    );
}