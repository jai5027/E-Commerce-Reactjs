import { IoIosStar } from "react-icons/io";
import axios from "axios"
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
function Products(){

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

const getdata = async () => {
    setLoading(true)
    let respones = await axios.get('https://fakestoreapi.com/products')
    setProducts(respones.data)
    setLoading(false)
}

console.log(products);

useEffect(() => {
getdata()
}, [])

if(loading) return <Loader classname={'flex justify-center h-screen items-center'}/>

    return (<>
      <div className="grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1 max-[600px]:p-4  gap-4 rounded-lg p-8">
        {products.map((item) => {
            return <ProductCard key={item.id} item={item}/>
        })}
      </div>

    </>)
}


const ProductCard = ({item}) => {
      const navigate = useNavigate()
    return  <div onClick={() => navigate(`/products/${item.id}`)} className="group bg-slate-500 p-5 rounded-2xl">
                   <img className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-400" src={item.image} alt=""/>

                   <div className="p-5">
                   <h2 className="text-xl line-clamp-2 group-hover:text-blue-500">{item.title}</h2>

<div className="flex gap-3 my-2 items-center">
    <p className="bg-green-600 w-fit py-1 px-3 rounded-lg flex items-center gap-1">
        <span><IoIosStar /></span>
        <span>{item.rating.rate}</span>
    </p>   
        <p>{item.rating.count}</p>
</div>
   <p className="text-xl font-medium text-white/70">{item.price} RS.</p>
                   </div>

                  </div>
}
export default Products


