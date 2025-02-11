"use client";

import { useSearchParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useReducer,
} from "react";

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
  const [isPaused, setIsPaused] = useState(false);
  const searchParams = useSearchParams();
  const variant = (searchParams.get("variant") as VARIANTS) || randomVariant;

  const initialState = {
    variant,
    mmrt: [],
    start: null,
    end: null,
    notifications: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TetrisLabContext.Provider
      value={{ state, dispatch, isPaused, setIsPaused }}
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
