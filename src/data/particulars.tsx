import { Tooltip, Typography } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";

export const ACTION_TITLE = "Particulars";

export const ACTION_INFO =
  "Please answer the demographic questions and confirm all requirements to proceed.";

export const ACTION_LABEL = "Continue";

export const PARTICULARS_DATA = [
  {
    id: 1,
    text: "I am using a desktop computer with a modern web browser, keyboard and mouse or trackpad.",
  },
  {
    id: 2,
    text: "I am in a quiet, distraction free environment.",
  },
  {
    id: 3,
    text: "I am familiar with the video game Tetris.",
  },
  { id: 4, text: "I have normal or corrected-to-normal vision." },
  {
    id: 5,
    text: (
      <Typography
        component="span"
        sx={{
          display: "flex",
          gap: "0.25rem",
          alignItems: "center",
          m: 0,
          p: 0,
        }}
      >
        I do not have ADHD.
        <Tooltip title="Individuals with ADHD will be excluded to maintain consistency in attention-related variables for the flow state experiment.">
          <InfoIcon />
        </Tooltip>
      </Typography>
    ),
  },
];
