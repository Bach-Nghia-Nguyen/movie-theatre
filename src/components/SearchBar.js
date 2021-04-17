import React from "react";

const SearchBar = ({
  search_keyword,
  handle_keyword_change,
  handleSearchSubmit,
}) => {
  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search movie"
        className="search-input"
        value={search_keyword}
        onChange={handle_keyword_change}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
