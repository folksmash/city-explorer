import {Component} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class WeatherDay extends Component {

  render() {
    let { day, idx } = this.props;
    return (
      <Col>
        <Card key={idx}>
          <Card.Body style={{maxWidth: '15rem'}}>
            <Card.Title>Date</Card.Title >
            <Card.Text>Weather</Card.Text>
          </Card.Body>
        </Card>
      </Col >
    )
  }
}

export default WeatherDay;