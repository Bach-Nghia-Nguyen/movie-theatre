import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import api from "../apiService";

import MovieOutlineCard from "../components/MovieOutlineCard";

// const moviePosterURL = process.env.REACT_APP_MOVIEDB_IMAGE_URL;

const HomePage = () => {
  // const [movies, setMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const createURLPath = ({ endpoint, queries }) => {
    let urlString = "";
    if (endpoint) urlString += `${endpoint}?`;
    if (queries) urlString += `${queries}`;
    return urlString;
  };

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      setLoading(true);
      try {
        let url = createURLPath({
          endpoint: `/movie/now_playing`,
          queries: `language=en-US&page=1`,
        });

        const response = await api.get(url);
        const data = response.data;

        console.log(data);

        setNowPlaying(data.results);
      } catch (error) {
        toast.error(error.message);
      }
      setLoading(false);
    };
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <h1>Where we can watch together</h1>

      {loading ? (
        <SyncLoader
          color="#3F3BA7"
          height={100}
          width={20}
          size={15}
          margin={2}
        />
      ) : (
        <ul className="d-flex flex-wrap justify-content-between no-bullet">
          {nowPlaying &&
            nowPlaying.map((movie) => (
              <MovieOutlineCard key={movie.id} singleMovie={movie} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
