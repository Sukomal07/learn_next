"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-4 inset-x-0 max-w-xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our courses">
                    <div className="flex flex-col gap-4 p-2">
                        <HoveredLink href={'/courses'}>
                            All courses
                        </HoveredLink>
                        <HoveredLink href="/courses">
                            Basic Music Theory
                        </HoveredLink>
                        <HoveredLink href="/courses">
                            Advanced Composition
                        </HoveredLink>
                        <HoveredLink href="/courses">Songwriting</HoveredLink>
                        <HoveredLink href="/courses">
                            Music Production
                        </HoveredLink>
                    </div>
                </MenuItem>
                <Link href={'/contact'}>
                    <MenuItem setActive={setActive} active={active} item="Contact us" />
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
