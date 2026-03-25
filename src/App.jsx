import { useState } from 'react';
import './App.css'

import {fetchUser} from "../src/service/api.js"




function User(props) {
  return (
    <ul>
      <li>User Number: {props.id}</li>
      <li>Name: {props.name}</li>
      <li>Phone: {props.phone}</li>
      <li>Email: {props.email}</li>
    </ul>
  )
}


function App() {

  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(1);

   return (
    <>
    <div>
      <h1>User Details</h1>      
      <button onClick={() => {
        fetchUser(counter).then(data => {
          setData(data);
            setCounter((oldCount=> oldCount+1));                    
        })
      }}>Get User</button>
      <User {...data} id={counter -1} />
    
    </div>
    </>
  );
}
export default App
