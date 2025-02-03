import React from "react";

import Button from "@mui/material/Button";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import InfoIcon from "@mui/icons-material/Info";

import Logo from "@/components/Logo/Logo";

import styles from "./Start.module.scss";

function Start() {
  return (
    <div className={styles.start}>
      <Logo />
      <div>
        <Button startIcon={<SportsEsportsIcon />} href="/game">
          Start Game
        </Button>

        <Button startIcon={<InfoIcon />} href="/about">
          About
        </Button>
      </div>
    </div>
  );
}

export default Start;
