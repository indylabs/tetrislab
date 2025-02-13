"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Stage from "../Stage/Stage";

// custom hooks
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import { useInterval } from "../../hooks/useInterval";
import { useGameStatus } from "../../hooks/useGameStatus";

import insertParticipant from "@/app/actions/insertParticipant";
import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { createStage, checkCollision } from "../../utils/gameHelpers";

import styles from "./Tetris.module.scss";

function Tetris() {
  const router = useRouter();
  const { state, dispatch, isPaused } = useTetrisLabContext();

  const tetrisRef = useRef<HTMLButtonElement | null>(null);

  const [droptime, setDroptime] = useState<number | null>(null);
  const [gameover, setGameover] = useState<boolean>(false);

  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  useEffect(() => {
    if (gameover) {
      insertParticipant(state); // Save state data to database
      router.push("/debrief");
    }
  }, [gameover, router, state]);

  const handleGameOver = async () => {
    await dispatch({
      type: "ADD_GAME_END",
      game: {
        score,
        rows,
        level,
      },
    });

    setGameover(true);
    setDroptime(null);
  };

  useEffect(() => {
    // reset stage
    setStage(createStage());
    setDroptime(1000);
    resetPlayer();
    setGameover(false);
    setScore(0);
    setRows(0);
    setLevel(0);

    dispatch({ type: "ADD_GAME_START" });
  }, []);

  function movePlayer(direction: number) {
    if (!isPaused && !checkCollision(player, stage, { x: direction, y: 0 })) {
      updatePlayerPosition({ x: direction, y: 0 });
    }
  }

  function drop() {
    if (isPaused) return;

    // increase lvl when player clears 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // also increase speed
      setDroptime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collided: false });
    } else {
      // Gameover
      if (player.position.y < 1) {
        handleGameOver();
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true });
    }
  }

  const keyUp = ({ keyCode }: { keyCode: number }) => {
    if (!gameover) {
      if (keyCode === 40) {
        // console.log('interval on');
        setDroptime(1000 / (level + 1) + 200);
      }
    }
  };

  function dropPlayer() {
    setDroptime(null);
    // console.log('interval off');
    drop();
  }

  const move = ({ keyCode }: { keyCode: number }) => {
    if (!gameover) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38 /*up*/ || keyCode === 88 /*X*/) {
        playerRotate(stage, 1);
      } else if (keyCode === 90 /*Z*/) {
        playerRotate(stage, -1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, droptime);

  return (
    <button
      tabIndex={0}
      autoFocus={true}
      onKeyUp={keyUp}
      onKeyDown={(e) => move(e)}
      className={styles.tetris}
      ref={tetrisRef}
    >
      <Stage stage={stage} />
    </button>
  );
}

export default Tetris;
