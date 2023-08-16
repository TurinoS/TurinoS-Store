"use client";

import ItemCard from "@/components/ItemCard";
import { AppContext } from "@/context/AppContext";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { useContext } from "react";
import ProductsContainer from "@/styles/ProductsContainer";
import Wrapper from "@/styles/Wrapper";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Product = {
  id: number;
  qtt: number
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

export default function Home() {
  const { homeData, cartPrice, setCartPrice, cartItems, setCartItems, handleAddCart } = useContext(AppContext);

  const addToCart = (price: number, item: Product) => {
    setCartPrice(parseFloat((cartPrice + price).toFixed(2)));
    setCartItems(cartItems + 1);
    handleAddCart(item);
  }

  return (
    <>
      <Header />
      <Wrapper>
            <GlobalStyle />

            <Banner name="Miuccia Prada" text="“What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language.”" />

            <ProductsContainer>
              {homeData.map((item) => (
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
      <Footer />
    </>
  );
}
