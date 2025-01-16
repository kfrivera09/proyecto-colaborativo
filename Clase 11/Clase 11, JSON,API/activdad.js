
// actividad 1. conexion con el JSON externo, llamar titulo del arreglo y mostrar posibles errores si los hay
function actividad1 (event){

fetch ('https://jsonplaceholder.typicode.com/posts')
.then (response => response.json())
.then (title => {
    title.forEach(t => {
        console.log(t.title);
    });
})
.catch (error => console.error('error al obtener datos: ', error));
}

function actividad2 (event){

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
  // Filtra los usuarios cuyo nombre contenga la palabra "Leanne"
  const filteredUsers = data.filter(user => user.name.toLowerCase().includes('leanne'));

  // Muestra en la página un mensaje indicando cuántos usuarios coinciden con el filtro
  console.log(`Se encontraron ${filteredUsers.length} usuarios que coinciden con el filtro.`);
  filteredUsers.forEach(user => {
    console.log(`Nombre: ${user.name} - Correo electrónico: ${user.email}`);
  });
})
.catch(error => console.error('Error:', error));
}

function actividad3 (event){
    const formulario = document.getElementById('formulario');
    const mensaje = document.getElementById('mensaje');
    
    formulario.addEventListener('submit', (e) => {
      e.preventDefault();
    
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
    
      const usuario = {
        name: nombre,
        email: correo
      };
    
      fetch('(link unavailable)', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      })
      .then(response => response.json())
      .then(data => {
       console.log = 'Usuario agregado con éxito!';
      })
      .catch(error => {
        mensaje.innerHTML = 'Error al agregar usuario: ' + error;
      });
    });
    
}