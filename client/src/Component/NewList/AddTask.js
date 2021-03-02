import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function AddTask(props) {
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = useState({
    name: "",
    status: "",
    date: "",
    comment: "",
    projectId: "",
  });
  const [projects, setProjects] = useState([]);
  const [taskEdit, setTaskEdit] = useState();
  const handleTaskSubmit = (name, status, date, comment, projectId) => {
    const newTask = {
      name: name,
      status: status,
      date: date,
      comment: comment,
      projectId: projectId,
    };
    console.log("form state", formState);
    const newTasks = { ...formState };
    // newTasks.push(newTask);
    setFormState(newTasks);
    fetch("http://localhost:3000/api/todo/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTasks),
    })
      .then((response) => {
        console.log("tasks :", response);
        return response.json();
      })
      .then((data) => {
        console.log("data Json: ", data);
      });
    setOpen(false);
  };
  useEffect((projectName) => {
    //   const project = { projectName:};
    //   const newProjects = [...projects];
    //   newProjects.push(project);
    //   console.log("new projects: " ,project)

    fetch("http://localhost:3000/api/project/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Task respond: ", response);
        return response.json();
      })
      .then((dropdown, i) => {
        console.log("dropdownData:", dropdown);

        setProjects(dropdown);
      });
  }, []);

  const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    console.log("target value ", e.target.value);
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
      formState.projectId
    );
  };
  ///------------get index---------
  const handleEditClick = (index) => {
    console.log("get index", index);
    const taskIndex = formState[index];
    setTaskEdit(taskIndex);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        handleClick={handleEditClick}
        color="primary"
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Add your list, please enter your Name, Date, Status and your
            comment here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            name="name"
            onChange={handleChange}
            value={formState.name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="date"
            type="text"
            fullWidth
            name="date"
            onChange={handleChange}
            value={formState.date}
          />
          <select
            id="select"
            name="status"
            onChange={handleChange}
            value={formState.status}
          >
            <option>Assigned</option>
            <option>Working</option>
            <option>Completed</option>
            <option>None</option>
          </select>

          <select id="projectId" onChange={handleChange} name="projectId">
            {projects.map((project) => {
              return <option value={project._id}>{project.projectName}</option>;
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
            onChange={handleChange}
            value={formState.comment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleTaskSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { AddTask };
