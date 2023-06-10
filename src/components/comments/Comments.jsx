import { useContext } from "react";
import "./comments.scss"
import {AuthContext} from "../../context/authContext"
 const Comments = () => {
   // const {currentUser}= useContext= {AuthContext}
    //TEMPORARY
    const comments =[
        {
            id:1,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            name:"dave Odhiambo",
            userId:1,
            profilePicture:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" 


            
        },
        {
            id:2,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            name:"Gift Marvel",
            userId:1,
            profilePicture:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=300"


            
        },
    ];
    

    return(
        <div className="comments">
            <div className="write">
           {/* <img src={currentUser.profilePic} alt="" />*/}
           <input type="text"  placeholder="write a comment"/>
           <button>send</button>

            </div>
           
           {comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>

            ))
        }</div>
    )
 }
 export default Comments