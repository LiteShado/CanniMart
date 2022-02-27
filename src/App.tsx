import "./App.css";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { LinearProgress } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";

import { Wrapper } from "./Styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  console.log(data);
  return <div className="App">test</div>;
};

export default App;
