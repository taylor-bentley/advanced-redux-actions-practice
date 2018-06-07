import React from 'react';
import {connect} from 'react-redux';
import {setIsLoading} from "../actions";
import Modal from '../components/Modal';

//create a function, name is irrelevant
//good practice to name it mapStateToProps
function mapStateToProps(state){
    return {
      //the left side key must be the name of the prop that you want to put info in
      isLoading:state.isLoading
      //the right side value is the name of the state
    }
}
  function mapDispatchToProps(dispatch){
    return {
      setIsLoading:function(){
        var action = setIsLoading();
        dispatch(action);
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
 