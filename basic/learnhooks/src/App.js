import './App.css';
import React, { useState , useEffect} from 'react'

function Example (){
  const [count, setcount] = useState(0)

  useEffect(() => {
    document.title = "You have clicked {count} times."
  });

  return(
    <div>
      <p>You clicked {count} times</p>
    <button classname="button" onClick={() => setcount(count+1)}>Hello Buddy Click Me</button>
    </div>
  );
}

export default function App(){
  return(
    <div>
      < Example />
    </div>
  );
}