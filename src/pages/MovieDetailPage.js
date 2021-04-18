import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../apiService";
import { toast } from "react-toastify";

import MovieDetailCard from "../components/MovieDetailCard";

const baseURL = process.env.REACT_APP_MOVIEDB_BASE_URL;

const MovieDetailPage = () => {
  const [singleMovie, setSingleMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  const handleGoBack = () => {
    history.push(`/`);
  };

  useEffect(() => {
    const getSingleMovie = async () => {
      setLoading(true);
      try {
        console.log("Get single book data");
      } catch (error) {
        toast.error(error.message);
      }
      setLoading(false);
    };
  }, []);

  return (
    <MovieDetailCard
      singleMovie={singleMovie}
      baseURL={baseURL}
      loading={loading}
      handleGoBack={handleGoBack}
    />
  );
};

export default MovieDetailPage;
