import { useState, useCallback, useEffect } from "react";

export const useGameStatus = (rowsCleared: number) => {
  const [score, setScore] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);

  const calcScore = useCallback(() => {
    const linePoints = [40, 100, 300, 1200];

    // if we have score
    if (rowsCleared > 0) {
      // calculate score like og tetris
      setScore((prev) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
    }
  }, [level, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel] as const;
};
