setInterval(slider,3000)

function slider(){
    if(document.getElementsByClassName("sliderItems")[0].classList.contains("active")){
        document.querySelector(".trHome").style.display="none"
        document.querySelector(".gaVillas").style.display="block"

        document.getElementsByClassName("sliderItems")[1].classList.add("active")
        document.getElementsByClassName("sliderItems")[0].classList.remove("active")
    }else if( document.getElementsByClassName("sliderItems")[1].classList.contains("active")){
        document.querySelector(".trHome").style.display="block"
        document.querySelector(".gaVillas").style.display="none"

        document.getElementsByClassName("sliderItems")[0].classList.add("active")
        document.getElementsByClassName("sliderItems")[1].classList.remove("active")
    }
}