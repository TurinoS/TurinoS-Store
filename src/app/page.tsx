"use client";

import ItemCard from "@/components/ItemCard";
import { AppContext } from "@/context/AppContext";
import { GlobalStyle } from "@/styles/GlobalStyle";
import Image from "next/image";
import logo from "../assets/TurinoS_logo.png";
import { useContext } from "react";
import ProductsContainer from "@/styles/ProductsContainer";
import Wrapper from "@/styles/Wrapper";
import Banner from "@/components/Banner";

export default function Home() {
  const { homeData, cartPrice, setCartPrice, cartItems, setCartItems } = useContext(AppContext);

  const addToCart = (price: number) => {
    setCartPrice(parseFloat((cartPrice + price).toFixed(2)));
    setCartItems(cartItems + 1);
  }

  return (
    <Wrapper>
      <GlobalStyle />

      <Banner name="Miuccia Prada" text="“O que você veste é como você se apresenta ao mundo.”" />

      <ProductsContainer>
        {homeData.map((item) => (
          <ItemCard
            key={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
            rating={item.rating.rate}
            onClick={() => addToCart(item.price)}
          />
        ))}
      </ProductsContainer>
    </Wrapper>
  );
}
