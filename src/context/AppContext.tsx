'use client'

import React, { createContext, ReactNode, useEffect, useState } from "react";

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
};

export const AppContext = createContext<AppContextType>({
    homeData: [],
    menData: [],
    womenData: [],
    jeweleryData: [],
    electronicsData: [],
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

    return (
        <AppContext.Provider value={{ homeData, menData, womenData, jeweleryData, electronicsData }}>
            {children}
        </AppContext.Provider>
    );
}
