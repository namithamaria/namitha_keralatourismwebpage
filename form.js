let email=document.getElementById("email");
let error=document.getElementById("error");
let pass=document.getElementById("pwd");
//let email=document.getElementById("email");
//let errorp=document.getElementById("errorp");
//let password=document.getElementById("pass");
 function notEmpty(){
    // if(email.value.trim==""||pass.value.trim=="")
    // {
    //    alert("Fields Cannot Be Empty");
    //    return false;
    // }
    // else{
    //     alert("Succesful Submission");
    //     return true;
    // }
     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
      if(regexp.test(email.value)){
          error.innerHTML="Valid";
          error.style.color="green";
          return true;
      }
      else{
          error.innerHTML="Invalid Email Address";
          error.style.color="red";
          return false;
      }
    }
    
                
        