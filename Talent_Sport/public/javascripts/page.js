function validate(){
    var mail = document.login.emailLogin.value;
    var password = document.login.passLogin.value;

    var status = false;
alert("hello ");
    if(mail.length > 1){
        document.getElementById("mailmsg").innerHTML ="<img src='/images/checked.png' style='height:10px;width:10px;' />";
        status = true;
    }
    else {
        document.getElementById("mailmsg").innerHTML ="<img src='/images/unchecked.png' style='height:10px;width:10px;' /> Please enter your username" ;
        status= false;
    }

    if(password.length < 6 ){
        document.getElementById("passmsg").innerHTML ="<img src='/images/unchecked.png' style='height:10px;width:10px;'/> Password must be at least 6 char long";
        status = false;
    }
    else {
        document.getElementById("passmsg").innerHTML ="<img src='/images/checked.png' style='height:10px;width:10px;'/> ";

    }
    return status;
}
function validateRegistration(){
    var mail = window.document.register.email.value;
    var password = window.document.register.password.value;
    var retype_pass = window.document.register.retype-password.value;
    var name = window.document.register.FullName.value;
    var username = document.register.Username.value;
    var nationality = document.register.Nationality.value;
    var position = document.register.position.value;


    var status = false;
    alert("hello ");
    if(name == ""){
        document.getElementById("fullnamemsg").innerHTML ="<img src='/images/checked.png' style='height:10px;width:10px;' /> ";
        status = true;
    }
    else {
        document.getElementById("fullnamemsg").innerHTML ="<img src='/images/unchecked.png' style='height:10px;width:10px;' /> Please enter your Full name" ;
        status= false;
    }

    if(mail == ""){
        document.getElementById("mailmsg").innerHTML ="<img src='/images/checked.png' style='height:10px;width:10px;' /> ";
        status = true;
    }
    else {
        document.getElementById("mailmsg").innerHTML ="<img src='/images/unchecked.png' style='height:10px;width:10px;' /> Please enter your email" ;
        status= false;
    }
    if(username == ""){
        document.getElementById("usermsg").innerHTML ="<img src='/images/checked.png' style='height:10px;width:10px;' /> ";
        status = true;
    }
    else {
        document.getElementById("usermsg").innerHTML ="<img src='/images/unchecked.png' style='height:10px;width:10px;' /> Please enter your username" ;
        status= false;
    }
    if(nationality == ""){
        document.getElementById("nationalitymsg").innerHTML ="<img src='/images/checked.png' style='height:10px;width:10px;' /> ";
        status = true;
    }
    else {
        document.getElementById("nationalitymsg").innerHTML ="<img src='/images/unchecked.png' style='height:10px;width:10px;' /> Please enter your Nationality" ;
        status= false;
    }

    if(position == ""){
        document.getElementById("positionmsg").innerHTML ="<img src='/images/checked.png' style='height:10px;width:10px;' /> ";
        status = true;
    }
    else {
        document.getElementById("positionmsg").innerHTML ="<img src='/images/unchecked.png' style='height:10px;width:10px;' /> Please enter your Position" ;
        status= false;
    }

    if(password.length < 6 ){
        document.getElementById("passmsg").innerHTML ="<img src='/images/unchecked.png' style='height:10px;width:10px;'/> Password must be at least 6 char long";
        status = false;
    }
    else {
        document.getElementById("passmsg").innerHTML ="<img src='/images/checked.png' style='height:10px;width:10px;'/> ";

    }
    if(password == retype_pass) {
        document.getElementById("repassmsg").innerHTML = "<img src='/images/checked.png' style='height:10px;width:10px;'/> ";

    }
    else{
        document.getElementById("repassmsg").innerHTML = "<img src='/images/checked.png' style='height:10px;width:10px;'/> password is not the same ";
    }
    return status;
}

function preview(data){
    if(data.files && data.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            $("#profileImage").attr('src',e.target.result);
        }
        reader.readAsDataURL(data.files[0])
    }

}
$("#imageUpload").change(function () {
    preview(this)

});
