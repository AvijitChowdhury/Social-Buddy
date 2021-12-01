import { List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';



const Commensts = (props) => {
    const postId = props.postId;

    const [comments,setComments] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=>res.json())
        .then(data=>setComments(data));
    },[]);


    return (
        <div style={{backgroundColor:'moccasin',border:"2px dashed black"}}>
    <List >
       
       {
           comments.map(comment=><ListItem key={Math.random()}><ListItemText primary={comment.body}></ListItemText></ListItem>)
       }
     
      </List>
       
  
    </div>
    );
};

export default Commensts;