function validate()
{
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if(username.value =="saheb0106" && password.value=="Saheb2021")
    {
        // alert("login successful");
        document.forms[0].action = "Click Package/indexsaheb.html";
        return true;
    }
    else if(username.value == "bikramjit0106" && password.value == "Bikramjit2021")
    {
        document.forms[0].action = "Click Package/indexbikramjit.html";
        return true;
    }
    else if(username.value == "subrata0206" && password.value == "Subrata2021")
    {
        document.forms[0].action = "Click Package/indexsubrata.html";
        return true;
    }
    else if(username.value == "shubojeet0206" && password.value == "Shubojeet2021")
    {
        document.forms[0].action = "Click Package/indexshubojeet.html";
        return true;
    }
    else if(username.value.length<5 && password.value.length<5)
    {
        alert("Username and Password too short!!!");
        return false;
    }
    else
    {
        alert("Login Failed");
        return false;

    }


}
//Show Password
// var state = false;
// function showpassword(){
//     if(state){
//         document.getElementById("password").setAttribute("type", "password");
//         state = false;
//     }
//     else{
//         document.getElementById("password").setAttribute("type", "text");
//         state = true;
//     }
// }
$(document).ready(function(){
    const password = $('#password');
    $("#eye").click(function(){
        if(password.prop('type')=='password'){
            $(this).addClass('fa-eye-slash');
            password.attr('type','text');
        }
        else{
            $(this).removeClass('fa-eye-slash');
            password.attr('type','password');
        }
    })
})