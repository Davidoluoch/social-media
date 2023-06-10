import "./post.scss"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";
const Post =({post})=>{
    const [commentOpen, setCommentOpen] = useState(false)
    // TEMPORARY
    const liked = false;
    return(
        <div className="post">
            <div className="container">

           
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <Link to={'/profile/${post.userId}'} style={{textDecoration:"none",color:"inherit"}}>
                            <span className="name">{post.name}</span>
                            <span className="date">1 min ago</span>
                        
                        </Link>
                    </div>
                    <div>
                    <MoreHorizOutlinedIcon/>
                    </div>
                </div>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
            </div>
            <div className="info">
                <div className="item">
                    {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon /> }
                    5 likes

                </div>
                <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                    <TextsmsOutlinedIcon/>
                    
                    5 comments

                </div>
                <div className="item">
                    <ShareOutlinedIcon/>
                    
                   share

                </div>
            </div>
            {commentOpen && <Comments/>}
            </div>
        </div>
    )
}
export default Post