import { StudyStepType } from "./types";

export enum VARIANTS {
  CONTROL = "control",
  A = "a",
  B = "b",
}

export enum NotificationType {
  PASSIVE = "passive",
  ACTIVE = "active",
}

export enum ResponseType {
  YES = "yes",
  NO = "no",
}

export const PASSIVE_NOTIFICATION_INTERVAL = 15000; // 15 sec (to allow for 5000 duration)
export const PASSIVE_NOTIFICATION_AUTO_HIDE_DURATION = 5000; // 5 sec

export const ACTIVE_NOTIFICATION_INTERVAL = 10000; // 10 sec

export const studySteps: StudyStepType[] = [
  {
    id: 1,
    title: "Information Sheet",
    slug: "/study/info-sheet",
  },
  {
    id: 2,
    title: "Requirements",
    slug: "/study/requirements",
  },
  {
    id: 3,
    title: "Consent",
    slug: "/study/consent",
  },
  {
    id: 4,
    title: "MMT-R Questionnaire",
    slug: "/study/mmtr",
  },
  {
    id: 5,
    title: "Task ",
    slug: "/study/task",
  },
  {
    id: 6,
    title: "FSS Questionnaire",
    slug: "/study/fss",
  },
  {
    id: 7,
    title: "Debrief",
    slug: "/study/debrief",
  },
  {
    id: 8,
    title: "Participant Code",
    slug: "/study/participant-code",
  },
];
