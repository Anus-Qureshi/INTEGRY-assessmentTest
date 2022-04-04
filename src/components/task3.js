import React, { useEffect, useState } from "react"
import "./task1.css"
//Task 3
const Task3 = () => {
    const [char, setChar] = useState('')

  const [post, setPost] = useState([])
  const handleSubmit = (event) => {
  
    event.preventDefault();
    
  
    const fetchStock = async () => {
      try {
        const response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${char}`);
        console.log(response);
        return await response.json();
        
      } catch (error) {
        console.log("error", error);
      }
    };

    var a = fetchStock();
    a.then(data => setPost(data.data))


  }
  


  return <div>
    <div> <h1 className="head">This is Task 3</h1></div>
    <form onSubmit={handleSubmit}>
      <label className="des">Enter the Date to see Information about the stock: <p>for Example: 5-January-2000</p>
        <input
          type="text" 
          value={char}
          onChange={(e) => setChar(e.target.value)}
        />
      </label>
      <input 
     className="button"
      type="submit"
      
      />
    </form>
        
    <div className="t3">
      <h4>Output: </h4>
      {post.map(item => <ul key={item.id}> 
      <li>Open: {item.open}</li>
      <li>High: {item.high}</li>
      <li>Low:  {item.low}</li>
      <li>Close:{item.close}</li></ul>
      
      )}
    </div>
  </div>;
};


export default Task3;