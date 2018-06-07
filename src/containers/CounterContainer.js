import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';

//create a function, name is irrelevant
//good practice to name it mapStateToProps
function mapStateToProps(state){
    return {
      //the left side key must be the name of the prop that you want to put info in
      count:state.currentCount
      //the right side value is the name of the state
    }
  }
  let CounterContainer = connect(mapStateToProps);

  export default CounterContainer;