"use client";

import { createContext, useContext, ReactNode, useReducer } from "react";

import { reducer } from "./TetrisLabReducer";

import type { TetrisLabContextType } from "@/types";
import { VARIANTS } from "@/constants";

const TetrisLabContext = createContext<TetrisLabContextType | undefined>(
  undefined
);

export const TetrisLabContextProvider = ({
  variant,
  children,
}: {
  variant: VARIANTS;
  children: ReactNode;
}) => {
  const initialState = {
    variant: variant,
    start: null,
    end: null,
    notifications: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
