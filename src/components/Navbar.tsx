"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import ThemeToggle from "./ThemeToggle/page";

export interface linkInterface {
  links: {
    id: number;
    title: string;
    route: string;
  }[];
}
const Navbar = () => {
  const routes: linkInterface["links"] = [
    {
      id: 1,
      title: "Home",
      route: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      route: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      route: "/blog",
    },
    {
      id: 4,
      title: "About",
      route: "/about",
    },
    {
      id: 5,
      title: "Contact",
      route: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      route: "/dashboard",
    },
  ];
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        MediaMongers
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        {routes.map((rt) => (
          <Link href={rt.route} key={rt.id} className={styles.link}>
            {rt.title}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
