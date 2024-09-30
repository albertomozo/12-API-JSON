const busqueda = document.querySelector('#search')
let clase;
function manejarEvento(e) {
     // Verificar si el evento es de la tecla "Enter"
     if (e.type === 'keypress' && e.key !== 'Enter') {
        return; // Solo continuar si se presiona "Enter"
    }
    mensaje = document.getElementById('txt1').innerHTML;
    console.log(mensaje);
     document.getElementById('txt1').innerHTML = mensaje +`<p>Mira la consola, evento ${e.type}</p>`;
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

}

// Añadir los eventos
busqueda.addEventListener('blur', manejarEvento); // Cuando pierde el foco
busqueda.addEventListener('click', manejarEvento); // Cuando hace clic
busqueda.addEventListener('keypress', manejarEvento); // Cuando se presiona una tecla
