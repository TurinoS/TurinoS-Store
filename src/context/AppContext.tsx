'use client'

import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

type Product = {
    id: number;
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

type AppContextType = {
    homeData: Product[];
    menData: Product[];
    womenData: Product[];
    jeweleryData: Product[];
    electronicsData: Product[];
    cartList: Product[];
    cartPrice: number;
    cartItems: number;
    setCartPrice: Dispatch<SetStateAction<number>>;
    setCartItems: Dispatch<SetStateAction<number>>;
    handleAddCart: (data: Product) => void;
    handleRemoveCart: (data: Product) => void;
};

export const AppContext = createContext<AppContextType>({
    homeData: [],
    menData: [],
    womenData: [],
    jeweleryData: [],
    electronicsData: [],
    cartList: [],
    cartPrice: 0.00,
    cartItems: 0,
    setCartPrice: () => {},
    setCartItems: () => {},
    handleAddCart: () => {},
    handleRemoveCart: () => {},
});

export function AppContextProvider({ children }: { children: ReactNode }) {

    //-------------------Home-------------------

    const [homeData, setHomeData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const jsonData = await res.json();
            setHomeData(jsonData);
        };
        fetchData();
    }, []);

    //-------------------Men-------------------

    const [menData, setMenData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing`);
            const jsonData = await res.json();
            setMenData(jsonData);
        };
        fetchData();
    }, []);

    //-------------------Women-------------------

    const [womenData, setWomenData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/category/women's%20clothing`);
            const jsonData = await res.json();
            setWomenData(jsonData);
        };
        fetchData();
    }, []);

    //-------------------Jewelery-------------------

    const [jeweleryData, setJeweleryData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
            const jsonData = await res.json();
            setJeweleryData(jsonData);
        };
        fetchData();
    }, []);

    //-------------------Electronics-------------------

    const [electronicsData, setElectronicsData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/category/electronics`);
            const jsonData = await res.json();
            setMenData(jsonData);
        };
        fetchData();
    }, []);

    //-------------------Cart-------------------

    const [cartList, setCartList] = useState<Product[]>([])
    const [cartPrice, setCartPrice] = useState<number>(0.00);
    const [cartItems, setCartItems] = useState<number>(0);

    const handleAddCart = (data: Product): void => {
        setCartList([ ...cartList, data ]);
    }

    const handleRemoveCart = (data: Product) => {
        const newCartList = cartList.filter((item: Product) => item.id != data.id);
        setCartList(newCartList);
        setCartPrice(parseFloat((cartPrice - data.price).toFixed(2)));
        setCartItems(cartItems - 1);
    }

    return (
        <AppContext.Provider value={{ homeData, menData, womenData, jeweleryData, electronicsData, cartPrice, cartItems, setCartPrice, setCartItems, cartList, handleRemoveCart, handleAddCart }}>
            {children}
        </AppContext.Provider>
    );
}
