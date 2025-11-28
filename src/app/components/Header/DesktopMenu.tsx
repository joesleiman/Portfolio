import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DesktopMenu() {
    const pathname = usePathname();

    return (
        <nav aria-label="Main navigation" className="hidden sm:block">
            <ul className="flex gap-6">
                <li>
                    <Link href="/projects"
                        className={`
                                        text-(--color-tertiary)
                                        hover:text-(--color-primary)
                                        hover:bg-(--color-tertiary)
                                        rounded-[20px]
                                        px-4 py-2
                                        transition duration-300
                                        ${pathname === "/projects" ? "active-link" : ""}
          `}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/experience" className={`
                                                            text-(--color-tertiary)
                                                            hover:text-(--color-primary)
                                                            hover:bg-(--color-tertiary)
                                                            rounded-[20px]
                                                            px-4 py-2
                                                            transition duration-300
                                                            ${pathname === "/experience" ? "active-link" : ""}
                                                `}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={`
                                                         border 
                                                         border-(--color-tertiary) 
                                                         rounded-[20px] 
                                                         px-4 py-2
                                                         hover:bg-(--color-tertiary)
                                                         hover:text-(--color-primary)
                                                        ${pathname === "/contact" ? "active-link" : ""}
                                              `}>
                        Say Hello
                    </Link>
                </li>
            </ul>
        </nav>
    );
}