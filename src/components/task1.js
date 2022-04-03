import { useState } from "react";

const Task1 = () => {
    const [char, setChar] = useState("");
   const  myArray = Array.from(char);
const numbers = myArray;
const listItems = numbers.map((numbers,i) =>
   <li>{numbers + "-" + i + ","}</li>
   );  
    return (
      <div className="home">
     <h1 className="head"> This is task1 Component </h1>
     <p className="des">Enter Any Text to Count the character</p>
    <form >
      <label className="des">Enter your Charater:
        <input
        className=""
          type="text" 
          value={char}
          onChange={(e) => setChar(e.target.value)}
        />
      </label>
    </form>
   <ol>{listItems}</ol>
            
      </div>
    );      
  };
  
  export default Task1;
  