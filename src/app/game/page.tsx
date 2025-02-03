"use client";

import Tetris from "@/components/Tetris/Tetris";

import styles from "./page.module.scss";

export default function Game() {
  return (
    <div className={styles.game}>
      <Tetris />
    </div>
  );
}
