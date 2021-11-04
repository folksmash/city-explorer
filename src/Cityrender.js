import Card from 'react-bootstrap/Card';
import React, {Component} from 'react';


export default class Cityrender extends Component{

render(){
  return (
    <Card>
    <Card.Body>
      <Card.Text>You viewed: {this.props.cityName}</Card.Text>
      <Card.Text>Lat: {this.props.latitude}</Card.Text>
      <Card.Text>Lon: {this.props.longitude}</Card.Text>
      <Card.Img src={this.props.mapSource}  />
    </Card.Body>
  </Card>
  )
}
}

