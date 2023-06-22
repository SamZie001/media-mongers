import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";

export const metadata = {
  title: "MM | Portfolio",
  description: "A website that showcases media content",
};

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image
          src="/hero.png"
          alt="hero"
          width={500}
          height={500}
          className={styles.img}
        />
      </div>
    </main>
  );
}
