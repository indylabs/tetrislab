
import React from 'react';

import type { TetrominoKey } from '@/types';

import { TETROMINOS } from '../../utils/tetrominos';

import styles from './Cell.module.scss';

type CellProps = {
  type: TetrominoKey;
}

function Cell({ type }: CellProps) {
  return (
    <div
      className={styles.cell}
      style={{
        background: `rgba(${TETROMINOS[type].color}, 0.8)`
      }}
    ></div>
  );
}

export default React.memo(Cell);