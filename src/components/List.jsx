import { useState } from "react"

function List({list, height, itemHeight}) {

const noOfvisibleItems = Math.floor(height / itemHeight)

const [index, setIndex] = useState([0, noOfvisibleItems])

const visible = list.slice(index[0], index[1])

const handleScroll = (e) => {
  const {scrollTop} = e.target
  const newStarting = Math.floor(scrollTop / itemHeight)
  const endIndex = newStarting + noOfvisibleItems
  setIndex([newStarting, endIndex])

}

    return (<>
    <div style={{
        margin: 80,
        height: height,
        backgroundColor: 'gray',
        overflow: 'auto'  
    }} onScroll={handleScroll}>

      <div style={{ height: list.length * itemHeight}}>

        <div style={{ transform: `translateY(${index[0] * itemHeight}px)`}}>


  {visible.map((item) => {
    return <p style={{height: itemHeight}} key={item}>index : {item}</p>
  })}
  </div>
  </div>
  </div>  
    
    </>)
}

export default List