import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap"

export default class PodcastEpisodes extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            // commuteTime: 60,
            episodeInfo: [],
            minutes: []
        }
    }

    componentDidMount() {
        // this.setState({
        //     commuteTime:this.props.time
        // })
        this.getEpisodes()
    }

    

    getEpisodes = () => {
        
        let searchValue = this.props.match.params.id

        let newSearchValue = encodeURIComponent(searchValue)

        let commuteTime = this.props.time || 60

        return (
            axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${newSearchValue}&sort_by_date=1&type=episode&len_max=${commuteTime}&language=English&safe_mode=0`, {headers: {
                'X-ListenAPI-Key': 'f92e4a4b6c304ce4b3710775385e3efb'
                }}).then(res=>{

                console.log(res.data.results)
                this.setState({
                    episodeInfo: res.data.results
                })

                this.convertMinutes();

              }).catch(err=>console.error(err))
        )
        
    }

    convertMinutes = () => {

        this.setState({
            minutes: [this.state.episodeInfo.audio_length_sec / 60]
        })
    }

    showEpisodeNames = () => {
        console.log("Showing episodes")
        console.log(this.state.episodeInfo)
        return (this.state.episodeInfo.map((eachName,i) => {
            console.log(eachName)
                return(
                    <li key={i}>
                    <a className="pod-names" href={eachName.audio}>{eachName.title_original} {this.state.minutes}</a>
                    <hr />
                    </li>
                )
                 } ))
    }

   
   
    
    render() {

        console.log(this.props.match.params.id)

        console.log(this.props);

        console.log(this.state.commuteTime)

        return (
            <React.Fragment>
            <Container fluid={true} className="font">>
            <Row>
                <Col>
                    <h4 className="pod-header">Episodes You Can Finish During Your Daily Commute</h4>
                </Col>
            </Row>

            <Row>
                <Col>
                <ul>
                {this.showEpisodeNames()}
                </ul>
                </Col>
            </Row>
                
            </Container>
            </React.Fragment>
            
        )
    }
}
