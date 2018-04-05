import React, { Component } from 'react';
import styled from 'styled-components'

const Modal = styled.div`
  position: absolute;
  width: 100px;
  height: 300px;
  background-color: blue;
  color: white;
`

class CardModal extends Component {

  render() {

    return (
      <Modal style={this.props.modalStyle}>
        Place Holder id, will become image
        {this.props.modalImage}
      </Modal>
    )
  }
}

export default CardModal;
