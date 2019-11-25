import React, { Component } from 'react';
import "./App.css";
import {Link, Route} from "react-router-dom";
import axios from "axios";
import PodcastDetail from './PodcastDetail';

export default class Podcasts extends Component {

    // componentWillMount(){
    //     this.getEpisodes()
    // }
    
    constructor(props) {
        super(props) 
        this.state = {
            podcastsNames: props.podcastNamesProp,
            podcastPics: props.podcastPicsProp,
            commuteTime: 0,
            commuteSeconds: 0,
            podcastsIds: props.podcastIdsProps,
            podcastEpisodes: []
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
                    <Link to={`/podcasts/${eachName}`}>{eachName}</Link>
                    </li>
                )
                 } ))
    }

    // getEpisodes = () => {
    //     axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${this.state.podcastIds}?sort=recent_first`, {headers: {
    //         'X-ListenAPI-Key': 'f92e4a4b6c304ce4b3710775385e3efb'
    //         }}).then(res=>{
    
    //           this.setState({
    //             podcastEpisodes: res
    //           })
    //         console.log(res)
    //         console.log(this.state.podcastsIds[0])
    //       }).catch(err=>console.error(err))
    //     }

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

    // setCommuteTime = (e) => {
    //     e.preventDefault();
  
    //     this.setState({
    //         commuteTime: e.target.value
    //     }, () => {
    //         console.log(this.state)})
    // }

    
    render() {
        console.log(this.state.podcastsNames)
        console.log(this.props)
        return (
            <div>
            <h3>Top Rated Podcasts</h3>
            <ul>
            {this.showPodcastNames()}
            {/* {this.showPodcastPics()} */}
            </ul>
            <hr />
            {/* <form>
            <h5>Want Commute friendly episodes?</h5>
            <br />
            <h5>Daily Commute Time in Minutes:</h5>
            <input type="number" value={this.commuteTime} onChange={this.setCommuteTime}/>
            <button type="submit" >Submit</button>
            </form> */}

            <Route exact path="/podcasts/:id" 
          component={(props) => <PodcastDetail {...props} podcastName={this.state.podcastsNames} />
      } />

            </div>
        )
    }
}
