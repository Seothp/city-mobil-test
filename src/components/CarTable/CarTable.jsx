/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import SortArrow from './SortArrow';
import CarTableFilter from './CarTableFilter';
import CarTableSelected from './CarTableSelected';
import { fetchCars } from '../../api';
import { ASC, DESC } from '../../constants';

import './CarTable.css';

const MARK_AND_MODEL = 'MARK_AND_MODEL';

function carToString(car) {
  const years = Object.values(car.tariffs).map((tariff) => tariff.year).join(' ');
  const carStringData = `${car.model} ${car.mark} ${years}`;
  return carStringData.toLowerCase();
}

function getFilteredCars(cars, value) {
  return cars.filter((car) => carToString(car).includes(value.toLowerCase()));
}

function sortCarsByField(cars, field, direction) {
  const copy = [...cars];
  copy.sort((a, b) => {
    let compResult;
    if (field === MARK_AND_MODEL) {
      compResult = (a.mark + a.model) > (b.mark + b.model) ? 1 : -1;
    } else {
      const yearA = a.tariffs[field]?.year;
      const yearB = b.tariffs[field]?.year;
      if (yearA === undefined) {
        compResult = 1;
      } else {
        compResult = yearA > yearB ? 1 : -1;
      }
    }
    return compResult;
  });
  if (direction === DESC) {
    return copy.reverse();
  }
  return copy;
}

function CarTable() {
  const [cars, setCars] = useState(null);
  const [tariffs, setTariffs] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [filteredCars, setFilteredCars] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(async () => {
    const data = await fetchCars();
    setCars(data.cars);
    setFilteredCars(data.cars);
    setTariffs(data.tariffs_list);
  }, []);

  useEffect(() => {
    if (sortBy) {
      setFilteredCars(sortCarsByField(filteredCars, sortBy.field, sortBy.direction));
    }
  }, [sortBy]);

  const onRowClick = (e, car, tariff) => {
    e.stopPropagation();
    const year = car.tariffs[tariff]?.year;
    const selected = {
      mark: car.mark,
      model: car.model,
    };
    if (year) {
      selected.year = year;
    }
    setSelectedCar(selected);
  };
  const onSort = (field) => {
    let direction = ASC;
    if (sortBy) {
      if (sortBy.field === field) {
        direction = sortBy.direction === ASC ? DESC : ASC;
      }
    }
    setSortBy({ field, direction });
  };
  const onFilter = (e) => {
    e.preventDefault();
    setFilteredCars(getFilteredCars(cars, filter));
  };
  return (
    <div className="car-table">
      <CarTableFilter onFilter={onFilter} filter={filter} onChange={setFilter} />
      {filteredCars && tariffs && (
        <table>
          <tbody>
            <tr>
              <th onClick={() => onSort(MARK_AND_MODEL)}>
                Марка и модель
                <SortArrow
                  direction={sortBy?.field === MARK_AND_MODEL ? sortBy?.direction : undefined}
                />
              </th>
              {tariffs.map((tariff) => (
                <th key={tariff} onClick={() => onSort(tariff)}>
                  { tariff }
                  <SortArrow
                    direction={sortBy?.field === tariff ? sortBy?.direction : undefined}
                  />
                </th>
              ))}
            </tr>
            {filteredCars.map((car) => (
              <tr key={carToString(car)} onClick={(e) => onRowClick(e, car)}>
                <td>
                  {`${car.mark} ${car.model}`}
                </td>
                {tariffs.map((tariff) => (
                  <td key={tariff} onClick={(e) => onRowClick(e, car, tariff)}>
                    { car.tariffs[tariff]?.year }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <CarTableSelected selectedCar={selectedCar} />
    </div>
  );
}

export default CarTable;
