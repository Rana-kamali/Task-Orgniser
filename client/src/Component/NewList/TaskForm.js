import React, { useState } from "react";

const TaskForm = (props) => {
  const [formState , setFormState] = useState({
    name: "",
    status:"",
date:"",
comment: ""
  })
  const handleChange = (e)=>{
    const newState = {...formState}
    newState[e.target.name]= e.target.value;
    console.log("new state", newState)
    setFormState(newState);
   
  }
  const handleSubmit = (e)=>{
    e.preventDefault ();
    console.log("handle submit");
    props.submit(formState.name, formState.date,formState.comment,formState.status)
  }
  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          Name
          <input name="name" 
          onChange={handleChange}
          value={formState.name}></input>
        </label>
        </div>
       
<div>
<label>
          Due Date
          <input name="date" 
          onChange={handleChange}
          value={formState.date}></input>
        </label>
</div>
       <div>
       <select name="select" 
        onChange={handleChange}
        value={formState.status}>
          <option>Assigned</option>
          <option>Working</option>
          <option>Completed</option>
          <option>None</option>
        </select>
       </div>
        <div> <label>
          Comment
          <input name="comment" 
          onChange={handleChange}
          value={formState.comment}></input>
        </label></div>
       

        <button type="submit">Add List</button>
      </form>
    </div>
  );
};
export { TaskForm };



