import React from 'react';
import { connect } from 'react-redux';
import {setCurrentUserSort} from "../actions";
import SortUsers from "../components/SortUsers";

//I want to change data
function mapDispatchToProps(dispatch){
    return {
      set:function(){
        var action = setCurrentUserSort();
        dispatch(action);
      }
    }
}
  export default connect(null,mapDispatchToProps)(SortUsers);