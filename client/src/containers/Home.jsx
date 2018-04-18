import React, { Component } from 'react';
import styled from 'styled-components'


// Import images
import background1 from '../styles/images/background1.jpg'
import logo from '../styles/images/logo.svg'

// Redux:
import { connect } from 'react-redux'
import userReducer from '../reducers/cardReducer';
import { fetchUser } from '../actions'

// BEGIN STYING
// _________________________________________________________


class Home extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

  render() {

    let user = !this.props.user ? null : this.props.user.userName

    return (
      <div>
        <h1>Welcome {user}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, {fetchUser})(Home)
