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
  score: number;
  level: number;
  rows: number;
}

export type TetrisLabAction =
  { type: "ADD_GAME_START" }
  | { type: "ADD_GAME_END", game: EndGame}
  | { type: "ADD_NOTIFICATION", notification: TetrisLabNotification }

export type TetrisLabState = {
  variant: VARIANTS | null;
  notifications: TetrisLabNotification[];
  start?: Date | null;
  end?: Date | null;
  score?: number;
  level?: number;
  rows?: number;
};

export type TetrisLabContextType = {
  state: TetrisLabState;
  dispatch: React.Dispatch<TetrisLabAction>;
  isPaused: boolean;
  setIsPaused: ( isPaused:boolean ) => void
};
