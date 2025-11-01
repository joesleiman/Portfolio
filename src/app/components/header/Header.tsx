import "./Header.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-(--color-primary) w-full h-(--height-size) px-8 text-(--color-tertiary)">
            <Link href="/" className="logo-container" aria-label="Joe Sleiman Logo">
                <span className="logo-text" aria-hidden="true">JS</span>
            </Link>
            <nav aria-label="Main navigation" className="hidden sm:block">
                <ul className="flex gap-6">
                    <li>
                        <Link href="/projects" className="text-(--color-tertiary)
                                                          hover:text-(--color-primary)
                                                          hover:bg-(--color-tertiary)
                                                          rounded-[20px]
                                                          px-4 py-2
                                                          transition duration-300">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience" className="text-(--color-tertiary)
                                                            hover:text-(--color-primary)
                                                            hover:bg-(--color-tertiary)
                                                            rounded-[20px]
                                                            px-4 py-2
                                                            transition duration-300">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="border 
                                                         border-(--color-tertiary) 
                                                         rounded-[20px] 
                                                         px-4 py-2
                                                         hover:bg-(--color-tertiary)
                                                         hover:text-(--color-primary)">
                            Say Hello
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}