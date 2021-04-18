import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";
import api from "../apiService";

import PaginationBar from "../components/PaginationBar";
import SearchBar from "../components/SearchBar";
import MovieOutlineCard from "../components/MovieOutlineCard";

const ArchivePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(1);

  const moviePerPage = 8;

  const history = useHistory();

  const handleSearchValueChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(searchInputValue);
  };

  const handleShowMovieDetail = (movie_id) => {
    history.push(`/movies/${movie_id}`);
    toast.success("Movie detail is here");
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
    const getMoviesData = async () => {
      setLoading(true);
      try {
        let url = createURLPath({
          endpoint: `/discover/movie`,
          queries: {
            language: "en-US",
            sort_by: "popularity.desc",
            include_adult: false,
            include_video: false,
            page: pageNum,
          },
        });
        const response = await api.get(url);
        const data = response.data;

        console.log(data);
        if (response.status === 200) {
          setMovies(data.results);
        } else {
          toast.error(`DATA MOVIES ERROR: ${data.message}`);
        }
      } catch (error) {
        toast.error(`CATCH MOVIES ERROR: ${error.message}`);
      }
      setLoading(false);
    };
    getMoviesData();
  }, [pageNum]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <SearchBar
            search_keyword={searchInputValue}
            handle_keyword_change={handleSearchValueChange}
            handleSearchSubmit={handleSearchSubmit}
          />

          <hr />

          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={totalPageNum}
          />
        </Col>
      </Row>

      <Row>
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
            {movies &&
              movies.map((movie) => (
                <MovieOutlineCard
                  key={movie.id}
                  singleMovie={movie}
                  showMovieDetail={handleShowMovieDetail}
                />
              ))}
          </ul>
        )}
      </Row>
    </Container>
  );
};

export default ArchivePage;
