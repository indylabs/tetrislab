
import React from 'react';
import { TETROMINOS } from '../../utils/tetrominos';
import PropTypes from 'prop-types';

import styles from './Cell.module.scss';

function Cell({ type }) {
  return (
    <div
      className={styles.cell}
      style={{
        background: `rgba(${TETROMINOS[type].color}, 0.8)`
      }}
    ></div>
  );
}

Cell.propTypes = {
  type: PropTypes.object.isRequired,
};

export default React.memo(Cell);