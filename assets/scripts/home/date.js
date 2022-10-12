function createDate(){
    const date = document.querySelector(".time__day")
    monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto","setembro", "outubro", "novembro", "dezembro")
    var week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    now = new Date
    date.innerHTML = (`${week[now.getDay()]}, ${now.getDate()} de ${monName[now.getMonth()]} de ${now.getFullYear()}`)
}
createDate()
