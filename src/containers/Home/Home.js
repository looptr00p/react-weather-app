import React, { Component } from 'react';
import Map from '../../components/Map/Map';
import './Home.css';

class Home extends Component {

    render() {
        let heading = "Discover a new weather";
        let subheading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

        return (
          <div>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">{ heading }</h1>
                    <div className="is-two-thirds column is-paddingless">
                        <h2 className="subtitle is-4">{ subheading }</h2>
                    </div>
                    <a className="button is-large is-primary" id="learn" href="https://github.com/looptr00p">Visit GitHub</a>
                    </div>
                </div>
            </section>
            <Map />
          </div>
        );
    }
}

export default Home;