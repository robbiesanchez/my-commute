import React, { Component } from 'react';
import "./App.css"

export default class Podcasts extends Component {
    
    constructor(props) {
        super(props) 
        this.state = {
            podcastsNames: props.podcastNamesProp,
            commuteTime: 0,
            commuteSeconds: 0,
        }
    }

    showPodcastNames = () => {
        console.log("Showing podcasts")
        console.log(this.state.podcastsNames)
        return (this.state.podcastsNames.map((eachName,i) => {
            console.log(eachName)
                return(
                    <li key={i}>
                        {eachName}
                    </li>
                )
                 } ))
        
    }

    setCommuteTime = (e) => {
        e.preventDefault();
  
        this.setState({
            commuteTime: e.target.value
        }, () => {
            console.log(this.state)})
    }


    
    render() {
        return (
            <div>

<ul>

            {this.showPodcastNames()}
</ul>

            <h3>Want Commute friendly episodes?</h3>
            <hr />
            <form>
            <label>Daily Commute Time in Minutes:  </label>
            <input type="number" value={this.commuteTime} onChange={this.setCommuteTime}/>
            <button type="submit" >Submit</button>
            
            </form>
            </div>
        )
    }
}
