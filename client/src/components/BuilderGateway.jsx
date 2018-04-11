import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Redux:
import { connect } from 'react-redux'
import deckReducer from '../reducers/deckReducer';
import userReducer from '../reducers/userReducer';
import { createDeck } from '../actions'
import { fetchDecks } from '../actions'


const Button = styled.button`
  padding: 5px 5px;
  background: green;
  color: white;
  cursor: pointer;
`


class BuilderGateway extends Component {
  constructor(){
    super()
    this.state = {
        deckName: '',
        mage: '',
        cards: []
    }
  }

  componentDidMount(){
    !this.props.user ? this.props.history.push('/login') : null
  }

  handleDeckNameChange = (e) => {
    console.log(this.props);
    this.setState({ deckName: e.target.value})
  }
  handleDeckMageChange = (e) => {
    this.setState({ mage: e.target.value})
  }
  createDeck = () => {
    this.props.createDeck(this.state)
  }


  render() {
    return (
      <div>
        <form action="" method="">
          <label>Deck Name</label>
          <input onChange={this.handleDeckNameChange} /> <br></br>
          <label>Mage</label>
          <input onChange={this.handleDeckMageChange} /> <br></br>
          <Link to='/builder/edit'><Button onClick={this.createDeck}>Create new Deck!</Button></Link>
        </form>
      </div>
    )
  }



}

const mapStateToProps = state => {
  return {
    decks: state.decks.deckList,
    user: state.users.user
  }
}
export default connect(mapStateToProps, { fetchDecks, createDeck })(BuilderGateway)
