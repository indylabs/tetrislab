"use client";

import { useMemo, useState } from "react";

import { TetrisLabContextProvider } from "@/context/TetrisLabContext";

import Button from "@mui/material/Button";

import ActionRequiringNotification from "@/components/ActionRequiringNotification/ActionRequiringNotification";
import PassiveNotification from "@/components/PassiveNotification/PassiveNotification";

import styles from "./page.module.css";

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
    <div className={styles.page}>
      <main className={styles.main}>
        <TetrisLabContextProvider value={providerValue}>
          <Button
            variant="outlined"
            onClick={() => setOpenActionRequiringNotification(true)}
          >
            Open Action Requiring Notification
          </Button>

          <Button
            variant="outlined"
            onClick={() => setOpenPassiveNotification(true)}
          >
            Open Passive Notification
          </Button>

          <ActionRequiringNotification />
          <PassiveNotification />
        </TetrisLabContextProvider>
      </main>
    </div>
  );
}
