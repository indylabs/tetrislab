import { VARIANTS } from "./constants";

export type TetrominoKey = '0' | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z' | 0;

export type Tetromino = {
  shape: TetrominoKey[][];
  color: string;
};

export type Cell = [TetrominoKey, string];
export type Row = Cell[];
export type Stage = Row[];

export type Matrix = [TetrominoKey][][]

export type Position = {
  x: number,
  y: number
}

export type Player = {
  position: Position,
  tetromino: Tetromino['shape'],
  collided?: boolean,
}

export type TetrisLabNotification = {
  type?: "active" | "passive";
  id?: number;
  text?: string;
  start?: Date;
  end?: Date;
  response?: string;
};

export type EndGame = {
  gameScore: number;
  gameLevel: number;
  gameRows: number;
}

export type TetrisLabAction =
  { type: "ADD_INFO_SHEET", infoSheet: boolean }
  | { type: "ADD_PARTICULARS", gender: string, age: string, requirements: boolean[] }
  | { type: "ADD_CONSENT", consent: boolean[] }
  | { type: "ADD_MMTR", mmtr: (number | null)[] }
  | { type: "ADD_GAME_START" }
  | { type: "ADD_GAME_END", game: EndGame }
  | { type: "ADD_NOTIFICATION", notification: TetrisLabNotification }
  | { type: "ADD_FSS", fss: (number | null)[] }
  | { type: "ADD_DEBRIEF", debrief: boolean }
  | { type: "ADD_PARTICIPANT_CODE", participantCode: string }

export type TetrisLabState = {
  variant: VARIANTS | null;
  isMobile: boolean;
  infoSheet: boolean;
  gender: string | null;
  age: string | null;
  requirements: boolean[];
  consent: boolean[]; 
  mmtr: (number | null)[];
  gameStart: Date | null;
  gameEnd: Date | null;
  gameScore: number | null;
  gameLevel: number | null;
  gameRows: number | null;
  notifications: TetrisLabNotification[];
  fss: (number | null)[];
  debrief: boolean;
  participantCode: string | null;
};

export type TetrisLabContextType = {
  state: TetrisLabState;
  dispatch: React.Dispatch<TetrisLabAction>;
  isMobile: boolean;
  isPaused: boolean;
  setIsPaused: ( isPaused:boolean ) => void
  step: number;
  nextStep: ( ) => void;
};

export type StudyStepType = {
  id: number;
  title: string;
  slug: string;
};
