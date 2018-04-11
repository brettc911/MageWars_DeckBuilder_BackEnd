import React, { Component } from 'react';
import styled from 'styled-components'
import queryString from 'query-string';


// Import images
import background1 from '../styles/images/background1.jpg'
import logo from '../styles/images/logo.svg'

// Redux:
import { connect } from 'react-redux'
import userReducer from '../reducers/cardReducer';
import { fetchCurrentUser } from '../actions'

// BEGIN STYING
// _________________________________________________________


class Home extends Component {

  componentDidMount(){
    let params = queryString.parse(this.props.location.search)
    this.props.fetchCurrentUser(params.id)
  }

  hello = () => {
    console.log(this.props);
    return (
      <h1>Welcome</h1>
    )
  }

  render() {
    return (
      <div>
        {this.hello()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, {fetchCurrentUser})(Home)
