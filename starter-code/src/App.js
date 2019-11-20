import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  
  
  state = {
    quote: "",
  }
  
  componentDidMount() {
    axios.get("https://api.kanye.rest").then(randomQuote=>{
      console.log(randomQuote)
      this.setState({
          quote: randomQuote.data.quote
    });
    })
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
        <h5>Kanye quote of the day: "{this.state.quote}"</h5>
        </div>
      </div>
    );
  }
  
}

export default App;
