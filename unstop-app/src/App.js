 import { useState } from "react";
 import "./App.css"
function App() {
  const [no ,setno] = useState()
  const [ans ,setans] = useState()
  const [err,seterr] = useState("")
  let   [val, setval]  = useState(1)
  function booking(n){
    console.log(n);
    if(!/^[1-7]{1}$/.test(n))  {setans(); return seterr(`can book only 7 seats in one time`)}
    console.log(Number(val)+Number(n));
    if(Number(val)+Number(n)>81) {setans(); return seterr(`only ${80-Number(val)+1} seats are available`)}
    let arr = []
    let i = 1
    while(i<=n){
        arr.push(val)
       setval(++val)
        i++
    }
    setans(arr)
    return seterr("")
  }
  function remove(){
     setans("")
  }
  return (<>
  <form>
     <div className="div">
     <p>enter no. of seats u want to registered</p>
     <input  value={no} placeholder="enter seats" onChange={(e)=>{setno(e.target.value)}}></input>
     <br></br>
     <br></br>
     <button onClick={()=>booking(no)}>book seats</button><br></br>
     <button onClick={()=>remove()}>remove seats</button>
     <div>{ans && ans.length>0 && <ul> your registered seat numbers {ans.map((value,index)=>(<li style={{border:"1px solid red",borderRadius:"10px",backgroundColor:"cyan" ,margin:"10px",padding:"5px",display:"flex",width:"10%"}} key={index}>{value}</li>))}</ul>}</div>
     <div>{err}</div>
     </div>
     </form>
 </>)
}

export default App;
