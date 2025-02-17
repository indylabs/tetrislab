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
import { VARIANTS, studySteps } from "@/constants";

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
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const searchParams = useSearchParams();
  const variant = (searchParams.get("variant") as VARIANTS) || randomVariant;

  const nextStep = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    router.push(studySteps[nextStep].slug);
  };

  const initialState = {
    variant,
    infoSheet: false,
    gender: null,
    age: null,
    requirements: [],
    consent: [],
    mmtr: [],
    gameStart: null,
    gameEnd: null,
    gameScore: null,
    gameLevel: null,
    gameRows: null,
    notifications: [],
    fss: [],
    debrief: false,
    participantCode: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state:", state);

  return (
    <TetrisLabContext.Provider
      value={{ state, dispatch, isPaused, setIsPaused, step, nextStep }}
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
