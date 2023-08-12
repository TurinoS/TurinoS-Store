'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ItemCard from "@/components/ItemCard";
import { AppContext } from "@/context/AppContext";
import { GlobalStyle } from "@/styles/GlobalStyle"
import Wrapper from "@/styles/Wrapper";
import Image from "next/image";
import logo from "../assets/TurinoS_logo.png";
import { useContext } from "react";
import ProductsContainer from "@/styles/ProductsContainer";

export default function Home() {
  const { data } = useContext(AppContext)

  console.log(data)

  return (
    <main>
      <GlobalStyle />
      <Header />
      <Wrapper>

        <div className="logo">
          <Image src={logo} alt="Logo from TurinoS Store" width={130} height={60} />
        </div>
        
        <ProductsContainer>
          {data.map((item) => (
            <ItemCard key={item.id} image={item.image} price={item.price} title={item.title} rating={item.rating.rate} />
          ))}
        </ProductsContainer>

      </Wrapper>
      <Footer /> 
    </main>
  )
}
