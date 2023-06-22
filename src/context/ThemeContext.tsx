"use client";
import React, { createContext, useState, ReactNode, Dispatch } from "react";

interface IContext {
  mode: string;
  setMode: Dispatch<React.SetStateAction<string>>;
}

const defaultContext = {
  mode: "dark",
  setMode: (mode: string) => {},
} as IContext;

// export const ThemeContext = createContext<Partial<IContext>>({});

export const ThemeContext = createContext<IContext>(defaultContext);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<IContext["mode"]>("dark");

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
