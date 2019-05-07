import React, { Component } from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
      super(props);
      this.state = {isToggleOn: false};

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
      }));
  }

  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';
    
    return (
          <div className="nav has-shadow">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item r-item">WeatherApp</a>
        </div>

        <span className={'nav-toggle '+menuActive} onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className={'nav-right nav-menu '+menuActive}>

        <div className="nav-item r-item"></div>

        </div>
      </div>
    </div>
    );
  }
}

export default Header;
