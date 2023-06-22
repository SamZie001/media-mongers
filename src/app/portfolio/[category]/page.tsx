import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

export interface dataInterface {
  id: number;
  title: string;
  desc: string;
  image: string;
}
export interface paramInterface {
  params: { category: string };
}

export async function generateMetadata({ params }: paramInterface) {
  return {
    title: `MM | ${params.category}`,
  };
}

const getData = (cat: string): dataInterface[] => {
  let data;
  if (cat === "applications") {
    data = items.applications;
  }
  if (cat === "illustrations") {
    data = items.illustrations;
  }
  if (cat === "websites") {
    data = items.websites;
  }

  if (data) {
    return data;
  } else {
    return notFound();
  }
};

const PortfolioCategory: React.FC<paramInterface> = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url={`/portfolio/${params.category}/#`} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={item.image}
              alt="image"
              fill={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCategory;
