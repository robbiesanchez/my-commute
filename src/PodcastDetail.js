import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import "./App.css";
import axios from "axios";
import PodcastEpisodes from "./PodcastEpisodes";
import {Container, Row, Col} from "react-bootstrap";


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
        console.log(this.state)}
        )

    let passProps = () => {
            return (
            <PodcastEpisodes commuteTime={this.state.commuteTime} />
            )
        }

    return passProps()
    
}

    
    render() {

            console.log(this.props.match.params.id) //USA
            console.log(this.props)

            
        
        //   console.log(this.findTheIndex)


        return (
            <React.Fragment>

            <Container fluid={true} className="font">
            <Row>
            <Col className="pic-detail"> 
                <img src={this.pic()} alt=""/>
            </Col>
            <Col>
            <h3><a className="pod-header2" href={this.link()}>{this.name()}</a></h3><br />
            <div className="description">{this.des()}</div>
            </Col>
            </Row>
            <Row>
            <Col className="commute-form">
            <form>
                <h5>Want Commute friendly episodes?</h5>
                <h6>Daily Commute Time (in Minutes):</h6>
                <input type="number" value={this.props.time} onChange={this.setCommuteTime} />
                <Link className="sub-button" to={`/podcasts/episodes/${this.name()}`}><button onClick={()=>this.props.sendCommute(this.state.commuteTime)} type="submit">Submit</button></Link>
                </form>
            </Col>
            </Row>
                

                <Route exact path='/podcasts/episodes/:id'
          component={(props) => <PodcastEpisodes {...props} commuteTime={this.state.commuteTime} />
      } />

            </Container>
            </React.Fragment>
        )
    }
}
