import axios from 'axios';
import worldCountries from 'world-countries'
import Geocode from "react-geocode";


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

export const GET_COUNTRY = "GET_COUNTRY"

export function getCountry(lat, lng){
  return (dispatch) => {
    Geocode.fromLatLng(lat, lng).then(
      response => {
        let i = response.results.length - 1
        const country = response.results[i].formatted_address;
        
        worldCountries.forEach(element => {
          if(element.translations.spa.common == country){
            let selected = {
              country: element.translations.spa.common,
              capital: element.capital[0]
            }
            dispatch({type: GET_COUNTRY, payload: selected})
          }
        })
      },
      error => {
        console.error(error);
      }
    );
  }
}