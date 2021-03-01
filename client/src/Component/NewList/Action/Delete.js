import React, { useEffect, useState } from 'react'

const Delete =(props)=> {

    const [taskList, setTaskList]=useState();

    const handleDelete =(tasks)=>{
        console.log("handle tasks delete", tasks);
        const foundTask = taskList.findIndex((taskEl) =>{
console.log("task el", taskEl);
return taskEl._id===taskEl._id;
        });
        const newLists = [...taskList];
        newLists[foundTask] = tasks;
        setTaskList(newLists);
        fetch(`http://localhost:3000/api/todo/delete/${tasks._id}`,{
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
        
        </div>
    )
}
export default Delete;