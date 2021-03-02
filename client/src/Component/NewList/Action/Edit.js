import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Edit = (props) => {
  const [open, setOpen] = React.useState(false);
  //   const [projects, setProjects] = useState();

  const [formState, setFormState] = useState(
      {
    
    name: "",
    status: "",
    date: "",
    comment: "",
    projectId: "",
  }
  );
 


  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
      console.log("submit button click")
    e.preventDefault();
    fetch(`http://localhost:3000/api/todo/update/${formState._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formState),
    }).then((response) => {
      console.log("Edit response:", response);
    });
    // props.submit(formState);
  };



  const handleChange = (e) => {
    const newState = {...formState};
    console.log("new state",newState)
    newState[e.target.name] = e.target.value;
    console.log("new state", newState);
    setFormState(newState);
    console.log("form state", formState)
  };
  useEffect(() => {
    console.log("props id: ", props.showEdit);
    console.log("use effect")
    console.log("form data", formState);
    fetch(`http://localhost:3000/api/todo/${props.showEdit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    
    }).then((response) => {
      console.log("Edit response:", response);
      return response.json();
    }).then((data)=>{
        console.log("data :", data)
        setFormState(data);
    });

    console.log("props.showEdit", props.showEdit);
    
    
    console.log("edit use effect");
  }, [props.showEdit]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="date"
          label="date"
          type="text"
          fullWidth
          name="date"
          value={formState.date}
          onChange={handleChange}
        />

        <select
          id="select"
          name="status"
          value={formState.status}
          onChange={handleChange}
        >
          <option>Assigned</option>
          <option>Working</option>
          <option>Completed</option>
          <option>None</option>
        </select>

        <select id="projectId" name="projectId">
          {props.projects.map((project) => {
             return <option value={project._id}>{project.projectName}</option>
          })}
        </select>
        <TextField
          autoFocus
          margin="dense"
          id="comment"
          label="comment"
          type="text"
          fullWidth
          name="comment"
          value={formState.comment}
          onChange={handleChange}
        />
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save Changes
        </Button>
      </form>
    </div>
  );
};
export default Edit;
