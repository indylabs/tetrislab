"use client";

import { NextAppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

import { type Navigation } from "@toolpad/core/AppProvider";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ChatIcon from "@mui/icons-material/Chat";

import tetrisLabTheme from "./theme";

import { TetrisLabContextProvider } from "@/state/TetrisLabContext";
import getRandomVariant from "@/utils/getRandomVariant";

import "./normalize.css";

export const NAVIGATION: Navigation = [
  {
    segment: "",
    title: "TetrisLab",
    icon: <img src="/logo_xs.svg" />,
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
              appTitle: () => void 0,
              toolbarActions: () => <button>Withdraw</button>,
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
