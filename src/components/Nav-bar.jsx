import React from "react";
import NavItem from "./NavItem";

const navItems = [
    { label: "TASK A", path: "/" },
    { label: "TASK B", path: "/taskb" },
    { label: "TASK C", path: "/taskc" },
];


export default function Navbar() {
    
    return (
        <header
            className="flex items-center justify-between w-[95%] mx-auto mt-3 px-6 py-3
                 bg-secondary rounded-2xl shadow top-0 left-10 z-2"
            role="banner"
        >
            <nav className="flex gap-12" aria-label="Main navigation">
                {navItems.map((item) => (
                    <NavItem key={item.label} to={item.path}>{item.label}</NavItem>
                ))}
            </nav>

        </header>
    );
}
