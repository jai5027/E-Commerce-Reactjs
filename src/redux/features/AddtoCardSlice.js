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
                state.cardItems.push(action.payload)
                }
        },

        removeCard: (state, action) => {
           state.cardItems = state.cardItems.filter(
            item => item.id !== action.payload
           )
        }
        }
})


export const { addtoCard, removeCard } = AddtoCardSlice.actions
export default AddtoCardSlice.reducer