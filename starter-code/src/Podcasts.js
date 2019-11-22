import React, { Component } from 'react'

export default class Podcasts extends Component {
    
    constructor(props) {
        super(props) 
        this.state = {
            podcastsNames: [props.podcastNamesProp],
            commuteTime: 0,
            commuteSeconds: 0,
        }
    }

    showPodcastNames = () => {
        return this.state.podcastsNames.map(eachName => {
                return(<li>
                    eachName
                </li>)
        } )
        
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
            <div>
            {this.showPodcastsNames}
            </div>
            
            <h3>Want Commute friendly episodes?</h3>
            <hr />
            <form>
            <label>Daily Commute Time in Minutes (both ways) </label>
            <input type="number" value={this.commuteTime} onChange={this.setCommuteTime}/>
            <button type="submit" >Submit</button>
            
            </form>
            </div>
        )
    }
}
