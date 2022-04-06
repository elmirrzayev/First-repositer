$(document).ready(function () {
    let k = 1;
    var emailb = false;
    var passwordb = false;
    var nameb = false;
    //email warning
    $("#email").blur(function () {
        let email = $("#email").val();
        if (email == "") {
            $("#first").removeClass("d-none");
            $("#email").addClass("red-border");
        }
    })
    $("#email").focus(function () {
        $("#first").addClass("d-none");
        $("#email").removeClass("red-border");
    })
    //Password Warning(submit)
    $("#password").blur(function (e) {
        e.preventDefault;
        let password = $("#password").val();
        if (password == "") {
            $("#warning").removeClass("d-none");
            $("#password").addClass("red-border");
            console.log("test");
        }
    })
    $("#name").blur(function (e) {
        e.preventDefault;
        let name = $("#name").val();
        if (name == "") {
            $("#firstr").removeClass("d-none");
            $("#name").addClass("red-border");
            // console.log("test");
        } else {
            $("#name").removeClass("red-border");
            $("#firstr").addClass("d-none");
            $("#name").addClass("border-success");
            $("#checkg").removeClass("d-none");
            nameb = true ;
        }
       


    })
    //password focus
    $("#password").focus(function () {
        $("#warning").addClass("d-none");
        $("#password").removeClass("red-border");
    })

    $("#password").keyup(function () {
        var g = $("#password").val();
        if (g.length < 6 || 12 < g.length) {
            $(".signg").removeClass("d-none");
            $("#warning").removeClass("d-none");
            $("#password").addClass("red-border");
        } else if (g.length >= 6 && 12 >= g.length) {
            $(".signg").addClass("d-none");
            $("#checkz").removeClass("d-none");
            $("#password").removeClass("red-border");
            $("#password").addClass("border-success");
            passwordb = true;
        }
    });


    $("#email").keyup(function () {
        var h = $("#email").val();
        var l = h.indexOf("@");
        if (l == -1) {
            $("#emailHelp").removeClass("d-none");
            $("#first").removeClass("d-none");
            $("#email").addClass("red-border");
            $("#emailHelper").addClass("d-none");
        } else if (l == h.length - 1) {
            $("#emailHelper").removeClass("d-none");
            $("#emailHelp").addClass("d-none");
            $("#first").removeClass("d-none");
        } else {
            $("#emailHelp").addClass("d-none");
            $("#emailHelper").addClass("d-none");
            $("#email").removeClass("red-border");
            $("#email").addClass("border-success");
            $("#first").addClass("d-none");
            $("#check").removeClass("d-none");
            emailb = true;
        }
    })
    $("#login").click(function (e) {
        e.preventDefault();
      window.location.assign("login.html");
    })
    $("#create").click(function(e){
        if (emailb&&passwordb&&nameb) {
            k=Number(localStorage.getItem(`number`))+1;
            localStorage.setItem(`user${k}-name`,$("#name").val());
            localStorage.setItem(`user${k}-email`,$("#email").val());
            localStorage.setItem(`user${k}-password`,$("#password").val());
            localStorage.setItem(`number`,k)
        }else {
            alert("False error 404");
        }
    })
});


// console.log(h.charAt("@"))