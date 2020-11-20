let email=document.getElementById("email1");
let error=document.getElementById("errorp");
let pass=document.getElementById("pwd");
let errorc=document.getElementById("errorc");
   
 function notEmpty(){
   
     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
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
    // function phonenumber(inputtxt)
    //       {
    //     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    //     // /^([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
       
    //    if((inputtxt.value.match(phoneno)))
    //     {
    //       errorc.innerHTML="Valid";
    //       return true;
    //     }
    //      else
    //     {
    //     //alert("Not A Valid Number");
    //     errorc.innerHTML="Invalid";
    //        return false;
    //     }
    // }