"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { VARIANTS } from "@/constants";
import type { TetrisLabContextType } from "@/types";

const TetrisLabContext = createContext<TetrisLabContextType | undefined>(
  undefined
);

export const TetrisLabContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [variant, setVariant] = useState<VARIANTS | null>(null);

  useEffect(() => {
    const randomVariant =
      Object.values(VARIANTS)[
        Math.floor(Math.random() * Object.values(VARIANTS).length)
      ];

    setVariant(randomVariant);
  }, []);

  console.log("variant:", variant);

  const providerValue = useMemo(
    () => ({
      state: {
        variant,
      },
    }),
    [variant]
  );

  return (
    <TetrisLabContext.Provider value={providerValue}>
      {children}
    </TetrisLabContext.Provider>
  );
};

export const useTetrisLabContext = () => {
  const context = useContext(TetrisLabContext);
  if (!context) {
    throw new Error(
      "useTetrisLabContext must be used within a TetrisLabProvider"
    );
  }
  return context;
};
