import { useState } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Typography,
} from "@mui/material";
import {
  AssignmentReturn as AssignmentReturnIcon,
  ExitToApp as ExitToAppIcon,
  Info as InfoIcon,
} from "@mui/icons-material";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

const Withdraw = () => {
  const [open, setOpen] = useState(false);

  const { dispatch } = useTetrisLabContext();

  const handleWithdraw = () => {
    dispatch({ type: "RESET_STATE" });
    // Using window.location.replace here to force reset of state
    window.location.replace("/withdraw");
  };

  return (
    <>
      <Button
        size="medium"
        onClick={() => setOpen(true)}
        sx={{
          gap: "0.5rem",
          color: "secondary.main",
          "&:hover": {
            color: "background.paper",
            backgroundColor: "secondary.main",
          },
          borderRadius: 8,
        }}
      >
        Withdraw From Study <ExitToAppIcon />
      </Button>
      <Dialog open={open}>
        <DialogTitle sx={{ backgroundColor: "primary.main" }}>
          Withdraw From Study
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "primary.main" }}>
          <DialogContentText color="white">
            <Typography sx={{ display: "flex", gap: "0.5rem", my: "1rem" }}>
              <InfoIcon /> You are free to withdraw from this study at any
              point.
            </Typography>
            <Typography sx={{ display: "flex", gap: "0.5rem" }}>
              <InfoIcon /> No data associated with your participation has been
              recorded.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
            backgroundColor: "primary.main",
          }}
        >
          <Button
            onClick={() => setOpen(false)}
            color="secondary"
            variant="outlined"
            endIcon={<AssignmentReturnIcon />}
          >
            Return To Study
          </Button>
          <Button
            onClick={() => handleWithdraw()}
            color="secondary"
            variant="outlined"
            endIcon={<ExitToAppIcon />}
          >
            Withdraw From Study
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Withdraw;
