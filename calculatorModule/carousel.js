let mySlides = ["images/carousel/carousel1.jpg","/images/carousel/caurosel2.jpg", "./images/carousel/caurosel3.jpg", "/images/carousel/caurosel4.jpg"];
let i = 0;
let myslide = document.querySelector(".myslide")
function setSlider() {
    myslide.setAttribute("src", mySlides[i]) 
    if (i<mySlides.length-1){
        i++;
    }else{
        i = 0
    }
    
    setTimeout("setSlider()", 3000) 
}

window.onload(setSlider())