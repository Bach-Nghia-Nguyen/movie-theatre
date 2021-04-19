import React from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { SyncLoader } from "react-spinners";

import noImageAvailable from "../images/no-image-placeholder.png";
const movieCoverImageURL = process.env.REACT_APP_MOVIEDB_ORIGINAL_IMAGE_URL;
const moviePosterURL = process.env.REACT_APP_MOVIEDB_W500_IMAGE_URL;
const logoURL = process.env.REACT_APP_MOVIEDB_W500_IMAGE_URL;

const MovieDetailDisplay = ({
  singleMovie,
  handleGoBack,
  loading,
  showTrailer,
}) => {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const timeConvert = (number) => {
    let num = number;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + " hour(s) " + rminutes + " minute(s)";
  };

  return (
    <>
      {loading ? (
        <div className="loader d-flex flex-row justify-content-center align-items-center">
          <SyncLoader
            color="#B645B3"
            height={100}
            width={20}
            size={25}
            margin={10}
          />
        </div>
      ) : (
        <div
          className="movie-detail-container"
          style={{
            backgroundImage: `url('${movieCoverImageURL}${singleMovie?.backdrop_path}')`,
          }}
        >
          <div className="detail-info-section">
            <div className="poster-sec">
              <img
                alt="Movie Poster"
                className="movie-poster"
                src={
                  singleMovie && singleMovie.poster_path
                    ? `${moviePosterURL}${singleMovie.poster_path}`
                    : noImageAvailable
                }
              />
              <div className="detail-button-group">
                <button
                  type="button"
                  className="btn trailer"
                  onClick={showTrailer}
                >
                  Trailer
                </button>
              </div>
            </div>

            <div className="right-sec">
              <h2 className="movie-title">
                {singleMovie?.title}{" "}
                <span className="tag-line">
                  <i>{singleMovie?.tagline}</i>
                </span>
              </h2>

              <div className="production-companies">
                <span className="info-head">Produced by</span>
                <div className="d-flex flex-row logo-div">
                  {singleMovie &&
                    singleMovie.production_companies.map((company) => (
                      <div key={company.id} className="company">
                        {company.logo_path ? (
                          <img
                            src={`${logoURL}${company.logo_path}`}
                            alt="Company logo"
                            className="logo"
                          />
                        ) : (
                          <span>{company.name}</span>
                        )}
                      </div>
                    ))}
                </div>
              </div>

              <p>
                <span className="info-head">Release Date:</span>{" "}
                {singleMovie?.release_date}
              </p>

              <p>
                <span className="info-head">Rating:</span>{" "}
                {singleMovie?.vote_average}{" "}
                <FontAwesomeIcon icon={faStar} className="rate-star" />{" "}
              </p>

              <p>
                <span className="info-head">Overview:</span>{" "}
                {singleMovie?.overview}
              </p>

              <p>
                <span className="info-head">Genres:</span>
                {singleMovie?.genres.map((genre) => (
                  <Badge
                    key={genre.id}
                    variant="warning"
                    className="genre-list"
                  >
                    {genre.name}
                  </Badge>
                ))}
              </p>

              <p>
                <span className="info-head">Revenue:</span>{" "}
                {singleMovie && "$" + numberWithCommas(singleMovie.revenue)}
                <span className="up-to-date">
                  <i>(up to date)</i>
                </span>
              </p>

              <p>
                <span className="info-head">Runtime:</span>{" "}
                {singleMovie && timeConvert(singleMovie.runtime)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailDisplay;
