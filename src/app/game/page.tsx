"use client";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import PassiveNotification from "@/components/PassiveNotification/PassiveNotification";
import ActiveNotification from "@/components/ActiveNotification/ActiveNotification";
import Tetris from "@/components/Tetris/Tetris";

import { VARIANTS } from "@/constants";

import styles from "./page.module.scss";

export default function Game() {
  const { state } = useTetrisLabContext();
  const { variant } = state;

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={styles.game}>
        <Tetris />
        {variant === VARIANTS.A && <PassiveNotification />}
        {variant === VARIANTS.B && <ActiveNotification />}
      </div>
    </ThemeProvider>
  );
}
