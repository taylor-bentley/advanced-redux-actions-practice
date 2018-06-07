import React from 'react';
import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import ShowModal from "../components/ShowModal";

//I want to change data
function mapDispatchToProps(dispatch){
    return {
      setIsLoading:function(){
        var action = setIsLoading();
        dispatch(action);
      }
    }
}
  export default connect(null,mapDispatchToProps)(ShowModal);