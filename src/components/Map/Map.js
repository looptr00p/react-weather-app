import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';
import { getWaether } from '../../actions';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../Map/Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const MySwal = withReactContent(Swal)

class Map extends Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.props.getWaether();
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
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleClick(event) {
    let lat = event.lat;
    let lng = event.lng;
    this.props.getWaether(lat,lng);
    this.openSwal()
    
  };

  openSwal(){
    let iconName = 'Light+Rain';
    MySwal.fire({
      title: this.props.data.timezone,
      text: 'Modal with a custom image.',
      imageUrl: `https://s3.amazonaws.com/nihc-weather-app/${iconName}.png`,
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image',
      animation: true
    })
  }

  
  render() {
    return (
        <section className="section">
        <div className="container">
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              options = {{scrollwheel: false,
                          zoomControl: false,}}
                          bootstrapURLKeys={{ key: 'AIzaSyD7o_wRo4twaMQw9Nx-oSTf9xG5ePzaAn0' }}
                          defaultCenter={this.props.center}
                          defaultZoom={ 1 }
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
        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
        <button onClick={this.closeModal}>close</button>
        <div></div>
        <container>
         <row>
         <colum>
         2
          </colum>
          <colum>
          3
          </colum>
         </row>
         <row>
           8219889
         </row>
        </container>
      </Modal>    
      </section>  
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data.data
  }
}

export default connect(mapStateToProps, {getWaether})(Map);