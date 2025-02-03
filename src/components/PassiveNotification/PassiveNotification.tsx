import { useEffect, useState } from "react";

import Snackbar from "@mui/material/Snackbar";

import {
  PASSIVE_NOTIFICATION_AUTO_HIDE_DURATION,
  PASSIVE_NOTIFICATION_INTERVAL,
} from "@/constants";

const PassiveNotification = () => {
  const [openPassiveNotification, setOpenPassiveNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // TODO: If already open, don't trigger notification
      setOpenPassiveNotification(true);
    }, PASSIVE_NOTIFICATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <Snackbar
      open={openPassiveNotification}
      autoHideDuration={PASSIVE_NOTIFICATION_AUTO_HIDE_DURATION}
      onClose={() => setOpenPassiveNotification(false)}
      message="This Snackbar will be dismissed in 5 seconds."
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      ClickAwayListenerProps={{ onClickAway: () => null }}
    />
  );
};

export default PassiveNotification;
