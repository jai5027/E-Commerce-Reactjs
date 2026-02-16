import { configureStore } from '@reduxjs/toolkit'
import addtoCard from './features/AddtoCardSlice' 

export const store = configureStore({
    reducer: {
        AddToCard: addtoCard
    }
})

store.subscribe(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().AddToCard.cardItems)
  );
});