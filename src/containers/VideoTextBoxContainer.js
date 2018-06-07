import React from 'react';
import { connect } from 'react-redux';
import {setVideoURL} from "../actions";
import VideoTextBox from "../components/VideoTextBox";

//I want to change data
function mapDispatchToProps(dispatch){
    return {
      set:function(){
        var action = setVideoURL();
        dispatch(action);
      }
    }
}
  export default connect(null,mapDispatchToProps)(VideoTextBox);