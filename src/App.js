import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
import pogo from '/Users/nehalsingh/Applications/hackillinoisinfo/src/hack Illinois Image.png';
class App extends React.Component{

  constructor() {
    super()
    this.state ={
      data:[]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link">
            
            <img src={pogo} alt="Logo"/>
           Schedule
          </a>

        </header>
        {this.state.data.map(event => (
          <div>
            <p className = "Events">{event.name}</p>
            <p className = "Description">{event.description}</p>
            <p className = "Time">Time: {event.startTime} - {event.endTime}</p>
            <p className = "locations">Venue - {event.locations[0].description} ( {event.locations[0].latitude} , {event.locations[0].longitude})</p>
            <p className = "sponsor">Sponsored by {event.sponsor}</p>
            <p className = "eventType">{event.eventType}</p>
              
            

            </div>
        ))}
      </div>
    );
} 
  //make a fetch request
  getEvents() {
      //put fetch request here
      fetch('https://api.hackillinois.org/event/', {
        method : "GET",
        headers: {
          'Content-Type' : 'application/json',
        }
      })
      .then((response) =>response.json())
      .then((responseJson) => {
        console.log(responseJson.events)
        this.setState({data:responseJson.events});
      })


  }

   componentDidMount() {
    this.getEvents();
  }

  

  }
  export default App;
