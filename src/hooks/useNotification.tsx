import { useEffect, useRef, useState } from "react";

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

  const open = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!open.current) {
        setNotification({
          ...getRandomNotification(notifications), // Assign random passive notification
          type, // Set type
          start: new Date(), // Set start timestamp
        });

        // Open notification
        open.current = true;

        // TODO: If game paused, don't trigger notification
      }
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
    open.current = false;
  };

  return [notification, open.current, onClose] as const;
};
