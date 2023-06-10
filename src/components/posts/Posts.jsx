import "./posts.scss"
import Post from "../post/Post";

const Posts = () =>{
    //TEMPORARY
    const posts = [
        {
            id:1,
            name:"dave odhiambo",
            userId:1,
            profilePic:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting",
            img:"https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
         {
            id:2,
            name:"Gift Marvel",
            userId:2,
            profilePic:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=300",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting",
            
        },
    ];
    return(
        <div className="posts">
            {posts.map(post=>(
                <Post post={post} key={post.id}/>

            ))}

        </div>

    )
}
export default Posts