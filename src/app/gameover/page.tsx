"use client";

import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import styles from "./gameover.module.scss";

export default function Gameover() {
  return (
    <DashboardLayout>
      <div className={styles.gameover}>
        <Typography
          color="primary"
          align="center"
          gutterBottom={true}
          variant="h3"
          component="p"
        >
          Game Over
        </Typography>

        <Typography
          color="primary"
          align="center"
          gutterBottom={true}
          component="p"
        >
          Thank you for participanting in this study.
        </Typography>

        <Button href={"/"} startIcon={<CheckCircleOutlineIcon />}>
          Finish
        </Button>
      </div>
    </DashboardLayout>
  );
}
