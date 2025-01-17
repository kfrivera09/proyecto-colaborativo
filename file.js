
const fs = require('fs');

// 1. Crea un archivo de texto
fs.writeFile('datos.txt', 'Bienvenido al manejo de archivos en Node.js', (err) => {
  if (err) {
    console.error('Error al crear el archivo:', err);
  } else {
    console.log('Archivo creado exitosamente');
  }
});

// 2. Lee el contenido del archivo
fs.readFile('datos.txt', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
  } else {
    console.log('Contenido del archivo:');
    console.log(data.toString());
  }
});

// 3. Actualiza el contenido del archivo
fs.appendFile('datos.txt', '\nEste archivo ha sido actualizado exitosamente.', (err) => {
  if (err) {
    console.error('Error al actualizar el archivo:', err);
  } else {
    console.log('Archivo actualizado exitosamente');
  }
});

// 4. Renombra el archivo
fs.rename('datos.txt', 'archivo_actualizado.txt', (err) => {
  if (err) {
    console.error('Error al renombrar el archivo:', err);
  } else {
    console.log('Archivo renombrado exitosamente');
  }
});

// 5. Elimina el archivo
fs.access('archivo_actualizado.txt', (err) => {
  if (err) {
    console.error('Error al acceder al archivo:', err);
  } else {
    fs.unlink('archivo_actualizado.txt', (err) => {
      if (err) {
        console.error('Error al eliminar el archivo:', err);
      } else {
        console.log('Archivo eliminado exitosamente');
      }
    });
  }
});
