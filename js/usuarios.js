
const urlGlobal = 'https://reqres.in/api/users?page=2';
const table = document.querySelector('table');

let img = '';



const crearTablaHtml = async(nombre , apellido , email , avatar) => {

    const div = document.createElement('tbody');

    if(nombre.length > 0 ){
        const html = `
 
    <tr>
      <td><img class="fotos" src="${avatar}" alt="Cargando..."></td>
      <td>${nombre}</td>
      <td>${apellido}</td>
      <td>${email}</td>
    </tr>
    
    `;

    div.innerHTML = html;
    table.append(div.firstElementChild);  
       
    }else{
        console.log('no hay usuarios')
    }

    

}





const Usuarios = async() => {

    let resp = await fetch(urlGlobal);
    const { data }= await resp.json();

    return data;

}


const crearTable = async() => {

    const usuarios = await Usuarios();
      for(let datos in usuarios){

        const { first_name , last_name , email , avatar } = usuarios[datos];
        crearTablaHtml(first_name , last_name , email , avatar);

      }

     return true;

}


crearTable();



