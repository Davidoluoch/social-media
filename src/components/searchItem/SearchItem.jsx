import "./searchItem.css"
const searchItem = () =>{
    return (
        <div className="searchItem">
            <img src="https://i.pinimg.com/236x/50/68/db/5068db1d59d81659255d0a7a4c925746.jpg" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Lake side hotels</h1>
                <span className="siDistance">300m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">beach apartment with air conditioning

                </span>
                <span className="siFeatures">
                    Entire hotel . 3 bathroom . king size beds
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="sicancelOpSubtitle">
                    you can cancel later!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>excellent</span>
                    <button>7.4</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">ksh3000</span>
                    <span className="siTaxOp"> includes taxes and fees</span>
                    <button className="siCheckButton" >see availability</button>
                </div>
            </div>
        </div>
    )
}
export default searchItem