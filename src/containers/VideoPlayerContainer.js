import React from 'react';
import {connect} from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';

//create a function, name is irrelevant
//good practice to name it mapStateToProps
function mapStateToProps(state){
    return {
      //the left side key must be the name of the prop that you want to put info in
      URL:state.videoURL,
      scale: state.videoScale
      //the right side value is the name of the state
    }
  }
  let VideoPlayerContainer = connect(mapStateToProps);

  export default VideoPlayerContainer;