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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TaskTable = (props) => {
  const [tasks, setTasks] = useState([]);
  const [taskDelete, setTaskDelete]=useState({
    name: "",
    status: "",
    date: "",
    comment: "",
    projectId: "",
  });

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

  

  const handleDelete =(tasks)=>{
    console.log("handle tasks delete", tasks);
    const foundTask = taskDelete.findIndex((taskEl) =>{
console.log("task el", taskEl);
return taskEl._id===taskEl._id;
    });
    const newLists = [...taskDelete];
    newLists[foundTask] = taskDelete;
    setTaskDelete(newLists);
    fetch(`http://localhost:3000/api/todo/delete/${tasks.target.value}`,{
        method:"Delete",
        headers:{
    "Content-Type": "application/json",

        }
    }).then((response) =>{
        console.log("deleted")
    })
    
}

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
                <TableCell name="edit" align="right" onChange={handleChange}>
                  <EditIcon />
                </TableCell>
                <TableCell name="delete" align="right" submit={handleDelete}>
                  <DeleteForeverIcon />
                </TableCell>
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TaskTable;
