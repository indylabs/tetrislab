"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useReducer,
} from "react";

import { reducer } from "./TetrisLabReducer";

import type { TetrisLabContextType } from "@/types";
import { INITIAL_STATE } from "@/constants";

const TetrisLabContext = createContext<TetrisLabContextType | undefined>(
  undefined
);

export const TetrisLabContextProvider = ({
  isDesktop,
  children,
}: {
  isDesktop: boolean;
  children: ReactNode;
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  console.log("state:", state);

  return (
    <TetrisLabContext.Provider
      value={{
        state,
        dispatch,
        isDesktop,
        isPaused,
        setIsPaused,
      }}
    >
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
