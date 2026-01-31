import React,{useState} from 'react'
import {Task,Status,Role} from '../types/task'
import Item from '../components/Item'
const Todo:React.FC = () => {
    const[task,setTask]=useState<Task[]>([
    { id: 1, title: "Learn TS", status: "pending" },
    { id: 2, title: "Build Todo App", status: "in-progress" }
  ]);
    const[role,setRole]=useState<Role>(Role.Admin)
 
    const add=(title:string)=>{
        setTask(prev=>[...prev,{id:prev.length+1,title,status:"pending"}])
    }
 const completeTask=((id:number)=>{
setTask(prev=>prev.map(task=>task.id===id?{...task,status:"completed"}:task))
 })
 
    return (
    <div>
<h1>Todo App - Role:{role}</h1>
<button onClick={()=>setRole(role===Role.Admin?Role.User:Role.Admin)}></button>
   {role===Role.Admin &&<button onClick={()=>add("new Task")}>Add task</button>}
   {task.map(tasks=>(
    <Item key={tasks.id} tasks={tasks} role={role} onCompleted={completeTask}/>
   ))}
    </div>
  )
}

export default Todo