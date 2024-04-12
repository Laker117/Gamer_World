//Login
const nombreLogin = document.getElementById("nameLogin")
const passwordLogin = document.getElementById("passwordLogin")
const buttonLogin = document.getElementById("butonLogin")

buttonLogin.addEventListener('click', (e) =>{
    e.preventDefault()
    if(nombreLogin.value.length<1){
        alert("Ingrese los datos correspondientes en la casilla de usuario")
    } else if(passwordLogin.value.length<1){
        alert("Ingrese los datos correspondientes en la casilla de contraseña")
    } else {
        window.location="Index.html";
    }
})

/*CreateAccount
const nombreCreateAccount = document.getElementById("nameCreateAccount")
const userCreateAccount = document.getElementById("userCreateAccount")
const emailCreateAccount = document.getElementById("emailCreateAccount")
const passwordCreateAccount = document.getElementById("passwordCreateAccount")
const dateCreateAccount = document.getElementById("dateCreateAccount")
const buttonCreateAccount = document.getElementById("butonCreateAccount")

buttonCreateAccount.addEventListener('click', (e) =>{
    e.preventDefault()
    if(nombreCreateAccount.value.length<1){
        alert("Ingrese los datos correspondientes en la casilla de nombre")
    }else if(userCreateAccount.value.length<1){
        alert("Ingrese los datos correspondientes en la casilla de usuario")
    }else if(emailCreateAccount.value.length<1){
        alert("Ingrese los datos correspondientes en la casilla de correo electronico")
    }else if(passwordCreateAccount.value.length<1){
        alert("Ingrese los datos correspondientes en la casilla de contraseña")
    } else {
        window.location="Login.html";
    }
}) */