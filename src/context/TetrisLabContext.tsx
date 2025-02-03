"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

import { VARIANTS } from "@/constants";

type TetrisLabContextType = {
  state: {
    playing: boolean;
    setPlaying: (playing: boolean) => void;
    openActionRequiringNotification: boolean;
    setOpenActionRequiringNotification: (playing: boolean) => void;
    openPassiveNotification: boolean;
    setOpenPassiveNotification: (playing: boolean) => void;
  };
};

const TetrisLabContext = createContext<TetrisLabContextType | undefined>(
  undefined
);

export const TetrisLabContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [playing, setPlaying] = useState<boolean>(true);

  const [openActionRequiringNotification, setOpenActionRequiringNotification] =
    useState(false);

  const [openPassiveNotification, setOpenPassiveNotification] = useState(false);

  var variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];

  const providerValue = useMemo(
    () => ({
      state: {
        playing,
        setPlaying,
        openActionRequiringNotification,
        setOpenActionRequiringNotification,
        openPassiveNotification,
        setOpenPassiveNotification,
      },
    }),
    [
      playing,
      setPlaying,
      openActionRequiringNotification,
      setOpenActionRequiringNotification,
      openPassiveNotification,
      setOpenPassiveNotification,
    ]
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
