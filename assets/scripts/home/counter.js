const timer = document.querySelector(".counter__time")
var counter = 601

var time = setInterval(() =>{
    if(counter > 0) {
        counter = counter - 1
        timer.innerHTML = counter
    }
    if (counter === 0) {
        clearInterval(time)
        var result = confirm("Permanecer logado? (Ok - Reinicia o contador / Cancelar - Da Logout e redireciona para a página de login)")
        if(result === true){
            location.reload()
        } else if (result === false){
            localStorage.clear()
            document.location.pathname = "/index.html"
        }
    }
}, 1000)




