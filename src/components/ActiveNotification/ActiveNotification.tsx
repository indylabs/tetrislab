import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useNotification } from "@/hooks/useNotification";
import { activeNotifications } from "@/data/notifications";
import {
  ACTIVE_NOTIFICATION_INTERVAL,
  NotificationType,
  ResponseType,
} from "@/constants";

const ActiveNotification = () => {
  const [notification, open, onClose] = useNotification(
    activeNotifications,
    NotificationType.ACTIVE,
    ACTIVE_NOTIFICATION_INTERVAL
  );

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {notification?.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(ResponseType.NO)} autoFocus>
          {ResponseType.NO}
        </Button>
        <Button onClick={() => onClose(ResponseType.YES)} autoFocus>
          {ResponseType.YES}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActiveNotification;
