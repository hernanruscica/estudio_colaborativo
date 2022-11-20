console.log("desde js");
document.addEventListener('click', ((e) => {
    console.log("click en el documento");
    if (e.target.id == "intereses-etiqueta"){
        console.log("click en una de las etiquetas");
        let etiqueta = e.target.dataset.id;
        let mensaje = `Hizo click en la etiqueta con el "DATA ATTRIBUTE" : ${etiqueta}.\nEsto llamaría al controlador encargado de buscar en el foro, las pueblicaciones correspondiente a esta etiqueta`;
        alert(mensaje);
    }
}))