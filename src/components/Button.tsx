import React from "react";
import styles from "../styles/Button.module.css";
import Link from "next/link";

export interface buttonProps {
  url: string;
  text: string;
}
const Button: React.FC<buttonProps> = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
