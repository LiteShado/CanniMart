import Button from "@material-ui/core/Button";
import React from "react";

import { CartItemType } from "../App";

import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, addToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>{item.price}</h3>
    </div>
    <Button onClick={() => addToCart(item)}>Add To Cart</Button>
  </Wrapper>
);

export default Item;
