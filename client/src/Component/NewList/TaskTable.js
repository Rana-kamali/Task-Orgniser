import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TaskTable = (props) => {
    const [tasks, setTasks] = useState([]);

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
useEffect(()=>{
setTasks(props.tasks)
},[props.tasks])

  return (
    <div>
      <TableContainer onSubmit={handleSubmit}>
       
        <Table className={classes.table} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
               <TableCell align="right">Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Comment</TableCell>

      
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
            </TableRow>
          );
        })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TaskTable ;


// import React, { useEffect, useState } from "react";

// const TaskList = (props) => {
//     const [tasks, setTasks] = useState([]);
//   const [list, setList] = useState({
//     name: "",
//     status: "",
//     date: "",
//     comment: "",
//     projectId: "",
//   });

//   const handleChange = (e) => {
//     setList({ [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (projectId, projectName) => {
//     const newTask = {
    
//       projectId: projectId,
//       projectName: projectName,
//     };
//     const newTasks = [...list];
//     console.log("new task: ", list);
//     fetch(`http://localhost:3000/api/todo/all/${projectId}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => {
//           console.log("response", response);
//           return response.json();
//         })
//         .then((taskData) => {
//           console.log("taskData: ", taskData);
//           setTasks(taskData);
//         });
//   };
// //   useEffect(() => {
 
    
// //   }, []);

//   return (
//     <div>
    
//             <select  onSubmit={handleSubmit}>
//             {tasks.map((el) => {
//                 console.log("el, ",el.projectId)
//                 return <option value={el._id}>{el.projectName}</option>
              
            
//         })};
//         </select>
//     </div>
//   );
// };

// export { TaskList };
