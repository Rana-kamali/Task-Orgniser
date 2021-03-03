import React, { useEffect, useState } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Edit =(props)=> {
    const [open, setOpen] = React.useState(false);

    const [formState, setFormState] = useState({
        name: "",
        status: "",
        date: "",
        comment: "",
        projectId: "",
      });

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
         <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
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
            
            value={formState.date}
          />
          <select
          id= "select"
            name="status"
            
            value={formState.status}
          >
            <option>Assigned</option>
            <option>Working</option>
            <option>Completed</option>
            <option>None</option>
          </select>
          
          <select id ="projectId" name="projectId">
          {/* {projects.map((project) => {
             return <option value={project._id}>{project.projectName}</option>
          })} */}
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
          />
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            
            
            color="primary"
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}
export default Edit;