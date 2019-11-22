import React, { Component } from 'react';
import "./App.css";
import {Link} from "react-router-dom";

export default class Podcasts extends Component {
    
    constructor(props) {
        super(props) 
        this.state = {
            podcastsNames: props.podcastNamesProp,
            podcastPics: props.podcastPicsProp,
            commuteTime: 0,
            commuteSeconds: 0,
            // podcasts: props.podcastsProp
        }
    }


    showPodcastNames = () => {
        console.log("Showing podcasts")
        console.log(this.state.podcastsNames)
        return (this.state.podcastsNames.map((eachName,i) => {
            console.log(eachName)
                return(
                    <li key={i}>
                    <Link to="/podcacts/:id">{eachName}</Link>
                    </li>
                )
                 } ))
    }

    // showPodcastPics = () => {
    //     console.log("Showing podcasts")
    //     console.log(this.state.podcastPics)
    //     return (this.state.podcastPics.map((eachPic,i) => {
    //         console.log(eachPic)
    //             return(
    //                 <li key={i}>
    //                     {eachPic}
    //                 </li>
    //             )
    //              } ))
    // }

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
            <h3>Top Rated Podcasts</h3>
            <ul>
            {this.showPodcastNames()}
            {/* {this.showPodcastPics()} */}
            </ul>
            <hr />
            <form>
            <h5>Want Commute friendly episodes?</h5>
            <br />
            <h5>Daily Commute Time in Minutes:</h5>
            <input type="number" value={this.commuteTime} onChange={this.setCommuteTime}/>
            <button type="submit" >Submit</button>
            
            </form>
            </div>
        )
    }
}
