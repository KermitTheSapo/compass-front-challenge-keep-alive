const form = document.querySelector(".login__form")
const inputName = document.querySelector(".div__input__name")
const inputPassword = document.querySelector(".div__input__password")
const btn = document.querySelector(".form__btn")
const userImg = document.querySelector(".div__img__user")
const passwordImg = document.querySelector(".div__img__password")
const formDiv = document.querySelector(".form__div")
const warning = document.querySelector(".form__warning")

const registeredLogin = {
    name: "admin",
    password: "admin"
}

btn.addEventListener("click", (e) =>{
    e.preventDefault()

    if(!(inputName.value === registeredLogin.name) && !(inputPassword.value === registeredLogin.password)){ 
        inputName.setAttribute("style", "border: 1px solid var(--warning-paragraph);")
        inputPassword.setAttribute("style", "border: 1px solid var(--warning-paragraph);")
        warning.setAttribute("style", "display: flex")
    } else{
        inputName.setAttribute("style", "border: 1px solid white;")
        inputPassword.setAttribute("style", "border: 1px solid white;")
        warning.setAttribute("style", "display: none")
        document.location.pathname = "/home.html"
    }
    const item = {
        login: inputName.value,
        password: inputPassword.value
    }
    localStorage.setItem("name", JSON.stringify(item))
    console.log(localStorage.getItem("name"))
    inputName.value = ""
    inputPassword.value = ""
})


inputName.addEventListener("change", (e) =>{
    if(e.target.value.length > 0){
        userImg.classList.add("div__img__user--change")
    } else{
        userImg.classList.remove("div__img__user--change")
    }
})

inputPassword.addEventListener("change", (e) =>{
    if(e.target.value.length > 0){
        passwordImg.classList.add("div__img__user--change")
    } else{
        passwordImg.classList.remove("div__img__user--change")
    }
})