var API_URL = "http://localhost:9779";

function onLogin(event) {
    var userNameInput = document.getElementById('username').value;
    var userPasswordInput = document.getElementById('password').value;
    event.preventDefault();
    var uname = userNameInput;
    var pass = userPasswordInput;
    if (username == "" || password == "") {
        alert("Fill the blanks!")
    }
    else {
        var userObject = {
            username: uname,
            password: pass,
            phone: null,
            name: null
        };
        console.log(JSON.stringify(userObject));
        postResponse(JSON.stringify(userObject));
    }

    // localStorage.setItem('username', username);
    // localStorage.setItem('password', password);
    // window.location.href = "home.html";

}


function afterCreateUser(user) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    window.location.href = "home.html";
}



async function postResponse(user) {
    const response = fetch(
        API_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    );
    await (await response).text().then(
        user => {
            afterCreateUser(user)
        }
    )
}


function onMain() {
    window.location.assign("home.html");
}