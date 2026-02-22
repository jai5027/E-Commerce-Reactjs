import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
import Wrapper from "./Wrapper";
import { ShoppingCart } from "lucide-react";
import Dark from "./Dark"
import Login from '../pages/Login'
import { useSelector } from "react-redux";

function Navbar(){
    
   const [open, setOpen] = useState(false);

   const state = useSelector(state => state.theme.them)
  
    return(<>

 <nav className={`fixed w-full top-0 left-0 z-50
      ${state === true ? "bg-base-100 text-white" : "bg-white text-black"} shadow-lg`}>
<Wrapper>

      <div className="px-5 md:px-10 py-4 flex md:justify-between items-center justify-between">

        {/* Logo */}
        
        <h1 className="text-2xl font-bold ">
          MyBrand
        </h1>

        {/* Desktop Menu */}
        
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="cursor-pointer"><Menu to={'/'} title={'Home'} /></li>
          <li className="cursor-pointer"><Menu to={'/products'} title={'Products'} /></li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
        </ul>

<div className="hidden md:flex flex gap-5">
   <button className="bg-gray-500 p-2 rounded-full"><Menu to={'/AddToCard'} title={<ShoppingCart size={20} />} />
</button>
<Dark />
   <div className="flex gap-3">

  <button className="btn btn-error btn-sm text-white">
 <Menu to={'/Login'} title={<Login />} />
</button>
<button className="btn btn-secondary btn-sm">
  Sign In
  </button>

</div>

</div>




{/* 📱 Mobile Controls */}
<div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50">

  <div className="flex items-center gap-4 bg-white/80 backdrop-blur-lg shadow-xl px-4 py-2 rounded-full border border-gray-200">

    {/* Cart Button */}
    <button className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
      <Menu
        to={"/AddToCard"}
        title={<ShoppingCart size={20} className="text-gray-700" />}
      />
    </button>

    {/* Dark Mode Toggle */}
    <div className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
      <Dark />
    </div>

    {/* Menu Toggle */}
    <button
      onClick={() => setOpen(!open)}
      className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 text-gray-700 text-xl"
    >
      ☰
    </button>

  </div>

</div>
   <div className="md:hidden flex gap-2">

  <button className="btn btn-error btn-sm text-white">
 <Menu to={'/Login'} title={<Login />} />
</button>
<button className="btn btn-secondary btn-sm">
  Sign In
  </button>

</div>
      </div>

      {/* Mobile Menu */}
    {open && (
  <div className={`md:hidden  
    fixed top-0 right-0 h-screen w-1/2 
  ${state === true ? "bg-base-100 text-white" : "bg-white text-black"}
    flex flex-col space-y-2 px-2 border border-black/10 shadow-2xl`}>
 
<div className="pb-7 pt-6 flex items-center justify-center">
<h1 >My Brand</h1>
</div>

    <NavLink
      to="/"
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `p-3 rounded-lg transition ${
          isActive ? "bg-pink-500/50" : "hover:bg-white/10"
        }`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/products"
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `p-3 rounded-lg transition ${
          isActive ? "bg-pink-500/50" : "hover:bg-white/10"
        }`
      }
    >
      Products
    </NavLink>

  </div>
)}
</Wrapper>

    </nav>
  
    </>)
}

const Menu = ({to, title}) => {
    return (
        <NavLink className={({isActive}) => `hover:text-amber-300 font-semibold ${isActive ? 'text-amber-200' : ''}`} to={to}>{title}</NavLink>
    )
}

export default Navbar