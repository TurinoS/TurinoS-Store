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
  const { womenData } = useContext(AppContext);

  return (
    <Wrapper>
      <GlobalStyle />

      <Banner name="Gianni Versace" text="“Você decide quem você é e o que quer expressar pela maneira como se veste e pela maneira como vive.”" />

      <h2>Women&apos;s clothing</h2>

      <ProductsContainer>
        {womenData.map((item) => (
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
