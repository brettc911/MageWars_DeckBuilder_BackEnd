import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Redux:
import { connect } from 'react-redux'
import deckReducer from '../reducers/deckReducer';
import userReducer from '../reducers/userReducer';
import { createDeck } from '../actions'
import { fetchDecks } from '../actions'
import { fetchUser } from '../actions'



const Container = styled.div`
  min-height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`

const Form = styled.form`
  width: 300px;
  background-color: red;
`
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
        userId: 0,
        userName: '',
        cards: []
    }
  }

  componentDidMount(){
    console.log('mounted');
    this.props.fetchUser()
  }
  componentDidUpdate(){
    console.log('updated');
    if (this.state.user) {
      this.setState({ userName: this.props.user.userName})
      this.setState({ userId: this.props.user._id})
    }
    // !this.state.user ? this.props.history.push('/login') : null
  }





  handleDeckNameChange = e => {
    this.setState({ deckName: e.target.value})
  }
  handleDeckMageChange = e => {
    this.setState({ mage: e.target.value})
  }
  createDeck = () => {
    this.props.createDeck(this.state)
  }

  render() {
    if(!this.props.user){
      return (
        <Container>
          <h1>You must login to build a deck</h1>
          <Link to='/login'><button>Login Now</button></Link>
        </Container>
      )
    } else {
      return (
        <Container>
          <Form>
            <label>Deck Name</label>
            <input onChange={this.handleDeckNameChange} /> <br></br>
            <label>Mage</label>
            <input onChange={this.handleDeckMageChange} /> <br></br>
            <Link to='/builder/edit'><Button onClick={this.createDeck}>Create new Deck!</Button></Link>
          </Form>
        </Container>
      )
    }
  }



}

const mapStateToProps = state => {
  return {
    decks: state.decks.deckList,
    user: state.users.user
  }
}
export default connect(mapStateToProps, { fetchDecks, createDeck, fetchUser })(BuilderGateway)
