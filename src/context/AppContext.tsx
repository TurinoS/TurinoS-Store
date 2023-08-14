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
    cartPrice: number;
    cartItems: number;
    setCartPrice: Dispatch<SetStateAction<number>>;
    setCartItems: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType>({
    homeData: [],
    menData: [],
    womenData: [],
    jeweleryData: [],
    electronicsData: [],
    cartPrice: 0.00,
    cartItems: 0,
    setCartPrice: () => {},
    setCartItems: () => {},
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

    const [cartPrice, setCartPrice] = useState<number>(0.00);
    const [cartItems, setCartItems] = useState<number>(0);

    return (
        <AppContext.Provider value={{ homeData, menData, womenData, jeweleryData, electronicsData, cartPrice, cartItems, setCartPrice, setCartItems }}>
            {children}
        </AppContext.Provider>
    );
}
