import { IoIosStar } from "react-icons/io";
import axios from "axios"
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addtoCard } from "../redux/features/AddtoCardSlice";
import { showPopup } from "../redux/features/popupSlice";

function Products(){

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

const getdata = async () => {
    setLoading(true)
    let respones = await axios.get('https://fakestoreapi.com/products')
    setProducts(respones.data)
    setLoading(false)
}

useEffect(() => {
getdata()
}, [])

if(loading) return <Loader className={'flex justify-center h-screen items-center'}/>

    return (<>
      <div className="mt-20 grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1 max-[600px]:p-4  gap-4 rounded-lg p-8">
        {products.map((item) => {
            return <ProductCard key={item.id} item={item}/>
        })}
      </div>

    </>)
}
const ProductCard = ({item}) => {
const dispatch = useDispatch()
    const Nav = useNavigate()

const AddCard = (e) => {
   e.stopPropagation()
   dispatch(addtoCard(item))
   Nav('/AddToCard')
   dispatch(showPopup("Item added to cart"))
}

const BuyNow = (e) => {
  e.stopPropagation()
  Nav(`/checkout/${item.id}`)
}
 
    return <> 
    
    <div 
  onClick={() => Nav(`/products/${item.id}`)} 
  className=" group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
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

    {/* Button */}
    <button 
      className="hover:cursor-pointer bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition-all duration-300"
      onClick={AddCard}
    >
      ADD TO CART
    </button>

     <button 
      className="hover:cursor-pointer bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition-all duration-300"
      onClick={BuyNow}
    >
      BUY NOW
    </button>

  </div>
</div>
</>
}
export default Products


