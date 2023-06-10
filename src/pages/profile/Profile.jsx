import "./profile.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from "../../components/posts/Posts"

const Profile = () =>{
    return(
        <div className="profile">
            <div className="images">
                <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" className="cover" />
                <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="">
                            <FacebookOutlinedIcon fontSize="large"/>

                        </a>
                        <a href="">
                            <InstagramIcon fontSize="large"/>

                        </a>
                        <a href="">
                            <TwitterIcon fontSize="large"/>

                        </a>
                        <a href="">
                            <LinkedInIcon fontSize="large"/>

                        </a>
                        <a href="">
                            <PinterestIcon fontSize="large"/>

                        </a>
                    </div>
                    <div className="center">
                        <span>dave odhiambo</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon/>
                                <span>kabete</span>

                            </div>
                            <div className="item">
                                <LanguageIcon/>
                                <span>English</span>

                            </div>
                            
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        < MoreVertOutlinedIcon/>

                    </div>
                </div>
                <Posts/>
            </div>
            
        </div>
    )
}
export default Profile