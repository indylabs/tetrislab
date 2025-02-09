"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import ChatIcon from "@mui/icons-material/Chat";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = 240;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "#000000" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#000000",
            color: "#ffffff",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            justifyContent: "flex-start",
          }}
        >
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon style={{ color: "#ffffff" }} />
          </IconButton>
        </div>
        <List>
          {[
            {
              id: 1,
              text: "Home",
              icon: <HomeIcon style={{ color: "#ffffff" }} />,
              link: "/",
            },
            {
              id: 2,
              text: "Start Game",
              icon: <SportsEsportsIcon style={{ color: "#ffffff" }} />,
              link: "/game",
            },
            {
              id: 3,
              text: "About TetrisLab",
              icon: <InfoIcon style={{ color: "#ffffff" }} />,
              link: "/about",
            },
            {
              id: 4,
              text: "Github",
              icon: <GitHubIcon style={{ color: "#ffffff" }} />,
              link: "https://github.com/indylabs/tetrislab",
            },
            {
              id: 5,
              text: "Literature Review (Draft)",
              icon: <SchoolIcon style={{ color: "#ffffff" }} />,
              link: "https://www.tetrislab.study/des-mcdonnell/Cyberpsychology/Thesis/Literature+Review+-+DRAFT",
            },
            {
              id: 6,
              text: "Feedback",
              icon: <ChatIcon style={{ color: "#ffffff" }} />,
              link: "mailto:des.mcdonnell@gmail.com",
            },
            {
              id: 7,
              text: "Admin",
              icon: <DashboardIcon style={{ color: "#ffffff" }} />,
              link: "https://supabase.com/dashboard/project/gohjqnxbwxvtlwspyqvc",
            },
          ].map(({ id, text, icon: Icon, link }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton href={link}>
                <ListItemIcon>{Icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
