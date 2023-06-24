import React from "react";
import Image from "next/image";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image src="/loader.svg" alt="loader" width={100} height={100} />
    </div>
  );
};

export default Loading;
