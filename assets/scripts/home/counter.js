const timer = document.querySelector(".counter__time")
var counter = 601
setInterval(() =>{
    if(counter > 0) timer.innerHTML = counter -= 1
    if (counter === 0) document.location.reload(true)    
}, 1000)




