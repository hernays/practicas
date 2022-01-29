
const url = 'https://api.chucknorris.io/jokes/random';

const ul = document.querySelector('ul');
const button = document.querySelector('button');

const body = document.body;

const upload_preset = 'izofbcsw';
const urlCloudinary = 'https://api.cloudinary.com/v1_1/mas58/upload';



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




const crearHtmlClaudinary = () => {

    const div = document.createElement('div');

    const html = `

         <h1> Subir imagen </h1>

         <hr>
         
         <label>Carga tu Imagen</label>
         <br>
         <input id='files' type="file"/>
    
    
    `;

    div.innerHTML = html;

    div.classList.add('div');

    body.append(div);

}


const crearEventos = async() => {

   const file = document.querySelector('#files');

   file.addEventListener('change', (event) => {

    const imgClau = event.target.files[0];

    subirImg(imgClau);


   });


}

const subirImg = async(imgClau) => {

    const formData = new FormData();
    formData.append('upload_preset', upload_preset);
    formData.append('file', imgClau);

    try{

        const resp = await fetch(urlCloudinary , {
            method: 'POST',
            headers: formData
        });

        if(resp.ok){

            const img = await resp.json();
            console.log(img);

        }else{
            throw await resp.json();
        }


    }catch(err){
        console.log(err);
    }

}

crearHtmlClaudinary();
crearEventos();

