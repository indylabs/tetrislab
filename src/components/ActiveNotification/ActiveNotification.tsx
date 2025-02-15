import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

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
      <DialogContent sx={{ backgroundColor: "primary.main" }}>
        <DialogContentText
          id="alert-dialog-description"
          sx={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <QuestionAnswerIcon /> {notification?.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ gap: "1rem", backgroundColor: "primary.main" }}>
        <Button
          onClick={() => onClose(ResponseType.NO)}
          color="secondary"
          variant="outlined"
        >
          {ResponseType.NO}
        </Button>
        <Button
          onClick={() => onClose(ResponseType.YES)}
          color="secondary"
          variant="outlined"
        >
          {ResponseType.YES}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActiveNotification;
