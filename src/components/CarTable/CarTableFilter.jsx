import React from 'react';
import PropTypes from 'prop-types';

import './CarTableFilter.css';

function CarTableFilter({ onFilter, filter, onChange }) {
  return (
    <form className="cart-table-form" onSubmit={onFilter}>
      <input className="cart-table-input" type="text" value={filter} onChange={(e) => onChange(e.target.value)} />
      <button className="cart-table-btn" type="submit">search</button>
    </form>
  );
}

CarTableFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default CarTableFilter;
