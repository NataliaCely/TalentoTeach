function login()
{
let user = document.getElementById("user").value;
let clave = document.getElementById("pw").value;

if(user == "" || clave == ""){

    alert("Los datos no pueden ser vacios");
    
}


    else if(user=="Admin" && clave=="1234" || user=="Docente" && clave=="1234" || user=="Estudiante" && clave=="1234"){
            window.location="../dashboard/dashboard.html";
    }
        else{
            alert("Datos Incorrecotos");
            window.location="index.html";
        }
}
