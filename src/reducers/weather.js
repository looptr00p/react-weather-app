const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return state,
      console.log("ACTION FROM REDUCE:",action.event);
    default:
      return state
  }
}

export default todos
