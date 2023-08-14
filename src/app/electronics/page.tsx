"use client";

import ItemCard from "@/components/ItemCard";
import { AppContext } from "@/context/AppContext";
import { GlobalStyle } from "@/styles/GlobalStyle";
import Image from "next/image";
import logo from "../../assets/TurinoS_logo.png";
import { useContext } from "react";
import ProductsContainer from "@/styles/ProductsContainer";
import Wrapper from "@/styles/Wrapper";
import Banner from "@/components/Banner";

export default function Women() {
  const { electronicsData } = useContext(AppContext);

  return (
    <Wrapper>
      <GlobalStyle />

      <Banner name="Alexander McQueen" text="“A moda deve ser uma forma de escapismo e não uma forma de prisão.”" />

      <h2>Electronics</h2>

      <ProductsContainer>
        {electronicsData.map((item) => (
          <ItemCard
            key={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
            rating={item.rating.rate}
          />
        ))}
      </ProductsContainer>
    </Wrapper>
  );
}
