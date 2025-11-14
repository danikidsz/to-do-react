import React from 'react'

import "./TaskCard.css"

import Tag from './Tag'

import deleteIcon from '../src/assets/delete.png'

const TaskCard = ({ title, handleDelete, index, description, deadline, priority }) => {
  let priorityLabel = "";
  let priorityClass = "";

  switch (priority) {
    case "low":
      priorityLabel = "Baja";
      priorityClass = "priority-low";
      break;
    case "medium":
      priorityLabel = "Media";
      priorityClass = "priority-medium";
      break;
    case "high":
      priorityLabel = "Alta";
      priorityClass = "priority-high";
      break;
    default:
      priorityLabel = "Sin prioridad";
      priorityClass = "priority-none";
  }


  return (
    <article className='task_card'>

      <h2 className='task_text'>{title}</h2>
      <p className='task_description'>{description} </p>
      <p className={`task_priority ${priorityClass}`}>
        Prioridad: {priorityLabel}
      </p>
      
      {deadline && (
        <p className='task_deadline'>
          📅 {new Date(deadline).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </p>
      )}
      <div className='task_card_bottom_line'> </div>

      <div className='task_delete' onClick={() => handleDelete(index)}>
        <img src={deleteIcon}
          className='delete_icon' alt="" />
      </div>
    </article>
  )
}

export default TaskCard