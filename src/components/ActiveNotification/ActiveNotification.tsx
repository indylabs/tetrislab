import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { useNotification } from "@/hooks/useNotification";
import { activeNotifications } from "@/data/notifications";
import {
  ACTIVE_NOTIFICATION_INTERVAL,
  NotificationType,
  ResponseType,
} from "@/constants";

const ActiveNotification = () => {
  const [notification, open, onClose] = useNotification({
    notifications: activeNotifications,
    type: NotificationType.ACTIVE,
    delay: ACTIVE_NOTIFICATION_INTERVAL,
  });

  return (
    <Dialog open={open}>
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
