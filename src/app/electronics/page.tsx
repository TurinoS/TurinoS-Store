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

export default function Electronics() {
  const { electronicsData, cartPrice, setCartPrice, cartItems, setCartItems, handleAddCart, cartList } = useContext(AppContext);

  const addToCart = (price: number, item: Product) => {
    setCartPrice(parseFloat((cartPrice + price).toFixed(2)));
    setCartItems(cartItems + 1);
    handleAddCart(item);
    console.log(cartList);
  }

  return (
    <>
      <Header />
      <Wrapper>
            <GlobalStyle />

            <Banner name="Diane von Furstenberg" text="“Style is something each of us already has, all we need to do is find it.”" />

            <h2>Electronics</h2>

            <ProductsContainer>
              {electronicsData.map((item) => (
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
