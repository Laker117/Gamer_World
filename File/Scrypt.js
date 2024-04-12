//Login
const nombre = document.getElementById("name")
const password = document.getElementById("password")
const button = document.getElementById("button")

button.addEventListener('click', (e) =>{
    e.preventDefault()
    if(nombre.value.length<1){
        alert("Ingrese los datos correspondientes en la casilla de usuario")
    } if(password.value.length<1){
        alert("Ingrese los datos correspondientes en la casilla de contraseña")
    }
})