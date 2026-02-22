import { createSlice } from "@reduxjs/toolkit";

const getInitialFormData = () => {
  const saved = localStorage.getItem("checkoutForm");
  return saved
    ? JSON.parse(saved)
    : {
        name: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        pincode: "",
        address: ""
      };
};

const initialState = {
  formData: getInitialFormData(),
  orderPlaced: false
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {

    // ✅ Update form field
    updateForm: (state, action) => {
  state.formData = { ...state.formData, ...action.payload };
  localStorage.setItem("checkoutForm", JSON.stringify(state.formData));
},

    // ✅ Place order
    placeOrder: (state) => {
      state.orderPlaced = true;
    },

    // ✅ Reset checkout
    resetCheckout: (state) => {
  state.formData = {
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    pincode: "",
    address: ""
  };
  localStorage.removeItem("checkoutForm");
}
  }
});

export const {
  updateForm,
  placeOrder,
  resetCheckout
} = checkoutSlice.actions;

export default checkoutSlice.reducer;