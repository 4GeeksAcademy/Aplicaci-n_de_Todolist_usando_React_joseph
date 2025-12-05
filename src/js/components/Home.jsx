import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "/workspaces/Aplicaci-n_de_Todolist_usando_React_joseph/src/js/components/app.css"

//create your first component
const Home = () => {
	const [task, setTask]=useState("");
	const [taskList, setTaskList]=useState([
		{id: Date.now() +1, text: "hacer la tarea"},
		{id: Date.now() +2, text: "tocar la guitarra"},
		{id: Date.now() +3, text: "lavar los trastes"}
		]);
	const addTask = ()=> {
		if (task.trim () ==="") return;
		const nuevaTarea = {
			id: crypto.randomUUID (),
			text:task
	};
	setTaskList([...taskList, nuevaTarea]);
	setTask("");
};
	const deleteTask=(id) =>{
		setTaskList(taskList.filter((tarea) => tarea.id !== id));
	};
	return (
	<div className="todo-container text-center d-flex flex-column align-items-center">
					<h1 className= "text-center mt-5"> To do List </h1>
					
				<div className="w-75 w-md-50 w-lg-25 mx-auto">
					<input 
						type="text" 
						className="form-control" 
						placeholder="What needs to be done?"
						value={task}
						onChange={e  => setTask(e.target.value)}
						onKeyDown={(e) => e.key ==="Enter" && addTask()}
						aria-label="Nueva Tarea"
					/>

					<div className="d-flex justify-content-center mt-2">
						<button className="btn btn-primary mt-2" onClick={addTask}>
						Add Task {" "}
						<i className="fa-solid fa-plus"></i>
						</button>
					</div>
				</div>


	<div className="mt-4 task-list w-100 d-flex flex-column align-items-center">
		{taskList.length === 0 ? (
			<p className="no-task"> No tasks, add tasks</p>
		) : (
			taskList.map(taskItem => (
				<div
					key={taskItem.id}
					className="task-item d-flex justify-content-between align-items-center gap-3">
						<p className= "m-0 task-text">{taskItem.text}</p>
							<button className="btn  btn-sm"
								onClick={() => deleteTask(taskItem.id)}
								aria-label={`Borrar ${taskItem.text}`}
								title="Borrar">
									<i className="fa-solid fa-delete-left"></i>
							</button>
				</div>
			)
		)
	)}
	</div>
</div>
	);
};

export default Home;     