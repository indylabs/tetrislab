"use client";

import { useMemo, useState } from "react";

import { TetrisLabContextProvider } from "@/context/TetrisLabContext";

import Tetris from "@/components/Tetris/Tetris";
import Start from "@/components/Start/Start";

import { VARIANTS } from "@/constants";

// import ActionRequiringNotification from "@/components/ActionRequiringNotification/ActionRequiringNotification";
// import PassiveNotification from "@/components/PassiveNotification/PassiveNotification";

export default function Home() {
  const [playing, setPlaying] = useState<boolean>(true);

  const [openActionRequiringNotification, setOpenActionRequiringNotification] =
    useState(false);

  const [openPassiveNotification, setOpenPassiveNotification] = useState(false);

  var variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];

  console.log("variant:", variant);

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
    <TetrisLabContextProvider value={providerValue}>
      {playing ? <Tetris /> : <Start />}
    </TetrisLabContextProvider>
  );
}
