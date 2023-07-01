"use client";
import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { Interface } from "readline";

export interface iconInterface {
  icons: { id: number; src: string; alt: string }[];
}
const Footer = () => {
  const icons: iconInterface["icons"] = [
    { id: 1, src: "/1.png", alt: "facebook" },
    { id: 2, src: "/2.png", alt: "instagram" },
    { id: 3, src: "/3.png", alt: "twitter" },
    { id: 4, src: "/4.png", alt: "youtube" },
  ];
  return (
    <div className={styles.container}>
      <div>@2023 Media Mongers. All rights reserved.</div>
      <div className={styles.icons}>
        {icons.map((icon) => (
          <Image
            className={styles.social}
            key={icon.id}
            src={icon.src}
            alt={icon.alt}
            width={15}
            height={15}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
