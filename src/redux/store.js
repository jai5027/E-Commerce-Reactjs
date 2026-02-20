import { configureStore } from '@reduxjs/toolkit'
import addtoCard from './features/AddtoCardSlice' 
import popupBox from './features/popupSlice'
import checkoutReducer from './features/checkOutSlice'

export const store = configureStore({
    reducer: {
        AddToCard: addtoCard,
        PopupBox: popupBox,
        checkout: checkoutReducer
    }
})

store.subscribe(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().AddToCard.cardItems)
  );
});