const timer = document.querySelector(".counter__time")
var counter = 10

setInterval(() =>{
    if(counter > 0) {
        counter = counter - 1
        timer.innerHTML = counter
    }
}, 1000)

if (counter === 0) {
    var result = prompt("permanecer logado? (Sim - Reinicia o contador / Não - Da Logout e redireciona para a página de login)")
    if(result === "sim" || result === "Sim" || result === "SIM" || result === "s" || result === "S"){
        console.log("aaaaaaa")
    } else if (result === "nao" || result === "Nao" || result === "NAO" || result === "n" || result === "N"){
        console.log("nnnnnn")
    }
}

