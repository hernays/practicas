
const url = 'https://api.chucknorris.io/jokes/random';

const ul = document.querySelector('ul');
const button = document.querySelector('button');



// funciones HTML
const crearHTML = (id , value) => {

    const div = document.createElement('div');
     
         return  div.innerHTML = `<li>
                             <b>${id}</b>
                             <p>${value}</p>
                            </li>`;
}


// peticiones fetch

const recibirChiste = async() => {

    try{
        let resp = await fetch(url);
        resp = await resp.json();
        return resp;

    }catch(err){
          return 'algo esta mal';
    }
    
}


// eventos


button.addEventListener('click', () => {

    recibirChiste().then( (resp) => {
             
        const { id , value } = resp;

         const li = crearHTML( id , value);
        ul.innerHTML = li;

    })
   

})


