const btn = document.querySelector(".loginLogout__logout")

btn.addEventListener("click", () =>{
    var result = confirm("Permanecer logado? (Ok - Reinicia o contador / Cancelar - Da Logout e redireciona para a página de login)")
    if(result === true){
        location.reload()
    } else if (result === false){
        localStorage.clear()
        document.location.pathname = "/index.html"
    }
})