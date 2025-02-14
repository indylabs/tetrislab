"use client";

import { NextAppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

import { type Navigation } from "@toolpad/core/AppProvider";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ChatIcon from "@mui/icons-material/Chat";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";

import tetrisLabTheme from "./theme";

import { TetrisLabContextProvider } from "@/state/TetrisLabContext";
import getRandomVariant from "@/utils/getRandomVariant";

import "./normalize.css";

export const NAVIGATION: Navigation = [
  {
    segment: "",
    title: "TetrisLab",
    icon: <HomeIcon />,
  },
  {
    segment: "study/info-sheet",
    title: "Study",
    icon: <SportsEsportsIcon />,
  },
  {
    segment: "feedback",
    title: "Feedback",
    icon: <ChatIcon />,
  },
];

const BRANDING = {
  logo: <img src="/logoSmall.svg" />,
  title: "TetrisLab",
  homeUrl: "/",
};

export default function TetrisLab({ children }: { children: React.ReactNode }) {
  const randomVariant = getRandomVariant();

  return (
    <html lang="en">
      <body>
        <NextAppProvider
          navigation={NAVIGATION}
          branding={BRANDING}
          theme={tetrisLabTheme}
        >
          <DashboardLayout
            defaultSidebarCollapsed={true}
            slots={{
              toolbarActions: () => (
                <Button
                  color="secondary"
                  variant="outlined"
                  endIcon={<ExitToAppIcon />}
                  onClick={() => window.alert("TODO: Withdraw and exit flow")}
                >
                  Withdraw from study
                </Button>
              ),
            }}
            sx={{
              boxShadow: 0,
              borderRadius: 0,
              borderWidth: 0,
              drawer: {
                borderRight: "none", // Removes right border
                boxShadow: "none", // Ensures no shadow remains
              },
            }}
          >
            <TetrisLabContextProvider randomVariant={randomVariant}>
              {children}
            </TetrisLabContextProvider>
          </DashboardLayout>
        </NextAppProvider>
      </body>
    </html>
  );
}
