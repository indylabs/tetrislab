import { useTetrisLabContext } from "@/context/TetrisLabContext";

import Snackbar from "@mui/material/Snackbar";

const PassiveNotification = () => {
  const { state } = useTetrisLabContext();
  const { openPassiveNotification, setOpenPassiveNotification } = state;

  return (
    <Snackbar
      open={openPassiveNotification}
      autoHideDuration={5000}
      onClose={() => setOpenPassiveNotification(false)}
      message="This Snackbar will be dismissed in 5 seconds."
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      ClickAwayListenerProps={{ onClickAway: () => null }}
    />
  );
};

export default PassiveNotification;
