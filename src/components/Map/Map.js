import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';
import { getWaether, getCountry } from '../../actions';
import Geocode from "react-geocode";
import '../Map/Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '0%',
    transform             : 'translate(-50%, -50%)',
    opacity               : '10%'
  }
};

class Map extends Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      data:[],
      country: {}
    };
    
    Geocode.setApiKey("AIzaSyCmbxB3sQXd7jFIAfrMEUq_TYKUyL1NYWg");
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  static defaultProps = {
    center: {
      lat: 14.12,
      lng: -28.26
    }
  };

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleClick(event) {
    let lat = event.lat;
    let lng = event.lng;
    this.props.getWaether(lat,lng);
    this.props.getCountry(lat, lng);
    this.openModal();
  };


  render() {
    let temperature = Math.trunc((this.props.data.apparentTemperature - 32) * 5/9);
    let humidity = Math.trunc(this.props.data.humidity * 100);
    let windSpeed = this.props.data.windSpeed;
    let cloudCover = Math.trunc(this.props.data.cloudCover * 100);
    let country = this.props.country.country;
    let capital = this.props.country.capital;
    let summary = this.props.data.summary;
    return (
        <section className="section">
        <div className="container">
          <div style={{ height: '100vh', width: '100%'  }}>
            <GoogleMapReact
              options = {{scrollwheel: false,
                          zoomControl: false,}}
                          bootstrapURLKeys={{ key: 'AIzaSyD7o_wRo4twaMQw9Nx-oSTf9xG5ePzaAn0' }}
                          defaultCenter={this.props.center}
                          defaultZoom={ 1 }
                          disableDoubleClickZoom={true}
                          onClick={(e) => { this.handleClick(e)}}
            >
              <AnyReactComponent
                lat={this.lat}
                lng={this.lng}
              />
            </GoogleMapReact>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          //className="Modal"
          //overlayClassName="Overlay"
          style={customStyles}
          contentLabel="Example Modal"
        >
        <main data-v-5842378c="" className="app--night">
            <section data-v-a8acd09e="" data-v-5842378c="">
                <div data-v-a8acd09e="" className="cloudiness">
                    <img data-v-a8acd09e="" src="https://s3.amazonaws.com/nihc-weather-app/icons/cloud.2b02f907.svg" alt="cloudiness"/>
                    <span data-v-a8acd09e="" className="cloudiness__value">{cloudCover}</span>%
                </div> 
                <div data-v-a8acd09e="" className="wind-speed">
                    <img data-v-a8acd09e="" src="https://s3.amazonaws.com/nihc-weather-app/icons/wind.05f5c4cf.svg" alt="wind speed"/>
                    <span data-v-a8acd09e="" className="wind__value">{windSpeed}</span> m/s
                </div> 
                <div data-v-a8acd09e="" className="humidity">
                    <img data-v-a8acd09e="" src="https://s3.amazonaws.com/nihc-weather-app/icons/humidity.e7cc8477.svg" alt="humidity"/>
                    <span data-v-a8acd09e="" className="humidity__value">{humidity}</span>%
                </div>
            </section> 
            <section data-v-35c83f4c="" data-v-5842378c="">
                <div data-v-35c83f4c="" className="temperature__value">{temperature}</div> 
                <div data-v-35c83f4c="" className="temperature__right">
                    <div data-v-35c83f4c="" className="temperature__scale">
                        <div data-v-35c83f4c="" className="grade">°C</div>
                    </div>
                </div>
            </section> 
            <section data-v-148cacf0="" data-v-5842378c="">
                <div data-v-148cacf0="" className="location">{capital}, {country}</div> 
                <div data-v-148cacf0="" className="weather__description">{summary}</div> 
                <img data-v-148cacf0="" src={`https://s3.amazonaws.com/nihc-weather-app/weather-icon/${this.props.data.icon}.png`} className="weather__icon"/>
            </section>
        </main>
      </Modal>
      </section>  
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data.data,
    country: state.data.country
  }
}

export default connect(mapStateToProps, {getWaether, getCountry})(Map);