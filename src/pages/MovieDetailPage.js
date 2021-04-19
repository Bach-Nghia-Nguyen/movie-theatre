import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../apiService";
import { toast } from "react-toastify";

import MovieDetailDisplay from "../components/MovieDetailDisplay";
import TrailerModal from "../components/TrailerModal";

const MovieDetailPage = () => {
  const [singleMovie, setSingleMovie] = useState(null);
  const [video, setVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  const handleGoBack = () => {
    history.push(`/`);
  };

  const createURLPath = ({ endpoint, queries }) => {
    let urlString = "";
    if (endpoint) urlString += `${endpoint}?`;

    if (queries && queries instanceof Object) {
      for (let i = 0; i < Object.keys(queries).length; i++) {
        if (i === Object.keys(queries).length - 1) {
          // the last query doesn't contain ampersand after it
          let key = Object.keys(queries)[i];
          return (urlString += `${key}=${queries[key]}`);
        }

        let key = Object.keys(queries)[i];
        urlString += `${key}=${queries[key]}&`;
      }
    }

    return urlString;
  };

  useEffect(() => {
    const getSingleMovie = async () => {
      setLoading(true);
      try {
        let url = createURLPath({
          endpoint: `/movie/${id}`,
          queries: {
            language: "en-US",
          },
        });
        const response = await api.get(url);
        const data = response.data;

        console.log("single movie data: ", data);

        if (response.status === 200) {
          setSingleMovie(data);
        } else {
          toast.error("DATA MOVIE ERROR: ", data.message);
        }
      } catch (error) {
        toast.error("CATCH MOVIE ERROR: ", error.message);
      }
      setLoading(false);
    };
    getSingleMovie();
  }, [id]);

  const showTrailer = async () => {
    let url = createURLPath({
      endpoint: `/movie/${id}/videos`,
      queries: {
        language: "en-US",
      },
    });

    const response = await api.get(url);
    const data = response.data;
    setVideo(data.results[0]);

    setShowModal(true);
  };

  return (
    <>
      <MovieDetailDisplay
        singleMovie={singleMovie}
        handleGoBack={handleGoBack}
        loading={loading}
        showTrailer={() => showTrailer()}
      />

      <div>
        <TrailerModal
          showModal={showModal}
          setShowModal={setShowModal}
          trailerVideo={video}
        />
      </div>
    </>
  );
};

export default MovieDetailPage;
