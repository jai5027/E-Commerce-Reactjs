import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    pincode: "",
    address: ""
  },
  orderPlaced: false
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {

    // ✅ Update form field
    updateForm: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload
      };
    },

    // ✅ Place order
    placeOrder: (state) => {
      state.orderPlaced = true;
    },

    // ✅ Reset checkout
    resetCheckout: () => initialState
  }
});

export const {
  updateForm,
  placeOrder,
  resetCheckout
} = checkoutSlice.actions;

export default checkoutSlice.reducer;