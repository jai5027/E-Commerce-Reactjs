import { motion } from 'framer-motion'
import List from "./List";

function Home() {

  

  return (<>

  <div className="mt-25 md:mt-40 font-semibold md:text-8xl text-6xl flex flex-col md:gap-5 justify-center items-center">
    <motion.h1  className="flex flex-col lg:flex-row lg:gap-4"
    initial={{ opacity: 0, x: -200 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 1
  }}
    >Elevate Your <br className="md:hidden"/> <span className="block md:inline my-3 md:my-0">
      Style With
    </span></motion.h1>
    <motion.h1
     initial={{ opacity: 0, x: 200 }}
    animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 1
  }}
    >Bold Fashion</motion.h1>
  </div>
   
  </>)
}

export default Home
















{/* <List list={arr} height={400} itemHeight={30}/>  */}
//  const arr = Array.from({length:100}, (_,index) => index + 1)