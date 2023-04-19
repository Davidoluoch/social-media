import "./featured.css"
const Featured = () => {
    return(
        <div className="featured">
            <div className="featuredItems">
                <img src="https://i.pinimg.com/236x/a5/9f/4f/a59f4f1706036125bcc884699ce8f882.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Peru</h1>
                    <h2>234 properties</h2>

                </div>
            </div>
            <div className="featuredItems">
                <img src="https://i.pinimg.com/236x/3c/ae/79/3cae79c8a95f5e89fab0d2ef827a88a0.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Moscow</h1>
                    <h2>235 properties</h2>

                </div>
            </div>
            <div className="featuredItems">
                <img src="https://i.pinimg.com/236x/2f/ad/a9/2fada9d2abe2719ea544c9c4015e4c32.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Italy</h1>
                    <h2>236 properties</h2>

                </div>
            </div>

        </div>
    )
}
export default Featured