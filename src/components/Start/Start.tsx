import React from "react";

import Button from "@mui/material/Button";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import Logo from "@/components/Logo/Logo";

import { useTetrisLabContext } from "@/context/TetrisLabContext";

import styles from "./Start.module.scss";

function Start() {
  const { state } = useTetrisLabContext();
  const { setPlaying } = state;

  return (
    <div className={styles.start}>
      <Logo />
      <Button
        color="secondary"
        startIcon={<SportsEsportsIcon />}
        onClick={() => setPlaying(true)}
      >
        Start Game
      </Button>
    </div>
  );
}

export default Start;
