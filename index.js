function registerUser(){
    var data = {};
    data.name = document.querySelector("#uname").value;
    data.password = document.querySelector("#upassword").value;
    if( data.name == ""){
        document.querySelector("#userNameErr").style.display = "block";
        return;
    } else if(data.password == ""){
        document.querySelector("#userPassErr").style.display = 'block';
    }
    showMsg();
    showdata();
}
function showMsg(){
    document.querySelector("#userMsg").style.display = "block";
}
function validateType(event){
    if(event.charCode >=48 && event.charCode <=57){
        return false;
    }else{
        return true;
    }
}

