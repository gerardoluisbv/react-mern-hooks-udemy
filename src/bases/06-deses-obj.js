
// Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
}


//const { edad, clave, nombre, } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const usaContext = ( { clave, nombre, edad, rango = 'capitan'  } ) => { 
    
    //console.log(nombre, edad, rango )
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { nombreClave, anios, latlng: {lat, lng} } = usaContext( persona );

console.log(nombreClave, anios)

console.log(lat,lng)







