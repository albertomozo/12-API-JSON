const busqueda = document.querySelector('#search')
let clase;
busqueda.addEventListener('blur',(e)=>{
    fetch(busqueda.value)
    .then(response => {
        if (response.ok)
        return response.text()
        else
        throw new Error(response.status);
    })
    .then(data => {
        
        clase=JSON.parse(data);
        console.log(clase);
        console.log('📘📘📘📘recorrer()📘📘📘📘');
        //recorrerObjeto(clase) ;
        recorrerObjetoNivel(clase,0,10) ;
        console.log('📒📒📒📒recorrerRuta()📒📒📒📒');
        //recorrerObjetoRuta(clase) ;
        recorrerObjetoRutaCorchetes(clase) ;
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
    });

    })