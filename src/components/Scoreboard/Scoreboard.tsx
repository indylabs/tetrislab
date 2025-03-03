import React from "react";
import { Typography } from "@mui/material";

type ScoreboardProps = {
  score: number;
  rows: number;
  level: number;
};

const Scoreboard = ({ score, rows, level }: ScoreboardProps) => {
  const data = [
    {
      id: 1,
      label: "Score:",
      value: score,
    },
    {
      id: 2,
      label: "Rows:",
      value: rows,
    },
    {
      id: 3,
      label: "Level:",
      value: level,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "2.5rem",
        justifyContent: "space-between",
        padding: "0.25rem",
        backgroundColor: "#121212",
      }}
    >
      {data.map(({ id, label, value }) => (
        <div
          key={id}
          style={{
            lineHeight: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <Typography component="span" sx={{ color: "primary.main", m: 0 }}>
            {label}
          </Typography>{" "}
          <Typography component="span" sx={{ m: 0 }}>
            {value}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;
