import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';
import getWeather from '../../actions';

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

class Map extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  static defaultProps = {
    center: {
      lat: 14.12,
      lng: -28.26
    },
    zoom: 1
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

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleClick(event) {  

    console.log("lat:",event.lat,"lng:",event.lng);

    fetch(`http://localhost:3000/api/getWeather/${event.lat}/${event.lng}`)
    .then((response) => {
      return response.json()
    })
    .then((recurso) => {
      console.log(recurso)
      console.log(recurso.currently.icon)
      this.openModal();
    })
  };
  
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
                          defaultZoom={ this.props.zoom }
                          onClick={(e) => {this.handleClick(e)}}
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
        style={customStyles}
        contentLabel="Example Modal"
    >
        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
        {/* <button onClick={this.closeModal}>close</button> */}
        <div>Reporte del clima</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>    
      </section>  
    );
  }
}

function mapStateToProps(state) {
  return console.log("ESTADO:",state)
}

export default connect(mapStateToProps)(Map);