import React, { Component } from 'react';
import axios from 'axios'

export default class PodcastEpisodes extends Component {
    

    

    getEpisodes = () => {
        
        let searchValue = this.props.match.params.id

        let newSearchValue = encodeURIComponent(searchValue)

        return (
            axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${newSearchValue}&sort_by_date=1&type=episode&len_max=${this.state.commuteTime}&language=English&safe_mode=0`, {headers: {
                'X-ListenAPI-Key': 'f92e4a4b6c304ce4b3710775385e3efb'
                }}).then(res=>{

                console.log(res)
              }).catch(err=>console.error(err))
        )

    }
   
    
    render() {

        console.log(this.props.match.params.id)
        
        console.log(this.props)
        return (
            <div>
                {this.getEpisodes()}
            </div>
        )
    }
}
