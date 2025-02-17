"use client";

import { usePathname } from "next/navigation";

import { NextAppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

import { type Navigation } from "@toolpad/core/AppProvider";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ChatIcon from "@mui/icons-material/Chat";

import tetrisLabTheme from "./theme";
import Logo from "@/components/Logo/Logo";
import Withdraw from "@/components/Withdraw/Withdraw";
import { TetrisLabContextProvider } from "@/state/TetrisLabContext";
import getIsStudy from "@/utils/getIsStudy";
import { VARIANTS } from "@/constants";

import "./normalize.css";

export const NAVIGATION: Navigation = [
  {
    segment: "",
    title: "TetrisLab",
    icon: (
      <div style={{ marginLeft: "4px" }}>
        <Logo size="20px" />
      </div>
    ),
  },
  {
    segment: "study/info-sheet",
    title: "Pilot Study",
    icon: <SportsEsportsIcon />,
  },
  {
    segment: "feedback",
    title: "Feedback",
    icon: <ChatIcon />,
  },
];

const BRANDING = {
  logo: "",
  title: "",
  homeUrl: "/",
};

export default function TetrisLab({
  children,
  randomVariant,
}: {
  children: React.ReactNode;
  randomVariant: VARIANTS;
}) {
  const pathname = usePathname();
  const isStudy = getIsStudy(pathname);

  const handleWithdraw = () => {
    window.location.replace("/withdraw");
  };

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
              toolbarActions: isStudy
                ? () => <Withdraw onWithdraw={() => handleWithdraw()} />
                : () => <></>,
            }}
            sx={{
              boxShadow: 0,
              borderRadius: 0,
              borderWidth: 0,
              drawer: {
                borderRight: "none",
                boxShadow: "none",
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
