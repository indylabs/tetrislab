import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import { QuestionAnswer as QuestionAnswerIcon } from "@mui/icons-material";

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
    <Dialog open={open} data-cy="active-notification">
      <DialogContent sx={{ backgroundColor: "primary.main" }}>
        <DialogContentText
          id="alert-dialog-description"
          sx={{
            display: "flex",
            gap: "0.5rem",
            color: "white",
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
          data-cy="active-notification-yes"
        >
          {ResponseType.YES}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActiveNotification;
