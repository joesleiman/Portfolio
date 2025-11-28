"use client";

import Logo from "@/app/components/Logo/Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="relative flex items-center justify-between bg-(--color-primary) w-full h-(--header-height-size) px-8 text-(--color-tertiary)">
            <Logo />
            <DesktopMenu />
            <MobileMenu />
        </header >
    );
}

