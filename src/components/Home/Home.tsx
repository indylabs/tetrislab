import { useRouter } from "next/navigation";

import { Box, Link, Typography, Fab } from "@mui/material";
import { Science as ScienceIcon } from "@mui/icons-material";

import Title from "@/components/Title/Title";
import Logo from "@/components/Logo/Logo";
import useIsDesktop from "@/hooks/useIsDesktop";

const STUDY_ROUTE = "/info-sheet";

export const Home = () => {
  const isDesktop = useIsDesktop();
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5rem",
        maxWidth: "75%",
        m: "auto",
        mt: "-16px",
      }}
    >
      <Logo size="140px" />

      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.25rem",
          fontWeight: "normal",
        }}
      >
        <span>Welcome to</span>
        <Title fontSize="2rem" />
      </h1>

      <Typography align="center" component="h2">
        This is an experimental application which will form part of a research
        project exploring the{" "}
        <em>
          &quot;Differential Effects of Interrupting 📢 and Distracting 👋 UI
          Notifications on Flow 🧘 and Performance 📈&quot;
        </em>
      </Typography>
      {isDesktop && (
        <Fab
          variant="extended"
          sx={{
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "secondary.main",
            color: "secondary.main",
            "&:hover": {
              color: "background.paper",
              backgroundColor: "secondary.main",
              borderColor: "secondary.main",
            },
          }}
          color="secondary"
          onClick={() => router.push(STUDY_ROUTE)}
        >
          Join Pilot Study <ScienceIcon />
        </Fab>
      )}

      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography>
          Student:{" "}
          <Link href="mailto:N00236157@student.iadt.ie" color="secondary.main">
            Des McDonnell
          </Link>{" "}
          (#N00236157)
        </Typography>
        <Typography>
          Supervisor:{" "}
          <Link href="mailto:Liam.Challenor@iadt.ie" color="secondary.main">
            Dr Liam Challenor
          </Link>
        </Typography>
      </Box>
      <Typography align="center" gutterBottom={true} component="p">
        This study is being conducted as part of the{" "}
        <Link
          href="https://iadt.ie/courses/cyberpsychology/"
          target="_blank"
          color="secondary.main"
        >
          MSc Cyberpsychology
        </Link>{" "}
        at the{" "}
        <Link href="https://iadt.ie/" target="_blank" color="secondary.main">
          Institute of Art, Design and Technology (IADT)
        </Link>
      </Typography>
    </Box>
  );
};
