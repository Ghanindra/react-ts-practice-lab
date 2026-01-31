import React, { useState } from 'react'
import { User } from '../types/user';
import { useStorage } from '../storage/userStorage';
const UserManager = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
  
  const{items,add,remove,find}=useStorage<User>();
   const handleAdd=()=>{
    const id=Date.now();
    add({id,name,email});
    setName("")
    setEmail("");
   }
    return (
    <div>
       <h2> UserManager </h2>
       <input placeholder="name" value={name} onChange={e=>setName(e.target.value)}/>
       <button onClick={handleAdd}>Add User</button>
      <div>
        <h3>users:</h3>
        {items.map(u=>(
            <div key={u.id}>
                {u.name}-{u.email}{" "}
       <button onClick={() => remove(u.id)}>Delete</button>
       </div>
        ))}
      </div>
      
        </div>
  )
}

export default UserManager