import React from 'react'
import {BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs';


const Carousel = () => {
    const slides = {
        
            image1: "https://tinyurl.com/398hmjhc",
            image2: "https://tinyurl.com/8v8u9uju"
        
    }
    // let current = document.getElementById("slide").src;
    // function selectSlider() {
        
    //     if (current === slides.image1) {
    //         current= slides.image2
    //     }else{

    //     }
    // }
    
    return (
        <div className="slider">
            <img src={slides.image2} alt="" id="slide"/>
            
            <BsFillCaretLeftFill className="leftArrow"/>
            <BsFillCaretRightFill className="rightArrow"/>
        </div>
    )
}

export default Carousel
