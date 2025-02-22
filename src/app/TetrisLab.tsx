"use client";

import { usePathname } from "next/navigation";

import { NextAppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import tetrisLabTheme from "./theme";
import Withdraw from "@/components/Withdraw/Withdraw";
import { TetrisLabContextProvider } from "@/state/TetrisLabContext";
import getIsStudy from "@/utils/getIsStudy";
import { BRANDING, NAVIGATION, VARIANTS } from "@/constants";

import "./normalize.css";

export default function TetrisLab({
  children,
  randomVariant,
}: {
  children: React.ReactNode;
  randomVariant: VARIANTS;
}) {
  const pathname = usePathname();
  const isStudy = getIsStudy(pathname);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleWithdraw = () => {
    // Using window.location.replace here to force reset of state
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
              toolbarActions:
                isStudy && !isMobile
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
            <TetrisLabContextProvider
              randomVariant={randomVariant}
              isMobile={isMobile}
            >
              {children}
            </TetrisLabContextProvider>
          </DashboardLayout>
        </NextAppProvider>
      </body>
    </html>
  );
}
