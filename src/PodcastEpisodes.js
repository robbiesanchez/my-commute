import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

export default class PodcastEpisodes extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            commuteTime: 60,
            episodeInfo: []
        }
    }

    componentDidMount() {
        this.getEpisodes()
    }

    getEpisodes = () => {
        
        let searchValue = this.props.match.params.id

        let newSearchValue = encodeURIComponent(searchValue)

        return (
            axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${newSearchValue}&sort_by_date=1&type=episode&len_max=${this.state.commuteTime}&language=English&safe_mode=0`, {headers: {
                'X-ListenAPI-Key': 'f92e4a4b6c304ce4b3710775385e3efb'
                }}).then(res=>{

                console.log(res.data.results)
                this.setState({
                    episodeInfo: res.data.results
                })

              }).catch(err=>console.error(err))
        )

    }

    showEpisodeNames = () => {
        console.log("Showing episodes")
        console.log(this.state.episodeInfo)
        return (this.state.episodeInfo.map((eachName,i) => {
            console.log(eachName)
                return(
                    <li key={i}>
                    <a href={eachName.audio}>{eachName.title_original}</a>
                    </li>
                )
                 } ))
    }
   
    
    render() {

        console.log(this.props.match.params.id)

        console.log(this.props)


        return (
            <div>
                <ul>
                {this.showEpisodeNames()}
                </ul>
            </div>
        )
    }
}
