"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useContext, ReactNode, useReducer } from "react";

import { reducer } from "./TetrisLabReducer";

import type { TetrisLabContextType } from "@/types";
import { VARIANTS } from "@/constants";

const TetrisLabContext = createContext<TetrisLabContextType | undefined>(
  undefined
);

export const TetrisLabContextProvider = ({
  randomVariant,
  children,
}: {
  randomVariant: VARIANTS;
  children: ReactNode;
}) => {
  const searchParams = useSearchParams();
  const variant = (searchParams.get("variant") as VARIANTS) || randomVariant;

  const initialState = {
    variant,
    start: null,
    end: null,
    notifications: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state:", state);

  return (
    <TetrisLabContext.Provider value={{ state, dispatch }}>
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
