"use client";

import { useMemo, useState } from "react";

import { TetrisLabContextProvider } from "@/context/TetrisLabContext";

import Tetris from "@/components/Tetris/Tetris";
// import ActionRequiringNotification from "@/components/ActionRequiringNotification/ActionRequiringNotification";
// import PassiveNotification from "@/components/PassiveNotification/PassiveNotification";

export default function Home() {
  const [openActionRequiringNotification, setOpenActionRequiringNotification] =
    useState(false);

  const [openPassiveNotification, setOpenPassiveNotification] = useState(false);

  const providerValue = useMemo(
    () => ({
      state: {
        openActionRequiringNotification,
        setOpenActionRequiringNotification,
        openPassiveNotification,
        setOpenPassiveNotification,
      },
    }),
    [
      openActionRequiringNotification,
      setOpenActionRequiringNotification,
      openPassiveNotification,
      setOpenPassiveNotification,
    ]
  );

  return (
    <TetrisLabContextProvider value={providerValue}>
      <Tetris />
    </TetrisLabContextProvider>
  );
}
