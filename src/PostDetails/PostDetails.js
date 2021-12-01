import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Commensts from '../components/Comments/Commensts';



const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    console.log(postId);

    // Posts API Call with dynamic postId
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [postId]);

    console.log(post);
    return (
        <>
        <Typography gutterBottom variant="h2">Post Detail</Typography>
            <Card sx={{ maxWidth: 1500 }} variant="outlined" style={{backgroundColor:'gray'}} >
                <CardActionArea>
                    {/* <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {post.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>

                {/* <h2>{post.title}</h2>
                <p>{post.body}</p> */}

                <Typography gutterBottom variant="h2" >Comments</Typography>
            
           <Commensts key={postId} postId={postId}></Commensts>
                      

                    
             
            </>
            );
};

            export default PostDetails;