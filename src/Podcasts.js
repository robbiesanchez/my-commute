import React, { Component } from 'react';
import "./App.css";
import {Link, Route} from "react-router-dom";
import PodcastDetail from './PodcastDetail';
import { Container, Row, Col } from "react-bootstrap";

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
            podcastEpisodes: [],
            podcastProducers: props.podcastProducersProps,
            podcasts: props.podcastsProp
        }
    }


    // showPodcastNames = () => {
    //     console.log("Showing podcasts")
    //     console.log(this.state.podcastsNames)
    //     return (this.state.podcastsNames.map((eachName,i) => {
    //         console.log(eachName)
    //             return(
    //                 <li key={i}>
    //                 <Link className="pod-names" to={`/podcasts/${eachName}`}>{eachName}</Link>
    //                 <hr />
    //                 </li>
    //             )
    //              } ))
    // }

    showPodcasts = () => {
        console.log("Showing podcasts")
        console.log(this.state.podcasts)
        return (this.state.podcasts.map((eachName,i) => {
            console.log(eachName)
                return(
                    <li key={i}>
                    <Link className="pod-names" to={`/podcasts/${eachName.title}`}>{eachName.title} <br/> By {eachName.publisher}</Link>
                    <hr />
                    </li>
                )
                 } ))
    }


    // showPodcastProducers = () => {
    //     console.log("Showing podcasts")
    //     console.log(this.state.podcastProducers)
    //     return (this.state.podcastProducers.map((eachName,i) => {
    //         console.log(eachName)
    //             return(
    //                 <li key={i}>
    //                 <Link className="pod-names" to={`/podcasts/${eachName}`}>{eachName}</Link>
    //                 <hr />
    //                 </li>
    //             )
    //              } ))
    // }


    
    render() {
        console.log(this.state.podcastsNames)
        console.log(this.props)
        return (
            <React.Fragment>
            <Container className="font" fluid={true}>
            <Row className="pod-row">
            <Col></Col>
            <Col xs={6} >
            <h3 className="pod-header">Top Rated Podcasts</h3>
            </Col>
            <Col></Col>
            </Row>
            <Row>
            <Col className="pod-names" >
                <ul >
                    {this.showPodcasts()}
                </ul>
            </Col>
            </Row>

            <Route exact path="/podcasts/:id" 
          component={(props) => <PodcastDetail {...props} podcastName={this.state.podcastsNames} />
      } />

            </Container>
            </React.Fragment>
        )
    }
}
