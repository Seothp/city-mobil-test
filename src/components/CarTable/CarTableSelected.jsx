import React from 'react';
import PropTypes from 'prop-types';

import './CarTableSelected.css';

function CarTableSelected({ selectedCar }) {
  if (selectedCar === null) {
    return null;
  }
  return (
    <div className="selected-car">
      Выбран автомобиль
      {' '}
      {selectedCar.mark}
      {' '}
      {selectedCar.model}
      {' '}
      {selectedCar.year && (`${selectedCar.year} года выпуска.`)}
    </div>
  );
}

CarTableSelected.propTypes = {
  selectedCar: PropTypes.shape({
    mark: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number,
  }),
};

CarTableSelected.defaultProps = {
  selectedCar: null,
};

export default CarTableSelected;
