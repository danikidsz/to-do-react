import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskForm = ({ setTasks }) => {

    const [taskData, setTaskData] = useState({
        task: "",
        description: "",
        status: "todo",
        deadline: null,
        priority: "low",
    }
    );


    const App = () => {
        const [selectedDate, setDate] = useState(null);
        return (
            <div>
                <DatePicker selected={selectedDate} onChange={(date) => setDate(date)} />
            </div>
        );
    };





    const handleChange = (e) => {
        const { name, value } = e.target;

        setTaskData((prev) => {
            return { ...prev, [name]: value };
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(prev => {
            return [...prev, taskData];
        });
        setTaskData({

            task: "",
            description: "",
            status: "todo",
            tags: [],
            deadline: null,
        })

    };

    return (
        <main className="app_main">
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="task"
                    value={taskData.task}
                    className="task_input"
                    placeholder="Introduce tu tarea"
                    onChange={handleChange} />

                <input type="text"
                    name="description"
                    value={taskData.description}
                    className="task_input_description"
                    placeholder="Descripción de tu tarea"
                    onChange={handleChange} />

                <div className="row g-2 align-items-center mb-3 justify-center-row">

                    <div className="col-12 col-md-4">   {/* 👇🏼 Aquí el DatePicker */}
                        <DatePicker
                            selected={taskData.deadline}
                            onChange={(date) => setTaskData((prev) => ({ ...prev, deadline: date }))}
                            className="form-control"
                            placeholderText="Fecha límite"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center gap-2 my-2">
                            <span className="text-muted small">Prioridad:</span>

                            <div className="btn-group priority-group" role="group" aria-label="Prioridad">
                                {/* Baja */}
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="priority"
                                    id="prio-low"
                                    autoComplete="off"
                                    checked={taskData.priority === "low"}
                                    onChange={() => setTaskData(p => ({ ...p, priority: "low" }))}
                                />
                                <label
                                    className={`btn btn-outline-success ${taskData.priority === "low" ? "active" : ""}`}
                                    htmlFor="prio-low"
                                >
                                    Baja
                                </label>

                                {/* Media */}
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="priority"
                                    id="prio-medium"
                                    autoComplete="off"
                                    checked={taskData.priority === "medium"}
                                    onChange={() => setTaskData(p => ({ ...p, priority: "medium" }))}
                                />
                                <label
                                    className={`btn btn-outline-warning ${taskData.priority === "medium" ? "active" : ""}`}
                                    htmlFor="prio-medium"
                                >
                                    Media
                                </label>

                                {/* Alta */}
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="priority"
                                    id="prio-high"
                                    autoComplete="off"
                                    checked={taskData.priority === "high"}
                                    onChange={() => setTaskData(p => ({ ...p, priority: "high" }))}
                                />
                                <label
                                    className={`btn btn-outline-danger ${taskData.priority === "high" ? "active" : ""}`}
                                    htmlFor="prio-high"
                                >
                                    Alta
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-4">
                        <select name="status"
                            value={taskData.status}
                            className='task_status'
                            onChange={handleChange}>
                            <option value='todo'>Pendiente</option>
                            <option value='doing'>En proceso</option>
                            <option value='done'>Completado</option>
                        </select>
                    </div>
                </div>
                <div className='task_form_bottom_line'>





                    <button type="submit" className='task_submit'>
                        + Añadir tarea
                    </button>


                </div>
            </form>
        </main>
    )
}

export default TaskForm