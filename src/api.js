// eslint-disable-next-line import/prefer-default-export
export async function fetchCars() {
  const CARS_API_URL = 'https://city-mobil.ru/api/cars';
  const data = await fetch(CARS_API_URL).then((res) => res.json());
  return data;
}
