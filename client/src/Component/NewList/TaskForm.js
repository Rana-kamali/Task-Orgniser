import React, { useState, useEffect } from "react";

const TaskForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    status: "",
    date: "",
    comment: "",
    projectId: "",
  });
  const [projects, setProjects] = useState([]);

const HandleTaskSubmit = (name,status,date,comment,projectId) => {
  const newTask = {name: name, status:status, date: date, comment :comment, projectId:projectId}
  const newTasks = [...formState];
  newTasks.push(newTask);
  setFormState(newTasks);
  fetch("http://localhost:3000/api/todo/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  }).then((response) => {
    console.log("tasks :", response);
  });
};

  useEffect(() => {
    fetch("http://localhost:3000/api/project/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("movies respond: ", response);
        return response.json();
      })
      .then((dropdown) => {
        console.log("dropdownData:", dropdown);
        // call to set state
        setProjects(dropdown._id);
      });
  }, []);

  const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    console.log("new state", newState);
    setFormState(newState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
    props.submit(
      formState.name,
      formState.date,
      formState.comment,
      formState.status,
      formState.projectId,
    );
  };
  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              name="name"
              onChange={handleChange}
              value={formState.name}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Due Date
            <input
              name="date"
              onChange={handleChange}
              value={formState.date}
            ></input>
          </label>
        </div>
        <div>
          <select
            name="select"
            onChange={handleChange}
            value={formState.status}
          >
            <option value="1">Assigned</option>
            <option>Working</option>
            <option>Completed</option>
            <option>None</option>
          </select>
        </div>
        <div>
          {" "}
          <label>
            Comment
            <input
              name="comment"
              onChange={handleChange}
              value={formState.comment}
            ></input>
          </label>
        </div>
        <div>
          <select
            name="projectId"
            onChange={handleChange}
            value={formState.projectId}
          >
            {/* {projects.map((project) => {
              
              return <option value={project._id}>{project.projectName}</option>;
            })} */}
            {/* {props.projects.map((project) => {
              return <option value={project._id}>{project.projectName}</option>;
            })} */}
          </select>
        </div>

        <button type="submit" onChange={handleChange} onSubmit={HandleTaskSubmit} >Add List</button>
      </form>
    </div>
  );
};
export { TaskForm };
