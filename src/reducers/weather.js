import { GET_WEATHER } from '../actions'

const initialState = {
  data: []
}

export function showModal(state = initialState, action){
  switch (action.type) {
    case GET_WEATHER:
      return Object.assign({}, {...state}, {data: action.payload})
    default:
      return state
  }
}
