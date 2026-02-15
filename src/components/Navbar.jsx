import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
import Wrapper from "./Wrapper";

function Navbar(){
    
    const [open, setOpen] = useState(false);
    return(<>

 <nav className="fixed w-full top-0 left-0 z-50
      bg-gray-200">
<Wrapper>

      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">
          MyBrand
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-b font-medium">
          <li className="cursor-pointer"><Menu to={'/'} title={'Home'} /></li>
          <li className="cursor-pointer"><Menu to={'/products'} title={'Products'} /></li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
<div className="hidden md:flex flex gap-5">
   <h1>SIGN IN</h1>
   <h1>LOG IN</h1>
</div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            className="text-black"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
    {open && (
  <div className="md:hidden  
    fixed top-0 right-0 h-screen w-1/2 
    bg-white text-black
    flex flex-col space-y-2 px-2 border border-black/10 shadow-2xl">
 
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


<NavLink
      to="/card"
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `p-3 rounded-lg transition ${
          isActive ? "bg-pink-500/50" : "hover:bg-white/10"
        }`
      }
    >
      Card
    </NavLink>



    <NavLink
      to="/about"
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `p-3 rounded-lg transition ${
          isActive ? "bg-pink-500/50" : "hover:bg-white/10"
        }`
      }
    >
      About
    </NavLink>

  </div>
)}
</Wrapper>

    </nav>
  
    </>)
}

const Menu = ({to, title}) => {
    return (
        <NavLink className={({isActive}) => `hover:text-amber-300 font-semibold ${isActive ? 'text-amber-500' : ''}`} to={to}>{title}</NavLink>
    )
}

export default Navbar