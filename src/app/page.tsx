"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import React from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import Logo from "@/components/Logo/Logo";

export default function Home() {
  return (
    <PageContainer
      title=""
      breadcrumbs={[]}
      style={{
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          margin: "auto",
          gap: "2rem",
        }}
      >
        <Logo />
        <Typography
          align="center"
          gutterBottom={true}
          variant="h3"
          component="p"
        >
          Welcome to TetrisLab
        </Typography>

        <Typography align="center" gutterBottom={true} component="p">
          TetrisLab is an experimental application which will form part of a
          research project exploring the Differential Effects of Interrupting 📢
          and Distracting 👋 UI Notifications on Flow 🧘 and Performance 📈.
        </Typography>

        <Button
          href="/study"
          variant="outlined"
          endIcon={<SportsEsportsIcon />}
          style={{
            margin: "auto",
          }}
          color="secondary"
        >
          Join Pilot
        </Button>
      </div>
    </PageContainer>
  );
}
