import React from 'react';
import PropTypes from 'prop-types';

import { ASC, DESC } from '../../constants';

import './SortArrow.css';

function SortArrow({ direction }) {
  const arrow = direction === ASC ? '🠗' : '🠕';
  if (direction) {
    return (
      <span className="sort-arrow">
        {arrow}
      </span>
    );
  }
  return (
    null
  );
}

SortArrow.propTypes = {
  direction: PropTypes.oneOf([ASC, DESC]),
};

SortArrow.defaultProps = { direction: undefined };

export default SortArrow;
