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

console.log(product);

useEffect(() => {
getdata()
}, [])

if(loading) return <Loader className={'flex justify-center h-screen items-center'}/>


     
    return (<>
  <div className="group rounded-lg mt-20 md:mt-15">
        <img className="aspect-square m-auto object-contain p-4 group-hover:scale-90 transition-all duration-400" src={product?.image} alt=""/>

        <div className="p-5 flex flex-col items-center max-w-340">
     <h2 className="text-xl line-clamp-2 group-hover:text-blue-500">{product?.title}</h2>

<div className="flex gap-3 my-5 items-center">
    <p className="bg-green-600 w-fit py-1 px-3 rounded-lg flex items-center gap-1">
        <span><IoIosStar /></span>
        <span>{product?.rating?.rate}</span>
    </p>   
        <p>{product?.rating?.count}</p>
</div>
   <p className="text-2xl font-medium text-black">{product?.price} RS.</p>
   <div className="max-w-200 mb-5 mt-5">
   <p>{product?.description}</p>
   </div>
                   </div>      
    </div>
    </>)
}

export default SingleProduct