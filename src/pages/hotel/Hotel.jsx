import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"

const Hotel = () => {
    const [slideNumber,setSlideNumber] = useState(0);
    const [open,setOpen] = useState(false);
    const photos = [
        {
            src: "https://i.pinimg.com/236x/e7/5d/b1/e75db17da4cab3e932cfa1198fd01a2e.jpg"
        },
        {
            src: "https://i.pinimg.com/236x/c9/20/a8/c920a8b317385fe4551515f9a623cde7.jpg"
        },
        {
            src: "https://i.pinimg.com/236x/cd/5a/21/cd5a216a4f5e5a389e66760833149dbc.jpg"
        },
        {
            src: "https://i.pinimg.com/236x/e7/5d/b1/e75db17da4cab3e932cfa1198fd01a2e.jpg"
        },
        {
            src: "https://i.pinimg.com/236x/e7/5d/b1/e75db17da4cab3e932cfa1198fd01a2e.jpg"
        },
        {
            src: "https://i.pinimg.com/236x/e7/5d/b1/e75db17da4cab3e932cfa1198fd01a2e.jpg"
        },

    ];

    const handleOpen = (i)=>{
        setSlideNumber(i);
        setOpen(true);
    };
    const handleMove = (direction) =>{
        let newSlideNumber;
        if (direction==="l"){
            newSlideNumber=slideNumber=== 0 ? 5 : slideNumber-1
        }else{
            newSlideNumber=slideNumber=== 5 ? 0 : slideNumber+1

        }
        setSlideNumber(newSlideNumber)
    }
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
               {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                <div className="sliderWrapper">
                    <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />



                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Nairobi west</span>
                    </div>
                    <span className="hotelDistance">
                        good location - 500m from CBD
                    </span>
                    <span className="hotelPriceHighLight">
                        book a stay here at ksh4500 and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                        
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Nirobi west</h1>
                            <p className="hotelDesc">
                                Located along ngong 5th avenue in Nairobi west,the Grand hotel
                                has accomodations with air conditioning and free wifi.The units come with
                                hardwood floors and feature a fully equiped kitchen with a microwave, 
                                a flat-screen TV, and a private bathroom with shower and hairdryer.
                                A fridge is also offered as well as a coffee machine.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>perfect for a 5-night stay</h1>
                            <span>
                                located in the real heart of Nairobi, this property has an excellent location score of 8.2
                            </span>
                            <h2>
                                <b>ksh4500</b> (2 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
export default Hotel;