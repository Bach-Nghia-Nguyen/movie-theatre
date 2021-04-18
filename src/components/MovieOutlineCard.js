import React from "react";
import { Card, Button, CardImg } from "react-bootstrap";

const moviePosterURL = process.env.REACT_APP_MOVIEDB_IMAGE_URL;

const MovieOutlineCard = ({ singleMovie, showMovieDetail }) => {
  return (
    <Card className="movie-outline-card mb-5" onClick={showMovieDetail}>
      <CardImg
        variant="top"
        src={`${moviePosterURL}${singleMovie.poster_path}`}
      />

      {/* <Card.Body>
        <Card.Title>{singleMovie.title}</Card.Title>
      </Card.Body> */}
    </Card>
  );
};

export default MovieOutlineCard;
