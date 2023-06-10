import "./leftbar.scss"
import Friends from "../../assets/Friends.png"
import Gallery from "../../assets/Gallery.png"
import Groups from "../../assets/Groups.png"
import Events from "../../assets/Events.png"
import Gaming from "../../assets/Gaming.png"
import Videos from "../../assets/Videos.png"
import Messages from "../../assets/Messages.png"
import Funds from "../../assets/Fund.png"
import Tutorials from "../../assets/Tutorials.png"
import Courses from "../../assets/Courses.png"

const LeftBar = ()=>{
    return(
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                    <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Dave Odhiambo</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Group</span>
                    </div>

                </div>
                <hr />
                <div className="menu">
                    <span>Shortcuts</span>
                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>

                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Funds} alt="" />
                        <span>fundraising</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt="" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses} alt="" />
                        <span>Courses</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default LeftBar