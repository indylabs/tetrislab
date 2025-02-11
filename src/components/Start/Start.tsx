import React from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import Logo from "@/components/Logo/Logo";

import styles from "./Start.module.scss";

function Start() {
  return (
    <div className={styles.start}>
      <Logo />
      <Typography
        color="primary"
        align="center"
        gutterBottom={true}
        variant="h3"
        component="p"
      >
        Welcome to TetrisLab
      </Typography>

      <Typography
        color="primary"
        align="center"
        gutterBottom={true}
        component="p"
      >
        TetrisLab is an experimental application which will form part of a
        research project exploring the Differential Effects of Interrupting 📢
        and Distracting 👋 UI Notifications on Flow 🧘 and Performance 📈.
      </Typography>

      <Button href="/game" startIcon={<SportsEsportsIcon />}>
        Start Pilot
      </Button>
    </div>
  );
}

export default Start;
