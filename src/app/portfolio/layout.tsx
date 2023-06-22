import React from "react";
import styles from "./page.module.css";

export interface childrenProp {
  children: React.ReactNode;
}
const Layout: React.FC<childrenProp> = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
