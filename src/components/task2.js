import React, { useEffect, useState } from "react"
import "./task1.css"

const Task2 = () => {

  const [post, setPost] = useState([])
  useEffect(() => {
    const url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=1'
    const getMovieTitles = async () => {
      try {
        const response = await fetch(url);
        return await response.json();
        // console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    //Sorting in Ascending order order a/c to the Alphabet
    var c = getMovieTitles();
    c.then(data => setPost(data.data.sort((a, b) => a.Title.localeCompare(b.Title))
    ))

  }, []);

  return <div>
    <div> <h1 className="head">This is Task 2</h1>
    <h2 className="head">Fetched Titles</h2></div>
   <h2 className="titles">
    <ul>
      {post.map(item => <li key={item.Year}>{item.Title}</li>)}
    </ul>
    </h2>
  </div>;
};


export default Task2;