import { useState, useEffect } from "react";
import { createStage } from "../utils/gameHelpers";

import type { Player, Stage, Row } from "@/types";

export const useStage = (player: Player, resetPlayer: () => void) => {
  const [stage, setStage] = useState<Stage>(createStage());
  const [rowsCleared, setRowsCleared] = useState<number>(0);

  useEffect(() => {
    const sweepRows = (newStage: Stage) => {
      setRowsCleared(0);
      return newStage.reduce((accumulator: Stage, row: Row) => {
        if (row.findIndex((cell) => cell[0] === "0") === -1) {
          setRowsCleared((prev) => prev + 1);
          // add empty lines to compensate the swept ones
          accumulator.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return accumulator;
        }

        accumulator.push(row);
        return accumulator;
      }, []);
    };

    const updateStage = (prevStage: Stage) => {
      // clear stage from first render
      const newStage: Stage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? ["0", "clear"] : cell))
      );

      // draw tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.position.y][x + player.position.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });

      // then check if we collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage((prevState) => updateStage(prevState));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared] as const;
};
