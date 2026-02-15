
import List from "./List";

function Home() {

  const arr = Array.from({length:100}, (_,index) => index + 1)
  console.log(arr);
  

  return (<>

 
<List list={arr} height={400} itemHeight={30}/>
  </>)
}

export default Home