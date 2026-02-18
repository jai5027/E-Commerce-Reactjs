import { useSelector, useDispatch } from "react-redux";
import { IoIosStar } from "react-icons/io";
import { decreaseQty, increaseQty, removeCard } from "../redux/features/AddtoCardSlice";
import { showPopup } from "../redux/features/popupSlice";

function AddToCard() {

    const items = useSelector(state => state.AddToCard.cardItems)
    const dispatch = useDispatch()

const RemoveCard = (item) => {
   dispatch(removeCard(item.id))
   dispatch(showPopup("Item removed from cart"))
}

if(items.length === 0) {
  return (
     <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold text-gray-500">
          No Items In Cart 🛒
        </h1>
      </div>
  )
}

    return (<>
          <div className="mt-20 grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1 max-[600px]:p-4  gap-4 rounded-lg p-8 ">
  {items.map((item) => (<div key={item.id} className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
>
                      {/* Image Section */}
  <div className="bg-blue-50 p-6 flex items-center justify-center">
    <img 
      className="h-48 object-contain group-hover:scale-105 transition-transform duration-300" 
      src={item.image} 
      alt=""
    />
  </div>
                     {/* Content Section */}
  <div className="p-5 flex flex-col gap-3">

    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-14 group-hover:text-blue-600 transition-colors duration-300">
      {item.title}
    </h2>

    {/* Rating */}
    <div className="flex items-center gap-3 text-sm">
      <p className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center gap-1">
        <IoIosStar />
        {item.rating.rate}
      </p>   
      <p className="text-gray-500">({item.rating.count})</p>
    </div>

 {/* Price */}
    <p className="text-xl font-bold text-gray-900">
      ₹ {item.price}
    </p>


        {/* 🔥 Quantity Section */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => dispatch(decreaseQty(item.id))}
            className="bg-gray-500 px-3 py-1 rounded-lg text-lg font-bold"
          >
            -
          </button>

          <span className="text-lg font-semibold text-black">
            {item.quantity}
          </span>

          <button
            onClick={() => dispatch(increaseQty(item.id))}
            className="bg-gray-500 px-3 py-1 rounded-lg text-lg font-bold"
          >
            +
          </button>

        </div>


    {/* Button */}
    <button 
      className="hover:cursor-pointer bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition-all duration-300"
    >
      BUY NOW
    </button>

    <button onClick={() => RemoveCard(item)}
      className="hover:cursor-pointer bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition-all duration-300"
    >
      REMOVE CARD
    </button>

</div>
 </div>
   ))}
                     
   </div>

    
    </>)
}

export default AddToCard