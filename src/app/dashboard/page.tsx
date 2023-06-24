"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/navigation";

export interface dataI {
  _id: string;
  content: string;
  desc: string;
  img: string;
  title: string;
  username: string;
}

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate, error } = useSWR(
    `/api/posts?username=${session.data?.user?.name}`,
    fetcher
  );
  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img: image,
          content,
          username: session.data?.user?.name,
        }),
      });
      mutate();
      setTitle("");
      setDesc("");
      setImage("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "loading") {
    return (
      <p className={styles.loading}>
        <Image src="/loader.svg" alt="loader" width={100} height={100} />
      </p>
    );
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data &&
            data.length > 0 &&
            data.map((data: dataI, index: number) => (
              <div className={styles.post} key={index}>
                <div className={styles.imgContainer}>
                  <Image
                    src={data.img}
                    alt="thumbnail"
                    width={500}
                    height={500}
                  />
                </div>

                <div className={styles.brief}>
                  <h2 className={styles.postTitle}>{data.title}</h2>
                  <Image
                    onClick={() => handleDelete(data._id)}
                    className={styles.delete}
                    src="/close.svg"
                    alt="delete"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className={styles.input}
          />
          <input
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Description"
            className={styles.input}
          />
          <input
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Image"
            className={styles.input}
          />
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textArea}
            placeholder="content"
            cols={30}
            rows={10}
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
