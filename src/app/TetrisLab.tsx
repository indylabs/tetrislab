"use client";

import { usePathname } from "next/navigation";

import { NextAppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

import tetrisLabTheme from "./theme";
import Withdraw from "@/components/Withdraw/Withdraw";
import { TetrisLabContextProvider } from "@/state/TetrisLabContext";
import getIsStudy from "@/utils/getIsStudy";
import { BRANDING, NAVIGATION } from "@/constants";
import useIsDesktop from "@/hooks/useIsDesktop";

import "./normalize.css";

export default function TetrisLab({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudy = getIsStudy(pathname);
  const isDesktop = useIsDesktop();

  return (
    <NextAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      theme={tetrisLabTheme}
    >
      <TetrisLabContextProvider isDesktop={isDesktop}>
        <DashboardLayout
          defaultSidebarCollapsed={true}
          slots={{
            toolbarActions:
              isStudy && isDesktop ? () => <Withdraw /> : () => <></>,
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
          {children}
        </DashboardLayout>
      </TetrisLabContextProvider>
    </NextAppProvider>
  );
}
