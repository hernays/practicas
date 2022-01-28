const urlH = 'https://reqres.in/api/users';


const getUsuario = async(id) => {

    let resp = await fetch(`${urlH}/${id}`);
    const { data } = await resp.json();

    return data;

}
 getUsuario(3).then(console.log);



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
 }).then(console.log);



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
 }).then(console.log);

  

 const deleteUser = async(id) => {

    const resp = await fetch(`${urlH}/${id}`, {
        method: 'DELETE'
    })

    console.log(resp)

     return (resp.ok)? 'BORRADO' : 'no existe el usuario';

 }

 deleteUser(12000).then(console.log);