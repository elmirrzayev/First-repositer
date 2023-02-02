var API_URL = "http://localhost:9779";
var userNameInput = document.getElementById('username').value;
var userPasswordInput = document.getElementById('password').value;
function onLogin(event){
    event.preventDefault();
    var username = userNameInput;
    var password = userPasswordInput;

    var http = XMLHttpRequest();
    http.onload=function(){
        if(this.status==200){
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.href ="home.html";
        }else{
            alert("Melumatlar yanlisdir!")
        }
    }
    http.open("GET",API_URL+"/users/login",true);
    http.setRequestHeader("Authorization","Basic"+window.btoa(username+":"+password));
    http.send();
}

function onMain(){
    window.location.assign("home.html");
}