import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import IPost from "@/interfaces/IPost";

const Blog = async () => {
  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`
    );
    // error handler
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const data: IPost[] = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((blog, index) => (
        <Link
          key={index}
          className={styles.container}
          href={`/blog/${blog._id}`}
        >
          <div className={styles.imgContainer}>
            <Image
              src={blog.img}
              alt="thumbnail"
              width={400}
              height={250}
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.desc}>{blog.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
