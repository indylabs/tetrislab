import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material";

import { Box, Link, Typography, Fab } from "@mui/material";
import { Science as ScienceIcon } from "@mui/icons-material";

import Title from "@/components/Title/Title";
import Logo from "@/components/Logo/Logo";

const STUDY_ROUTE = "/info-sheet";

export const Home = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        maxWidth: "90%",
        mx: 'auto',
        my: "0",
        [theme.breakpoints.up('sm')]: { my: "auto" },
        py: 2
      }}
    >
      <Logo size="120px" />

      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          gap: '0.25rem',
          justifyItems: 'center',
          alignItems: 'center',
          fontWeight: "normal",
          fontSize: '2rem',
          margin: 0
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
        Join Study <ScienceIcon />
      </Fab>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: '0.5rem'
        }}
      >
        <Typography sx={{ textAlign: "center", width: '100%' }}>
          Student:{" "}
          <Link href="mailto:N00236157@student.iadt.ie" color="secondary.main">
            Des McDonnell
          </Link>{" "}
          (#N00236157)
        </Typography>
        <Typography sx={{ textAlign: "center", width: '100%' }}>
          Supervisor:{" "}
          <Link href="mailto:Liam.Challenor@iadt.ie" color="secondary.main">
            Dr Liam Challenor
          </Link>
        </Typography>
        <Typography align="center" gutterBottom={true} component="p" sx={{ textAlign: "center", width: '100%' }}>
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
    </Box>
  );
};
