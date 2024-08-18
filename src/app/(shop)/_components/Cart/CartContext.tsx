'use client';

import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Typy akcji
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

// Typy danych
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

interface CartContextType extends CartState {
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
  clearCart: () => void;
}

// Początkowy stan koszyka
const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

// Typy akcji
type CartAction =
  | { type: typeof ADD_ITEM; payload: CartItem }
  | { type: typeof REMOVE_ITEM; payload: CartItem }
  | { type: typeof CLEAR_CART };

// Funkcja redukująca, zarządzająca stanem koszyka
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case ADD_ITEM: {
      const updatedItems = [...state.items, action.payload];
      const updatedTotalAmount = state.totalAmount + action.payload.price;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case REMOVE_ITEM: {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      const decreasedTotalAmount = state.totalAmount - action.payload.price;
      return {
        items: filteredItems,
        totalAmount: decreasedTotalAmount,
      };
    }
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}

// Tworzenie kontekstu
const CartContext = createContext<CartContextType | undefined>(undefined);

// Komponent provider
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item: CartItem) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const removeItemFromCart = (item: CartItem) => {
    dispatch({ type: REMOVE_ITEM, payload: item });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalAmount: state.totalAmount,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Niestandardowy hook do używania kontekstu koszyka
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
