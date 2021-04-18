import React from "react";
import search_icon from "../images/search_black_24dp.svg";

const SearchBar = ({
  search_keyword,
  handle_keyword_change,
  handleSearchSubmit,
}) => {
  return (
    <form className="box-container" onSubmit={handleSearchSubmit}>
      <table className="elements-container">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Search movie"
                className="search-input"
                value={search_keyword}
                onChange={handle_keyword_change}
              />
            </td>

            <td>
              <button type="submit" className="search-button">
                <img src={search_icon} alt="search" className="search-icon" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default SearchBar;
