 import { useState } from "react";
 import "./App.css"
function App() {
  const [no ,setno] = useState(0)
  const [ans ,setans] = useState()
  const [err,seterr] = useState("")
  let   [val, setval]  = useState(1)
  function booking(n){
    console.log(n);
    if(!/^[1-7]{1}$/.test(n))  {setans(); return seterr(`can book only 7 seats in one time`)}
    console.log(Number(val)+Number(n));
    if(Number(val)+Number(n)>80) {setans(); return seterr(`only ${80-Number(val)+1} seats are available`)}
    let arr = []
    let i = 1
    while(i<=n){
        arr.push(val)
       setval(++val)
        i++
    }
    // console.log(arr);
    setans(arr)
    return seterr("")
  }
  function remove(){
     setans("")
  }

  return (<>
     <div className="div">
     <p>enter no. of seats u want to registered</p>
     <input  value={no} placeholder="enter seats" onChange={(e)=>{setno(e.target.value)}}></input>
     <br></br>
     <br></br>
     <button onClick={()=>booking(no)}>book seats</button><br></br>
     <button onClick={()=>remove()}>remove seats</button>
     <div>{ans && ans.length>0 && <ul> {ans.map((value)=>(<li>{value}</li>))}</ul>}</div>
     <div>{err}</div>
     </div>
 </>)
}

export default App;
