import { useTetrisLabContext } from "@/context/TetrisLabContext";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ActionRequiringNotification = () => {
  const { state } = useTetrisLabContext();
  const {
    openActionRequiringNotification,
    setOpenActionRequiringNotification,
  } = state;

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
