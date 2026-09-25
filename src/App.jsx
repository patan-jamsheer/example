import {useState} from "react";
import "./App.css"
function App(){
  const [name,setName]=useState("");
  const [age,setAge]=useState();
  const [email,setEmail]=useState("");


  return (<>
  <div>
    <h1>controlled component</h1>
    NAME:<input type="text" placeholder="enter name" value={name} onChange={(event)=>{setName(event.target.value)}}></input>
    <hr/><br/>
   AGE: <input type="number" placeholder="enter age" value={age} onChange={(event)=>{setAge(event.target.value)}}></input>
    <hr/><br/>
    EMAIL:<input type="text" placeholder="enter name" value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
    <hr/><br/>
    <button onClick={()=>{setName("");setAge();setEmail("");}}> clear the content!</button>
    <hr/><br/>
    <h1>NAME:{name}</h1>
    <h1>age:{age}</h1>
    
    <hr/><br/>
      </div>
  </>)
}
export default App