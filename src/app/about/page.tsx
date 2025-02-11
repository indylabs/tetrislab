"use client";

import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { usePathname } from "next/navigation";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styles from "./about.module.scss";

export default function About() {
  const pathname = usePathname();

  return (
    <DashboardLayout currentPath={pathname}>
      <div className={styles.about}>
        <Typography
          color="primary"
          align="center"
          gutterBottom={true}
          variant="h3"
          component="p"
        >
          About TetrisLab
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

        <Typography
          color="primary"
          align="center"
          gutterBottom={true}
          component="p"
        >
          This is being conducted as part of IADT&apos;s{" "}
          <Link href="https://iadt.ie/courses/cyberpsychology/">
            MSc Cyberpsychology
          </Link>{" "}
          programme.
        </Typography>

        <Typography
          color="primary"
          align="center"
          gutterBottom={true}
          component="p"
        >
          Feedback is very welcome. Please contact{" "}
          <Link href="mailto:des.mcdonnell@gmail.com">
            des.mcdonnell@gmail.com
          </Link>{" "}
          with any comments.
        </Typography>
      </div>
    </DashboardLayout>
  );
}
