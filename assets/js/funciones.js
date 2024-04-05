function recorrerObjeto(objeto) {
    for (let propiedad in objeto) {
      if (typeof objeto[propiedad] === 'object') {
        recorrerObjeto(objeto[propiedad]); // llamada recursiva
      } else {
        console.log(propiedad + ': ' + objeto[propiedad]);
      }
    }
  }

  function recorrerObjetoNivel(objeto, nivel = 0, maximoNivel = 10) {
    // Si el nivel de recursividad ha alcanzado el máximo permitido, detener la recursión
    if (nivel > maximoNivel) {
      return;
    }
  
    // Recorrer las propiedades del objeto
    for (const propiedad in objeto) {
      if (typeof objeto[propiedad] === 'object') {
        // Si la propiedad es otro objeto, llamar a la función recursivamente
        recorrerObjetoNivel(objeto[propiedad], nivel + 1, maximoNivel);
      } else {
        // Si la propiedad es un valor primitivo, hacer algo con él
        console.log(`Nivel ${nivel}: ${propiedad}: ${objeto[propiedad]}`);
      }
    }
  }


  function recorrerObjetoRuta(objeto, ruta = []) {
    for (const clave in objeto) {
      const valor = objeto[clave];
      if (typeof valor === 'object') {
        // Si el valor es otro objeto, llamar a la función recursivamente
        const nuevaRuta = ruta.concat([clave]);
        recorrerObjetoRuta(valor, nuevaRuta);
      } else {
        // Si el valor es un valor primitivo, mostrar la clave y el valor
        const rutaCompleta = ruta.concat([clave]).join('.');
        console.log(`${rutaCompleta}: ${valor}`);
      }
    }
  }

  function recorrerObjetoRutaCorchetes (objeto, ruta = []) {
    for (const clave in objeto) {
      const valor = objeto[clave];
      if (typeof valor === 'object') {
        // Si el valor es otro objeto, llamar a la función recursivamente
        const nuevaRuta = ruta.concat([clave]);
        recorrerObjetoRutaCorchetes(valor, nuevaRuta);
      } else {
        // Si el valor es un valor primitivo, mostrar la clave y el valor
        const rutaCompleta = ruta.concat([`${clave}`]).join('][');
        console.log(`objeto[${rutaCompleta}] = ${valor}`);
      }
    }
  }