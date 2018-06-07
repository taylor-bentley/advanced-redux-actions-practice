import React from 'react';
import {connect} from 'react-redux';
import Thermostat from '../components/Thermostat';

//create a function, name is irrelevant
//good practice to name it mapStateToProps
function mapStateToProps(state){
    return {
      //the left side key must be the name of the prop that you want to put info in
      temp:state.currentTemp
      //the right side value is the name of the state
    }
  }
  let ThermostatContainer = connect(mapStateToProps);

  export default ThermostatContainer;