"use client";

import { usePathname } from "next/navigation";
import "./navigation.css";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function Navigation() {
  const pathname = usePathname();

  const style = {
    "--item-index": getNavIndex(pathname),
  } as React.CSSProperties;
  return (
    <aside className="z-10 sm:fixed sm:p-8 sm:top-0 w-full flex justify-center">
      <nav
        className="material-acrylic w-full sm:w-auto sm:rounded-2xl sm:acrylic-border flex flex-col sm:flex-row sm:shadow-lg overflow-clip with-nav-indicator"
        style={style}
      >
        {NavLink("Home", "/")}
        {NavLink("Projects", "https://github.com/bruno-glowaski", "external")}
        {NavLink("Resumé", "/resume", "download", "resume.pdf")}
        {NavLink("About", "/me")}
      </nav>
    </aside>
  );
}

function getNavIndex(pathname: string) {
  if (pathname === "/") {
    return 0;
  }
  if (pathname.startsWith("/me")) {
    return 3;
  }
  return 0;
}

function NavLink(
  content: string,
  href: string,
  type?: "external" | "download",
  download?: string,
) {
  let props: AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps = {
    className:
      "hover:bg-highlight w-full sm:w-28 h-14 sm:h-auto px-7 py-4 flex sm:justify-center font-bold uppercase tracking-normal transition",
  };
  if (type === "external") {
    props = { ...props, target: "_blank", rel: "noopener noreferrer" };
  }
  if (type === "download") {
    props = { ...props, target: "_blank", download, prefetch: false };
  }
  return (
    <Link {...props} href={href}>
      {content}
    </Link>
  );
}
