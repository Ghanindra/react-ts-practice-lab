import React from 'react'
import {Task,Role} from '../types/task'

interface props{
    tasks:Task;
    role:Role;
    onCompleted:(id:number)=>void
}
const Item:React.FC<props> = ({tasks,role,onCompleted}) => {
  return (
    <div>
         <strong>{tasks.title}</strong> - <em>{tasks.status}</em>
      {role === Role.Admin && (
        <button onClick={() => onCompleted(tasks.id)}>Complete</button>
      )}
    </div>
  )
}

export default Item