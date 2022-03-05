import React from "react";

// import Button from "@material-ui/core/Button";

type Props = {
  data;
};
const SearchBar: React.FC = (data, value) => {
  return (
    <div>
      <div className="title">
        <h3>Search</h3>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="search" />
        <button>Search</button>
      </div>
      <div className="body"></div>
    </div>
  );
};

export default SearchBar;
