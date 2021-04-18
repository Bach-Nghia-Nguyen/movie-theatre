import React from "react";
import { Badge } from "react-bootstrap";

import { SyncLoader } from "react-spinners";

const moviePosterURL = process.env.REACT_APP_MOVIEDB_IMAGE_URL;

const MovieDetailDisplay = ({
  singleMovie,
  genres,
  handleGoBack,
  loading,
  addToWatchList,
}) => {
  return (
    <div className="detail-container">
      <h1>Movie Detail</h1>
    </div>
  );
};

export default MovieDetailDisplay;
