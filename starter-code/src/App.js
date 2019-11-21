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
  componentWillMount(){ //on load 
    this.getGenreNames()
  }
  
  getGenreNames = () => { //get the json file and make a new array with just name 
    let genreNamesNew = []
    this.state.allGenres.map((eachGenre,i) => {
      genreNamesNew.push(eachGenre.name)
    })
    this.setState({
      genreNames: genreNamesNew
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



      axios.get('https://listen-api.listennotes.com/api/v2/genres', {headers: {
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
          <select name="genre">
          <option value="vr&ar">VR & AR</option>
          <option value="webdesign">Web Design</option> 
          <option value="golf">Golf</option>  
          <option value="englishlearning">English Learning</option>
          <option value="programming">Programming</option>
          <option value="programming">Personal Finance</option> 
          <option value="programming">Parenting</option>  
          <option value="programming">LGBTQ</option>  
          <option value="programming">SEO</option> 
          <option value="programming">American History</option>  
          <option value="programming">Venture Capital</option>    
          <option value="programming">Movie</option>  
          <option value="programming">Chinese History</option>    
          <option value="programming">Locally Focused</option>  
          <option value="programming">San Francisco Bay Area</option>   
          <option value="programming">Denver</option>   
          <option value="programming">Startup</option>  
          <option value="programming">NFL</option>    
          <option value="programming">Harry Potter</option> 
          <option value="programming">Game of Thrones</option>  
          <option value="programming">Storytelling</option> 
          <option value="programming">YouTube</option>  
          <option value="programming">Other Games</option>   
          <option value="programming">Automotive</option>   
          <option value="programming">Video Games</option>   
          <option value="programming">Hobbies</option>    
          <option value="programming">Aviation</option>  
          <option value="programming">United States</option>    
          <option value="programming">China</option>  
          <option value="programming">Star Wars</option>    
          <option value="programming">AI & Data Science</option>    
          <option value="programming">Podcasts</option>  
          <option value="programming">TV & Film</option>  
          <option value="programming">Hinduism</option>    
          <option value="programming">Christianity</option>  
          <option value="programming">Other</option>    
          <option value="programming">Judaism</option>  
          <option value="programming">Buddhism</option>    
          <option value="programming">Islam</option>    
          <option value="programming">Spirituality</option>  
          <option value="programming">Religion & Spirituality</option>      
          <option value="programming">Sports & Recreation</option>
          <option value="programming">Professional</option> 
          <option value="programming">Outdoor</option>  
          <option value="programming">College & High School</option> 
          <option value="programming">Amateur</option> 
          <option value="programming">Games & Hobbies</option> 
          <option value="programming">Health</option> 
          <option value="programming">Fitness & Nutrition</option> 
          <option value="programming">Self-Help</option>  
          <option value="programming">Alternative Health</option>  
          <option value="programming">Sexuality</option>  
          <option value="programming">Business</option>  
          <option value="programming">Careers</option>  
          <option value="programming">Business News</option>  
          <option value="programming">Shopping</option>
          <option value="programming">Management & Marketing</option>
          <option value="programming">Investing</option>
          <option value="programming">News & Politics</option>
          <option value="programming">Arts</option>
          <option value="programming">Performing Arts</option>
          <option value="programming">Food</option>
          <option value="programming">Visual Arts</option>
          <option value="programming">Literature</option> 
          <option value="programming">Design</option>
          <option value="programming">Fashion & Beauty</option>
          <option value="programming">Science & Medicine</option>
          <option value="programming">Social Sciences</option>
          <option value="programming">Medicine</option>
          <option value="programming">Natural Sciences</option>
          <option value="programming">Education</option>
          <option value="programming">Educational Technology</option>
          <option value="programming">Higher Education</option>
          <option value="programming">K-12</option> 
          <option value="programming">Training</option> 
          <option value="programming">Language Courses</option> 
          <option value="programming">Government & Organizations</option> 
          <option value="programming">Local</option> 
          <option value="programming">Crypto & Blockchain</option>
          <option value="programming">True Crime</option>
          <option value="programming">Non-Profit</option>
          <option value="programming">Regional</option>
          <option value="programming">Regional</option>
            National
            Society & Culture
            Places & Travel
            Personal Journals
            Philosophy
            Software How-To
            Podcasting
            Gadgets
            Tech News
            Kids & Family
            Comedy
            Music
            New York
            Star Trek
            Apple
            History
            NBA
            Technology
            Audio Drama
            Fiction
            Sales
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        
        </div>
      </div>
    );
  }
  
}

export default App;
