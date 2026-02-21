import { configureStore } from '@reduxjs/toolkit'
import addtoCard from './features/AddtoCardSlice' 
import popupBox from './features/popupSlice'
import checkoutReducer from './features/checkOutSlice'
import themeReducer from './features/ThemeSlice'

export const store = configureStore({
    reducer: {
        AddToCard: addtoCard,
        PopupBox: popupBox,
        checkout: checkoutReducer,
        theme: themeReducer
    }
})

store.subscribe(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().AddToCard.cardItems)
  );
});