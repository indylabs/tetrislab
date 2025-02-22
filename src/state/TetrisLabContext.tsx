"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useReducer,
} from "react";

import { reducer } from "./TetrisLabReducer";

import type { TetrisLabContextType } from "@/types";
import { INITIAL_STATE, VARIANTS, STUDY_STEPS } from "@/constants";

const TetrisLabContext = createContext<TetrisLabContextType | undefined>(
  undefined
);

export const TetrisLabContextProvider = ({
  randomVariant,
  isDesktop,
  children,
}: {
  randomVariant: VARIANTS;
  isDesktop: boolean;
  children: ReactNode;
}) => {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const searchParams = useSearchParams();
  const variant = (searchParams.get("variant") as VARIANTS) || randomVariant;

  const nextStep = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    router.push(STUDY_STEPS[nextStep].slug);
  };

  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    variant,
  });

  console.log("state:", state);

  return (
    <TetrisLabContext.Provider
      value={{
        state,
        dispatch,
        isDesktop,
        isPaused,
        setIsPaused,
        step,
        nextStep,
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
