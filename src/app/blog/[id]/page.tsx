import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import IPost from "@/interfaces/IPost";
import paramInterface from "@/interfaces/IdParam";

async function getData(id: string | number) {
  const res = await fetch(`${process.env.SERVER_API_ENDPOINT}/api/posts/${id}`, {
    next: { revalidate: 10 },
  });

  // error handler
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }: paramInterface) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.description,
  };
}
const Post: React.FC<paramInterface> = async ({ params }) => {
  const blog: IPost = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.desc}>{blog.desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{blog.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={blog.img}
            alt="thumbnail"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{blog.content}</p>
      </div>
    </div>
  );
};

export default Post;
