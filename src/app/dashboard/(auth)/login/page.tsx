"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", formData);
    return router.push("/dashboard");
  };
  return (
    <div className={styles.container}>
      <button className={styles.oAuth} onClick={() => signIn("google")}>
        <Image src="/google.svg" alt="google" width={25} height={25} /> Login
        with Google
      </button>
      <button className={styles.oAuth} onClick={() => signIn("github")}>
        <Image src="/github.svg" alt="google" width={25} height={25} />
        Login with Github
      </button>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className={styles.input}
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
        {err && <p style={{ color: "red" }}>{err}</p>}
        <Link href="/dashboard/register">Create new account</Link>
      </form>
    </div>
  );
};

export default Login;
