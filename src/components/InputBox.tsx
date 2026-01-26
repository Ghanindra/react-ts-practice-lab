import React, { useState,useEffect } from 'react'
import {userData,Role} from '../components/ProfileCard'
import { log } from 'console'
interface InputProps{
  setUser:React.Dispatch<React.SetStateAction<userData[]>>
  edit:userData|null;
  clearEdit:()=>void;
 
}
const InputBox:React.FC<InputProps>=({setUser,edit,clearEdit}) => {
    const[text,setText]=useState<string>("")
    const[age,setAge]=useState<number|string>("")
    const[role,setRole]=useState<Role>("user")
    const[email,setEmail]=useState<string>("")


 

    useEffect(() => {
     if(edit){
      setText(edit.name)
      setAge(edit.age)
      setRole(edit.role)
      setEmail(edit.email)
     }
    }, [edit])
    const displayInput=(e:React.ChangeEvent<HTMLInputElement>):void=>{
      const value=e.target.value
      setText(value)
      
    }
    
    const displayEmail=(e:React.ChangeEvent<HTMLInputElement>):void=>{
      const value=e.target.value
    
       setEmail(value)
     
   
      
    }
    const displayAge=(e:React.ChangeEvent<HTMLInputElement>):void=>{
     
const value=e.target.value
if(value===""){
  setAge("")
}else{
  const numberValue=Number(value)
 if (!isNaN(numberValue)){
 setAge(numberValue)
 
}else{
  alert("type number")
}
     
}
      
}  

    const handleSubmit=()=>{
      if(!text||age===""||!email) return;
      if(edit){
        setUser(prev=>prev.map(user=>user.name===edit.name?{...user,text,age:Number(age),role,email,isAdmin:role==="admin"}:user))
        clearEdit();
      }else{
 setUser(prev=>[...prev,{name:text,age:Number(age),role:role,email:email,isAdmin:role==="admin"}])
      }
        setText("")
         setAge("")
        
         setEmail("")
         setRole("user")
         
       
    }
    
  return (
    <div>

        <input type="text" value={text}placeholder="Enter Your Name" onChange={displayInput}/>
        <input type="number" value={age}placeholder="Enter Your Age" onChange={displayAge}/>
<select value={role} onChange={(e)=>setRole(e.target.value as Role)}>
<option value="user">User</option>
<option value="admin">Admin</option>
</select>
        <input type="email" value={email}placeholder="Enter Email" onChange={displayEmail}/>
         <button onClick={handleSubmit}>{edit?"update User":"Add User"}</button>
    </div>
  )
}

export default InputBox