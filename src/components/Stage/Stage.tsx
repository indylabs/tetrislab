import Cell from '../Cell/Cell';

import type { Stage } from '@/types';

import styles from './Stage.module.scss'

type StageProps = {
  stage: Stage
}

function Stage({ stage }: StageProps) {
  return (
    <div
      className={styles.stage}
      style={{
        gridTemplateRows: `repeat(${stage.length}, calc(21vw / ${stage[0].length}))`,
        gridTemplateColumns: `repeat(${stage[0].length}, 1fr)`
      }}
    >
      {
        stage.map((row) =>
          row.map((cell) => (
            <Cell
              key={cell[0]}
              type={cell[0]}
            />
          )),
        )
      }
    </div >
  );
}

export default Stage;
