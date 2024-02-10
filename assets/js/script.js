let tareaInput = document.querySelector("#input_tarea")
let btnAgregaTarea = document.querySelector("#btn_agrega_tarea")
let listaTareas = document.querySelector("#lista_tareas")
let datosTareas = document.querySelector("#datos")

const tareas = []

btnAgregaTarea.addEventListener("click",()=>{
    const nuevaTarea = tareaInput.value
    tareas.push({ id: Date.now(), nombre: nuevaTarea, estado: false });
    tareaInput.value = ""
    let html = ""
    for(tarea of tareas){
        html = tarea.nombre
    }
    listaTareas.innerHTML += html
})