import React from 'react';
import { connect } from 'react-redux';
import {setSearchText} from "../actions";
import SearchTextBox from "../components/SearchTextBox";

//I want to change data
function mapDispatchToProps(dispatch){
    return {
      set:function(){
        var action = setSearchText();
        dispatch(action);
      }
    }
}
  export default connect(null,mapDispatchToProps)(SearchTextBox);