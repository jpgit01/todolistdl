let tareaInput = document.querySelector("#input_tarea")
let btnAgregaTarea = document.querySelector("#btn_agrega_tarea")
let listaTareas = document.querySelector("#lista_tareas")
let datosTareas = document.querySelector("#datos")

const tareas = []


function renderTareas(){
    let html = ""
    headLista = `<table class='table table-responsive'>
    <tr>
        <th>
            Eliminar
        </th>
        <th>
            Realizada
        </th>
        <th>
            ID
        </th>
        <th>
            Nombre
        </th>
    </tr>
        `;

footerLista = `</table>`;

    for(tarea of tareas){
        html += `<tr>
        <td>
            <button class='btn btn-danger' onclick="borrar(${tarea.id})"> eliminar</button>
        </td>
        <td>
            <button class='btn btn-success' onclick="actualizaEstado(${tarea.id})">Realizada</button>
            </td>
        <td>
            ${tarea.id}
        </td>
        <td>
            ${tarea.nombre}
        </td>
    </tr>`;
    }
    listaTareas.innerHTML = headLista + html + footerLista
}

btnAgregaTarea.addEventListener("click",()=>{
    const nuevaTarea = tareaInput.value
    tareas.push({ id: Date.now(), nombre: nuevaTarea, estado: false });
    tareaInput.value = ""
    renderTareas()
})

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    renderTareas();
  }
  
  function actualizaEstado(id){
    const index = tareas.findIndex((ele)=>ele.id == id);
    tarea = tareas[index]
    tarea.estado = true
    renderTareas();
    console.log(tareas)
  }