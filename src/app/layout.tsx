import { Suspense } from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { LinearProgress } from "@mui/material";

import TetrisLab from "./TetrisLab";

export const metadata: Metadata = {
  title: "TetrisLab",
  description:
    "TetrisLab is an experimental application which will form part of a research project exploring the Differential Effects of Interrupting 📢 and Distracting 👋 UI Notifications on Flow 🧘 and Performance 📈.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Suspense fallback={<LinearProgress />}>
            <TetrisLab>{children}</TetrisLab>
          </Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
