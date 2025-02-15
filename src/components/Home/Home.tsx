import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import Logo from "@/components/Logo/Logo";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        margin: 0,
        padding: 0,
      }}
    >
      <Logo />

      <Typography align="center" gutterBottom={true} variant="h3" component="p">
        Welcome to TetrisLab
      </Typography>

      <Typography align="center" gutterBottom={true} component="p">
        TetrisLab is an experimental application which will form part of a
        research project exploring the
        <br />
        Differential Effects of Interrupting 📢 and Distracting 👋 UI
        Notifications on Flow 🧘 and Performance 📈
      </Typography>

      <Button
        href="/study"
        variant="outlined"
        endIcon={<SportsEsportsIcon />}
        sx={{
          mx: "auto",
          textTransform: "none",
        }}
        color="secondary"
      >
        Join Pilot
      </Button>
    </Box>
  );
};
