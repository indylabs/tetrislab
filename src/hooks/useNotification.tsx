import { useRef, useState } from "react";
import { useInterval } from "usehooks-ts";

import getRandomNotification from "@/utils/getRandomNotification";
import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { NotificationType } from "@/constants";
import type { TetrisLabNotification } from "@/types";

type UseNotificationType = {
  notifications: TetrisLabNotification[];
  type: NotificationType;
  delay: number;
};

export const useNotification = ({
  notifications,
  type,
  delay,
}: UseNotificationType) => {
  const { dispatch, isPaused, setIsPaused } = useTetrisLabContext();

  const [notification, setNotification] =
    useState<TetrisLabNotification | null>(null);

  const open = useRef(false);

  useInterval(
    () => {
      if (!open.current) {
        setNotification({
          ...getRandomNotification(notifications), // Assign random passive notification
          type, // Set type
          start: new Date(), // Set start timestamp
        });

        // Open notification
        open.current = true;

        // If active notification, toggle isPaused
        if (type === NotificationType.ACTIVE) {
          setIsPaused(true);
        }
      }
    },
    isPaused ? null : delay,
  )

  const onClose = (response?: string) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      notification: {
        ...notification,
        end: new Date(),
        ...(response ? { response } : {}),
      },
    });

    // Close notification
    open.current = false;

    // If active notification, toggle isPaused
    if (type === NotificationType.ACTIVE) {
      setIsPaused(false);
    }
  };

  return [notification, open.current, onClose] as const;
};
