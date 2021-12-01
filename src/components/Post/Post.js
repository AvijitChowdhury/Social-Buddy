import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router';


const Post = (props) => {
     const {title,body,id} = props.post;
    
     const history = useNavigate();
     const handleDetailButton= (id)=>{
         history(`/postDetails/${id}`)
     }
     const comment = useNavigate();
    const handleCommentButton = (id)=>{
        comment(`/comments/${id}`)
    }
    return (
        <>
         
            <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'pink',marginBottom:'15px'}}> 
                {/* <CardMedia
                    component="img"
                    // alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                /> */}
                <CardContent>
                    <Typography variant="h4" gutterBottom >
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    
                    <Button size="small" onClick={()=>handleDetailButton(id)} >More Details</Button>
                    <Button size="small" onClick={()=>handleCommentButton(id)}>Comments</Button>
                </CardActions>
            </Card>

        </>
    );
};

export default Post;