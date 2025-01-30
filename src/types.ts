export type TetrominoKey = '0' | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

export type Tetromino = {
  shape: (string | 0)[][];
  color: string;
};

export type Cell = [TetrominoKey, string];
export type Row = Cell[];
export type Stage = Row[];