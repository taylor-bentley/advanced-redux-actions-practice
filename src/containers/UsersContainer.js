import React from 'react';
import { connect } from 'react-redux';
import Users from "../components/Users";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    users: state.users,
    sortOn: state.currentUserSort,
    firstNameFilter: state.searchText
  }
    
}
let UsersContainer = connect(mapStateToProps);

export default UsersContainer;