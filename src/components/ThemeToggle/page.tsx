"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
    >
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default ThemeToggle;
