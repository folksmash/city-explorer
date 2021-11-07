import React from "react";
import Card from "react-bootstrap/Card";

export default class Movie extends React.Component {
    render() {
        return this.props.movieData.map((movie, idx) => (
            <div key={idx}>
                <Card style={
                    {width: "15rem"}
                }> 
                    <Card.Header><Card.Title>{movie.title}</Card.Title></Card.Header>
                    <Card.Body>
                        <Card.Text>Overview: {
                            movie.overview
                        } </Card.Text>
                        <Card.Img src={movie.image_url} />
                        <Card.Footer>Popularity: {movie.popularity}
                        <Card.Text>{movie.release_date}</Card.Text>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        ));
    }
}
