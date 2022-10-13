const timer = document.querySelector(".counter__time")
var counter = 601

var time = setInterval(() =>{
    if(counter > 0) {
        counter = counter - 1
        timer.innerHTML = counter
    }
    if (counter === 0) {
        clearInterval(time)
        var result = prompt("permanecer logado? (Sim - Reinicia o contador / Não - Da Logout e redireciona para a página de login)")
        if(result === "sim" || result === "Sim" || result === "SIM" || result === "s" || result === "S"){
            location.reload()
        } else if (result === "nao" || result === "Nao" || result === "NAO" || result === "n" || result === "N"){
            localStorage.clear()
            document.location.pathname = "/index.html"
        } else{
            alert("Comando inválido")
            localStorage.clear()
            document.location.pathname = "/index.html"
        }
    }
}, 1000)



