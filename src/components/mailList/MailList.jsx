import "./mailList.css"
const mailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Book with us and save money</h1>
            <span className="mailDesc">Sign up and let's send the best deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default mailList