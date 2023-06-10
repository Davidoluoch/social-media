import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const NavBar = ()=>{
   // const {currentUser} = useContext(AuthContext)
    return(
     <div className="navBar">
            <div className="left">
                <span>davesocial</span>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <AppsOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="search" />

                    

                    




                    </div>

    


                 


            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user">
                    <img 
                    src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <span>dave odhiambo</span>
                </div>



            </div>
        

        
        
        </div>
    );
};
export default NavBar