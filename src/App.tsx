import "./App.css";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { LinearProgress } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";
import Item from "./Item/item";

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
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItem, setCartItem] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  console.log(data);

  const getTotalItems = () => null;

  const addToCart = (clickedItem: CartItemType) => null;

  const removeFromCart = () => null;

  if (isLoading) return <LinearProgress />;

  if (error) return <div>Wrong...</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart
      </Drawer>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
