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

export default function Women() {
  const { womenData, cartPrice, setCartPrice, cartItems, setCartItems, handleAddCart, cartList } = useContext(AppContext);

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

            <Banner name="Gianni Versace" text="“Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.”" />

            <h2>Women&apos;s clothing</h2>

            <ProductsContainer>
              {womenData.map((item) => (
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
