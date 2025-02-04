import type { TetrisLabNotification } from "@/types";

const getRandomNotification = (notifications: TetrisLabNotification[]) => {
  return notifications[
    Math.floor(Math.random() * notifications.length)
  ];
}

export default getRandomNotification;