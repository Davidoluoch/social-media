import "./rightbar.scss"
const RightBar = ()=>{
    return(
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestion for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <span>Kevin May</span>
                        
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <span>Angel June</span>
                        
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <p>
                            <span>Angel June</span> changed their cover photo
                            </p>
                        
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <p>
                            <span>Angel June</span> liked  your post
                            </p>
                        
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <p>
                            <span>Angel June</span> posted
                            </p>
                        
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="online">
                                
                            </div>
                            
                            <span>Angel June</span> 
                            
                        
                        </div>
                    
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="online">
                                
                            </div>
                            
                            <span>Gift Marvel</span> 
                            
                        
                        </div>
                    
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default RightBar