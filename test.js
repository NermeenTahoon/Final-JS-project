////===========================================Start Contact us form validation============================////////
///////////////////name valid
let username = document.getElementById("inputname");
let nameMsg = document.getElementById("nameMsg");
submit.addEventListener("click",function(){
  if (username.value.length==0) {
    nameMsg.innerHTML="Full name is required";
    nameMsg.style.display="block";
  }
  else if(!(isNaN(username.value))){
    nameMsg.innerHTML = "Name must be character";
    nameMsg.style.display="block";
  }
  else{
    nameMsg.style.display = "none";
  }
});

/////email valid
let emailinput = document.getElementById("inputemail");
let emailMsg = document.getElementById("emailMsg");
submit.addEventListener("click",function(){
  if (emailinput.value.length==0){
    emailinput.innerHTML = "Email is required";
    emailMsg.style.display = "block";
  } else{
    emailMsg.style.display ="none";
  }
});

///////phone valid
let password = document.getElementById("inputpassword");
let passwordMsg = document.getElementById("passwordMsg"); 
submit.addEventListener("click", function(){
  if(password.value.length==0){
    password.innerHTML = "password is required";
    passwordMsg.style.display = "block";
  } else{
    passwordMsg.style.display = "none";
  }
});
//////////////////////////End Contact us form validation//////////////////////////