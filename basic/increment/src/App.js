import './App.css';
import { useState } from 'react'

function Counter() {
  const [no, update] = useState(0);
  function addone(){
    update(no + 1);
  }

  return(
    <div>
   <button classname="button" onClick={addone}>Increment</button>)
   <p>{no}</p>
    </div>
  );
}


export default function App(){
  return (
    <div>
      <Counter />
    </div>
  );
}
