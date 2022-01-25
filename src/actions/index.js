import cities from '../cities'

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function activeCity(city) {
  return {
    type: 'ACTIVE_CITY',
    payload: city
  }
}
