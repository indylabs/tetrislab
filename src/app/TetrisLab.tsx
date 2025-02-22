"use client";

import { usePathname } from "next/navigation";

import { NextAppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

import tetrisLabTheme from "./theme";
import Withdraw from "@/components/Withdraw/Withdraw";
import { TetrisLabContextProvider } from "@/state/TetrisLabContext";
import getIsStudy from "@/utils/getIsStudy";
import { BRANDING, NAVIGATION, VARIANTS } from "@/constants";
import useIsDesktop from "@/hooks/useIsDesktop";

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
  const isDesktop = useIsDesktop();

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
                isStudy && isDesktop
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
              isDesktop={isDesktop}
            >
              {children}
            </TetrisLabContextProvider>
          </DashboardLayout>
        </NextAppProvider>
      </body>
    </html>
  );
}
