
function cerrarCookies(){

    let object =document.querySelector('aside#cookies');
    object.style = "transform: translateY(100%); transition: all 1s ease;";
            
}

var boton = null;
var menu = null;
boton = document.getElementById("menu");
menu = document.getElementById("navegador");
menu.classList.add("view");
boton.addEventListener("click", (ev) => {    
    if(menu.className == "view"){
        menu.classList.remove("view");
        menu.classList.add("hide");            
    }else{
        menu.classList.remove("hide");
        menu.classList.add("view");
    }
})