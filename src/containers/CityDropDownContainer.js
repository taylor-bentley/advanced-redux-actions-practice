import React from 'react';
import { connect } from 'react-redux';
import {setCurrentCity} from "../actions";
import CurrentCity from "../components/CurrentCity";


function mapDispatchToProps(dispatch){
  return {
   set:function(txt){
     let action = setCurrentCity(txt);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(CurrentCity);
