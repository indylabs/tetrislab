import { useEffect, useState } from "react";

import getRandomNotification from "@/utils/getRandomNotification";
import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { NotificationType } from "@/constants";
import type { TetrisLabNotification } from "@/types";

export const useNotification = (
  notifications: TetrisLabNotification[],
  type: NotificationType,
  delay: number
) => {
  const { dispatch } = useTetrisLabContext();

  const [notification, setNotification] =
    useState<TetrisLabNotification | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotification({
        ...getRandomNotification(notifications), // Assign random passive notification
        type, // Set type
        start: new Date(), // Set start timestamp
      });
      // Open notification
      setOpen(true);
      // TODO: If already open, don't trigger notification
      // TODO: If gameover, don't trigger notification
      // TODO: If game paused, don't trigger notification
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const onClose = (response?: string) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      notification: {
        ...notification,
        end: new Date(),
        ...(response ? { response } : {}),
      },
    });
    setOpen(false);
  };

  return [notification, open, onClose] as const;
};
