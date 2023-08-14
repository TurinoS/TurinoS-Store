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

export default function Jewelery() {
  const { jeweleryData } = useContext(AppContext);

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
          />
        ))}
      </ProductsContainer>
    </Wrapper>
  );
}
