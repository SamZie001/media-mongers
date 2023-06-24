"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

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
    return <div className={styles.container}>Dashboard</div>;
  }
};

export default Dashboard;
