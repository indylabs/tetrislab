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

export type TetrisLabContextType = {
  state: {
    variant: VARIANTS | null;
  };
};

export type Participant = {
  id?: number;
  variant: VARIANTS | null;
}