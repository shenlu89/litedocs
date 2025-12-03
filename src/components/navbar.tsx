"use client";

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Link from "@/components/custom-link";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import ThemeButton from "@/components/theme-button";

const socialIcons = [
  {
    title: "Discord",
    href: "https://discord.gg/c2mKdBVt7n",
    icon: FaDiscord,
  },
  {
    title: "GitHub",
    href: "https://github.com/shenlu89/litedocs",
    icon: FaGithub,
  },
];

interface Navbar extends HTMLAttributes<HTMLDivElement> { }

export const AppNavbar: React.FC<Navbar> = ({
  className,
  children,
  ...props
}) => {
  return (
    <header
      className={cn(
        "w-full justify-end mx-auto h-16 px-8 lg:px-8 fixed top-0 items-center md:flex hidden",
        "bg-background dark:bg-background",
        "border-b border-border",
        className,
      )}
      {...props}
    >
      <nav className="flex items-center gap-4">
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <ThemeButton />
          </li>
          {socialIcons.map((social) => (
            <li key={social.title}>
              <Link
                className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-slate-200"
                title={social.title}
                href={social.href}
              >
                <social.icon className="size-6" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
