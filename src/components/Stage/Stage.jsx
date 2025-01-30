import Cell from '../Cell/Cell';
import PropTypes from 'prop-types';

import styles from './Stage.module.scss'

function Stage({ stage }) {
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
          row.map((cell, x) => (
            <Cell
              key={x}
              type={cell[0]}
            />
          )),
        )
      }
    </div >
  );
}

Stage.propTypes = {
  stage: PropTypes.array.isRequired,
};

export default Stage;
