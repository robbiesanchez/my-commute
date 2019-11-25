import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import "./App.css";
import axios from "axios";
import PodcastEpisodes from "./PodcastEpisodes"


export default class PodcastDetail extends Component {
    
    // componentDidMount(){
    //     console.log("hello")
    //     this.setIndexState()
    // }

    constructor(props) {
        super(props) 
        this.state = {
            podcastName: props.podcastName,
            podcastPic: props.podcastPic,
            podcast: props.podcast,
            index: 0,
            commuteTime: 0,
            commuteSeconds: 0,
            podcastDescription: props.podcastDescription,
            podcastLink: props.podcastLink,
            podcastId: props.podcastId,
            podcastEpisodeName: "",
            podcastEpisodeId: ""
        }
    }

    // setIndexState = () => {

    //     this.setState({
    //         index: this.findTheIndex
    //     })
    // }

    name = () => this.state.podcastName.find(eachPodcast=>{
        console.log(eachPodcast)
        return this.props.match.params.id === eachPodcast
    })
    


    // getEpisodes = () => {
        
    //     let searchValue = this.name()

    //     let newSearchValue = encodeURIComponent(searchValue)

    //     return (
    //         axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${newSearchValue}&sort_by_date=1&type=episode&len_max=${this.state.commuteTime}&language=English&safe_mode=0`, {headers: {
    //             'X-ListenAPI-Key': 'f92e4a4b6c304ce4b3710775385e3efb'
    //             }}).then(res=>{
    //                 return(
    //                     <PodcastEpisodes 
    //                 episodeNames={res} />
    //                 )
    //             // console.log(res)
    //           }).catch(err=>console.error(err))
    //     )

    // }
   

   pic = () => {
    let findTheIndex = this.state.podcastName.findIndex(name => name === this.props.match.params.id)
    console.log(findTheIndex)
    return this.state.podcastPic[findTheIndex] 
   }

   des = () => {
    let findTheIndex = this.state.podcastName.findIndex(name => name === this.props.match.params.id)
    console.log(findTheIndex)
    return this.state.podcastDescription[findTheIndex] 
   }

   link = () => {
    let findTheIndex = this.state.podcastName.findIndex(name => name === this.props.match.params.id)
    console.log(findTheIndex)
    return this.state.podcastLink[findTheIndex] 
   }

   id = () => {
    let findTheIndex = this.state.podcastName.findIndex(name => name === this.props.match.params.id)
    console.log(findTheIndex)
    return this.state.podcastId[findTheIndex] 
   }

   setCommuteTime = (e) => {
    e.preventDefault();

    this.setState({
        commuteTime: e.target.value,
        commuteSeconds: this.state.commuteTime*60
    }, () => {
        console.log(this.state)})
}



    
    
    render() {

            console.log(this.props.match.params.id) //USA
            console.log(this.props)

        
        //   console.log(this.findTheIndex)


        return (
            <div>
                <img src={this.pic()} alt=""/>
                <br />
                <h3>{this.name()}</h3>
                <br />
                {this.des()}
                <br />
                <a href={this.link()}>Take a Listen</a>
                <hr />
                <form>
                <h5>Want Commute friendly episodes?</h5>
                <h5>Daily Commute Time in Minutes:</h5>
                <input type="number" value={this.commuteTime} onChange={this.setCommuteTime} />
                <Link to={`/podcasts/episodes/${this.id()}`}><button type="submit" >Submit</button></Link>
                </form>


            </div>
        )
    }
}
