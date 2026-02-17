import { createSlice  } from '@reduxjs/toolkit'

const initialState = {
    msg: "",
    visible: false, 
}

export const popupSlice = createSlice({
     name: 'Popup',
     initialState,
     reducers: {
        showPopup: (state, action) => {
            state.msg = action.payload
            state.visible = true
        },

        hidePopup: (state) => {
            state.visible = false
        }

     }
})

export const { showPopup, hidePopup } = popupSlice.actions
export default popupSlice.reducer