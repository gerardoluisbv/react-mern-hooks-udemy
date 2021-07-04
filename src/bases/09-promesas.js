import { getHeroeById } from './bases/08-imp-exp'

/*const promesa = new Promise( (resolve, reject) => {
    setTimeout( () =>  {
        const h1 = getHeroeById(2);
        resolve(h1);
        //resolve ('No se pudo encontrar al heroe');

    }, 2000)
});

promesa.then( (heroe) => {
    console.log('heroe', heroe)
})
.catch( err => console.warn( err ));
*/

const getHeroeByIdAsync = (id) => {
    
    return new Promise( (resolve, reject) => {
    
        setTimeout( () =>  {
            const h1 = getHeroeById(id);
            if (h1){
                resolve(h1);
            } else {
                reject ('No se pudo encontrar al heroe');
            }
                
        }, 2000)
    });
}

getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn)








