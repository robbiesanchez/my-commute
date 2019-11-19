import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import '/Users/robbiesanchez/Desktop/Ironhack/Week5/my-commute/my-commute/node_modules/bootstrap/dist/css/bootstrap.css'
import {Switch, Link, Route} from "react-router-dom";
import Results from './Results'


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))



class App extends Component {


  state = {
    specificLocation: [],
    startAddress: "",
    startCity: "",
    startState: "",
    startTime: "",
    endAddress: "",
    endCity: "",
    endState: "",
    endTime: "",
    transportMethod: "",
  }

  componentDidMount() {
    axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=1205+South+Alhamabra+Circle,Miami,FL&destinations=120+SW+8th+St,%20Miami,%20FL&key=AIzaSyAzWKXcYDOAXdC6ZTFcgzIK-kYUheV6Vy4").then(specificLocation=>{
      console.log(specificLocation)
      this.setState({
          specificLocation: specificLocation
    });
    })
  }


  // setStartAddress = () => {
    

    
  //   this.setState= {
  //     startAddress: 
  //   }
  // }

    
  render () {
    return (
      <div className="App">
        <header className="App-header">
        My Commute
        </header>
        <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAzWKXcYDOAXdC6ZTFcgzIK-kYUheV6Vy4"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
        <div className="container-fluid">
        <form>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">

          <div className="form-group">
          <label for="street1_id" className="control-label">Start Address </label>
          <input type="text" className="form-control" id="street1_id" name="street1" placeholder="Street address" />
        </div>

        <div className="form-group"> 
          <label for="city_id" className="control-label">City</label>
          <input type="text" className="form-control" id="city_id" name="city" placeholder="Miami" />
        </div>			

        <div className="form-group">
          <label for="state_id" className="control-label">State</label>
          <select className="form-control" id="state_id">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>					
        </div>

        <div className="form-group">
          <label for="start-time_id" className="control-label">Start Time (Arrival)</label>
          <input type="time" className="form-control" id="start-time_id" name="start-time" />
        </div>			
                    
        <div className="form-group">
          <label for="street2_id" className="control-label">End Address</label>
          <input type="text" className="form-control" id="street2_id" name="street2" placeholder="Street address" />
        </div>	

        <div className="form-group"> 
          <label for="city2_id" className="control-label">City</label>
          <input type="text" className="form-control" id="city2_id" name="city" placeholder="Miami" />
        </div>									
                    
        <div className="form-group">
          <label for="state2_id" className="control-label">State</label>
          <select className="form-control" id="state2_id">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>					
        </div>

        <div className="form-group">
          <label for="end-time_id" className="control-label">End Time (Departure)</label>
          <input type="time" className="form-control" id="end-time_id" name="end-time" />
        </div>			

        <div className="form-group">
        <label for="method_id" className="control-label">Transport Method</label>
          <select className="form-control" id="method_id">
            <option value="driving">Driving</option>
            <option value="walking">Walking</option>
            <option value="biking">Biking</option>
            <option value="public-trans">Public Transportation</option>
          </select>					
        </div>
        <div className="col-3"></div>
          </div>
        </div>
        
        <hr />
        Vehicle Info (if applicable)
        <div className="container">
          <div className="row">
            <div className="col-4 form-group"> 
            <label for="make_id" className="control-label">Make</label>
            <input type="text" className="form-control" id="make_id" name="make" placeholder="Toyota" />
            </div>

            <div className="col-4 form-group"> 
            <label for="model_id" className="control-label">Model</label>
            <input type="text" className="form-control" id="model_id" name="model" placeholder="Corolla" />
            </div>
	
            <div className="col-4 form-group">
            <label for="year_id" className="control-label">Year</label>
            <input type="number" className="form-control" id="year_id" name="year" placeholder="2019" />
            </div>

          </div>
        </div>


        <hr />
        Parking Info (if applicable)
            <div className="App form-group"> 
            <label for="year_id" className="control-label">Monthly Cost ($)</label>
            <input type="number" className="form-control" id="year_id" name="year" placeholder="100" />
            </div>
        

        <Link to="/results">
        <div className="form-group"> 
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </Link>
          <Route path="/results" component={Results} />
      </form>		
        
      </div>
      </div>
    );
  }
  
}

export default App;
