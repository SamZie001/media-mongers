"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  console.log(session);

  return <div>Dashboard</div>;
};

export default Dashboard;
