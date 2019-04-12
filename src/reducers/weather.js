import { GET_WEATHER, DIALOG_MODAL } from '../actions'

const initialState = {
  data: [],
  modal: Boolean,
}

export function showModal(state = initialState, action){
  switch (action.type) {
    case GET_WEATHER:
      return Object.assign({}, {...state}, {data: action.payload})
    case DIALOG_MODAL:
      return Object.assign({}, {...state}, {modal: action.payload})
    default:
      return state
  }
}
