import {useEffect, useState } from "react";
import "./App.css";

function App() {
  const [api, setApi] = useState([])
  const [search, setSearch] = useState("")


const fetchapi=()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data=>{setApi(data)})
}
useEffect(() => {
  fetchapi()
}, [])

  return (
    <div className="App">
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      {api.map(x=>{
        if(x.name.includes(search) || x.username.includes(search) || x.email.includes(search) || x.phone.includes(search)){
          return(
        <tr key={x.id}>
          <td>{x.id}</td>
          <td>{x.name}</td>
          <td>{x.username}</td>
          <td>{x.email}</td>
          <td>{x.phone}</td>
        </tr>
          )
        }
      })}
        
        </table>

      
    </div>
  );
  }

export default App;
