import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import genres from "./genres.json";


console.log(genres.genres)

class App extends React.Component {
  
  
  state = {
    quote: null,
    commuteTime: 0,
    podcast: "",
    max:1,
    min:0,
    commuteSeconds: 0,
    offset: 0,
    allGenres: genres.genres,
    genreNames: []
  }
  componentDidMount(){ //on load 
    this.getGenreNames()
  }
  
  getGenreNames = () => { //get the json file and make a new array with just name 
    let genreNames = []
    this.state.allGenres.map((eachGenre,i) => {
      genreNames.push(eachGenre.name)
    })
    this.setState({
      genreNames
    })
  }

  showGenreNames = () => {  //create a bunch of divs with each name 
    return this.state.genreNames.map(eachName=>{
      return <div>{eachName}</div>
    })
  }



  kanyeQuote = () => {
    if (this.state.quote) {
      return (
        <p>Kanye quote of the day: "{this.state.quote}"</p>
      )
    } else return <div></div>
  }

  componentDidMount() {
    axios.get("https://api.kanye.rest").then(randomQuote=>{
      console.log(randomQuote)
      this.setState({
          quote: randomQuote.data.quote
    });



      axios.get(`https://listen-api.listennotes.com/api/v2/search?q=star%20wars&sort_by_date=0&type=episode&offset=${this.state.offset}&len_min=${this.state.min}&len_max=${this.state.max}&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=1`, {headers: {
        'X-ListenAPI-Key': 'f92e4a4b6c304ce4b3710775385e3efb'
      }}).then(res=>{

        console.log(res)
      
      }).catch(err=>console.error(err))
    
    })




    // axios.get("https://listen-api.listennotes.com/api/v2/genres/key=f92e4a4b6c304ce4b3710775385e3ef").then(randomPod=>{
    //   console.log(randomPod)
    //   this.setState({
    //       podcast: randomPod.data
    // });
    // })


    // var instance = axios.create({
    //   baseURL: 'https://listen-api.listennotes.com/api/v2/search?q=star%20wars&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=1',
    //   headers: {'X-ListenAPI-Key': 'f92e4a4b6c304ce4b3710775385e3ef'}
    // });

    // console.log(instance)

  }


  setCommuteTime = (e) => {
      e.preventDefault();

      this.setState({
          commuteTime: e.target.value
      }, () => {
          console.log(this.state)})
  }

  setGenre = (e) => {
    e.preventDefault();

    this.setState({
        commuteTime: e.target.value
    }, () => {
        console.log(this.state)})
}



  // getRidOfQuote = () => {
  //   this.setState({quote:null})
  // }


  // updateInput = (e) =>{

  //   this.setState({
  //       [e.target.name]: e.target.value
  //       }, ()=>{
  //       console.log(this.state)
  //       })            

  //   }

  showWeeklyCommuteTimeInSeconds = (e) => {
    e.preventDefault();
    
    this.setState({
      commuteSeconds: this.state.commuteTime*60
    }, () => {
      console.log(this.state)})
  }

  

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <h3>My Commute Pod</h3>
        {this.kanyeQuote()}
        {this.showGenreNames()}
        </header>
        <div>
        <form onSubmit={this.showWeeklyCommuteTimeInSeconds} >
          <label>Daily Commute Time in Minutes (both ways) </label>
          <input type="number" value={this.commuteTime} onChange={this.setCommuteTime}/>
          <hr />
          <label>Pick a Genre</label>
          <input type="number" value={this.commuteTime} onChange={this.setGenre}/>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        
        </div>
      </div>
    );
  }
  
}

export default App;
