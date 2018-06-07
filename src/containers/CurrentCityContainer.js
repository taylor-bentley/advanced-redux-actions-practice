import React from 'react';
import {connect} from 'react-redux';
import CurrentCity from '../components/CurrentCity';

//create a function, name is irrelevant
//good practice to name it mapStateToProps
function mapStateToProps(state){
    return {
      //the left side key must be the name of the prop that you want to put info in
      text:state.currentCity
      //the right side value is the name of the state
    }
  }
  let CurrentCityContainer = connect(mapStateToProps);

  export default CurrentCityContainer;