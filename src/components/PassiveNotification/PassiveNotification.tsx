import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useNotification } from "@/hooks/useNotification";
import { passiveNotifications } from "@/data/notifications";
import {
  NotificationType,
  PASSIVE_NOTIFICATION_AUTO_HIDE_DURATION,
  PASSIVE_NOTIFICATION_INTERVAL,
} from "@/constants";

const PassiveNotification = () => {
  const [notification, open, onClose] = useNotification({
    notifications: passiveNotifications,
    type: NotificationType.PASSIVE,
    delay: PASSIVE_NOTIFICATION_INTERVAL,
  });

  return (
    <Snackbar
      open={open}
      autoHideDuration={PASSIVE_NOTIFICATION_AUTO_HIDE_DURATION}
      onClose={() => onClose()}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      ClickAwayListenerProps={{ onClickAway: () => null }}
    >
      <Alert
        severity="info"
        variant="filled"
        sx={{ backgroundColor: "primary.main", color: "white" }}
      >
        {notification?.text}
      </Alert>
    </Snackbar>
  );
};

export default PassiveNotification;
