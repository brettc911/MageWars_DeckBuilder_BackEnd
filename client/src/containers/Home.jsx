import React, { Component } from 'react';
import styled from 'styled-components'
import queryString from 'query-string';


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
    // let params = queryString.parse(this.props.location.search)
    this.props.fetchUser()
  }

  render() {

    let user = !this.props.currentUser ? null : this.props.currentUser.userName

    return (
      <div>
        <h1>Welcome {user}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, {fetchUser})(Home)
