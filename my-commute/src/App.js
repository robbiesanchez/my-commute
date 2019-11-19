import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import '/Users/robbiesanchez/Desktop/Ironhack/Week5/my-commute/my-commute/node_modules/bootstrap/dist/css/bootstrap.css'
import {Switch, Link, Route} from "react-router-dom";
import Results from './Results'

class App extends Component {


  // state = {
  //   specificLocation: []
  // }

  // componentDidMount() {
  //   axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=1205+South+Alhamabra+Circle,Miami,FL&destinations=120+SW+8th+St,%20Miami,%20FL&key=AIzaSyAzWKXcYDOAXdC6ZTFcgzIK-kYUheV6Vy4").then(specificLocation=>{
  //     console.log(specificLocation)
  //     this.setState({
  //         specificLocation: specificLocation
  //   });
  //   })
  // }
    
  render () {
    return (
      <div className="App">
        <header className="App-header">
        Welcome to My Commute
        </header>
        <div className="body">
        <form>

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
          <label for="street2_id" className="control-label">End Address </label>
          <input type="text" className="form-control" id="street2_id" name="street2" placeholder="Street address" />
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

        <div className="form-group">
        <label for="method_id" className="control-label">Vehicle Info (if applicable)</label>
          <select className="form-control" id="method_id">
            <option value="driving">Driving</option>
            <option value="walking">Walking</option>
            <option value="biking">Biking</option>
            <option value="public-trans">Public Transportation</option>
          </select>					
        </div>

        
        <div className="form-group"> 
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>     
    
      </form>		
        
        
        {/* <form>
        Starting Address <input type="text" name="starting-address"></input><br></br>
        Ending Address <input type="text" name="ending-address"></input><br></br>
        Start Work Time <input type="time" name="start-work-time"></input><br></br>
        End Work Time <input type="time" name="end-work-time"></input><br></br>
        <select name="method">
          <option value="driving">Driving</option>
          <option value="walking">Walking</option>
          <option value="biking">Biking</option>
          <option value="public-trans">Public Transportation</option>
        </select> <br></br>
        <Link to="/results">
        <button>Submit</button><br></br>
        </Link>
        </form>
        </div>
        <Switch>
          <Route path="/results" component={Results} />
        </Switch> */}
      </div>
      </div>
    );
  }
  
}

export default App;
