import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const moviePosterURL = process.env.REACT_APP_MOVIEDB_IMAGE_URL;

const MovieOutlineCard = ({
  singleMovie,
  showMovieDetail,
  removeFromWatchList,
}) => {
  return (
    <Card className="movie-outline-card mb-5">
      <CardImg
        variant="top"
        className="movie-poster"
        src={`${moviePosterURL}${singleMovie.poster_path}`}
      />

      <div className="movie-info">
        <h4>
          {singleMovie.title.length >= 40
            ? singleMovie.title.slice(0, 39) + "..."
            : singleMovie.title}
        </h4>
        <p>Release year: {singleMovie.release_date.slice(0, 4)}</p>
        <p>
          Rate: {singleMovie.vote_average}{" "}
          <FontAwesomeIcon icon={faStar} className="rate-star" />
        </p>

        <div className="mt-2 d-flex justify-content-start movie-button-group">
          {showMovieDetail && (
            <button
              type="button"
              className="btn btn-info see-detail-btn"
              onClick={showMovieDetail}
            >
              Detail
            </button>
          )}

          {removeFromWatchList && (
            <button
              type="button"
              className="btn btn-danger remove-from-list-btn"
              onClick={removeFromWatchList}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MovieOutlineCard;
