import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);
    const [lastAddedCount, setLastAddedCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        if (count == 0) return;
        setCount((prevCount) => prevCount - 1);
    };


    const addToCart = (quantity) => {
        // Ensure quantity is greater than 0
        if (quantity > 0) {
            setCart((prevCart) => {
                // If count has changed since last time, update the cart with the new count
                if (prevCart !== quantity) {
                    return prevCart + quantity; // Add the new quantity to the cart
                }
                return prevCart; // Otherwise, keep the cart the same if no change
            });
        }
    };




    return (
        <AppContext.Provider value={{ count, increment, decrement, cart, addToCart }}>
            {children}
        </AppContext.Provider>
    );
};
