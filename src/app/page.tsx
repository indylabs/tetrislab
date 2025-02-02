"use client";

import { useMemo, useState } from "react";

import { TetrisLabContextProvider } from "@/context/TetrisLabContext";

import Tetris from "@/components/Tetris/Tetris";
import Start from "@/components/Start/Start";

// import ActionRequiringNotification from "@/components/ActionRequiringNotification/ActionRequiringNotification";
// import PassiveNotification from "@/components/PassiveNotification/PassiveNotification";

export default function Home() {
  const [playing, setPlaying] = useState<boolean>(true);

  const [openActionRequiringNotification, setOpenActionRequiringNotification] =
    useState(false);

  const [openPassiveNotification, setOpenPassiveNotification] = useState(false);

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
