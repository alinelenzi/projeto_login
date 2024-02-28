function fazerLogin(){
    var done = 0;
    var username = document.getElementById("username").value;
    username = username.toLowerCase();
    var password = document.getElementById("password").value;
    password = password.toLowerCase();
    if (username=="admin" && password=="admin") { 
        window.location="https://alinelenzi.github.io/projeto_aluraMidi/"; done=1; 
    } else if (username=="user" && password=="user") { 
        window.location="https://alinelenzi.github.io/projeto_malaDeViagem/"; done=1; 
    } else if (username=="outro" && password=="outro") { 
        window.location="https://ava.faesa.br/d2l/home"; done=1; 
    } else { 
        alert("Senha ou Usuário inválido."); 
    }
}