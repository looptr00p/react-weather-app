import { combineReducers } from 'redux'
import { showModal } from './weather'

export default combineReducers({
  data: showModal,
  // country: showModal
})
