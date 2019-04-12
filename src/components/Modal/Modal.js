import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import ReactSpinner from 'react-spinjs';

class View extends React.Component {
  static propTypes = {
    // This view takes a isLoading property
    isLoading: PropTypes.bool,
  }
  state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    const {
      props: {
        isLoading,
      },
    } = this;

    return <div onClick={this.handleClick}>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose}>
          {
            isLoading ?
            <ReactSpinner/> :
            <ModalDialog onClose={this.handleClose}>
              <h1>Dialog Content</h1>
              <p>More Content. Anything goes here</p>
            </ModalDialog>
          }
        </ModalContainer>
      }
    </div>;
  }
}