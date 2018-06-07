import { combineReducers } from "redux";

function currentCount(state = 0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1;
  }
  if(action.type === "DECREASE_COUNTER"){
   return state - 1;
  }
}  

function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
}

function currentCity(state = "", action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
}

function users(state =[], action){
  if(action.type === "ADD_USER"){
    //loop through the array 
    //add all things from the old array to the new one
    //then add the new user
    let newArray = [...state];
    newArray.push(action.value)
    return newArray;
  }
  if(action.type === "REMOVE_USER"){
     let newArray = [...state];newArray.slice(1)
     return newArray;
  }
}

function currentTemp(state = 0, action){
  if(action.type === "SET_TEMP"){
    return action.value;
  }
}

function isLoading (state = false, action){
  if(action.type === "SET_IS_LOADING"){
    return action.value
  }
}

function videoURL (state = "", action){
  if(action.type === "SET_VIDEO_URL"){
    return action.value
  }
}

function searchText(state = "", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value
  }
}

function currentUserSort(state = "users.first_name", action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value
  }
}

function videoScale (state = 1 , action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value
  }
}

const rootReducer = combineReducers({
 currentCount, specialText, currentCity,users, currentTemp, isLoading, videoURL, searchText, currentUserSort, videoScale
});
export default rootReducer;