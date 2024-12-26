"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavlinkProps {
    href: string;
    Icon: JSX.Element;
    title: string;
}

function Navlink({ href, Icon, title }: NavlinkProps) {
    const pathname = usePathname();
    return (
        <Link href={href} className={pathname === href ? "active" : ""}>
            <span>{Icon}</span>
            {title}
        </Link>
    );
}

export default Navlink;
