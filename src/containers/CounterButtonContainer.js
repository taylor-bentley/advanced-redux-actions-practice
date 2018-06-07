import React from 'react';
import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";

//I want to change data
function mapDispatchToProps(dispatch){
    return {
      increase:function(){
        var action = increaseCounter();
        dispatch(action);
      },
      decrease:function(){
        var action = decreaseCounter();
        dispatch(action);
      }
    }
    }
  export default connect(null,mapDispatchToProps)(CounterButton);