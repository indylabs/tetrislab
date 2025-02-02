export type TetrominoKey = '0' | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

export type Tetromino = {
  shape: (TetrominoKey | 0)[][];
  color: string;
};

export type Cell = [(TetrominoKey | 0), string];
export type Row = Cell[];
export type Stage = Row[];

export type Matrix = [(TetrominoKey | 0)[]][]

export type Position = {
  x: number,
  y: number
}

export type Player = {
  position: Position,
  tetromino: Tetromino['shape'],
  collided?: boolean,
}

