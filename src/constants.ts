export enum VARIANTS {
  CONTROL = 'control',
  A = 'a',
  B = 'b'
}

export enum NotificationType {
  PASSIVE = "passive",
  ACTIVE = "active"
}

export enum ResponseType {
  YES = 'yes',
  NO = 'no'
}

export const PASSIVE_NOTIFICATION_INTERVAL = 15000; // 15 sec (to allow for 5000 duration)
export const PASSIVE_NOTIFICATION_AUTO_HIDE_DURATION = 5000; // 5 sec

export const ACTIVE_NOTIFICATION_INTERVAL = 10000; // 10 sec
