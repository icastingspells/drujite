let header = document.querySelector(".header")
window.onscroll = function(){
    
if(window.scrollY > 50){
header.style.background = "rgba(0, 0, 0, 0.7)" 
header.style.backdropFilter = "blur(5px)" 
}
else{
header.style.background = ""
header.style.backdropFilter = "" 
}
}

