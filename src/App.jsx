import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import Popup from "./components/Popup"
function App() {
 
  return (
    <>
     <Popup />
     <Navbar />
     <Outlet />
    </>
  )
}

export default App
