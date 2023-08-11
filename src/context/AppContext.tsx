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
    data: Product[];
};

export const AppContext = createContext<AppContextType>({
    data: [],
});

export function AppContextProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const jsonData = await res.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ data }}>
            {children}
        </AppContext.Provider>
    );
}
