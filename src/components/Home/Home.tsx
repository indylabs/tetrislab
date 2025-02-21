import NextLink from "next/link";

import { Box, Link, Typography, Button } from "@mui/material";
import { SportsEsports as SportsEsportsIcon } from "@mui/icons-material";

import Title from "@/components/Title/Title";
import Logo from "@/components/Logo/Logo";

export const Home = () => {
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

      <Typography
        align="center"
        variant="h3"
        component="p"
        sx={{ display: "flex", gap: "0.5rem" }}
      >
        Welcome to <Title variant="h3" showLogo={false} />
      </Typography>

      <Typography align="center" component="p">
        This is an experimental application which will form part of a research
        project exploring the{" "}
        <em>
          &quot;Differential Effects of Interrupting 📢 and Distracting 👋 UI
          Notifications on Flow 🧘 and Performance 📈&quot;
        </em>
      </Typography>

      <Button
        href="/info-sheet"
        variant="outlined"
        endIcon={<SportsEsportsIcon />}
        sx={{
          mx: "auto",
          textTransform: "none",
        }}
        color="secondary"
        component={NextLink}
      >
        Join Pilot Study
      </Button>

      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Box>
          Student:{" "}
          <Link href="mailto:N00236157@student.iadt.ie" color="secondary.main">
            Des McDonnell
          </Link>{" "}
          (#N00236157)
        </Box>
        <Box>
          Supervisor:{" "}
          <Link href="mailto:Liam.Challenor@iadt.ie" color="secondary.main">
            Dr Liam Challenor
          </Link>
        </Box>
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
