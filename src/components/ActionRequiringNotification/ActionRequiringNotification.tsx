import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { ACTION_REQUIRING_INTERVAL } from "@/constants";

const ActionRequiringNotification = () => {
  const [openActionRequiringNotification, setOpenActionRequiringNotification] =
    useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenActionRequiringNotification(true);
    }, ACTION_REQUIRING_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog
      open={openActionRequiringNotification}
      onClose={() => setOpenActionRequiringNotification(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Action Requiring Notification
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This is an Action Requiring Notification
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setOpenActionRequiringNotification(false)}
          autoFocus
        >
          Disagree
        </Button>
        <Button
          onClick={() => setOpenActionRequiringNotification(false)}
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActionRequiringNotification;
