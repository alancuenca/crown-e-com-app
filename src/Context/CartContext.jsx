import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    };

    return [ ...cartItems, { ...productToAdd, quantity: 1 } ]
};

const removeItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    };

    return cartItems.map(cartItem =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemToCart: () => { },
    clearItemToCart: () => { },
    cartCount: 0,
    total: 0,
});

export const CartProvider = ({ children }) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, items) => total + items.quantity, 0)
        setCartCount(newCartCount)
    }, [ cartItems ]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotal(newCartTotal)
    }, [ cartItems ]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeItem(cartItems, cartItemToRemove))
    };

    const clearItemToCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemToCart,
        clearItemToCart,
        cartItems,
        cartCount,
        total
    };

    return (<CartContext.Provider
        value={value}
    >
        {children}
    </CartContext.Provider>)
};