
const getImagen = async() => {
    try {

        const apiKey = 'Hn15UQLWUTekfQCtI7MLm89zxqzIPu5h';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.log(error)
    }
}

getImagen();

