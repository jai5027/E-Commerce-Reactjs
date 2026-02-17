import { configureStore } from '@reduxjs/toolkit'
import addtoCard from './features/AddtoCardSlice' 
import popupBox from './features/popupSlice'

export const store = configureStore({
    reducer: {
        AddToCard: addtoCard,
        PopupBox: popupBox
    }
})

store.subscribe(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().AddToCard.cardItems)
  );
});