import { IoIosStar } from "react-icons/io";
import axios from "axios"
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

function SingleProduct(){
   
   const {id} = useParams()
   const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

const getdata = async () => {
    setLoading(true)
    let respones = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProduct(respones.data)
    setLoading(false)
}

useEffect(() => {
getdata()
}, [])

if(loading) return <Loader className={'flex justify-center h-screen items-center'}/>


     
    return (<>
 <div className="max-w-6xl mx-auto px-6 py-10 mt-20">

  <div className="grid md:grid-cols-2 items-stretch rounded-3xl overflow-hidden shadow-2xl">

    {/* Image Section */}
    <div className="bg-gray-600 p-8 flex items-center justify-center group">
      <img
        className="w-full max-h-100 object-contain transition-transform duration-300 group-hover:scale-105"
        src={product?.image}
        alt={product?.title}
      />
    </div>

    {/* Text Section */}
    <div className="bg-gray-600 text-white p-8 flex flex-col gap-6">

      <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
        {product?.title}
      </h1>

      <div className="flex items-center gap-4">
        <div className="bg-green-500 px-4 py-1 rounded-full flex items-center gap-1 text-sm">
          <IoIosStar />
          {product?.rating?.rate}
        </div>
        <p className="text-gray-300 text-sm">
          ({product?.rating?.count})
        </p>
      </div>

      <p className="text-3xl font-bold text-amber-400">
        ₹ {product?.price}
      </p>

      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        {product?.description}
      </p>

    </div>

  </div>

</div>

    </>)
}

export default SingleProduct