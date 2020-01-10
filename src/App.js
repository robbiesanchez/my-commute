import React from 'react';
import './App.css';
import axios from 'axios';
import genres from "./genres.json";
import {Link, Route, Switch} from "react-router-dom";
import Podcasts from "./Podcasts";
import PodcastDetail from "./PodcastDetail";
import PodcastEpisodes from "./PodcastEpisodes";
// import "./images"
import { Container, Row, Col } from "react-bootstrap";



class App extends React.Component {
  
  
  state = {
    quote: null,
    podcast: "",
    max:1,
    min:0,
    offset: 0,
    allGenres: genres.genres,
    allGenreIds: [],
    genreId: 0,
    genrePods: [],
    genrePodIds: [],
    genrePodNames: [],
    genrePodPics: [],
    genrePodLinks: [],
    genrePodDescription: [],
    genrePodProducers: [],
    genreName: "",
    landing:true,
    time: 60
  }
  componentWillMount(){ //on load 
    this.getGenreIds()
  }
  
  getGenreIds = () => { //get the json file and make a new array with just name 
    let genreIdsNew = []
    this.state.allGenres.map(eachGenre => {
      return genreIdsNew.push(eachGenre.id)
    })
    this.setState({
      allGenreIds: genreIdsNew
    })
  }

  sendCommute = (time) => {
    console.log(time)
    this.setState({
      time
    })
  }


  kanyeQuote = () => {

  //   axios.post("https://ironrest.herokuapp.com/kanyequotes", "quote").then(res=>{
  //   console.log(res.data)
  // })

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
  })
  
  }

  

// About Page
  
  getGenre = () => {
    axios.get(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${this.state.genreId}&page=1&region=us&safe_mode=0`, {headers: {
        'X-ListenAPI-Key': 'f92e4a4b6c304ce4b3710775385e3efb'
        }}).then(res=>{

          this.setState({
            genrePods: res.data.podcasts
          })
          this.getSearchedGenreIds()
          this.getSearchedGenreNames()
          this.getSearchedGenrePics()
          this.getSearchedGenreDescriptions()
          this.getSearchedGenreLinks()
          this.getSearchedGenreProducers()
        console.log(res)
      }).catch(err=>console.error(err))
    }

    getSearchedGenreIds = () => {
      console.log(this.state.genrePods)
      let copy = this.state.genrePods.map(each=>
        each.id
      )
      
      this.setState({
        genrePodIds: copy
      })
    }

    getSearchedGenreProducers = () => {
      console.log(this.state.genrePods)
      let copy = this.state.genrePods.map(each=>
        each.publisher
      )
      
      this.setState({
        genrePodProducers: copy
      })
    }

    getSearchedGenreNames = () => {
      console.log(this.state.genrePods)
      let copy = this.state.genrePods.map(each=>
        each.title
      )
      
      this.setState({
        genrePodNames: copy
      },()=>{
        console.log(copy)
      })
    }

     
    getSearchedGenreLinks = () => {
      console.log(this.state.genrePods)
      let copy = this.state.genrePods.map(each=>
        each.listennotes_url
        // console.log(each.id)
        // eachId.id
        // this.setState({
        //     genrePodIds2: eachId.id
        //   }
        // )
      )
      
      this.setState({
        genrePodLinks: copy
      },()=>{
        console.log(copy)
      })
    }
    

    getSearchedGenreDescriptions = () => {
      console.log(this.state.genrePods)
      let copy = this.state.genrePods.map(each=>
        each.description
        // console.log(each.id)
        // eachId.id
        // this.setState({
        //     genrePodIds2: eachId.id
        //   }
        // )
      )
      
      this.setState({
        genrePodDescription: copy
      },()=>{
        console.log(copy)
      })
    }


    getSearchedGenrePics = () => {
      console.log(this.state.genrePods)
      let copy = this.state.genrePods.map(each=>
        each.image
       
        // console.log(each.id)
        // eachId.id
        // this.setState({
        //     genrePodIds2: eachId.id
        //   }
        // )
      )
      
      this.setState({
        genrePodPics: copy
      },()=>{
        console.log(copy)
      })
    }



  setGenre = (e) => {
    e.preventDefault();

    this.setState({
        genreId: e.target.value,
    }, () => {
      this.getGenre()
    }
      )

    
}

// setSearchTerms = () => {

//   let searchValue = "yo this is a search"

//   let newSearchValue = encodeURIComponent(searchValue)

//   console.log(newSearchValue)

// }



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

  // showWeeklyCommuteTimeInSeconds = (e) => {
  //   e.preventDefault();
    
  //   this.setState({
  //     commuteSeconds: this.state.commuteTime*60
  //   }, () => {
  //     console.log(this.state)})
  // }

  

  render() {

    return (
<React.Fragment>
{/* <div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}> */}

      <Container fluid={true} className={"App-header " + (this.state.landing ? 'new-height' : '')}>
          <Row>
            <Col>
              <Link to="/" onClick={() => this.setState({landing:true})}><img className="logo" src="./images/logo.png" alt="My Commute Pods"/></Link>
            </Col>
            <Col xs={6}>
              <form onSubmit="/podcasts" >
                <div>
                <Link to="/about" onClick={() => this.setState({landing:true})}> About My Commute Pods</Link>
                <label className="pick-genre"><h4>Pick a Genre</h4></label>
                <select className="select-form" name="genre" onChange={this.setGenre}>
                <option value="139" selected={true}>VR & AR</option>
                <option value="140">Web Design</option> 
                <option value="141">Golf</option>  
                <option value="142">English Learning</option>
                <option value="143">Programming</option>
                <option value="144">Personal Finance</option> 
                <option value="145">Parenting</option>  
                <option value="146">LGBTQ</option>  
                <option value="147">SEO</option> 
                <option value="148">American History</option>  
                <option value="149">Venture Capital</option>    
                <option value="138">Movie</option>  
                <option value="150">Chinese History</option>    
                <option value="151">Locally Focused</option>  
                <option value="154">San Francisco Bay Area</option>   
                <option value="155">Denver</option>   
                <option value="157">Startup</option>  
                <option value="158">NFL</option>    
                <option value="159">Harry Potter</option> 
                <option value="162">Game of Thrones</option>  
                <option value="165">Storytelling</option> 
                <option value="166">YouTube</option>  
                <option value="83">Other Games</option>   
                <option value="84">Automotive</option>   
                <option value="85">Video Games</option>   
                <option value="86">Hobbies</option>    
                <option value="87">Aviation</option>  
                <option value="152">United States</option>    
                <option value="156">China</option>  
                <option value="160">Star Wars</option>    
                <option value="163">AI & Data Science</option>    
                <option value="67">Podcasts</option>  
                <option value="68">TV & Film</option>  
                <option value="69">Hinduism</option>    
                <option value="70">Christianity</option>  
                <option value="71">Other</option>    
                <option value="72">Judaism</option>  
                <option value="73">Buddhism</option>    
                <option value="74">Islam</option>    
                <option value="75">Spirituality</option>  
                <option value="76">Religion & Spirituality</option>      
                <option value="77">Sports & Recreation</option>
                <option value="78">Professional</option> 
                <option value="79">Outdoor</option>  
                <option value="80">College & High School</option> 
                <option value="81">Amateur</option> 
                <option value="82">Games & Hobbies</option> 
                <option value="88">Health</option> 
                <option value="89">Fitness & Nutrition</option> 
                <option value="90">Self-Help</option>  
                <option value="91">Alternative Health</option>  
                <option value="92">Sexuality</option>  
                <option value="93">Business</option>  
                <option value="94">Careers</option>  
                <option value="95">Business News</option>  
                <option value="96">Shopping</option>
                <option value="97">Management & Marketing</option>
                <option value="98">Investing</option>
                <option value="99">News & Politics</option>
                <option value="100">Arts</option>
                <option value="101">Performing Arts</option>
                <option value="102">Food</option>
                <option value="103">Visual Arts</option>
                <option value="104">Literature</option> 
                <option value="105">Design</option>
                <option value="106">Fashion & Beauty</option>
                <option value="107">Science & Medicine</option>
                <option value="108">Social Sciences</option>
                <option value="109">Medicine</option>
                <option value="110">Natural Sciences</option>
                <option value="111">Education</option>
                <option value="112">Educational Technology</option>
                <option value="113">Higher Education</option>
                <option value="114">K-12</option> 
                <option value="115">Training</option> 
                <option value="116">Language Courses</option> 
                <option value="117">Government & Organizations</option> 
                <option value="118">Local</option> 
                <option value="136">Crypto & Blockchain</option>
                <option value="135">True Crime</option>
                <option value="119">Non-Profit</option>
                <option value="120">Regional</option>
                <option value="121">National</option>
                <option value="122">Society & Culture</option>
                <option value="123">Places & Travel</option>
                <option value="124">Personal Journals</option>
                <option value="126">Philosophy</option>
                <option value="128">Software How-To</option>
                <option value="129">Podcasting</option>
                <option value="130">Gadgets</option>
                <option value="131">Tech News</option>
                <option value="132">TKids & Family</option>
                <option value="133">Comedy</option>
                <option value="134">Music</option>
                <option value="153">New York</option>
                <option value="161">Star Trek</option>
                <option value="164">Apple</option>
                <option value="125">History</option>
                <option value="137">NBA</option>
                <option value="127">Technology</option>
                <option value="167">Audio Drama</option>
                <option value="168">Fiction</option>
                <option value="169">Sales</option>
                </select>
              </div>  
              <Link to="/podcasts" className= "button-align" ><button className="button-color" onClick={() => this.setState({landing:false})} type="submit">Search</button></Link>
              </form>
              
            </Col>
            <Col>
            <a href="https://www.linkedin.com/in/rfsanchez004/" ><img className="logo2" src="./images/logo2.png" alt="My Commute Pods"/></a>
            </Col>
            <Row>
              <Col className="kanye">
              {this.kanyeQuote()}
              </Col>
            </Row>


          </Row>
        </Container>
        
        <div>
        <Switch>

      <Route exact path="/podcasts" component=  {props => 
      <Podcasts
      {...props}
       podcastNamesProp = {this.state.genrePodNames}
       podcastPicsProp = {this.state.genrePodPics}
       podcastsProp = {this.state.genrePods}
       podcastProducersProps = {this.state.genrePodProducers}
      /> } />

      <Route exact path="/podcasts/episodes/:id" component={(props) => <PodcastEpisodes {...props} time={this.state.time} />}/>

      <Route exact path="/podcasts/:id" 
          component={(props) => <PodcastDetail {...props} sendCommute={this.sendCommute} podcastId = {this.state.genrePodIds} podcastLink= {this.state.genrePodLinks} podcastName={this.state.genrePodNames} podcastPic={this.state.genrePodPics} podcastDescription={this.state.genrePodDescription} />
      } />

      <Route exact path="/" />


      </Switch>
        </div>
        

      </React.Fragment>

    );
  }
  
}

export default App;
