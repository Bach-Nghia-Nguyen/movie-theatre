import React, { useEffect, useState } from "react";
import api from "../apiService";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getMoviesData = async () => {
      setLoading(true);
      try {
        // fetch data here
        console.log("fetch data");
      } catch (error) {
        toast.error(error.message);
      }
      setLoading(false);
    };
    getMoviesData();
  }, []);

  return (
    <div>
      <h1>Where we can watch together</h1>
    </div>
  );
};

export default HomePage;
