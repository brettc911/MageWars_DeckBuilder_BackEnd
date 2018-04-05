import React, { Component } from 'react';
import styled from 'styled-components'
import TableRow from './TableRow'
import CardModal from './CardModal'

class Table extends Component {


  // handleModal = e => {
  //   this.props.mousePos
  //   e.persist()
  //   let xPos = e.pageX
  //   let yPos = e.pageY
  //   if (xPos > 645) {
  //     this.setState({modalStyle: {display: 'none'}})
  //   } else {
  //     this.setState({modalStyle: {left: `${xPos + 50}px`, top: `${yPos - 200}px`}})
  //   }
  // }

  renderRows() {
    let rows = this.props.cards.map((card, i) => {
      return (
        <TableRow
          key={i}
          addCard={this.props.addCard}
          card={card}
          handleModal={this.handleModal}
        />
      )
    })
    return rows
  }

  render() {

    let renderModal = () => {
      let xPos = this.props.mousePos.xPos
      let yPos = this.props.mousePos.yPos
      let targetId = this.props.mousePos.targetId
      if (!targetId) {
        return {display: 'none'}
      } else {
        return {left: `${xPos + 50}px`, top: `${yPos - 200}px`}
      }
    }


    return (
      <table className='primary-table'>
        <tbody>
          <tr>
            <th onClick={() => {this.props.sortTable('cardName')}}>Card Name</th>
            <th onClick={() => {this.props.sortTable('primaryType')}}>Primary Type</th>
            <th onClick={() => {this.props.sortTable('manaCost')}}>Mana Cost</th>
            <th onClick={() => {this.props.sortTable('action')}}>Action</th>
            <th onClick={() => {this.props.sortTable('school')}}>School</th>
            <th onClick={() => {this.props.sortTable('level')}}>Level</th>
          </tr>
          {this.renderRows()}
        </tbody>
        <CardModal
          modalStyle={renderModal()}
          modalImage = {this.props.mousePos.targetId}
        />
      </table>
    )
  }
}

export default Table;
