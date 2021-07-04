// import { heroes } from './data/heroes'
//import { heroes } from './data/heroes'
//import   heroes, { owners }  from '../data/heroes'
import   heroes  from '../data/heroes'

//console.log( owners )

/*const getHeroeById = (id) => {
        return heroes.find( ( heroe ) => {
            if ( heroe.id === id ) {
                return true;
            } else {
                return false;
            }
        } );
}*/

export const getHeroeById = (id) =>  heroes.find( ( heroe ) => heroe.id === id );

export const getHeroeByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );

//console.log( getHeroeByOwner('Marvel') );

//console.log( getHeroeById(2) );