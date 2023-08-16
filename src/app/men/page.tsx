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

export default function Men() {
  const { menData, cartPrice, setCartPrice, cartItems, setCartItems, handleAddCart, cartList } = useContext(AppContext);

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

            <Banner name="Bill Cunningham" text="“Fashion is the armor to survive the reality of everyday life.”" />

            <h2>Men&apos;s clothing</h2>

            <ProductsContainer>
              {menData.map((item) => (
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
