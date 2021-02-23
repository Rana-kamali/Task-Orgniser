import React, { useState } from "react";

const TaskForm = (props) => {
  const [formState , setFormState] = useState({
    name: "",
select:"",
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
    props.submit(formState.name, formState.date,formState.comment,formState.select)
  }
  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" 
          onChange={handleChange}
          value={formState.name}></input>
        </label>

        <label>
          Due Date
          <input name="date" 
          onChange={handleChange}
          value={formState.date}></input>
        </label>
        <select name="select" 
        onChange={handleChange}
        value={formState.select}>
          <option>Assigned</option>
          <option>Working</option>
          <option>Completed</option>
          <option>None</option>
        </select>
        <label>
          Comment
          <input name="comment" 
          onChange={handleChange}
          value={formState.comment}></input>
        </label>

        <button type="submit">Add List</button>
      </form>
    </div>
  );
};
export { TaskForm };

{
  /* <div>
<h1>Create a Task</h1>
  
<label>
   Name
   <input name="name" value=""></input>
 </label>
  
  
 <label>
   Due Date
   <input name="dueDate" value=""></input>
 </label> */
}

{
  /* <label>Status
  <select>
   <option>Assigned</option>
   <option >Working</option>
   <option>Completed</option>
   <option >None</option>
 </select>
 <label>
   Comment
   <input name="comment" value=""></input>
 </label>



</div> */
}
