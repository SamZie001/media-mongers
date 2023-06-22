"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
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

    try {
      setErr(null);
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error: any) {
      setErr(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          className={styles.input}
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          className={styles.input}
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
        {/* {err && <p style={{ color: "red" }}>{err}</p>} */}
        <Link href="/dashboard/login">Login with an existing account</Link>
      </form>
    </div>
  );
};

export default Register;
