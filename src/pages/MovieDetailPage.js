import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../apiService";
import { toast } from "react-toastify";

import MovieDetailDisplay from "../components/MovieDetailDisplay";

const MovieDetailPage = () => {
  const [singleMovie, setSingleMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [addToWatchList, setAddToWatchList] = useState(false)

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

  useEffect(() => {
    const getMovieGenres = async () => {
      setLoading(true);
      try {
        let url = createURLPath({
          endpoint: `/genre/movie/list`,
          queries: `language=en-US`,
        });
        const response = await api.get(url);
        const data = response.data;

        console.log("genres data: ", data);

        if (response.status === 200) {
          setGenres(data);
        } else {
          toast.error("DATA GENRE ERROR: ", data.message);
        }
      } catch (error) {
        toast.error("CATCH GENRE ERROR: ", error.message);
      }
      setLoading(false);
    };

    getMovieGenres();
  }, []);

  return (
    <MovieDetailDisplay
      singleMovie={singleMovie}
      genres={genres}
      handleGoBack={handleGoBack}
      loading={loading}
    />
  );
};

export default MovieDetailPage;
