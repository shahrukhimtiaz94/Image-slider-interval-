var imgSlider = document.getElementById("slider");

function nextSlide(){
    
    imgSlider.setAttribute("src" ,"bg2.jpg");
    var a=0
    var imgpaths = ["bg2.jpg","bg3.jpg" , "bg2.jpg"];
    setInterval(() => { 
        if(a==3){
            a=0;
        }
        else{
        imgSlider.setAttribute("src" ,imgpaths[a]);
        console.log(a);
        a++ 
        }
    }, 2000);
    
}

nextSlide()
// console.log(imgpaths[2])
// setInterval(()=>{
    
//     for(var i=0; i<3 ; i++){
//         console.log(imgpaths[i]);
        
//     }
// },3000
// );

