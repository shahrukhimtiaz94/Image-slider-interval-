var imgSlider = document.getElementById("slider");
var links = ["1.jpg","2.jpg" , "3.jpg" , "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
var count = 0
function nextSlide(value){
    if(count>6 ){
        count = 0
    }
    if( count<0){
        count = 6
    }
    imgSlider.setAttribute("src", links[count]);
    if(value === '+'){
        count++;
        return;
    }
    if(value === '--'){

        count--;
        return
    }
    count++
}
setInterval(nextSlide,3000)
