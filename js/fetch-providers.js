const urlH = 'https://reqres.in/api/users';


const getUsuario = async(id) => {

    let resp = await fetch(`${urlH}/${id}`);
    const { data } = await resp.json();

    return data;

}
 getUsuario(3);



 const registrar = async( usuario ) => {

    const resp = await fetch( urlH, {

        method: 'POST',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type' : 'application/json'
        }
    } );

      return await resp.json();

 }

 registrar({
     "name":"Hernasy",
     "job" : "gonzalez"
 })



 const updateUser = async(id , usuario) => {

    const resp = await fetch(`${urlH}/${id}`, {

        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type':'application/json'
        }
    });

    return await resp.json();

 }


 updateUser(3 , {
     "name":"jose",
     "job":"alfato"
 })

  

 const deleteUser = async(id) => {

    const resp = await fetch(`${urlH}/${id}`, {
        method: 'DELETE'
    })

     return (resp.ok)? 'BORRADO' : 'no existe el usuario';

 }

 deleteUser(12000);