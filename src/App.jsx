import React, {useState, useEffect} from "react";

import "./App.css" 
import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";

import todoIcon from "../src/assets/clock-history.svg";
import doingIcon from "../src/assets/stopwatch-fill.svg";
import doneIcon from "../src/assets/check-circle-fill.svg";
import 'react-datepicker/dist/react-datepicker.css';

/* 
 Obtiene desde el localStorage la lista de tareas guardadas bajo la clave "tasks"
*/
const oldTasks = localStorage.getItem("tasks");

const App = () => {
  
  /*
  useState inicial:
 Convierte el string de "oldTasks" a un array usando JSON.parse.
*/
  const [tasks, setTasks] = useState(JSON.parse(oldTasks));

  /* Guardar la cantidad de tareas completadas, pendientes y en proceso.*/
  const totalTasks = tasks.length;
const completedTasks = tasks.filter(t => t.status === "done").length;
const pendingTasks = tasks.filter(t => t.status === "todo").length;
const inProgressTasks = tasks.filter(t => t.status === "doing").length;

const progress =
  totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  /*
  useEffect para sincronizar con localStorage:
  - Cada vez que cambie el estado "tasks", este efecto se ejecuta.
  - Convierte el array de tareas a un string JSON.
  - Guarda ese string en localStorage con la llave "tasks".
  - Así las tareas persisten incluso si recargás la página.
*/
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])



  /*
  - Recibe el índice de la tarea a eliminar.
  - Crea un nuevo arreglo filtrando todas las tareas excepto la que coincide con ese índice.
  - Actualiza el estado con la nueva lista.
*/
  const handleDelete = (taskIndex) => {
    const newTasks= tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)

  }

 
  
  return (


    <div className='app'>

  
      <nav className="navbar navbar-expand-lg bg-todo">

  <div className="container-fluid">
    <a className="navbar-brand titulo mx-auto" href="#">TaskFlow</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
</nav>
    
    {/* Resumen dinámico */}
<section className="summary-bar">
  <div className="summary-item">
    <span className="summary-label">Total:</span>
    <span className="summary-value">{totalTasks}</span>
  </div>

  <div className="summary-item">
    <span className="summary-label">Pendientes:</span>
    <span className="summary-value">{pendingTasks}</span>
  </div>

  <div className="summary-item">
    <span className="summary-label">En proceso:</span>
    <span className="summary-value">{inProgressTasks}</span>
  </div>

  <div className="summary-item">
    <span className="summary-label">Completadas:</span>
    <span className="summary-value">{completedTasks}</span>
  </div>

  <div className="summary-item">
    <span className="summary-label">Progreso:</span>
    <span className="summary-value">{progress}%</span>
  </div>
</section>
      
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>

        
        <TaskColumn title='Pendiente' icon={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn title='En proceso' icon={doingIcon}  tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn title='Completada' icon={doneIcon}  tasks={tasks} status="done" handleDelete={handleDelete}/>

       
      
      </main>
    </div>
  )
}
export default App 