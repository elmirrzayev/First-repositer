$(document).ready(function () {
    $("#email").blur(function () {
        let email = $("#email").val();
        if (email == "") {
            $("#password1").removeClass("is-valid");
            $("#email").addClass("is-invalid");
        } else {
            $("#email").removeClass("is-invalid");
            $("#email").addClass("is-valid");
        }
    })

    $("#password1").blur(function () {
        let password = $("#password1").val();
        if (password == "") {
            $("#password1").removeClass("is-valid");
            $("#password1").addClass("is-invalid");
        } else {
            $("#password1").removeClass("is-invalid");
            $("#password1").addClass("is-valid");
        }
    })
    let istifadeciler = [
        {
            name: "Polad",
            email: "polad123@gmail.com",
            password: "polad123"
        },
        {
            name: "resul",
            email: "resul123@gmail.com",
            password: "resul123"
        }
    ]
    var g = false;
    var h=false;
    $("#log-in").submit(function (e) {
        e.preventDefault();
        var mail = $("#email").val();
        var pass = $("#password1").val();
        var local = Number(localStorage.getItem(`number`));
        for (var i = 0; i <= local; i++) {
            if (mail == localStorage.getItem(`user${i}-email`)) {
                if (pass == localStorage.getItem(`user${i}-password`)) {
                    g = true;
                    window.location.assign("Final/indexz.html");
                }
            }


        }
        if (!g) {
            for (var i = 0; i < istifadeciler.length; i++) {
                if(mail==istifadeciler[i].email){
                    if(pass==istifadeciler[i].password){
                    window.location.assign("Final/indexz.html");
                    h=true;
                    }
                }
            }
        }
        if(!h){
            alert("bele bir istifadeci yoxdur!!!")
        }
    })



})
