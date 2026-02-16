import { useSelector, useDispatch } from "react-redux";
import { IoIosStar } from "react-icons/io";
import { removeCard } from "../redux/features/AddtoCardSlice";

function AddToCard() {

    const items = useSelector(state => state.AddToCard.cardItems)
    const dispatch = useDispatch()

    return (<>
          <div className="grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1 max-[600px]:p-4  gap-4 rounded-lg p-8 ">
  
  {items.map((item) => ( <div key={item.id} className="group border border-black bg-blue-100 p-5 rounded-lg mt-20 md:mt-15 min-h-107.5 md:h-112.5">
                      <img className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-400" src={item.image} alt=""/>
   
                      <div className="gap-2 flex flex-col items-center">
                      <h2 className="text-xl line-clamp-2 min-h-14 group-hover:text-blue-500">{item.title}</h2>
   
   <div className="flex gap-3 my-2 items-center">
       <p className="bg-green-600 w-fit py-1 px-3 rounded-lg flex items-center gap-1">
           <span><IoIosStar /></span>
           <span>{item.rating.rate}</span>
       </p>   
           <p>{item.rating.count}</p>
   </div>
      <p className="text-xl font-medium text-white/70">{item.price} RS.</p>
      <button className="bg-amber-600 mt-2 px-2 rounded-sm font-medium" onClick={() => dispatch(removeCard(item.id))}>Remove Product</button>
</div>
                      </div>
   ))}
                     
   </div>

    
    </>)
}

export default AddToCard