import { GET_WEATHER, GET_COUNTRY } from '../actions'

const initialState = {
  data: [],
  country: {}
}

export function showModal(state = initialState, action){
  switch (action.type) {
    case GET_WEATHER:
      return Object.assign({}, {...state}, {data: action.payload})
    case GET_COUNTRY:
      return Object.assign({}, {...state}, {country: action.payload})
    default:
      return state
  }
}
