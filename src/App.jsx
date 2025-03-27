import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'



function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  {()=>{console.log("puppy id: ", puppy.id)}}

  function handleClick() {
    // some logic here
  }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log()

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{ setFeatPupId(puppy.id)}}>
            {puppy.name}
          </p>
        );
      })}
            {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
