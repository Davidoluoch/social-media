import { useContext } from "react"
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
const Stories = () =>{
    const {currentUser} = useContext(AuthContext)
    //TEMPORARY DUMMY DATA
    const stories =[
        {
            id:1,
            name:"dave odhiambo",
            img:"https://images.pexels.com/photos/16952093/pexels-photo-16952093/free-photo-of-young-woman-in-a-hat-against-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:2,
            name:"dave odhiambo",
            img:"https://images.pexels.com/photos/16864846/pexels-photo-16864846/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:3,
            name:"dave odhiambo",
            img:"https://images.pexels.com/photos/10368563/pexels-photo-10368563.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
    ]
    return(
        <div className="stories">
           {/* <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{ currentUser.name}</span>
                
    </div>*/}
            {stories.map(story=>
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
                <button>+</button>
                
            </div>

            )

            }
        </div>

    )
}
export default Stories