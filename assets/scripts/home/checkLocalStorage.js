var local = localStorage.getItem("name")
var localObj = JSON.parse(local)

if (localObj === null){
    document.location.pathname = "/index.html"
} else if(localObj.login !== "admin" && localObj.password !== "admin" || localObj === null){
    document.location.pathname = "/index.html"
}
