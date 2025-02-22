import Logo from "@/components/Logo/Logo";
import { type Navigation } from "@toolpad/core/AppProvider";
import { Science as ScienceIcon } from "@mui/icons-material";

import Title from "@/components/Title/Title";
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
  YES = "Yes",
  NO = "No",
}

export const PASSIVE_NOTIFICATION_INTERVAL = 10000; // 10 sec
export const PASSIVE_NOTIFICATION_AUTO_HIDE_DURATION = 5000; // 5 sec

export const ACTIVE_NOTIFICATION_INTERVAL = 10000; // 10 sec

export const NAVIGATION: Navigation = [
  {
    segment: "",
    title: "TetrisLab",
    icon: (
      <div style={{ marginLeft: "4px" }}>
        <Logo size="20px" />
      </div>
    ),
  },
  {
    segment: "info-sheet",
    title: "Pilot Study",
    icon: <ScienceIcon />,
  },
];

export const STUDY_STEPS: StudyStepType[] = [
  {
    id: 1,
    title: "Information",
    slug: "/info-sheet",
  },
  {
    id: 2,
    title: "Particulars",
    slug: "/particulars",
  },
  {
    id: 3,
    title: "Consent",
    slug: "/consent",
  },
  {
    id: 4,
    title: "MMT-R",
    slug: "/mmtr",
  },
  {
    id: 5,
    title: "Task ",
    slug: "/task",
  },
  {
    id: 6,
    title: "FSS",
    slug: "/fss",
  },
  {
    id: 7,
    title: "Debrief",
    slug: "/debrief",
  },
  {
    id: 8,
    title: "Finish",
    slug: "/finish",
  },
];

export const BRANDING = {
  logo: <Title />,
  title: "",
  homeUrl: "/",
};

export const INITIAL_STATE = {
  variant: null,
  isDesktop: true,
  infoSheet: false,
  gender: null,
  age: null,
  requirements: [],
  consent: [],
  mmtr: [],
  gameStart: null,
  gameEnd: null,
  gameScore: null,
  gameLevel: null,
  gameRows: null,
  notifications: [],
  fss: [],
  debrief: false,
  participantCode: null,
};

export const THEME_PRIMARY_MAIN_COLOR = "#BE22ED";
export const THEME_SECONDARY_MAIN_COLOR = "#00FFFF";
