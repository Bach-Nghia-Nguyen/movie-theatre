import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import api from "../apiService";

import MovieOutlineCard from "../components/MovieOutlineCard";

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleShowMovieDetail = (movie_id) => {
    history.push(`/movies/${movie_id}`);
    toast.success("Movie detail is here");
  };

  // const createURLPath = ({ endpoint, queries }) => {
  //   let urlString = "";
  //   if (endpoint) urlString += `${endpoint}?`;
  //   if (queries) urlString += `${queries}`;
  //   return urlString;
  // };

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
    const getNowPlayingMovies = async () => {
      setLoading(true);
      try {
        let url = createURLPath({
          endpoint: `/movie/now_playing`,
          queries: {
            language: "en-US",
            page: 1,
          },
        });

        const response = await api.get(url);
        const data = response.data;

        console.log(data);
        if (response.status === 200) {
          setNowPlaying(data.results);
        } else {
          toast.error("DATA NOW PLAYING ERROR: ", data.message);
        }
      } catch (error) {
        toast.error("CATCH NOW PLAYING ERROR: ", error.message);
      }
      setLoading(false);
    };
    getNowPlayingMovies();
  }, []);

  return (
    <div className="home-page">
      <h1 className="text-white text-center">Where we can watch together</h1>

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
        <ul className="d-flex flex-wrap justify-content-between no-bullet">
          {nowPlaying &&
            nowPlaying.map((movie) => (
              <MovieOutlineCard
                key={movie.id}
                singleMovie={movie}
                showMovieDetail={() => handleShowMovieDetail(movie.id)}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
