$('#signUpButton').click(()=>{
    let user={};
    user.firstname=$('#firstName').val();
    user.lastname=$('#lastName').val();
    user.email=$('#emailId').val();
    user.password=$('#password').val();

   $.post('http://localhost:1212/api/users/',user,(data)=>{
  
    if(data.success)
    {
      alert('Registration Successful. Thank you :) ');
    
      window.location = "http://localhost:1212/UserUI/Login/Login.html";

    }else
    {
      alert(data.message)
    }
     
   }
   )
})