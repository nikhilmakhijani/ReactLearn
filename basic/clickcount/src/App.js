import logo from './logo.svg';
import './App.css';

function Clickwork(){
  function handleClick(){
    console.log("yo mate")
  }
  return(
    <button classname="button" onClick={handleClick}>Click me!</button>
  );
}

function Textbox(){
  function handleChange(text){
    console.log(text)
  }
  return(
    <input name="text" onChange={(e) => handleChange(e.target.value)}></input>
  );
}


export default function App(){
  return(
    <div>
      <Clickwork />
      <Textbox />
    </div>
  );
}
