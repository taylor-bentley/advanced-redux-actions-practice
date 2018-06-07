import React from 'react';
import CounterButton from "./containers/CounterButtonContainer";
import SpecialTextBox from "./containers/SpecialTextBoxContainer";
import Counter from "./containers/CounterContainer";
import SpecialText from "./containers/SpecialTextContainer";
import UserButtons from "./containers/UserButtonsContainer";
import Thermostat from "./containers/ThermostatContainer";
import Users from "./containers/UsersContainer";
import ChangeTemperature from "./containers/ChangeTemperatureContainer";
import VideoPlayer from "./containers/VideoPlayerContainer";
import VideoTextBox from "./containers/VideoTextBoxContainer";
import CurrentCity from "./containers/CurrentCityContainer";
import CityDropDown from "./containers/CityDropDownContainer";
import SearchTextBox from "./containers/SearchTextBoxContainer";
import SortUsers from "./containers/SortUsersContainer";
import ScaleVideo from "./containers/ScaleVideoContainer";
import Modal from "./containers/ModalContainer";
import ShowModal from "./containers/ShowModalContainer";
import UsersContainer from './containers/UsersContainer';

function App() {
  return (
      <div className="App">
        <div className="container">
          <CounterButtonContainer />
          <br />
          <SpecialTextBoxContainer />
          <br />
          <UserButtonsContainer />
          <br />
          <CityDropDownContainer />
           <br />
          <ChangeTemperatureContainer />
          <br />
          <SearchTextBoxContainer />
          <br />
          <VideoTextBoxContainer />
          <br />
          <SortUsersContainer />
          <br />
          <ScaleVideoContainer />
          <br />
          <ShowModalContainer />
        </div>
        <div className="container">
          <CounterContainer />
          <br />
          <SpecialTextContainer />
          <br />
          <CurrentCityContainer />
          <br />
          <ThermostatContainer />
          <br />
          <VideoPlayerContainer />
          <br />
          
          
        </div>
        <div className="container">
        <UsersContainer />
        </div>
        <ModalContainer />
      </div>
  );
}
export default App;