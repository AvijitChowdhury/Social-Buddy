import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
import './Home.css';


const Home = () => {
 const [post,setPost]=useState([]);
 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{setPost(data);
    console.log(data)});
 },[]);
    return (
        <>
        <Header  />
        <div className="App">
          
          {
            post.map(post=><Post key={post.id} post={post}></Post>)
          }
        </div>
        </>
    );
};

export default Home;