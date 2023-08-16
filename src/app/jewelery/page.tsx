"use client";

import ItemCard from "@/components/ItemCard";
import { AppContext } from "@/context/AppContext";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { useContext } from "react";
import ProductsContainer from "@/styles/ProductsContainer";
import Wrapper from "@/styles/Wrapper";
import Banner from "@/components/Banner";

type Product = {
  id: number;
  qtt: number;
  title: string;
  price: number;
  description: string,
  image: string,
  rating: {
      rate: number,
      count: number,
  },
  category: string;
};

export default function Jewelery() {
  const { jeweleryData, cartPrice, setCartPrice, cartItems, setCartItems, handleAddCart, cartList } = useContext(AppContext);

  const addToCart = (price: number, item: Product) => {
    setCartPrice(parseFloat((cartPrice + price).toFixed(2)));
    setCartItems(cartItems + 1);
    handleAddCart(item);
    console.log(cartList);
  }

  return (
    <Wrapper>
      <GlobalStyle />

      <Banner name="Twiggy" text="“Não há necessidade de se vestir como todo mundo. É muito mais divertido criar seu próprio visual.”" />

      <h2>Jewelery</h2>

      <ProductsContainer>
        {jeweleryData.map((item) => (
          <ItemCard
            key={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
            rating={item.rating.rate}
            onClick={() => addToCart(item.price, item)}
          />
        ))}
      </ProductsContainer>
    </Wrapper>
  );
}
