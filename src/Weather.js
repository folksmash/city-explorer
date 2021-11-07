import React, { Component } from 'react'
import WeatherDay from './WeatherDay'

export default class Weather extends Component {

  render() {
    return this.props.weatherData.map((day, idx) => <WeatherDay day={day} idx={idx} />)
  }
}
