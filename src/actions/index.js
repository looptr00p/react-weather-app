import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER';

export function getWaether(lat,lng) {
  return (dispatch) => {
    axios.get(`http://localhost:3000/api/getWeather/${lat}/${lng}`)
      .then((respose) => {
        console.log(respose.data)
        dispatch({type: GET_WEATHER, payload: respose.data})
      })
  }
};