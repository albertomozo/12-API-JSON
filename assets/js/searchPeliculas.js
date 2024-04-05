function searchPelis(){
    search = document.getElementById("search").value;
    //alert("Buscando " + search);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + TMDB_ACCESS_TOKEN
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=es&page=1`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            trespuesta= '';
            const numpagina = response.page;
            trespuesta += `<h3>Página : ${numpagina} de ${response.total_pages} </h3>`;
            trespuesta += `<p><b>Térmimo de busqueda :</b> ${search} </p>`;
            trespuesta += `<p>Resultados</p>`;
            peliculas = response.results;
            console.log(peliculas);
            trespuesta += '<ul>';
            peliculas.forEach(element => {
                console.log(element);
                trespuesta += '<li>' + element.original_title + '<button onclick="editPeli('+ element.id  +')">Grabar</button>'   +'</li>';
            });
            trespuesta += '</ul>';


            // mostrar resultados
            document.getElementById("resultado").innerHTML = trespuesta;
        
        
    })
        .catch(err => console.error(err));



}

function editPeli(peli){

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + TMDB_ACCESS_TOKEN
        }
      };
      
    fetch(`https://api.themoviedb.org/3/movie/${peli}?language=${TMDB_LANG}&page=1`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        trespuesta= JSON.stringify(response);
        // mostrar resultados
        document.getElementById("resultado").innerHTML = trespuesta;
    
    
    })
    .catch(err => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${peli}/credits?language=${TMDB_LANG}`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)   
    })

    /* fetch a creditos */



}


