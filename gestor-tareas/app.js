const chalk = require('chalk');
const readline = require('readline');
const gestorTareas = require('./gestorTareas');

const tareas = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const mostrarMenu = () =>{
    console.log(chalk.yellow('Gestor De Tareas'));
    console.log('1. Agregar Tarea');
    console.log('2. Listar Tareas');
    console.log('3. Marcar Tarea Como Completada');
    console.log('4. Eliminar Tarea');
    console.log('0. Salir de la applicacion');  
    
    rl.question('Ingrese una opción: ', (opcion) => {
        switch (opcion) {
          case '1':
            agregarTarea();
            break;
          case '2':
            listarTareas();
            break;
          case '3':
            marcarCompletada();
            break;
          case '4':
            eliminarTarea();
            break;
          case '0':
            salir();
            break;
          default:
            console.log(chalk.red('Opción inválida'));
        }
        mostrarMenu();
      });
    };
    
    mostrarMenu();
    

const agregarTarea = () => {
    rl.question('Ingresee el titulo de la tarea: ', (titulo) =>{
        rl.question('Ingrese la descripcion de la tarea: ', (descripcion) => {
            tareas.push(gestorTareas.agregarTarea(tareas, titulo, descripcion));
            console.log(chalk.green('Tarea agregada con exito'));
            mostrarMenu();
        });
    });
};

const listarTareas = () => {
    gestorTareas.listarTareas(tareas);
    mostrarMenu();
};

const marcarCompletada = () => {
    rl.question('Ingrese el ID de la tarea a marcar como completada: ', (id) => {
      tareas = gestorTareas.marcarCompletada(tareas, id);
      console.log(chalk.green('Tarea marcada como completada con éxito'));
      mostrarMenu();
    });
  };

  const eliminarTarea = () => {
    rl.question('Ingrese el ID de la tarea a eliminar: ', (id) => {
      tareas = gestorTareas.eliminarTarea(tareas, id);
      console.log(chalk.green('Tarea eliminada con éxito'));
      mostrarMenu();
    });
  };

  const salir = () => {
    console.log(chalk.red('Adiós'));
    rl.close();
  };
 


    