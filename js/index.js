var base_login = [ {usuario:"admin", contraseña:"1234"} , {usuario:"user",contraseña:"1234"}]
var switch_login=false;

function login(){
    var user=document.getElementById('floatingInput1').value;
    var pass=document.getElementById('floatingPassword1').value;
    
    if (user == base_login[0].usuario && pass == base_login[0].contraseña){
        alert('Login exitoso');
        switch_login=true;
        location.reload();
        login1();
    }else{
        alert('Usuario o contraseña incorrectos')
    }

}

function login1(){
    if (switch_login == true){
        
    }
}