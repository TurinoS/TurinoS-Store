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

export default function Men() {
  const { menData } = useContext(AppContext);

  return (
    <Wrapper>
      <GlobalStyle />

      <Banner name="Yves Saint Laurent " text="“Boas roupas são um passaporte para a felicidade.”" />

      <h2>Men&apos;s clothing</h2>

      <ProductsContainer>
        {menData.map((item) => (
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
