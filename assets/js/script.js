

let tareaInput = document.querySelector("#input_tarea");        //variables de reuso del dom
let btnAgregaTarea = document.querySelector("#btn_agrega_tarea");
let listaTareas = document.querySelector("#lista_tareas");
let datosTareas = document.querySelector("#datos");

const tareas = [{ id: 1, nombre: 'Estudiar', estado: false },{ id: 2, nombre: 'ejercicio', estado: false },{ id: 3, nombre: 'clase', estado: false }]; // constante base para inicio de tareas

let contador = 0; // el contador de las tareas realizadas


//renderiza el estado de los elementos
function renderTareas() {
  let html = "";
  headLista = `<table class='table table-responsive'><tr><th> Eliminar</th><th>Realizada</th><th>ID</th><th>Nombre</th></tr>`;
  footerLista = `</table>`;

  for (tarea of tareas) {
    if (tarea.estado == false) {
      html += `<tr><td><button id="bot-rar" class='btn btn-danger btn-lg' onclick="borrar(${tarea.id})"> eliminar</button></td><td><button class='btn btn-success btn-lg'onclick="actualizaEstado(${tarea.id})">Realizada</button></td><td>${tarea.id}</td><td>${tarea.nombre}</td></tr>`;
    } else {
      html += `<tr><td><button id="bot-rar"  class="btn btn-danger btn-lg"onclick="borrar(${tarea.id})"> eliminar</button></td><td><div class="alert alert-success" role="alert">Tarea Realizada</div></td><td>${tarea.id}</td><td>${tarea.nombre}</td></tr>`;
    }
  }

  listaTareas.innerHTML = headLista + html + footerLista;
}


//agregamos las tareas
btnAgregaTarea.addEventListener("click", () => {
  const nuevaTarea = tareaInput.value;
  tareas.push({ id: Date.now(), nombre: nuevaTarea, estado: false });
  tareaInput.value = "";
  totalTareas = tareas.length; //en cada accion como agregar una lista o borrar un elemento se actualiza el total de tareas y realizadas
  datosTareas.innerHTML = `
      <p>Total: ${totalTareas}</p>
      <p>Realizadas: ${contador}</p>`;
  renderTareas();
});


//funcion para borrar
function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);

if(tareas[index].estado == true){
    contador--
}

  tareas.splice(index, 1);

  totalTareas = tareas.length; //en cada accion como agregar una lista o borrar un elemento se actualiza el total de tareas y realizadas

  datosTareas.innerHTML = `
      <p>Total: ${totalTareas}</p>
      <p>Realizadas: ${contador}</p>`;
  renderTareas();
}


//funcion para actualizar el estado de la tarea si se realizó o no
function actualizaEstado(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tarea = tareas[index];

  if (!tarea.estado) {
    contador++;
  }

  tarea.estado = true;

  totalTareas = tareas.length;
  datosTareas.innerHTML = `
      <p>Total: ${totalTareas}</p>
      <p>Realizadas: ${contador}</p>`;
      
  renderTareas();
}


//función carga el inicio con los elementos necesarios
function inicio (){
   
    totalTareas = tareas.length;
    datosTareas.innerHTML = `
        <p>Total: ${totalTareas}</p>
        <p>Realizadas: ${contador}</p>
        `;
        renderTareas();
}

window.onload = inicio()