import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      cardItems: JSON.parse(localStorage.getItem("cartItems")) || []
}

export const AddtoCardSlice = createSlice({
        name: 'card',
        initialState,
        reducers: {
            addtoCard: (state, action) => {
              
                const exitItem = state.cardItems.find(
                    item => item.id === action.payload.id)

                if(!exitItem){
                state.cardItems.push({
                     ...action.payload,
                            quantity: 1   
                })
                }
        },

        removeCard: (state, action) => {
           state.cardItems = state.cardItems.filter(
            item => item.id !== action.payload
           )
        },

        increaseQty: (state, action) => {
      const item = state.cardItems.find(
        item => item.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.cardItems.find(
        item => item.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }

        }
})


export const { addtoCard, removeCard, increaseQty, decreaseQty } = AddtoCardSlice.actions
export default AddtoCardSlice.reducer