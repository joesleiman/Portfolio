import Link from "next/link";
import { Menu } from 'lucide-react';
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    function toggleMenu() {
        setIsOpen((open) => !open);
    }

    return (
        <>
            {/* MOBILE MENU BUTTON */}
            <button
                onClick={toggleMenu}
                className="sm:hidden"
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                <Menu />
            </button>

            {/* BACKDROP (click outside closes menu) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 sm:hidden z-20"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                ></div>
            )}

            <nav
                id="mobile-menu"
                aria-label="Mobile navigation"
                className={`
                            absolute top-(--header-height-size) left-0 w-full text-(--color-secondary)
                            bg-(--color-tertiary) sm:hidden z-50
                            transition-transform duration-200
                            ${isOpen ? "translate-y-0" : "-translate-y-4 opacity-0 pointer-events-none"}
                        `}
                role="menu"
                onKeyDown={(e) => {
                    if (e.key === "Escape") setIsOpen(false);
                }}
            >
                <ul className="flex flex-col gap-4 p-4">
                    <li role="none">
                        <Link
                            role="menuitem"
                            tabIndex={isOpen ? 0 : -1}
                            href="/"
                            className={`${pathname === "/" ? "active-link" : ""}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            role="menuitem"
                            tabIndex={isOpen ? 0 : -1}
                            href="/projects"
                            className={`${pathname === "/projects" ? "active-link" : ""}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            role="menuitem"
                            tabIndex={isOpen ? 0 : -1}
                            href="/experience"
                            className={`${pathname === "/experience" ? "active-link" : ""}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Experience
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            role="menuitem"
                            tabIndex={isOpen ? 0 : -1}
                            href="/contact"
                            className={`${pathname === "/contact" ? "active-link" : ""}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Say Hello
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}