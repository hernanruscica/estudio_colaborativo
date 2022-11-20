function validaRegistro(){
    const nombre=document.getElementById("nombre").value
    const apellido=document.getElementById("apellido").value
 
    if(apellido==""){
        alert("Debe completar este campo")
        return false 
     }
     else{ 
        return true
     }
 
     if(nombre==""){
       alert("Debe completar este campo")
       return false 
    }
    else{
       return true
    }
 }