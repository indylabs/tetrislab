"use client";
import { useTetrisLabContext } from "@/context/TetrisLabContext";

import PassiveNotification from "@/components/PassiveNotification/PassiveNotification";
import ActionRequiringNotification from "@/components/ActionRequiringNotification/ActionRequiringNotification";
import Tetris from "@/components/Tetris/Tetris";

import { VARIANTS } from "@/constants";

import styles from "./page.module.scss";

export default function Game() {
  const { state } = useTetrisLabContext();
  const { variant } = state;

  return (
    <div className={styles.game}>
      <Tetris />
      {variant === VARIANTS.A && <PassiveNotification />}
      {variant === VARIANTS.B && <ActionRequiringNotification />}
    </div>
  );
}
