import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, placeOrder, resetCheckout } from "../redux/features/checkOutSlice";

function Checkout() {

  const { id } = useParams();
  const dispatch = useDispatch();

  // ✅ Redux state
  const { formData, orderPlaced } = useSelector((state) => state.checkout);

  const [errors, setErrors] = useState({});
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  // 🔥 Regex Patterns
  const patterns = {
    name: /^[A-Za-z ]{3,30}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^[6-9]\d{9}$/,
    pincode: /^[1-9][0-9]{5}$/,
    address: /^.{10,}$/
  };

  // ✅ Handle Input Change (Redux update)
  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(updateForm({ [name]: value }));

    if (patterns[name]) {
      if (!patterns[name].test(value)) {
        setErrors((prev) => ({ ...prev, [name]: "Invalid " + name }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const isFormValid =
    Object.values(formData).every((value) => value !== "") &&
    Object.values(errors).every((error) => error === "");

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    dispatch(placeOrder());
    alert("Order Placed Successfully 🎉");

    dispatch(resetCheckout());
  };

  // ✅ Fetch Product
  const getdata = async () => {
    setLoading(true);
    let response = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    setProduct(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, []);

  if (loading)
    return <Loader className={"flex justify-center h-screen items-center"} />;

  if (orderPlaced) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-green-600">
          ✅ Order Placed Successfully!
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5 mt-17">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">

        {/* 🛒 Product Summary */}
        {product && (
          <div className="border-b pb-5 mb-5">
            <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
            <div className="flex gap-4 items-center">
              <img
                src={product.image}
                alt=""
                className="w-24 h-24 object-contain"
              />
              <div>
                <p className="font-medium">{product.title}</p>
                <p className="font-bold text-lg">₹ {product.price}</p>
              </div>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {Object.keys(formData).map((field) => (
            <div
              key={field}
              className={field === "address" ? "md:col-span-2" : ""}
            >
              {field === "address" ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  placeholder="Full Address"
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              ) : (
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  placeholder={
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              )}

              {errors[field] && (
                <p className="text-red-500 text-sm">
                  {errors[field]}
                </p>
              )}
            </div>
          ))}

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 rounded-lg text-white transition-all duration-300 
              ${
                isFormValid
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;