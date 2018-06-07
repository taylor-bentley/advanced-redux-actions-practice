import React from 'react';
import { connect } from 'react-redux';
import {setVideoScale} from "../actions";
import ScaleVideo from "../components/ScaleVideo";

//I want to change data
function mapDispatchToProps(dispatch){
    return {
      set:function(){
        var action = setVideoScale();
        dispatch(action);
      }
    }
}
  export default connect(null,mapDispatchToProps)(ScaleVideo);