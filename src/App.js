import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Cityrender from './Cityrender';





export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cityValue: '',
      latitude: '',
      longitude: '',
      cityName: '',
      mapSource: '',
    }
  } 
  saveCity = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({cityValue: event.target.value})
    console.log(this.state.cityValue)
  }
  handleClick = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEYID}&q=${this.state.cityValue}&format=json`;
    let response = await axios.get(url);
    console.log(response.data[0])
    this.setState({
      latitude:response.data[0].lat,
      longitude: response.data[0].lon,
      cityName: response.data[0].display_name
    })
    // this.handleMap();
  }
  handleMap = async () => {
    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEYID}&center=${this.state.latitude},${this.state.longitude}&zoom=12`;
    let mapResponse = await axios.get(mapUrl);
    console.log(mapResponse)
    this.setState({
      mapSource: mapResponse.data,
    })
  }
  render(){  
    return (
      <div>
      <input type='text' onChange={this.saveCity}/>
      <p>{this.state.cityValue}</p>
      <button type='submit' onClick={this.handleClick}>Explore!</button>
      <Cityrender cityName={this.state.cityName} latitude={this.state.latitude} longitude={this.state.longitude} mapSource={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEYID}&center=${this.state.latitude},${this.state.longitude}&zoom=12`}/>
      {this.state.location && <h1>{this.state.location.display_name}</h1>}
      </div>
  );
}
}
