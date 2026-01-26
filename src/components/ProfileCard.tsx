import React, { useState } from 'react'
export type Role="user"|"admin"
 export interface userData{
  name:string;
  age:number;
  isAdmin?:boolean;
  role:Role;
  email:string;
}

interface profileCardProps extends userData{
    toggleAdmin:(name:string)=>void
    handleDltUser:(name:string)=>void
    handleEditUser:(user:userData)=>void
}

const ProfileCard:React.FC<profileCardProps>=({name,age,isAdmin,role,email,toggleAdmin,handleDltUser,handleEditUser}) => {
  
  return (
    <div>
        <h2>{name}</h2>
        <p>Age:{age}</p>
        <p>status:{isAdmin?"Admin":"User"}</p>
        <p>role:{role}</p>
        <p>email:{email}</p>
         {role==="admin" && (
         <button onClick={()=>toggleAdmin(name)}>Toggle Admin</button>)}
         <button onClick={()=>handleDltUser(name)}>Delete User</button>
         <button onClick={()=>handleEditUser({name,age,role,email,isAdmin})}>Edit</button>
    </div>
  )
}

export default ProfileCard