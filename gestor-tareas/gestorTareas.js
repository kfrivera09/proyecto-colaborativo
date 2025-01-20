const uuid = require('uuid');

const agregarTarea = (tareas, titulo, descripcion) => {
  const nuevaTarea = {
    id: uuid.v4(),
    titulo,
    descripcion,
    completada: false,
  };
  tareas.push(nuevaTarea);
  return tareas;
};

const listarTareas = (tareas) => {
    console.log('Tareas:');
    tareas.forEach((tarea, indice) => {
      console.log(`${indice + 1}. ${tarea.titulo} - ${tarea.descripcion} - ${tarea.completada ? 'Completada' : 'Pendiente'}`);
    });
  };
  
  const marcarCompletada = (tareas, id) => {
    const indiceTarea = tareas.findIndex((tarea) => tarea.id === id);
    if (indiceTarea !== -1) {
      tareas[indiceTarea].completada = true;
    }
    return tareas;
  };
  
  const eliminarTarea = (tareas, id) => {
    const indiceTarea = tareas.findIndex((tarea) => tarea.id === id);
    if (indiceTarea !== -1) {
      tareas.splice(indiceTarea, 1);
    }
    return tareas;
  };
  
  module.exports = {
    agregarTarea,
    listarTareas,
    marcarCompletada,
    eliminarTarea,
  };
  