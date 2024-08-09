function login()
{
let user = document.getElementById("user").value;
let clave = document.getElementById("pw").value;

if(user == "" || clave == ""){

    alert("Los datos no pueden ser vacios");
    
}


    else if(user=="Carlos" && clave=="1234"){
            window.location="../index.html";
    }
        else{
            alert("Datos Incorrecotos");
            window.location="login.html";
        }
}
