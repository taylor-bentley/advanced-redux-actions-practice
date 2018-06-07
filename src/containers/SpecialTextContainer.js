import React from 'react';
import { connect } from 'react-redux';
//import {setCurrentUser} from "../actions";
import SpecialText from "../components/SpecialText";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    text: state.specialText
  }
}
let SpecialTextContainer = connect(mapStateToProps);

export default SpecialTextContainer;
