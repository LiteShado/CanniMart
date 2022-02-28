import "./App.css";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { LinearProgress } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

import { Wrapper, StyledButton } from "./Styles";

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

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const addToCart = (clickedItem: CartItemType) =>
    setCartItem((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...clickedItem,
          amount: 1,
        },
      ];
    });

  const removeFromCart = (id: number) => {
    setCartItem((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [
            ...ack,
            {
              ...item,
              amount: item.amount - 1,
            },
          ];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;

  if (error) return <div>Wrong...</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItem}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItem)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
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
