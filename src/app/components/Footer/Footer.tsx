import Link from "next/link";
import Logo from "@/app/components/Logo/Logo";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-4 sm:px-8 pt-[8rem] pb-[5rem] 
                           bg-(--color-primary) text-(--color-tertiary) 
                           flex flex-col items-center">
            <div className="flex flex-col items-center">
                <Logo />
                <h2 className="font-normal text-2xl text-center max-w-[320px] my-[2rem] leading-[1.125]">
                    Living, learning, & leveling up one day at a time.
                </h2>
                <div className="flex items-center gap-6 mb-[2rem]">
                    <Link
                        href="https://www.linkedin.com/in/joe-sleiman0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                        className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--color-tertiary) transition-colors"
                    >
                        <FaLinkedin size={22} className="hover:fill-(--color-secondary)" />
                    </Link>

                    <Link
                        href="https://github.com/joesleiman"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                        className="
                        focus-visible:outline-none 
                        focus-visible:ring-2 
                        focus-visible:ring-offset-2 
                        focus-visible:ring-(--color-tertiary) 
                        "
                    >
                        <FaGithub size={22} className="hover:fill-(--color-secondary)" />
                    </Link>

                    <Link
                        href="mailto:joe.c.sleiman@gmail.com"
                        aria-label="Send me an email"
                        className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--color-tertiary) transition-colors"
                    >
                        <FaEnvelope size={22} className="hover:fill-(--color-secondary)" />
                    </Link>
                </div>

                <p className="text-center">© {new Date().getFullYear()} Joe Sleiman. All rights reserved.</p>
                <p className="text-xs"
                    aria-label="This site was built with React, Next.js, Tailwind CSS, and Shadcn UI.">
                    Made with React, Next, Tailwind & Shadcn UI
                </p>
            </div>
        </footer>
    );
}