
function validar(){
   const titulo=document.getElementById("titulo").value
   const message=document.getElementById("message").value

   if(message==""){
       alert("Debe completar este campo")
       return false 
    }
    else{
       return true
    }

    if(titulo==""){
      alert("Debe completar este campo")
      return false 
   }
   else{
      return true
   }
}