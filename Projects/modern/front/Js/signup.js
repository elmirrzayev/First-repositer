var API_URL = "http://localhost:9779";
var userNameInput = document.getElementById('username').value;
var userPasswordInput = document.getElementById('password').value;
var userPhoneInput = document.getElementById('phone').value;
var NameInput = document.getElementById('name').value;
function onSignup(event) {
    event.preventDefault();
    var username = userNameInput;
    var password = userPasswordInput;
    var phone = userPhoneInput;
    var name = NameInput;

    var http = XMLHttpRequest();
    http.onload = function () {
        var response = this.responseText;
        var user = JSON.parse(response);
        if (user.username == "") {
            alert("bu istifadeci artiq movcuddur")
        } else {
            alert("Success");
            window.location.assign("login.html");
        }
    }

    var userObject = {};
    userObject.username = username;
    userObject.password = password;
    userObject.phone = phone;
    userObject.name = name;
    http.open("POST", API_URL + "/users", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(userObject));
}
function onLogIn() {
    window.location.href = 'login.html';
}
function onBackToMain(){
window.location.assign("home.html");
}