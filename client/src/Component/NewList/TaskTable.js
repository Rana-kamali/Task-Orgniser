import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import Edit from "./Action/Edit";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TaskTable = (props) => {
  const [showEdit, setShowEdit] = useState("");
  const [showDelete, setShowDelete] = useState("");
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
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
        // console.log("dropdownData:", dropdown);

        setProjects(dropdown);
      });
  }, []);



  const classes = useStyles();
  const [list, setList] = useState({
    name: "",
    status: "",
    date: "",
    comment: "",
    projectId: "",
  });

  const handleChange = (e) => {
    setList({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (name, status, date, comment, projectId) => {
    const newTask = {
      name: name,
      status: status,
      date: date,
      comment: comment,
      projectId: projectId,
    };
    const newTasks = [...list];
    console.log("new task: ", list);

    setList(newTasks);
  };
  useEffect(() => {
    setTasks(props.tasks);
  }, [props.tasks]);

  

  const handleEdit = (id) => {
    console.log("id: ", id);
    setShowEdit(id);
  };
  
  const handleDelete = (id) => {
    console.log("id: ", id);
    setShowDelete(id);
    fetch(`http://localhost:3000/api/todo/delete/${id}`,{
                  method:"Delete",
                  headers:{
              "Content-Type": "application/json",
      
                  }
              }).then((response) =>{
                  console.log("deleted")
              })
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);


  return (
    <div>
      <TableContainer onSubmit={handleSubmit}>
        <Table className={classes.table} aria-label="caption table">
          <caption>Please see your weekly tasks</caption>
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Comment</TableCell>
              <TableCell align="right">Action</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
          {tasks.map((el) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell name="name" align="right" onChange={handleChange}>
                  {el.name}
                </TableCell>
                <TableCell name="date" align="right" onChange={handleChange}>
                  {el.date}
                </TableCell>
                <TableCell name="status" align="right" onChange={handleChange}>
                  {el.status}
                </TableCell>
                <TableCell name="comment" align="right" onChange={handleChange}>
                  {el.comment}
                </TableCell>
                <TableCell name="edit" align="right">
                  <EditIcon 
                  // onClick={handleShow}
                 
                    onClick={() => {
                    handleEdit(el._id);
                    }}
                    
                    
                  />
                </TableCell>
                <TableCell name="delete" align="right" type="submit">
                  <DeleteForeverIcon
                    onClick={() => {
                      handleDelete(el._id);
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
      {showEdit && (
        <Edit
          projects={projects}
          showEdit={showEdit}
          onClick={() => {
            setShowEdit("");
          }}

        />
      )}
    </div>
  );
};

export default TaskTable;
