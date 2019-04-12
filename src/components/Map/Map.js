import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';
import { getWaether, openDialogModal } from '../../actions';
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
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleClick(event) {
    let lat = event.lat;
    let lng = event.lng;
    this.props.getWaether(lat,lng);
    this.openModal();
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
        <img src="http://127.0.0.1:8887/cloudy.png" height="300" width="300"/>
        <div id="id01" class="w3-modal">
          <div class="w3-modal-content w3-animate-top w3-card-4">
            <header class="w3-container w3-teal"> 
              <span onclick="document.getElementById('id01').style.display='none'" 
              class="w3-button w3-display-topright">&times;</span>
              <h2>Modal Header</h2>
            </header>
            <div class="w3-container">
              <p>Some text..</p>
              <p>Some text..</p>
            </div>
            <footer class="w3-container w3-teal">
              <p>Modal Footer</p>
            </footer>
          </div>
        </div>   
      </Modal>
      </section>  
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data.data,
  }
}

export default connect(mapStateToProps, {getWaether, openDialogModal})(Map);