import { ListItemSecondaryAction } from "@material-ui/core";
import { stringify } from "querystring";
import React from "react";

import { CartItemType, Word } from "../App";
import Item from "../Item/Item";

// import Button from "@material-ui/core/Button";

type Props = {
  search: Word[];
  handleFilter: (items: CartItemType) => void
};
const SearchBar: React.FC<Props> = ({search, handleFilter}) => {
    const getSearch = (items: CartItemType[]) => items.filter(items, search) => items.title.includes(search)

  return (
    <div>
      <div className="title">
        <h3>Search</h3>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="search" value={text} />
        <button onClick = {getSearch}>Search</button>
      </div>
      <div className="body"></div>
    </div>
  );
};

export default SearchBar;
