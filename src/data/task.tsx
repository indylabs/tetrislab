import Image from "next/image";

import { Box, Typography } from "@mui/material";

export const ACTION_TITLE = "Tetris";

export const ACTION_INFO_INIT =
  "When ready, click 'Start Task' to begin the primary task";
export const ACTION_LABEL_INIT = "Start Task";

export const ACTION_INFO_COMPLETE =
  'Click "Continue" to proceed to the post-task steps';
export const ACTION_LABEL_COMPLETE = "Continue";

export const TASK_DATA_PRE = [
  {
    id: 1,
    text: (
      <>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }} color="primary">
              Primary Task
            </Typography>
            <Typography sx={{ mb: 2 }}>
              The Tetris game will start when you click &quot;Start Task&quot;.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              The Tetris pieces can be moved horizontally using the left and
              right arrow keys on your keyboard. Pieces can be rotated using the
              up arrow key, and can be moved down using the down arrow key.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/controls.png"
              alt="Task Keyboard Controls"
              width="276"
              height="134"
            />
          </Box>
        </Box>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }} color="primary">
            Passive Notifications
          </Typography>

          <Typography sx={{ mb: 2 }}>
            You may experience Passive Notifications while playing the game.
          </Typography>
          <Typography>
            Passive notifications may periodically appear in the bottom right
            corner of your screen and do not require any interaction.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/pn.png"
            alt="Example of a passive notification"
            width="288"
            height="65"
          />
        </Box>
      </Box>
    ),
  },
  {
    id: 3,
    text: (
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }} color="primary">
            Active Notifications
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Active notifications may periodically appear in the middle of your
            screen. While this notifications are visible, the primary task will
            be paused.
          </Typography>
          <Typography>
            Active notifications will require a response to continue. You can
            response by clicking either &quot;Yes&quot; or &quot;No&quot; with
            your mouse or trackpad.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/an.png"
            alt="Example of an active notification"
            width="354"
            height="137"
          />
        </Box>
      </Box>
    ),
  },
];

export const TASK_DATA_POST = [
  {
    id: 1,
    text: (
      <>
        <Typography variant="h6" sx={{ mb: 2 }} color="primary">
          Game Over
        </Typography>
        <Typography>The primary task is now complete.</Typography>
      </>
    ),
  },
];
